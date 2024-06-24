//Get the header element
const headerElement = document.querySelector('header');
console.log(headerElement);

//Get all the section elements
const allSections = document.querySelectorAll('section');
console.log(allSections);

//Get the section element with class="current"
const currentSection = document.querySelector('section.current');
console.log(currentSection);

//Get the section that comes after the current section
const nextSection = currentSection.nextElementSibling
console.log(nextSection);

// Get the h2 node (not referencing current section.)
const previousElementSiblingSectionH2 = currentSection.previousElementSibling
console.log(previousElementSiblingSectionH2);

//Get the div that contains the section that has an h2 with a class of 'highlight'
const divContainhilghlightH2= document.querySelector('h2.highlight').closest('div');
console.log(divContainhilghlightH2)


//Get all the sections that contain an H2
const sectionWithH2 = document.querySelectorAll('section has(h2)');
console.log(sectionWithH2);








