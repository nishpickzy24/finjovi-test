// Check if user is already logged in
const session = JSON.parse(localStorage.getItem('finjovi_session') || '{}');
const expiresAt = new Date(session.expiresAt || 0);

if (session.accessToken && new Date() < expiresAt) {
    window.location.href = '/download';
}

window.addEventListener('DOMContentLoaded', () => {
    // Form elements
    const loginForm = document.getElementById('login-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const loginBtn = document.getElementById('login-btn');
    const loginText = document.getElementById('login-text');
    const loginSpinner = document.getElementById('login-spinner');
    const errorMessage = document.getElementById('error-message');
    const successMessage = document.getElementById('success-message');

    // Error display elements
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');

    // Utility functions
    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
    }

    function showSuccess(message) {
        successMessage.textContent = message;
        successMessage.style.display = 'block';
        errorMessage.style.display = 'none';
    }

    function hideMessages() {
        errorMessage.style.display = 'none';
        successMessage.style.display = 'none';
    }

    function showFieldError(field, message) {
        const errorElement = document.getElementById(field + '-error');
        const inputElement = document.getElementById(field);
        errorElement.textContent = message;
        errorElement.style.display = 'block';
        inputElement.classList.add('error');
    }

    function hideFieldError(field) {
        const errorElement = document.getElementById(field + '-error');
        const inputElement = document.getElementById(field);
        errorElement.style.display = 'none';
        inputElement.classList.remove('error');
    }

    function hideAllFieldErrors() {
        hideFieldError('email');
        hideFieldError('password');
    }

    function setLoading(loading) {
        loginBtn.disabled = loading;
        if (loading) {
            loginText.textContent = 'Signing In...';
            loginSpinner.style.display = 'inline-block';
        } else {
            loginText.textContent = 'Sign In';
            loginSpinner.style.display = 'none';
        }
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function validateForm() {
        let isValid = true;
        hideAllFieldErrors();

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (!email) {
            showFieldError('email', 'Email is required');
            isValid = false;
        } else if (!validateEmail(email)) {
            showFieldError('email', 'Please enter a valid email address');
            isValid = false;
        }

        if (!password) {
            showFieldError('password', 'Password is required');
            isValid = false;
        } else if (password.length < 6) {
            showFieldError('password', 'Password must be at least 6 characters');
            isValid = false;
        }

        return isValid;
    }

    async function authenticateUser(email, password) {
        const response = await fetch('https://finjovi-backend.onrender.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (!response.ok || !data.success) {
            throw new Error(data.message || 'Login failed');
        }

        return {
            accessToken: data?.token?.access,
            refreshToken: data?.token?.refresh,
            passwordGenerated: data?.passwordGenerated
        };
    }

    function createSession(accessToken, refreshToken, email) {
        const now = new Date();
        const sessionData = {
            accessToken,
            refreshToken,
            email: email,
            loginTime: now.toISOString(),
            expiresAt: new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000).toISOString()
        };
        localStorage.setItem('finjovi_session', JSON.stringify(sessionData));
    }

    // Event listeners
    loginForm.addEventListener('submit', async function (e) {
        e.preventDefault();
        hideMessages();

        if (!validateForm()) return;
        setLoading(true);

        try {
            const email = emailInput.value.trim();
            const rawPassword = passwordInput.value.trim();
            const password = md5(rawPassword); // Requires md5 library

            const result = await authenticateUser(email, password);
            createSession(result.accessToken, result.refreshToken, email);
            showSuccess('Login successful!');

            setTimeout(() => {
                if (result.passwordGenerated) {
                    window.location.href = '/update-password';
                } else {
                    window.location.href = '/download';
                }
            }, 1000);
        } catch (error) {
            showError(error.message);
        } finally {
            setLoading(false);
        }
    });

    // Clear field errors on input
    emailInput.addEventListener('input', function () {
        hideFieldError('email');
        hideMessages();
    });

    passwordInput.addEventListener('input', function () {
        hideFieldError('password');
        hideMessages();
    });
});


// second script

// Get Register Form elements
const registerForm = document.getElementById('register-form');
const registerEmailInput = document.getElementById('register-email');
const registerEmailError = document.getElementById('register-email-error');
const registerBtn = document.getElementById('register-btn');
const registerText = document.getElementById('register-text');
const registerSpinner = document.getElementById('register-spinner');
const loginForm = document.getElementById('login-form');
const passwordInput = document.getElementById('register-password'); // You must ensure this exists in your HTML

// Show Register Form
document.getElementById('show-register').addEventListener('click', function (e) {
    e.preventDefault();
    loginForm.classList.add('hidden');
    registerForm.classList.remove('hidden');
    hideMessages();
    hideAllFieldErrors();
    hideRegisterFieldError();
    registerForm.reset();
});

// Show Login Form
document.getElementById('show-login').addEventListener('click', function (e) {
    e.preventDefault();
    registerForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
    hideMessages();
    hideRegisterFieldError();
    loginForm.reset();
});

// Register input error handling
function showRegisterFieldError(field, message) {
    registerEmailError.textContent = message;
    registerEmailError.style.display = 'block';
    registerEmailInput.classList.add('error');
}

function hideRegisterFieldError() {
    registerEmailError.textContent = '';
    registerEmailError.style.display = 'none';
    registerEmailInput.classList.remove('error');
}

function validateRegisterForm() {
    let isValid = true;
    hideRegisterFieldError();

    const email = registerEmailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email) {
        showRegisterFieldError('email', 'Email is required');
        isValid = false;
    } else if (!validateEmail(email)) {
        showRegisterFieldError('email', 'Please enter a valid email address');
        isValid = false;
    }

    return isValid;
}

// API call to register
async function registerUser(email) {
    const response = await fetch('https://finjovi-backend.onrender.com/auth/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
        throw new Error(data.message || 'Registration failed');
    }

    return data;
}

// Register form submit handler
registerForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    hideMessages();

    if (!validateRegisterForm()) return;

    registerBtn.disabled = true;
    registerText.textContent = 'Registering...';
    registerSpinner.style.display = 'inline-block';

    try {
        const email = registerEmailInput.value.trim();
        const result = await registerUser(email);
        showSuccess('Account created! Check your email');

        setTimeout(() => {
            registerForm.classList.add('hidden');
            loginForm.classList.remove('hidden');
        }, 1000);
    } catch (err) {
        showError(err.message);
    } finally {
        registerBtn.disabled = false;
        registerText.textContent = 'Register';
        registerSpinner.style.display = 'none';
    }
});

// Clear error when user types
registerEmailInput.addEventListener('input', function () {
    hideRegisterFieldError();
    hideMessages();
});


// third script

window.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  if (params.get('status') === 'success') {
    const successBox = document.getElementById('success-message-stripe');
    successBox.textContent = 'Login details sent to your email you used for purchase';
    successBox.style.display = 'block';

    // Remove ?status=success from the URL (no reload)
    window.history.replaceState(null, '', window.location.pathname);

    // Auto-hide after 5 seconds
    setTimeout(() => {
      successBox.style.display = 'none';
    }, 5000);
  }
});
