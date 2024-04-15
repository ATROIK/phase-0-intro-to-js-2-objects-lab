// OBJECT - dtat structure containg KEY / VALUE pairs
// stored in {} - can be nested
/*const Address = {
    street: {
      line1: "11 Broadway",
      line2: "2nd Floor",
    },
    city: "New York",
    state: "NY",
    zipCode: "10004",
};
*/
// Multiple properties can have the same value, eg,
/*const meals = {
  breakfast: "Avocado toast",
  lunch: "Avocado toast",
  dinner: "Avocado toast",
};

meals.breakfast;
// => "Avocado toast"

meals.dinner;
// => "Avocado toast"*/

// However keys MUST BE UNIQUE, if same key is used for multiple properties, onlt the FINAL VALUE WILL BE RETAINED, THE REST WILL BE OVERWRITTEN.
// The REAL DATA in an OBJECT is stored on the VALUE half of the key-value pairings. The key is what lets us access that value. Inside an OBJECT we assign EACH VALUE A KEY, we can refer to that key and JS knows which value we are trying to access.

// ACCESS VALUES STORED IN AN OBJECT

// Can access keys by using dot notation(a single period - member access operator), append using dot notation
// address.city
// address.street.line1

// Bracket notation - computed member access operator - (dot is easier to read). To access same properties as above we need to represent them as ['strings'] inside the operator
// address["street"];
//=> { line1: "11 Broadway", line2: "2nd Floor" }

// NON STANDARD KEYS
/*const wildKeys = {
  "Cash rules everything around me.": "Wu",
  "C.R.E.A.M.": "Tang",
  "Get the money.": "For",
  "$ $ bill, y'all!": "Ever",
};*/

// cannot access above properties with .notation, but []notation will work
// In order to access a property via dot notation, the key must follow the same naming rules applied to variables and functions. 
//camelCaseEverything
//Start the key with a lowercase letter
//No spaces or punctuation
//ALWAYS NAME OBJECTS TO THE ABOVE THREE RULES.

//REMEMBER, ALL KEYS ARE STRINGS

// Accessing Properties Dynamically (i.e., using variables rather than literal identifiers).
// The reason we need to enclose the key inside quotes when we use the literal key is because, when we DON'T use the quotes, JavaScript will interpret what's inside the brackets as a variable.

/*const meals = {
  breakfast: "Oatmeal",
  lunch: "Caesar salad",
  dinner: "Chimichangas",
};

let mealName = "lunch";

meals[mealName];
//=> "Caesar salad"*/

// Essentially, dot notation is for when you know the exact name of the property in advance, and bracket notation is for when you need to compute it when the program runs.

// We can also use [] notation to dynamically set properties DURING THE CREATION OF A NEW OBJECT, eg;
/* const morningMeal = "breakfast";
const middayMeal = "lunch";
const eveningMeal = "dinner";

const meals = {
  [morningMeal]: "French toast",
  [middayMeal]: "Personal pizza",
  [eveningMeal]: "Fish and chips",
};

meals;
//=> { breakfast: "French toast", lunch: "Personal pizza", dinner: "Fish and chips" }*/
// By wrapping the variable names in [], WE ARE LETTING JS LNOW THAT IT NEEDS TO INTERPRET THE CONTENTS. In the above example, JS treats each meal as a variable, thus allowing us to reuse.

// OBJECT METHODS
// JS has a number of built in static object methods (static - these methods are called on the OBJECT CLASS ITSELF RATHER THAN ON AN INSTANCE OF AN OBJECT)

// Object.keys() - Using this we can get a list of top level keys in an object. WE use oject.keys() and pass the the object instance as an argument.. The return value is an array containing all keys at top level of the object instance (not nested ones though as the example shows)

/*const wednesdayMenu = {
    cheesePlate: {
      soft: "Brie",
      semiSoft: "Fontina",
      hard: "Provolone",
    },
    fries: "Sweet potato",
    salad: "Southwestern",
  };
  
  Object.keys(wednesdayMenu);
  //=> ["cheesePlate", "fries", "salad"]*/

  // Object.values() - similar to Object.keys() but returns an array containing values rather than keys


  // MODIFYING OBJECTS

  // The below example is an alternative to using literal syntax. we initialise an empty object and then use . or [] notation to create properties programatically, this approach is less error prone.
  /*const circle = {};

circle.radius = 5;

circle["diameter"] = 10;

circle.circumference = circle.diameter * Math.PI;
//=> 31.41592653589793

circle["area"] = Math.PI * circle.radius ** 2;
//=> 78.53981633974483

circle;
//=> { radius: 5, diameter: 10, circumference: 31.41592653589793, area: 78.53981633974483 }

console.log(circle);*/
// Like with ARRAYS, we can add, modify, or delete elements even if we use const to initialise the array, BUT we cant reasign the variable itself

// MODIFY A PROPERTY USING . OR [] NOTATION

// Update ormoverwrite existing properties simply by assigning a new value to an existing key. The example below however is destructive
/*const mondayMenu = {
    cheesePlate: {
      soft: "Chèvre",
      semiSoft: "Gruyère",
      hard: "Manchego",
    },
    fries: "Curly",
    salad: "Cobb",
  };
  
  mondayMenu.fries = "Sweet potato"; // DESTRUCTIVE
  
  mondayMenu;
  //=> { cheesePlate: { soft: "Chèvre", semiSoft: "Gruyère", hard: "Manchego" }, fries: "Sweet potato", salad: "Cobb" }
console.log(mondayMenu);

// This function yake three arguments, 1. the original menu object, 2. the key identifying the property we want to update, 3. and the value we want to change its value to

//function destructivelyUpdateObject(obj, key, value) {
    //obj[key] = value
    //return obj;
//}//

const tuesdayMenu = destructivelyUpdateObject(mondayMenu, 'salad', 'Caesar');
//tuesdayMenu;
tuesdayMenu.salad;
console.log(tuesdayMenu);*/

// UPDATE AN OBJECT NON-DESTRUCTIVELY USING THE SPREAD OPERATOR

// As with Arrays, we can use the spread operator to cpy all the elelemnts of an existing array into a new array, we can do the same with objects

// REMOVE A PROPERTY FROM AN OBJECT
// use the delete operator, eg, delete wednesdayMenu.salad;

// RELATIONSHIP BETWEEN ARRAYS AND OBJECTS

//Arrays are not a data object (numbers, strings, booleans, symbols, objects, null, undefined) because they are a SPECIAL TYPE OF OBJECT.... ARRAYS ARE OBJECTS.
// We can set properties on an array just like a regular object, and modify and access those properties as well.
// One of the special features of an array is that ITS ARRAY-STYLE ELEMENTS ARE STORED SEPERATELY FROM ITS OBJECT STYLE PROPERTIES. Eg, the .length property of an array describes how many items exist in its special list of elements. Its Object-style properties are not included in that calculation.
// Fundamental truth: all keys in Objects and all indexes in Arrays are actually strings.

/*remember these simple guidelines, and you'll be just fine:

For accessing elements in an Array, always use integers.
Be wary of setting Object-style properties on an Array. There's rarely any reason to, and it's usually more trouble than it's worth.
Remember that all Object keys, including Array indexes, are strings. This will really come into play when we learn how to iterate over Objects, so keep it in the back of your mind.*/

const employee = {
    name: 'Bob',
    streetAddress: '12 Broadway',
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {...employee, [key]: value };

};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee
}
// spread operator creates the clone, then delete key
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee
}







