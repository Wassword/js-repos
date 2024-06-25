//initializa the cart in local storage  if it doesn't exist
function initializeCart(){
    if(!localStorage.getItem('cart')) {
        localStorage.setItem('cart',JSON.stringify([]));
    }
}
// Function to add an item to the cart
function addItem(item){
    const cart = JSON.parse(localStorage.getItem('cart'));  
    cart.push(item);
    localStorage.setItem('cart',JSON.stringify(cart));

}
// Function to remove an item from the cart by id
function removeItem(itemId) {
    const cart = JSON.parse(localStorage.getItem('cart'));  
    cart = cart.filter(item => item.id !== itemId);
    localStorage.setItem('cart', JSON.stringify(cart));
}
// Function to display the cart contents
function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    if (cart.length === 0){
        console.log('cart is empty');
        return
    }
    console.log('Cart Contents:');
    cart.forEach(item => {
        console.log(`ID: ${item.id}, ${item.name}, Price: ${item.price}`)
        
    });

}
// Event listener for the add item form
document.getElementById('addItemForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const itemName = document.getElementById('itemName').value;
    const itemPrice = parseFloat(document.getElementById('itemPrice').value);

    const item = {
        id: Date.now(), // Unique identifier for the item
        name: itemName,
        price: itemPrice
    };

    addItem(item);

    // Clear the form inputs
    document.getElementById('addItemForm').reset();
});

// Event listener for the display cart button
document.getElementById('displayCartButton').addEventListener('click', displayCart);

// Initialize the cart when the script is loaded
initializeCart();

