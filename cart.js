// Get the cart indicator
var cartIndicator = document.getElementById("cart-indicator");

// Update the cart indicator
function updateCartIndicator() {
    // Get the current cart from localStorage
    var cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Update the cart indicator with the number of items in the cart
    cartIndicator.textContent = cart.length;
}

// Call updateCartIndicator when the page loads to display the current number of items in the cart
updateCartIndicator();