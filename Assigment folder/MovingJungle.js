let cart = [];

function addToCart(item) {
    cart.push(item);
    updateCartDisplay();
}

function updateCartDisplay() {
    let cartContainer = document.getElementById("cart-items");
    cartContainer.innerHTML = cart.join(", ");
}

document.addEventListener("DOMContentLoaded", updateCartDisplay);
