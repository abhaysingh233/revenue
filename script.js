let totalRevenue = 0;
const data = [];
const form = document.getElementById('revenueForm');
const tableBody = document.querySelector('#revenueTable tbody');
const totalRevenueElement = document.getElementById('totalRevenue');
const ctx = document.getElementById('revenueChart').getContext('2d');

let chart;

form.addEventListener('submit', function (e) {
  e.preventDefault();
  
  const product = document.getElementById('product').value;
  const price = parseFloat(document.getElementById('price').value);
  const quantity = parseInt(document.getElementById('quantity').value);
  const revenue = price * quantity;

  data.push({ product, revenue });
  totalRevenue += revenue;

  updateTable(product, price, quantity, revenue);
  updateChart();
  totalRevenueElement.textContent = totalRevenue.toFixed(2);

  form.reset();
});

function updateTable(product, price, quantity, revenue) {
  const row = document.createElement('tr');
  row.innerHTML = `<td>${product}</td><td>₹${price}</td><td>${quantity}</td><td>₹${revenue.toFixed(2)}</td>`;
  tableBody.appendChild(row);
}

function updateChart() {
  if (chart) chart.destroy();

  chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: data.map(d => d.product),
      datasets: [{
        label: 'Revenue',
        data: data.map(d => d.revenue),
        backgroundColor: 'rgba(54, 162, 235, 0.6)'
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: true }
      }
    }
  });
}
