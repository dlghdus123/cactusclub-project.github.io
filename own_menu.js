/* 
  Title: Cactus Club Cafe
  Program Summary: This is a cafe website that allows users to order food from the menu or from the chef's special menu. The website also allows users to filter the menu by allergies and vegan options.
  Important (KEY) Program Elemnts Used: let, const, arrow functions, template literals, for loops, if/else statements, switch statements, try/catch blocks, async/await, fetch, DOM manipulation, event listeners, event handlers, event delegation, event bubbling, event capturing, event propagation, event object, event target, event currentTarget, event relatedTarget,
  Authors (Teammates/Owners/Project Roles): Jiwoo Lee, Hoyeon Lee
  Version (Project Iteration): 2
  Date (Last Edited): June 20st, 2025
*/





/*
summary: This function creates the HTML for the menu
@parms: none
@return: none
*/
const makeMenu = () => {
  const ownMenuContainer = document.getElementById("ownMenuContainer");
  const allMenu = mealMaker.allMeals;
  const categories = ["drinks", "appetizers", "soups", "mains", "sides", "desserts"];

  let menuInnerHTML = "";

  // Loop over each category
  categories.forEach(category => {

    // If there are items in this category, create the HTML for it
    if (allMenu[category].length > 0) {

      // Add a title for the category
      menuInnerHTML += `<h2 class="menu-category-title">${category}</h2>`;

      // Start the container for the category's items
      menuInnerHTML += `<div class="menu-container ${category}">`;

      // Loop over each item within the category
      allMenu[category].forEach(item => {
        // The class name for the item div, e.g., "drinks-item"
        const itemClassName = `${category}-item`;

        // Start building the HTML for a single menu item
        menuInnerHTML += `
                  <div class="${itemClassName} menu-item" data-name="${item.name}" data-category="${itemClassName}" data-price="${item.price}">
                      <div class="menu-header">
                          <h3 class="menu-name">
                              ${item.name}
                              ${item.isVegan ? '<span class="menu-vegan">Vegan</span>' : ''}
                          </h3>
                          <p class="menu-price">$${item.price.toFixed(2)}</p>
                      </div>
                      <p class="menu-description">${item.description}</p>
                      <p class="menu-ingredients"><strong>Ingredients:</strong> ${item.ingredients}</p>
                      ${item.allergies.length > 0 ? `<p class="menu-allergies"><strong>Allergies:</strong> ${item.allergies.join(', ')}</p>` : ''}
                  </div>
              `;
      });// Loop over each item within the category

      // Close the category container div
      menuInnerHTML += `</div>`;
    }// If there are items in this category, create the HTML for it
  });// Loop over each category

  // Set the inner HTML of the main container to the generated string
  ownMenuContainer.innerHTML = menuInnerHTML;
}// Create the HTML for the menu



document.addEventListener("DOMContentLoaded", () => {
  makeMenu();

  



  /*
  summary: This function is used to select a menu item
  @parms: none
  @return: none
  */
  const menuItems = document.querySelectorAll(".menu-item");
  menuItems.forEach(item => {
    item.addEventListener("click", () => {
      item.classList.toggle("selected");
      
      const selectedCategory = item.dataset.category;
      
      const selectedItems = document.querySelectorAll(`.${selectedCategory}.selected`);
      if (selectedItems.length > 1) {
        selectedItems.forEach((selectedItem) => {
          if (selectedItem !== item) {
            selectedItem.classList.remove("selected");    
          }// If the item is not the one that was clicked, remove the selected class
        })// Loop over each selected item in the category
      }// If there is more than one selected item in the category
    })// Add an event listener to each menu item
  })// Loop over each menu item


  
  /*
  summary: This function is used to submit the selected menu items
  @parms: none
  @return: none
  */
  const ownSubmitBtn = document.getElementById("ownSubmitBtn");


  
  ownSubmitBtn.addEventListener("click", () => {


    
    /*
    summary: This function is used to check if the user has selected one item from each category
    @parms: none
    @return: none
    */
    const selectedItems = document.querySelectorAll(".menu-item.selected");
    if (selectedItems.length !== 6) {
      alert("Please select one item from each category.");
      return;
    }// If there are not 6 selected items, alert the user and return


    
    modalContainer.classList.add("active");


    
    /*
    summary: This function is used to create the HTML for the selected menu items
    @parms: none
    @return: none
    */
    const selectedItemNames = Array.from(selectedItems).map(item => {
      return {
        name: item.dataset.name,
        price: item.dataset.price
      }// Return the name and price of the selected item
    });// Loop over each selected item and return the name and price of the selected item

    

    /*
    summary: This function is used to create the HTML for the selected menu items
    @parms: none
    @return: none
    */
    const modalBody = mealMaker.createOwnMenu(selectedItemNames);


    


    /*
    summary: This function is used to  set the inner HTML of the modal body to the generated string
    @parms: none
    @return: none
    */
    const modalText = document.getElementById("modalText");
    modalText.innerHTML = modalBody;
  })// Add an event listener to the submit button
});// Add an event listener to the DOMContentLoaded event





//beg program





//Beginning of Main

  // makeMenu();

//End of Main





// End of Program

/*
   NOTES: add comments

   TEST CODE:

    modalContainer.classList.add("active");

  */