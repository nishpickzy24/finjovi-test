// Authentication check
function checkAuth() {
  const sessionData = localStorage.getItem("finjovi_session");
  if (!sessionData) {
    window.location.href = "/login";
    return false;
  }

  try {
    const session = JSON.parse(sessionData);
    const now = new Date();
    const expiresAt = new Date(session.expiresAt);

    if (now > expiresAt) {
      localStorage.removeItem("finjovi_session");
      showToast("Session expired. Please login again.", "error");
      setTimeout(() => {
        window.location.href = "/login";
      }, 1000);
      return false;
    }

    // Update user info
    document.getElementById("user-email").textContent = session.email;
    return true;
  } catch (error) {
    localStorage.removeItem("finjovi_session");
    window.location.href = "/login";
    return false;
  }
}

// Logout function
function logout() {
  localStorage.removeItem("finjovi_session");
  showToast("Logged out", "success");
  setTimeout(() => {
    window.location.href = "/login";
  }, 500);
}

// Toast notification
function showToast(message, type = "success", title = "") {
  const toast = document.getElementById("toast");
  const toastTitle = document.getElementById("toast-title");
  const toastMessage = document.getElementById("toast-message");
  const toastIcon = document.getElementById("toast-icon");

  // Set content
  toastTitle.textContent = title || (type === "success" ? "Success" : "Error");
  toastMessage.textContent = message;

  // Set styling
  toast.className = `toast ${type}`;
  toastIcon.className = `h-5 w-5 ${
    type === "success" ? "text-green-500" : "text-red-500"
  }`;

  // Show toast
  toast.style.display = "block";

  // Auto hide after 5 seconds
  setTimeout(() => {
    toast.style.display = "none";
  }, 5000);
}

// Download full bundle
async function downloadBundle() {
  const session = JSON.parse(localStorage.getItem("finjovi_session") || "{}");
  const token = session?.accessToken;

  const btn = document.getElementById("download-all-btn");
  const label = document.getElementById("download-all-text");

  if (!token) {
    window.location.href = "/login";
    return;
  }

  try {
    // Show preparing state
    btn.disabled = true;
    label.textContent = "Preparing...";

    const response = await fetch("https://finjovi-backend.onrender.com/download-zip", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    if (!response.ok) throw new Error("Unauthorized or failed");

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "historicalData.zip";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);

    // showToast("ZIP Download started!", "success");
  } catch (err) {
    console.error("Download error:", err);
    showToast("Zip Download failed", "error");
  } finally {
    label.textContent = "Download All Stocks (ZIP)";
    btn.disabled = false;
  }
}

// Download individual stock
function downloadStock(symbol, btn) {
  const session = JSON.parse(localStorage.getItem("finjovi_session") || "{}");
  const token = session?.accessToken;

  if (!symbol || !btn) return;

  const originalText = btn.innerHTML;
  btn.disabled = true;
  btn.innerHTML = "Downloading...";

  fetch(`https://finjovi-backend.onrender.com/download-csv?symbol=${symbol}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      if (!res.ok) throw new Error("Download failed");
      return res.blob();
    })
    .then((blob) => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${symbol}_historical.csv`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    })
    .catch((err) => {
      console.error(err);
      alert("Download failed.");
    })
    .finally(() => {
      btn.disabled = false;
      btn.innerHTML = originalText;
    });
}


// script 2
const API_URL = "https://finjovi-backend.onrender.com/stocks/fetch";

let currentPage = 1;
let currentSearch = "";
let currentSector = "all";
const limit = 15;

async function fetchStocks() {
  try {
    const res = await fetch(
      `${API_URL}?page=${currentPage}&limit=${limit}&search=${encodeURIComponent(
        currentSearch
      )}&sector=${currentSector}`
    );
    const data = await res.json();
    updateResults(data);
  } catch (error) {
    console.error("Error fetching stocks:", error);
    document.getElementById(
      "stock-grid"
    ).innerHTML = `<p class="text-red-500">Failed to load data.</p>`;
  }
}

