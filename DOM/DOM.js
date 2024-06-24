const listItems = document.querySelectorAll('#list li');
listItems[1].textContent = 'Granny Smith Apples'; // apple is 2nd item from li[1]


listItems[3].remove(); //remove 4th item 


const newItem = document.createElement('li');
newItem.textContent = 'Kombucha'; //add new iten in li
const list = document.querySelector('ul');
list.appendChild(newItem);

// Clear the list and programmatically add items from the array
const items = ['protein bars', 'almonds', 'peanut butter'];

//clear the list 
while (list.firstChild) {
    list.removeChild(list.firstChild);

}
//add new items to the list

items.forEach(item => {
    const newItem = document.createElement('li');
    newItem.textContent =item;
    list.appendChild(newItem);

});
//add class important to alminds item
const listItemsUpdated = document.querySelectorAll('#list li');
listItemsUpdated[1].classList.add('important');


