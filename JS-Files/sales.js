
        // Embedded stock data - no server calls needed
        const allStocks = [
            { id: 1, symbol: 'AAPL', company: 'Apple Inc.', sector: 'Technology', price: 182.52, change: 2.34, marketCap: '$2.8T', description: 'Designs and manufactures consumer electronics, software, and services' },
            { id: 2, symbol: 'MSFT', company: 'Microsoft Corporation', sector: 'Technology', price: 378.85, change: -1.23, marketCap: '$2.8T', description: 'Develops and supports software, services, devices, and solutions' },
            { id: 3, symbol: 'AMZN', company: 'Amazon.com Inc.', sector: 'Consumer', price: 144.05, change: 0.89, marketCap: '$1.5T', description: 'Online retail and cloud computing services' },
            { id: 4, symbol: 'GOOGL', company: 'Alphabet Inc. Class A', sector: 'Communication', price: 138.21, change: 1.45, marketCap: '$1.7T', description: 'Search engine, advertising, and cloud computing services' },
            { id: 5, symbol: 'GOOG', company: 'Alphabet Inc. Class C', sector: 'Communication', price: 139.69, change: 1.52, marketCap: '$1.7T', description: 'Search engine, advertising, and cloud computing services' },
            { id: 6, symbol: 'NVDA', company: 'NVIDIA Corporation', sector: 'Technology', price: 875.28, change: 15.67, marketCap: '$2.1T', description: 'Graphics processing units and AI computing platforms' },
            { id: 7, symbol: 'TSLA', company: 'Tesla, Inc.', sector: 'Consumer', price: 248.50, change: -8.92, marketCap: '$790B', description: 'Electric vehicles and clean energy solutions' },
            { id: 8, symbol: 'META', company: 'Meta Platforms, Inc.', sector: 'Communication', price: 326.84, change: 4.21, marketCap: '$830B', description: 'Social media platforms and virtual reality technology' },
            { id: 9, symbol: 'AVGO', company: 'Broadcom Inc.', sector: 'Technology', price: 869.30, change: 12.45, marketCap: '$400B', description: 'Semiconductor and infrastructure software solutions' },
            { id: 10, symbol: 'COST', company: 'Costco Wholesale Corporation', sector: 'Consumer', price: 663.17, change: -2.15, marketCap: '$294B', description: 'Membership-based warehouse club retailer' },
            { id: 11, symbol: 'NFLX', company: 'Netflix, Inc.', sector: 'Communication', price: 445.73, change: 7.89 },
            { id: 12, symbol: 'ADBE', company: 'Adobe Inc.', sector: 'Technology', price: 494.02, change: -3.45 },
            { id: 13, symbol: 'PEP', company: 'PepsiCo, Inc.', sector: 'Consumer', price: 171.23, change: 0.67 },
            { id: 14, symbol: 'CSCO', company: 'Cisco Systems, Inc.', sector: 'Technology', price: 47.85, change: -0.23 },
            { id: 15, symbol: 'ORCL', company: 'Oracle Corporation', sector: 'Technology', price: 112.34, change: 2.11 },
            { id: 16, symbol: 'CRM', company: 'Salesforce, Inc.', sector: 'Technology', price: 216.78, change: -1.89 },
            { id: 17, symbol: 'INTC', company: 'Intel Corporation', sector: 'Technology', price: 36.27, change: -0.45 },
            { id: 18, symbol: 'AMD', company: 'Advanced Micro Devices, Inc.', sector: 'Technology', price: 147.92, change: 3.21 },
            { id: 19, symbol: 'QCOM', company: 'QUALCOMM Incorporated', sector: 'Technology', price: 159.84, change: 1.76 },
            { id: 20, symbol: 'INTU', company: 'Intuit Inc.', sector: 'Technology', price: 623.45, change: -4.12 },
            { id: 21, symbol: 'CMCSA', company: 'Comcast Corporation', sector: 'Communication', price: 43.67, change: 0.34 },
            { id: 22, symbol: 'TMUS', company: 'T-Mobile US, Inc.', sector: 'Communication', price: 165.89, change: 2.45 },
            { id: 23, symbol: 'TXN', company: 'Texas Instruments Incorporated', sector: 'Technology', price: 169.23, change: -1.67 },
            { id: 24, symbol: 'AMAT', company: 'Applied Materials, Inc.', sector: 'Technology', price: 162.45, change: 3.89 },
            { id: 25, symbol: 'PANW', company: 'Palo Alto Networks, Inc.', sector: 'Technology', price: 267.34, change: 5.67 },
            { id: 26, symbol: 'GILD', company: 'Gilead Sciences, Inc.', sector: 'Healthcare', price: 78.92, change: -0.89 },
            { id: 27, symbol: 'MDLZ', company: 'Mondelez International, Inc.', sector: 'Consumer', price: 73.45, change: 0.23 },
            { id: 28, symbol: 'REGN', company: 'Regeneron Pharmaceuticals, Inc.', sector: 'Healthcare', price: 874.56, change: 12.34 },
            { id: 29, symbol: 'ISRG', company: 'Intuitive Surgical, Inc.', sector: 'Healthcare', price: 345.67, change: -2.45 },
            { id: 30, symbol: 'VRTX', company: 'Vertex Pharmaceuticals Incorporated', sector: 'Healthcare', price: 412.89, change: 8.90 },
            { id: 31, symbol: 'KLAC', company: 'KLA Corporation', sector: 'Technology', price: 658.34, change: 11.23 },
            { id: 32, symbol: 'LRCX', company: 'Lam Research Corporation', sector: 'Technology', price: 872.45, change: 15.67 },
            { id: 33, symbol: 'SNPS', company: 'Synopsys, Inc.', sector: 'Technology', price: 534.78, change: -3.21 },
            { id: 34, symbol: 'CDNS', company: 'Cadence Design Systems, Inc.', sector: 'Technology', price: 267.89, change: 4.56 },
            { id: 35, symbol: 'CRWD', company: 'CrowdStrike Holdings, Inc.', sector: 'Technology', price: 298.45, change: 7.89 },
            { id: 36, symbol: 'MRVL', company: 'Marvell Technology, Inc.', sector: 'Technology', price: 69.34, change: 1.23 },
            { id: 37, symbol: 'FTNT', company: 'Fortinet, Inc.', sector: 'Technology', price: 58.67, change: -0.89 },
            { id: 38, symbol: 'ADSK', company: 'Autodesk, Inc.', sector: 'Technology', price: 245.78, change: 3.45 },
            { id: 39, symbol: 'MCHP', company: 'Microchip Technology Incorporated', sector: 'Technology', price: 87.23, change: -1.56 },
            { id: 40, symbol: 'MNST', company: 'Monster Beverage Corporation', sector: 'Consumer', price: 52.34, change: 0.78 },
            { id: 41, symbol: 'ABNB', company: 'Airbnb, Inc.', sector: 'Consumer', price: 137.89, change: 2.45 },
            { id: 42, symbol: 'WDAY', company: 'Workday, Inc.', sector: 'Technology', price: 234.56, change: -1.89 },
            { id: 43, symbol: 'TEAM', company: 'Atlassian Corporation', sector: 'Technology', price: 189.45, change: 3.67 },
            { id: 44, symbol: 'DDOG', company: 'Datadog, Inc.', sector: 'Technology', price: 112.78, change: 4.23 },
            { id: 45, symbol: 'ZS', company: 'Zscaler, Inc.', sector: 'Technology', price: 178.90, change: 5.89 },
            { id: 46, symbol: 'OKTA', company: 'Okta, Inc.', sector: 'Technology', price: 89.45, change: -2.34 },
            { id: 47, symbol: 'NET', company: 'Cloudflare, Inc.', sector: 'Technology', price: 78.67, change: 1.89 },
            { id: 48, symbol: 'SNOW', company: 'Snowflake Inc.', sector: 'Technology', price: 156.78, change: -4.56 },
            { id: 49, symbol: 'ZM', company: 'Zoom Video Communications, Inc.', sector: 'Technology', price: 67.89, change: 0.89 },
            { id: 50, symbol: 'DOCU', company: 'DocuSign, Inc.', sector: 'Technology', price: 54.23, change: -1.23 },
            { id: 51, symbol: 'BKNG', company: 'Booking Holdings Inc.', sector: 'Consumer', price: 3245.67, change: 45.89 },
            { id: 52, symbol: 'HON', company: 'Honeywell International Inc.', sector: 'Technology', price: 198.45, change: -1.23 },
            { id: 53, symbol: 'LIN', company: 'Linde plc', sector: 'Healthcare', price: 378.90, change: 2.34 },
            { id: 54, symbol: 'SBUX', company: 'Starbucks Corporation', sector: 'Consumer', price: 92.45, change: 1.67 },
            { id: 55, symbol: 'MRNA', company: 'Moderna, Inc.', sector: 'Healthcare', price: 89.34, change: -3.45 },
            { id: 56, symbol: 'CHTR', company: 'Charter Communications, Inc.', sector: 'Communication', price: 376.78, change: 8.92 },
            { id: 57, symbol: 'ADP', company: 'Automatic Data Processing, Inc.', sector: 'Technology', price: 245.67, change: -0.89 },
            { id: 58, symbol: 'NXPI', company: 'NXP Semiconductors N.V.', sector: 'Technology', price: 189.45, change: 4.56 },
            { id: 59, symbol: 'LULU', company: 'Lululemon Athletica Inc.', sector: 'Consumer', price: 356.78, change: 12.34 },
            { id: 60, symbol: 'ODFL', company: 'Old Dominion Freight Line, Inc.', sector: 'Consumer', price: 378.90, change: 5.67 },
            { id: 61, symbol: 'PCAR', company: 'PACCAR Inc', sector: 'Consumer', price: 102.34, change: -2.11 },
            { id: 62, symbol: 'MAR', company: 'Marriott International, Inc.', sector: 'Consumer', price: 234.56, change: 3.89 },
            { id: 63, symbol: 'ORLY', company: 'O\'Reilly Automotive, Inc.', sector: 'Consumer', price: 987.65, change: 18.23 },
            { id: 64, symbol: 'CSX', company: 'CSX Corporation', sector: 'Consumer', price: 34.56, change: 0.89 },
            { id: 65, symbol: 'ROST', company: 'Ross Stores, Inc.', sector: 'Consumer', price: 132.45, change: 2.67 },
            { id: 66, symbol: 'IDXX', company: 'IDEXX Laboratories, Inc.', sector: 'Healthcare', price: 456.78, change: -5.43 },
            { id: 67, symbol: 'FAST', company: 'Fastenal Company', sector: 'Technology', price: 67.89, change: 1.23 },
            { id: 68, symbol: 'DXCM', company: 'DexCom, Inc.', sector: 'Healthcare', price: 78.90, change: -1.45 },
            { id: 69, symbol: 'KDP', company: 'Keurig Dr Pepper Inc.', sector: 'Consumer', price: 32.45, change: 0.67 },
            { id: 70, symbol: 'VRSK', company: 'Verisk Analytics, Inc.', sector: 'Technology', price: 234.56, change: 3.21 },
            { id: 71, symbol: 'EXC', company: 'Exelon Corporation', sector: 'Consumer', price: 38.90, change: -0.45 },
            { id: 72, symbol: 'CTSH', company: 'Cognizant Technology Solutions Corporation', sector: 'Technology', price: 72.34, change: 1.89 },
            { id: 73, symbol: 'KHC', company: 'The Kraft Heinz Company', sector: 'Consumer', price: 35.67, change: -0.23 },
            { id: 74, symbol: 'WBD', company: 'Warner Bros. Discovery, Inc.', sector: 'Communication', price: 8.45, change: -0.67 },
            { id: 75, symbol: 'GEHC', company: 'GE HealthCare Technologies Inc.', sector: 'Healthcare', price: 89.34, change: 2.11 },
            { id: 76, symbol: 'FANG', company: 'Diamondback Energy, Inc.', sector: 'Consumer', price: 167.89, change: 4.56 },
            { id: 77, symbol: 'PAYX', company: 'Paychex, Inc.', sector: 'Technology', price: 123.45, change: -1.23 },
            { id: 78, symbol: 'TTD', company: 'The Trade Desk, Inc.', sector: 'Technology', price: 89.67, change: 3.45 },
            { id: 79, symbol: 'CSGP', company: 'CoStar Group, Inc.', sector: 'Technology', price: 78.90, change: 2.34 },
            { id: 80, symbol: 'ON', company: 'ON Semiconductor Corporation', sector: 'Technology', price: 67.23, change: -1.89 },
            { id: 81, symbol: 'DLTR', company: 'Dollar Tree, Inc.', sector: 'Consumer', price: 89.45, change: 0.78 },
            { id: 82, symbol: 'BIIB', company: 'Biogen Inc.', sector: 'Healthcare', price: 234.56, change: -6.78 },
            { id: 83, symbol: 'XEL', company: 'Xcel Energy Inc.', sector: 'Consumer', price: 56.78, change: 0.34 },
            { id: 84, symbol: 'ILMN', company: 'Illumina, Inc.', sector: 'Healthcare', price: 134.56, change: -2.89 },
            { id: 85, symbol: 'WBA', company: 'Walgreens Boots Alliance, Inc.', sector: 'Healthcare', price: 12.34, change: -0.45 },
            { id: 86, symbol: 'SMCI', company: 'Super Micro Computer, Inc.', sector: 'Technology', price: 456.78, change: 23.45 },
            { id: 87, symbol: 'CEG', company: 'Constellation Energy Corporation', sector: 'Consumer', price: 178.90, change: 4.56 },
            { id: 88, symbol: 'CPRT', company: 'Copart, Inc.', sector: 'Technology', price: 56.78, change: 1.23 },
            { id: 89, symbol: 'EA', company: 'Electronic Arts Inc.', sector: 'Technology', price: 134.56, change: 2.89 },
            { id: 90, symbol: 'CDW', company: 'CDW Corporation', sector: 'Technology', price: 234.56, change: -3.21 },
            { id: 91, symbol: 'BKR', company: 'Baker Hughes Company', sector: 'Consumer', price: 34.56, change: 0.89 },
            { id: 92, symbol: 'CCEP', company: 'Coca-Cola Europacific Partners PLC', sector: 'Consumer', price: 67.89, change: 1.45 },
            { id: 93, symbol: 'ANSS', company: 'ANSYS, Inc.', sector: 'Technology', price: 345.67, change: -2.34 },
            { id: 94, symbol: 'MELI', company: 'MercadoLibre, Inc.', sector: 'Consumer', price: 1234.56, change: 45.67 },
            { id: 95, symbol: 'CTAS', company: 'Cintas Corporation', sector: 'Technology', price: 678.90, change: 12.34 },
            { id: 96, symbol: 'PYPL', company: 'PayPal Holdings, Inc.', sector: 'Technology', price: 67.89, change: -1.23 },
            { id: 97, symbol: 'ALGN', company: 'Align Technology, Inc.', sector: 'Healthcare', price: 234.56, change: 5.67 },
            { id: 98, symbol: 'LOGI', company: 'Logitech International S.A.', sector: 'Technology', price: 89.45, change: 1.89 },
            { id: 99, symbol: 'HOOD', company: 'Robinhood Markets, Inc.', sector: 'Technology', price: 23.45, change: -0.67 },
            { id: 100, symbol: 'UBER', company: 'Uber Technologies, Inc.', sector: 'Technology', price: 56.78, change: 2.34 }
        ];

        let filteredStocks = [...allStocks];
        let currentPage = 1;
        const stocksPerPage = 10;
        let downloadingAll = false;

        // Load stocks data - now using embedded data
        function loadStocks() {
            // Populate sector filter
            const sectors = [...new Set(allStocks.map(stock => stock.sector))].sort();
            const sectorFilter = document.getElementById('sector-filter');
            sectors.forEach(sector => {
                const option = document.createElement('option');
                option.value = sector;
                option.textContent = sector;
                sectorFilter.appendChild(option);
            });

            renderStocks();
            updatePagination();
            updateResultsCount();
        }

        // Render stocks table
        function renderStocks() {
            const tbody = document.getElementById('stock-table-body');
            const startIndex = (currentPage - 1) * stocksPerPage;
            const endIndex = startIndex + stocksPerPage;
            const paginatedStocks = filteredStocks.slice(startIndex, endIndex);

            tbody.innerHTML = paginatedStocks.map(stock => `
                <tr class="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td class="px-6 py-4">
                        <div class="font-mono font-semibold text-blue-600">${stock.symbol}</div>
                    </td>
                    <td class="px-6 py-4">
                        <div class="font-medium">${stock.company}</div>
                        ${stock.description ? `
                        <div class="text-sm text-gray-500 mt-1 max-w-xs truncate">
                            ${stock.description}
                        </div>
                        ` : ''}
                    </td>
                    <td class="px-6 py-4">
                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                            ${stock.sector}
                        </span>
                    </td>
                </tr>
            `).join('');
        }

        // Filter stocks
        function filterStocks() {
            const searchTerm = document.getElementById('search-input').value.toLowerCase();
            const selectedSector = document.getElementById('sector-filter').value;

            filteredStocks = allStocks.filter(stock => {
                const matchesSearch = stock.symbol.toLowerCase().includes(searchTerm) ||
                    stock.company.toLowerCase().includes(searchTerm);
                const matchesSector = selectedSector === 'all' || stock.sector === selectedSector;
                return matchesSearch && matchesSector;
            });

            currentPage = 1;
            renderStocks();
            updatePagination();
            updateResultsCount();
        }

        // Update pagination
        function updatePagination() {
            const totalPages = Math.ceil(filteredStocks.length / stocksPerPage);
            const startIndex = (currentPage - 1) * stocksPerPage + 1;
            const endIndex = Math.min(currentPage * stocksPerPage, filteredStocks.length);

            document.getElementById('page-start').textContent = filteredStocks.length > 0 ? startIndex : 0;
            document.getElementById('page-end').textContent = endIndex;
            document.getElementById('total-stocks').textContent = filteredStocks.length;

            document.getElementById('prev-btn').disabled = currentPage === 1;
            document.getElementById('next-btn').disabled = currentPage === totalPages || totalPages === 0;
        }

        // Change page
        function changePage(direction) {
            const totalPages = Math.ceil(filteredStocks.length / stocksPerPage);
            const newPage = currentPage + direction;

            if (newPage >= 1 && newPage <= totalPages) {
                currentPage = newPage;
                renderStocks();
                updatePagination();
            }
        }

        // Update results count
        function updateResultsCount() {
            const count = document.getElementById('results-count');
            count.textContent = `Showing ${filteredStocks.length} of ${allStocks.length} companies`;
        }

        // Download all stocks - simulated
        function downloadAllStocks() {
            if (downloadingAll) return;

            downloadingAll = true;
            const button = document.getElementById('download-all-btn');
            const text = document.getElementById('download-all-text');
            text.innerHTML = `<div class="loading-spinner"></div>Preparing...`;
            button.disabled = true;

            // Simulate download with timeout
            setTimeout(() => {
                // Create a text file with stock info
                const content = `NASDAQ 100 Complete Bundle Information\n\nThis bundle includes 20-year historical data for all ${allStocks.length} stocks:\n\n` +
                    allStocks.map(stock => `${stock.symbol} - ${stock.company} (${stock.sector})`).join('\n') +
                    '\n\nEach stock includes:\n- 20 years of end-of-day data\n- Splits and dividends adjusted\n- CSV format ready for analysis';

                const blob = new Blob([content], { type: 'text/plain' });
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'NASDAQ_100_Complete_Bundle_Info.txt';
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
                document.body.removeChild(a);

                showToast('Download Complete', 'Bundle information downloaded successfully.', 'success');

                downloadingAll = false;
                text.textContent = 'Download All (Bundle)';
                button.disabled = false;
            }, 2000);
        }

        // Submit contact form - simulated
        function submitContactForm(event) {
            event.preventDefault();

            const submitBtn = document.getElementById('submit-btn');
            const submitText = document.getElementById('submit-text');
            const form = document.getElementById('contact-form');

            submitText.innerHTML = `<div class="loading-spinner"></div>Sending...`;
            submitBtn.disabled = true;

            // Simulate form submission
            setTimeout(() => {
                showToast('Message Sent', 'Thank you for your inquiry. We\'ll get back to you soon!', 'success');
                form.reset();

                submitText.textContent = 'Send Message';
                submitBtn.disabled = false;
            }, 2000);
        }

        // Scroll to stocks section
        function scrollToStocks() {
            document.getElementById('stocks').scrollIntoView({ behavior: 'smooth' });
        }

        // Show toast notification
        function showToast(title, message, type = 'success') {
            const toast = document.getElementById('toast');
            const titleEl = document.getElementById('toast-title');
            const messageEl = document.getElementById('toast-message');
            const icon = document.getElementById('toast-icon');

            titleEl.textContent = title;
            messageEl.textContent = message;

            toast.className = `toast ${type}`;

            if (type === 'success') {
                icon.innerHTML = `<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>`;
                icon.className = 'h-5 w-5 text-green-400';
            } else {
                icon.innerHTML = `<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path>`;
                icon.className = 'h-5 w-5 text-red-400';
            }

            toast.style.display = 'block';

            setTimeout(() => {
                toast.style.display = 'none';
            }, 5000);
        }

        // Mobile menu toggle
        document.getElementById('mobile-menu-button')?.addEventListener('click', function () {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        });

        // Initialize page
        document.addEventListener('DOMContentLoaded', loadStocks);