function updateResults({ data, total, totalPages }) {
  const stockGrid = document.getElementById("stock-grid");
  const resultsCount = document.getElementById("results-count");
  const noResults = document.getElementById("no-results");

  stockGrid.innerHTML = "";
  const pagination = document.getElementById("pagination");
  if (pagination) pagination.innerHTML = "";

  if (!data || data.length === 0) {
    noResults.classList.remove("hidden");
    resultsCount.classList.add("hidden");
    return;
  }

  noResults.classList.add("hidden");
  resultsCount.classList.add("hidden");

  data.forEach((stock) => {
    const card = document.createElement("div");
    card.className =
      "stock-card bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow";

    const changeClass = stock.change >= 0 ? "text-green-600" : "text-red-600";
    const changePrefix = stock.change >= 0 ? "+" : "";

    card.innerHTML = `
      <div class="flex justify-between items-start mb-4">
        <div>
          <h3 class="text-xl font-bold text-gray-900">${stock.symbol || "-"}</h3>
          <p class="text-sm text-gray-600 mt-1">${stock.stockname || "-"}</p>
        </div>
        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
          ${stock.category || "Technology"}
        </span>
      </div>

      <div class="flex justify-between items-center mb-4">
        <div>
          <p class="text-2xl font-bold text-gray-900">$${(stock.price || 0).toFixed(2)}</p>
          <p class="text-sm ${changeClass}">
            ${changePrefix}${(stock.change || 0).toFixed(2)}
          </p>
        </div>
        <div class="text-right">
          <p class="text-sm text-gray-500">Market Cap</p>
          <p class="text-sm font-semibold text-gray-900">${formatMarketCap(stock.marketCap) || "-"}</p>
        </div>
      </div>

      <p class="text-sm text-gray-600 mb-4 line-clamp-2">
        ${stock.description || "No description available."}
      </p>

      <button 
        onclick="downloadStock('${stock.symbol}', this)"
        data-symbol="${stock.symbol}"
        class="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors inline-flex items-center justify-center"
      >
        <svg class="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z">
          </path>
        </svg>
        Download CSV
      </button>
    `;
    stockGrid.appendChild(card);
  });

  if (totalPages > 1) {
    renderPagination(totalPages);
  }
}

function renderPagination(totalPages) {
  let pagination = document.getElementById("pagination");
  if (!pagination) {
    pagination = document.createElement("div");
    pagination.id = "pagination";
    pagination.className = "flex justify-center mt-8 gap-2";
    document.getElementById("stock-grid").after(pagination);
  }

  pagination.innerHTML = "";

  if (totalPages <= 1) return;

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    btn.className = `px-4 py-2 rounded border ${
      i === currentPage
        ? "bg-blue-600 text-white"
        : "bg-white text-gray-700 border-gray-300 hover:bg-blue-100"
    }`;
    btn.addEventListener("click", () => {
      currentPage = i;
      fetchStocks();
    });
    pagination.appendChild(btn);
  }
}

function filterStocks() {
  currentSearch = document.getElementById("search-input").value.trim();
  currentSector = document.getElementById("sector-filter").value;
  currentPage = 1;
  fetchStocks();
}

function onSearchInputChange(event) {
  const input = event.target.value.trim();
  if (input === "") {
    filterStocks(); // Re-fetch all if cleared
  }
}

function onSearchKeyDown(event) {
  const input = event.target.value.trim();
  if (event.key === "Enter" && input !== "") {
    filterStocks();
  }
}

function initializePage() {

if (!checkAuth()) {
  // Redirect handled in checkAuth
}
  const sectors = [
    "Technology",
    "Finance",
    "Healthcare",
    "Energy",
    "Utilities",
    "Consumer Goods",
    "Services",
    "Industrial Goods",
    "Basic Materials",
    "Conglomerates",
  ];

  const sectorFilter = document.getElementById("sector-filter");
  sectors.forEach((sector) => {
    const option = document.createElement("option");
    option.value = sector;
    option.textContent = sector;
    sectorFilter.appendChild(option);
  });

  fetchStocks();
}

function formatMarketCap(value) {
  if (!value || isNaN(value)) return "-";

  const num = Number(value);
  if (num >= 1_000_000_000_000)
    return `$${(num / 1_000_000_000_000).toFixed(1)} T`;
  if (num >= 1_000_000_000)
    return `$${(num / 1_000_000_000).toFixed(1)} B`;
  if (num >= 1_000_000)
    return `$${(num / 1_000_000).toFixed(1)} M`;
  if (num >= 1_000)
    return `$${(num / 1_000).toFixed(1)} K`;

  return `$${num}`;
}

document.addEventListener("DOMContentLoaded", initializePage);
