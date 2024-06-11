// Create an array for shopping list
let shoppingList = ["pop tarts","raman noodles","chips","salsa","coffee"];
shoppingList.push('fruit loops'); //adds 'fruit loops' to the array
shoppingList[shoppingList.indexOf('fair trade coffee')]; //updates coffee with fair trade coffe
shoppingList[shoppingList.indexOf('chips')]="rice";//updates chips with rice
shoppingList[shoppingList.indexOf('salsa')]="beans";// updates salsa with beans

// Create an empty array called shoppingCart
let shoppingCart =[];
//removes the last item from shoppingList
shoppingCart.push(shoppingList.pop()); 
shoppingCart.push(shoppingList.shift());
while (shoppingList.length>=1){
    shoppingCart.push(shoppingList.pop());    
}
shoppingCart = ["fair trade coffee","pop tarts","fruit loops","rice","beans",];
shoppingCart.sort();

shoppingCart.reverse();
console.log(shoppingCart)







