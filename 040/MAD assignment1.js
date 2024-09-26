// Shopping Cart Class
class ShoppingCart {
    constructor() {
        this.cart = []; // Initialize an empty cart
    }

    // Function to add products to the cart
    addItem = (productId, productName, quantity, price) => {
        const product = { productId, productName, quantity, price };
        this.cart.push(product); // Add product to the cart using push
        console.log(`${productName} added to cart.`);
    }

    // Function to remove items from the cart by product ID
    removeItem = (productId) => {
        const initialLength = this.cart.length; // Store initial length of the cart
        this.cart = this.cart.filter(item => item.productId !== productId); // Filter out item by ID
        if (this.cart.length < initialLength) {
            console.log(`Product with ID ${productId} removed from cart.`);
        } else {
            console.log(`Product with ID ${productId} not found in cart.`);
        }
    }

    // Function to update the quantity of items in the cart
    updateQuantity = (productId, newQuantity) => {
        const product = this.cart.find(item => item.productId === productId); // Find the product by ID
        if (product) {
            product.quantity = newQuantity; // Update quantity
            console.log(`Updated ${product.productName} quantity to ${newQuantity}.`);
        } else {
            console.log(`Product with ID ${productId} not found in cart.`);
        }
    }

    // Function to calculate total cost of items in the cart
    calculateTotalCost = () => {
        return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0); // Calculate total using reduce
    }

    // Function to display cart summary
    displayCartSummary = () => {
        const summary = this.cart.map(item => ({
            name: item.productName,
            quantity: item.quantity,
            totalPrice: (item.price * item.quantity).toFixed(2) // Calculate total price for each item
        }));

        summary.forEach(item => {
            console.log(`${item.name}: Quantity: ${item.quantity}, Total Price: $${item.totalPrice}`);
        });
        
        const totalCost = this.calculateTotalCost();
        console.log(`Total Cost of Cart: $${totalCost.toFixed(2)}`);
    }

    // Function to filter out items with zero quantity from the cart
    filterZeroQuantityItems = () => {
        this.cart = this.cart.filter(item => item.quantity > 0); // Keep only items with quantity > 0
        console.log("Filtered out items with zero quantity.");
    }

    // Bonus: Function to apply discount code
    applyDiscountCode = (code) => {
        let discount = 0;
        
        if (code === "SAVE10") {
            discount = 0.10; // 10% discount
            console.log("10% discount applied.");
        } else if (code === "SAVE20") {
            discount = 0.20; // 20% discount
            console.log("20% discount applied.");
        } else {
            console.log("Invalid discount code.");
            return;
        }
        
        const totalCost = this.calculateTotalCost();
        const discountedTotal = totalCost - (totalCost * discount);
        
        console.log(`Total Cost after discount: $${discountedTotal.toFixed(2)}`);
    }
}

// Example Usage:
const myCart = new ShoppingCart();
myCart.addItem(1, "Apple", 3, 0.50);
myCart.addItem(2, "Banana", 2, 0.30);
myCart.addItem(3, "Orange", 1, 0.80);
myCart.displayCartSummary();
myCart.updateQuantity(1, 5);
myCart.removeItem(2);
myCart.filterZeroQuantityItems();
myCart.displayCartSummary();
myCart.applyDiscountCode("SAVE10");