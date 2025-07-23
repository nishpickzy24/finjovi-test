function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

function setCookie(name, value, hours) {
  const maxAgeSeconds = hours * 60 * 60;
  document.cookie = `${name}=${value}; max-age=${maxAgeSeconds}; path=/`;
}

async function getIPAndSendVisit() {
  const keyword = location.pathname.split("/").pop().replace(".html", "");
  const cookieKey = keyword;

  if (getCookie(cookieKey)) return;

  const timestamp = new Date().toISOString().replace("T", " ").slice(0, 19);

  try {
    const res = await fetch("https://api.ipify.org?format=json");
    const { ip } = await res.json();

    const payload = { keyword, ip, timestamp };

    await fetch("https://jayvenka.com/public/cvisits.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setCookie(cookieKey, crypto.randomUUID(), 24);
  } catch (err) {
    console.error("Error sending visit data:", err);
  }
}

window.onload = getIPAndSendVisit;
