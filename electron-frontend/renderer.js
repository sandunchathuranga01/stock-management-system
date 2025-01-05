const axios = require('axios'); // Import Axios

// Backend API URL
const apiUrl = 'http://localhost:8080/api/products';

// Function to load all products
async function loadProducts() {
  try {
    const response = await axios.get(apiUrl); // GET request to fetch all products
    const productTableBody = document.querySelector('#productTable tbody');
    
    // Clear the existing table rows
    productTableBody.innerHTML = '';

    // Add rows for each product
    response.data.forEach((product) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${product.name}</td>
        <td>${product.quantity}</td>
        <td>${product.price.toFixed(2)}</td>
        <td>
          <button class="deleteButton" data-id="${product.id}">Delete</button>
        </td>
      `;
      productTableBody.appendChild(row);
    });

    // Attach event listeners to delete buttons
    document.querySelectorAll('.deleteButton').forEach((button) => {
      button.addEventListener('click', async (event) => {
        const productId = event.target.dataset.id;
        await deleteProduct(productId);
      });
    });
  } catch (error) {
    console.error('Error loading products:', error);
  }
}

// Function to add a new product
document.getElementById('productForm').addEventListener('submit', async (event) => {
  event.preventDefault();

  // Get input values
  const name = document.getElementById('name').value;
  const quantity = parseInt(document.getElementById('quantity').value, 10);
  const price = parseFloat(document.getElementById('price').value);

  try {
    // Send POST request to create a new product
    await axios.post(apiUrl, { name, quantity, price });
    document.getElementById('productForm').reset(); // Reset form
    loadProducts(); // Reload the product list
  } catch (error) {
    console.error('Error adding product:', error);
  }
});

// Function to delete a product
async function deleteProduct(productId) {
  try {
    // Send DELETE request to delete the product
    await axios.delete(`${apiUrl}/${productId}`);
    loadProducts(); // Reload the product list
  } catch (error) {
    console.error('Error deleting product:', error);
  }
}

// Initial load of products
loadProducts();
