/* 
  Title: Cactus Club Cafe
  Program Summary: This is a cafe website that allows users to order food from the menu or from the chef's special menu. The website also allows users to filter the menu by allergies and vegan options.
  Important (KEY) Program Elemnts Used: let, const, arrow functions, template literals, for loops, if/else statements, switch statements, try/catch blocks, async/await, fetch, DOM manipulation, event listeners, event handlers, event delegation, event bubbling, event capturing, event propagation, event object, event target, event currentTarget, event relatedTarget,
  Authors (Teammates/Owners/Project Roles): Jiwoo Lee, Hoyeon Lee
  Version (Project Iteration): 2
  Date (Last Edited): June 20st, 2025
*/





document.addEventListener("DOMContentLoaded", function() {
    // Add Drinks
    mealMaker.addMenu(
        "drinks",
        "San Benedetto Sparkling Water",
        7.5,
        "750ml bottle of sparkling mineral water",
        [],
        ["carbonated mineral water"],
        true
    );// Add a dish to the menu


    
    mealMaker.addMenu(
        "drinks",
        "Herbal Tea",
        3.5,
        "Caffeine-free herbal infusion",
        [],
        ["herbs", "water"],
        true
    );// Add a dish to the menu


    
    mealMaker.addMenu(
        "drinks",
        "Fuze Iced Tea",
        4.5,
        "500ml bottle of refreshing iced tea",
        [],
        ["brewed tea", "sugar", "natural flavors"],
        true
    );// Add a dish to the menu


    
    mealMaker.addMenu(
        "drinks",
        "Brazilian Lemonade",
        6.75,
        "Refreshing blend of citrus and sweetness",
        [],
        ["lime juice", "condensed milk", "sugar", "ice"],
        false
    );// Add a dish to the menu


    
    // Add Appetizers
    mealMaker.addMenu(
        "appetizers",
        "Szechuan Tofu Lettuce Wraps",
        25.0,
        "Sweet and spicy crispy Szechuan tofu, peanuts, wontons, Korean chili sauce, spicy yogurt",
        ["peanuts", "wheat", "soy"],
        ["tofu", "peanuts", "wontons", "Korean chili sauce", "spicy yogurt"],
        true
    );// Add a dish to the menu


    
    mealMaker.addMenu(
        "appetizers",
        "Edamame",
        8.5,
        "Steamed edamame with sea salt",
        [],
        ["edamame", "sea salt"],
        true
    );// Add a dish to the menu


    
    mealMaker.addMenu(
        "appetizers",
        "Scallop + Prawn Ceviche",
        19.0,
        "Leche de tigre, avocado, chili, Thai basil, mint, cilantro, corn tortilla chips",
        ["shellfish", "fish"],
        [
            "scallops",
            "prawns",
            "leche de tigre",
            "avocado",
            "chili",
            "Thai basil",
            "mint",
            "cilantro",
            "corn tortilla chips",
        ],
        false
    );// Add a dish to the menu


    
    mealMaker.addMenu(
        "appetizers",
        "Creole Crab and Spinach Dip",
        18.0,
        "Warm dip served with corn tortilla chips",
        ["shellfish", "dairy"],
        ["crab", "spinach", "cream cheese", "corn tortilla chips"],
        false
    );// Add a dish to the menu


    
    // Add Soups
    mealMaker.addMenu(
        "soups",
        "Miso Soup",
        6.5,
        "Traditional Japanese soup with tofu and seaweed",
        ["soy"],
        ["miso paste", "tofu", "seaweed", "green onions"],
        true
    );// Add a dish to the menu


    
    mealMaker.addMenu(
        "soups",
        "Thai Coconut Soup",
        8.5,
        "Spicy Thai coconut soup with lemongrass and chicken",
        ["coconut", "fish", "soy"],
        ["coconut milk", "lemongrass", "chicken", "fish sauce", "chilies"],
        false
    );// Add a dish to the menu


    
    mealMaker.addMenu(
        "soups",
        "Tomato Basil Soup",
        7.0,
        "Classic tomato soup with fresh basil",
        ["dairy"],
        ["tomatoes", "basil", "cream"],
        false
    );// Add a dish to the menu


    
    mealMaker.addMenu(
        "soups",
        "Garden Vegetable Soup",
        6.5,
        "Hearty vegetable soup with seasonal produce",
        [],
        ["carrots", "celery", "tomatoes", "onions", "vegetable broth"],
        true
    );// Add a dish to the menu


    
    // Add Mains
    mealMaker.addMenu(
        "mains",
        "Vegan Med Bowl",
        22.0,
        "Falafel, turmeric rice, beetroot hummus, kale, cucumber, red onion, tomatoes, kalamata olives, vegan donair sauce, pickled red cabbage",
        ["wheat", "sesame"],
        [
            "falafel",
            "turmeric rice",
            "beetroot hummus",
            "kale",
            "cucumber",
            "red onion",
            "tomatoes",
            "kalamata olives",
            "vegan donair sauce",
            "pickled red cabbage",
        ],
        true
    );// Add a dish to the menu


    
    mealMaker.addMenu(
        "mains",
        "Grilled Vegetable Skewers",
        18.0,
        "Assorted grilled vegetables served with quinoa",
        [],
        ["zucchini", "bell peppers", "onions", "mushrooms", "quinoa"],
        true
    );// Add a dish to the menu


    
    mealMaker.addMenu(
        "mains",
        "Butternut Squash Ravioli with Prawns",
        35.25,
        "Butternut squash and mascarpone ravioli, truffle butter, sautéed prawns, pine nuts, crispy sage",
        ["dairy", "nuts", "shellfish", "wheat"],
        [
            "butternut squash ravioli",
            "mascarpone",
            "truffle butter",
            "prawns",
            "pine nuts",
            "sage",
        ],
        false
    );// Add a dish to the menu


    
    mealMaker.addMenu(
        "mains",
        "Rigatoni Bolognese",
        27.25,
        "Truffled pecorino, slow-cooked beef and pork ragu, rosemary, fennel chili crumb, garlic crostini",
        ["dairy", "wheat"],
        [
            "rigatoni",
            "beef",
            "pork",
            "pecorino",
            "rosemary",
            "fennel",
            "garlic crostini",
        ],
        false
    );// Add a dish to the menu


    
    mealMaker.addMenu(
        "mains",
        "Truffle Parmesan Chicken",
        34.5,
        "Parmesan-crusted chicken breast, roasted and grilled mushrooms, potato gnocchi, truffle mushroom cream sauce, arugula",
        ["dairy", "wheat"],
        [
            "chicken breast",
            "parmesan",
            "mushrooms",
            "potato gnocchi",
            "truffle cream sauce",
            "arugula",
        ],
        false
    );// Add a dish to the menu


    
    // Add Sides
    mealMaker.addMenu(
        "sides",
        "Crispy Yam Fries",
        14.0,
        "Served with garlic aioli",
        ["soy"],
        ["yam", "garlic aioli"],
        true
    );// Add a dish to the menu


    
    mealMaker.addMenu(
        "sides",
        "Steamed Broccoli",
        5.0,
        "Fresh steamed broccoli florets",
        [],
        ["broccoli"],
        true
    );// Add a dish to the menu


    
    mealMaker.addMenu(
        "sides",
        "Truffle Fries",
        14.0,
        "Truffle, herbs, Grana Padano, garlic aioli",
        ["dairy", "eggs", "wheat"],
        ["potatoes", "truffle oil", "herbs", "Grana Padano", "garlic aioli"],
        false
    );// Add a dish to the menu


    
    mealMaker.addMenu(
        "sides",
        "Garlic Bread",
        5.0,
        "Toasted bread with garlic butter",
        ["dairy", "wheat"],
        ["bread", "garlic", "butter"],
        false
    );// Add a dish to the menu


    
    // Add Desserts
    mealMaker.addMenu(
        "desserts",
        "Seasonal Fruit Plate",
        9.0,
        "Assorted fresh seasonal fruits",
        [],
        ["assorted seasonal fruits"],
        true
    );// Add a dish to the menu


    
    mealMaker.addMenu(
        "desserts",
        "Fruit Sorbet",
        7.0,
        "Assorted fruit sorbet scoops",
        [],
        ["fruit puree", "sugar", "water"],
        true
    );// Add a dish to the menu


    
    mealMaker.addMenu(
        "desserts",
        "Chocolate Lava Cake",
        11.25,
        "Molten dark chocolate cake, Tahitian vanilla ice cream",
        ["dairy", "eggs", "wheat"],
        ["dark chocolate", "flour", "eggs", "vanilla ice cream"],
        false
    );// Add a dish to the menu


    
    mealMaker.addMenu(
        "desserts",
        "Key Lime Pie",
        13.25,
        "Freshly squeezed key limes, graham cracker crust, hand-whipped cream",
        ["dairy", "wheat", "eggs"],
        ["key limes", "graham cracker crust", "whipped cream"],
        false
    );// Add a dish to the menu


    
    mealMaker.addMenu(
        "desserts",
        "Chocolate Peanut Butter Crunch Bar",
        13.25,
        "Tahitian vanilla ice cream, caramel sauce, crunchy chocolate pearls",
        ["dairy", "peanuts", "wheat"],
        [
            "peanut butter",
            "chocolate",
            "vanilla ice cream",
            "caramel sauce",
            "chocolate pearls",
        ],
        false
    );// Add a dish to the menu


    
    console.log(mealMaker.allMeals);
}); //show all meal





// End of Program

/*
   NOTES: add comments

   TEST CODE:

mealMaker.addMenu(
        "mains",
        "Truffle Parmesan Chicken",
        34.5,
        "Parmesan-crusted chicken breast, roasted and grilled mushrooms, potato gnocchi, truffle mushroom cream sauce, arugula",
        ["dairy", "wheat"],
        [
            "chicken breast",
            "parmesan",
            "mushrooms",
            "potato gnocchi",
            "truffle cream sauce",
            "arugula",
        ],
        false
    );

*/