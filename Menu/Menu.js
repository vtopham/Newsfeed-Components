/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

function createMenuComponent(items) { //create a whole menu thingy
  let menuDiv = document.createElement("div");
  menuDiv.classList.add("menu");

  let listContainer = document.createElement("ul");
  menuDiv.appendChild(listContainer);

  items.forEach((item) => {
    let menuItem = document.createElement("li");
    menuItem.textContent = item;
    listContainer.appendChild(menuItem);
  });

  let menuBtn = document.querySelector(".menu-button"); //select for the menu button

  menuBtn.addEventListener("click", (event) => { //when the button is clicked, the menu itself gets the class toggled 
    menuDiv.classList.toggle("menu--open");
  });
  
  return menuDiv;
}

let bodySelector = document.querySelector("body");

bodySelector.appendChild(createMenuComponent(menuItems)); //add to the dom

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
