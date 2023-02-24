# jQuery Car Garage

In this assignment, you will build an interface that allows users to add cars to a list, and render the list of cars on the page. Your assignment is to use jQuery to handle **events**, save car data to a **state** variable, and **render** the car data to the DOM.

## Setup

You'll find that a 'client.js' file already exists and is sourced in the HTML file. 

You will need to source jQuery in your index.html in order to complete this assignment. If you need some help doing this, take a look at the instructions [here](jQuery_instructions.md). 

---

## Part 1: Add cars to the garage


1. Create a form for the user to add cars to their garage with 3 input fields:

- year
- make
- model

Your user will also need an "Add Car" button

2. When the "Add Car" button is clicked, run a function that:
    - Grabs values from the form inputs
    - Creates an object which represents the new car
    - Adds the new car object to an array of cars (state)


3. After the new car is added to state, render all the cars in the array as an unordered list on the DOM.

Whew! That's a lot of stuff for one click! Break that down into small steps!

## Part 2: Remove a car from the garage

Add a "Remove Car" button next to each car in the garage.

For **Base Mode** it is ok to remove the car directly from the DOM, without updating state.

As a **STRETCH Goal**, update your state (array) to remove the car object, and then call `render()`

----

## Stretch Goals

X- Clear inputs when a car is added
X- don't allow a car to be added if any fields are left blank
X- have a maximum number of spaces in the garage. Disable inputs if the garage is full
- add another input field, this one should take in text for a url to an image (like a Google image result when you search for `car`), add it to the object with the rest of the car's information, and display the image (using an `<img>` tag) for each car as well as its year/make/model text
- add another required input field, this one should take in the price of the car. The price should be listed on the DOM
- The total price for all of the cars in the garage should be listed at the top of the DOM, and it should be updated every time a new car is added
- Add animation to your images to show the new cars being parked in the garage
