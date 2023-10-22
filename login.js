// Get all the "Add to Cart" buttons
var addToCartButtons = document.querySelectorAll(".add-to-cart");

// Loop through the buttons and add a click event listener to each one
addToCartButtons.forEach(function(button) {
    button.addEventListener("click", function(event) {
        // Prevent the button from submitting a form
        event.preventDefault();

        // Check if the user is logged in
        // This is just for testing. In a real application, you would need to check if the user is logged in some other way.
        var isLoggedIn = true;

        if (isLoggedIn) {
            // If the user is logged in, add the item to the cart
            var item = event.target.getAttribute("data-item");
            var price = event.target.getAttribute("data-price");
            var swappable = event.target.getAttribute("data-swappable");

            // Create an object to represent the item
            var cartItem = {
                name: item,
                price: price,
                swappable: swappable
            };

            // Get the current cart from localStorage
            var cart = JSON.parse(localStorage.getItem("cart")) || [];

            // Add the item to the cart
            cart.push(cartItem);

            // Save the cart back to localStorage
            localStorage.setItem("cart", JSON.stringify(cart));
        } else {
            // If the user is not logged in, show the login modal
            var modal = document.getElementById("login-modal");
            modal.style.display = "block";
        }
    });
});

// Get the cart indicator
var cartIndicator = document.getElementById("cart-indicator");

// Update the cart indicator
function updateCartIndicator() {
    // Get the current cart from localStorage
    var cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Update the cart indicator with the number of items in the cart
    cartIndicator.textContent = cart.length;
}

// Call updateCartIndicator whenever an item is added to the cart
addToCartButtons.forEach(function(button) {
    button.addEventListener("click", function(event) {
        // Your existing code here...

        // Update the cart indicator
        updateCartIndicator();
    });
});

// Call updateCartIndicator when the page loads to display the current number of items in the cart
updateCartIndicator();