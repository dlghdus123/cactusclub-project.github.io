/* 
  Title: Cactus Club Cafe
  Program Summary: This is a cafe website that allows users to order food from the menu or from the chef's special menu. The website also allows users to filter the menu by allergies and vegan options.
  Important (KEY) Program Elemnts Used: let, const, arrow functions, template literals, for loops, if/else statements, switch statements, try/catch blocks, async/await, fetch, DOM manipulation, event listeners, event handlers, event delegation, event bubbling, event capturing, event propagation, event object, event target, event currentTarget, event relatedTarget,
  Authors (Teammates/Owners/Project Roles): Jiwoo Lee, Hoyeon Lee
  Version (Project Iteration): 2
  Date (Last Edited): June 20st, 2025
*/





/*
summary: This function is used to create the menu object and add dishes to the menu
@parms: none
@return: none
*/
const mealMaker = {
  _meal: {
    drinks: [],
    appetizers: [],
    soups: [],
    mains: [],
    sides: [],
    desserts: [],
  }, // Private property to store the meal


  
  get appetizers() {
    return this._meal.appetizers;
  },
  get mains() {
    return this._meal.mains;
  },
  get desserts() {
    return this._meal.desserts;
  },
  get drinks() {
    return this._meal.drinks;
  },
  get sides() {
    return this._meal.sides;
  },
  get soups() {
    return this._meal.soups;
  },

  set appetizers(value) {
    this._meal.appetizers = value;
  },
  set mains(value) {
    this._meal.mains = value;
  },
  set desserts(value) {
    this._meal.desserts = value;
  },
  set drinks(value) {
    this._meal.drinks = value;
  },
  set sides(value) {
    this._meal.sides = value;
  },
  set soups(value) {
    this._meal.soups = value;
  },


  
  get allMeals() {
    return {
      drinks: this.drinks,
      appetizers: this.appetizers,
      soups: this.soups,
      mains: this.mains,
      sides: this.sides,
      desserts: this.desserts,
    }; // Return all meals
  }, // Get all meals

  

  addMenu(
    category,
    name,
    price,
    description,
    allergies,
    ingredients,
    isVegan
  ) {
    const dish = {
      name,
      description,
      price,
      allergies,
      ingredients,
      isVegan,
    }; // Creat a dish object
    this._meal[category].push(dish);
  }, // Add a dish to the menu





  /*
  summary: This function is used to check if the dish has any allergies
  @parms: none
  @return: none
  */
  checkAllergies(dish) {
    var allergies = [];

    document.querySelectorAll(".allergy-list input:checked").forEach((allergy) => { // return true can't eat
      allergies.push(allergy.dataset.value); //allergy.dataset.value
    }); // Get all allergies

    return allergies.some((allergy) => dish.allergies.includes(allergy));
  }, // Check if the dish has any allergies





  /*
  summary: This function is used to check if the dish is vegan
  @parms: none
  @return: none
  */
  checkVegan(dish) {
    if (document.getElementById("veganBtn").checked) {
      return !dish.isVegan;
    } else {
      return false
    } // return true can't eat
  },// Check if the dish is vegan





  /*
  summary: This function is used to choose a random dish from the menu
  @parms: none
  @return: none
  */
  chooseCheifSpecialDish(category) {
    const dishes = this._meal[category];
    let randomIndex = Math.floor(Math.random() * dishes.length);
    let dish = dishes[randomIndex]; // Get a random dish from the menu

    while (this.checkAllergies(dish) || this.checkVegan(dish)) {
      randomIndex = Math.floor(Math.random() * dishes.length); 
      dish = dishes[randomIndex];
    }// Get a random dish from the menu

    return dish;
  },// Return the dish





  /*
  summary: This function is used to create chef's special menu and a bill
  @parms: none
  @return: none
  */
  createCheifSpecial() {
    const drink = this.chooseCheifSpecialDish("drinks");
    const appetizer = this.chooseCheifSpecialDish("appetizers");
    const soup = this.chooseCheifSpecialDish("soups");
    const main = this.chooseCheifSpecialDish("mains");
    const side = this.chooseCheifSpecialDish("sides");
    const dessert = this.chooseCheifSpecialDish("desserts");





    /*
    summary: This function is used to calculate the total price and tax
    @parms: none
    @return: none
    */
    const total =
      drink.price +
      appetizer.price +
      soup.price +
      main.price +
      side.price +
      dessert.price;


    


    /*
    summary: This function is used to calculate the tax
    @parms: none
    @return: none
    */
    const tax = total * 0.15; // 15% tax

    

    return `<div class="order-container">
    <h3>Your meal includes: </h3>
    <div class="item">
      <p class="item-name">${appetizer.name}</p>
      <p class="item-price">$${appetizer.price}</p>
    </div>
    <div class="item">
      <p class="item-name">${main.name}</p>
      <p class="item-price">$${main.price}</p>
    </div>
    <div class="item">
      <p class="item-name">${side.name}</p>
      <p class="item-price">
        $${side.price}
      </p>
    </div>
    <div class="item">
      <p class="item-name">
        ${soup.name}
      </p>
      <p class="item-price">
        $${soup.price}
      </p>
    </div>
    <div class="item">
      <p class="item-name">
        ${dessert.name}
      </p>
      <p class="item-price">
        $${dessert.price}
      </p>
    </div>
    <div class="item">
      <p class="item-name">
        ${drink.name}
      </p>
      <p class="item-price">
        $${drink.price}
      </p>
    </div>
    <div class="total-price">
        <p>
          <strong>Total:</strong> $${total.toFixed(2)}
        </p>
        <p>
          <strong>Tax:</strong> $${tax.toFixed(2)}
        </p>
        <p>
          <strong>Total after tax:</strong> $${(total + tax).toFixed(2)}
      </div>
    </div>`
  }, // Create a cheif special menu and a bill


  
  /*
  summary: This function is used to create the HTML for the selected menu items
  @parms: none
  @return: none
  */
  createOwnMenu(selectedItems) {
    const total = selectedItems.reduce((acc, item) => acc + parseFloat(item.price), 0)

    const tax = total * 0.15;

    const totalafterTax = total + tax;

    return `<div class="order-container">
      <h3>Your meal includes:</h3>
      ${selectedItems.map(item => {
      return `<div class="item">
      <p class="item-name">${item.name}</p>
      <p class="item-price">$${item.price}</p></div>`
    }).join('')}
      <div class="total-price">
        <p>
          <strong>Total:</strong> $${total.toFixed(2)}
        </p>
        <p>
          <strong>Tax:</strong> $${tax.toFixed(2)}
        </p>
        <p>
          <strong>Total after tax:</strong> $${totalafterTax.toFixed(2)}
      </div>
    </div>`

  }// Create a own menu and a bill
};  // Create a own menu and a bill



// Assuming 'mealMaker' is your object and 'addMenu' is its method



// Show All meal
console.log(mealMaker.allMeals);



const cheifSpecialBtn = document.getElementById("cheifSubmitBtn");
const modalContainer = document.getElementById("modalContainer");
const modalCloseBtn = document.getElementById("modalCloseBtn");



cheifSpecialBtn?.addEventListener("click", () => {
  modalContainer.classList.add("active");
  const modalText = document.getElementById("modalText");
  modalText.innerHTML = mealMaker.createCheifSpecial();
}) // Show the modal and create a cheif special menu and a bill 



modalCloseBtn?.addEventListener("click", () => {
  modalContainer.classList.remove("active");
}) // Close the modal




  
//beg program





//Beginning of Main

  // createOwnMenu(selectedItems);

//End of Main





// End of Program

/*
   NOTES: add comments

   TEST CODE:

const cheifSpecialBtn = document.getElementById("cheifSubmitBtn");
const modalContainer = document.getElementById("modalContainer");
const modalCloseBtn = document.getElementById("modalCloseBtn");

  */