// second script
   
    const stripe = Stripe("pk_test_51Rh0jhRroAUYjgROtaWiod1PxHOhCeaaEgBTgx2mcJxxdBBTCBicQa6D0t5PUYnbmmuNw1tiQXIogEa2YEFhKcvH00izmWunaC");


document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById('buy-complete-bundle');
  const label = document.getElementById('bundle-label');
  const spinner = document.getElementById('bundle-spinner');

  if (!btn || !label || !spinner) {
    console.error("Required elements not found in the DOM.");
    return;
  }

  btn.addEventListener('click', async () => {
    const session = JSON.parse(localStorage.getItem('finjovi_session') || '{}');
    const token = session?.accessToken;

    // Optional: Redirect if not logged in
    // if (!token) {
    //   window.location.href = "/index.html";
    //   return;
    // }

    // Show loading state
    btn.disabled = true;
    label.textContent = "Redirecting…";
    spinner.classList.remove('hidden');

    try {
      const res = await fetch("https://finjovi-backend.onrender.com/payment/initiate-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
          amount: 299,
          productName: "Complete Bundle"
        })
      });

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error(data.error || "Something went wrong.");
      }
    } catch (err) {
      console.error("Payment error:", err);
      alert("Payment could not be started.");

      // Reset button state
      btn.disabled = false;
      label.textContent = "Get Full Bundle";
      spinner.classList.add('hidden');
    }
  });
});
