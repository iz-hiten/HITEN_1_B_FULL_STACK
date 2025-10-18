

// Sample product dataset
const products = [
  { name: "Laptop", category: "electronics", price: 999 },
  { name: "Headphones", category: "electronics", price: 199 },
  { name: "Smartwatch", category: "electronics", price: 249 },
  { name: "Shirt", category: "clothing", price: 25 },
  { name: "Jacket", category: "clothing", price: 80 },
  { name: "Trousers", category: "clothing", price: 50 }
];

// Function to render products dynamically
function renderProducts(list) {
  const container = document.getElementById('products-container');
  container.innerHTML = list.map(p => `
    <div class="product">
      <h3>${p.name}</h3>
      <p>$${p.price}</p>
    </div>
  `).join('');
}

// Filter event listener
document.getElementById('filter').addEventListener('change', (e) => {
  const selected = e.target.value;
  const filtered = selected === 'all'
    ? products
    : products.filter(p => p.category === selected);
  renderProducts(filtered);
});

// Initial render on page load
window.addEventListener('DOMContentLoaded', () => {
  renderProducts(products);
});
