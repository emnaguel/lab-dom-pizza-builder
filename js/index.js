// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: false,
  mushrooms: false,
  greenPeppers: false,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach(onePep => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(mush => {
    if (state.mushrooms) {
      mush.style.visibility = 'visible';
    } else {
      mush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`

  document.querySelectorAll('.green-pepper').forEach(pepper => {
    if (state.greenPeppers) {
      pepper.style.visibility = 'visible';
    } else {
      pepper.style.visibility = 'hidden';
    }
  });}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach(sauce => {
    sauce.classList.toggle("sauce-white");
  
    
  })
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach(crust => {

    crust.classList.toggle("crust-gluten-free");
  
    
  })

}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  let buttons = document.querySelectorAll('.btn')
  buttons.forEach(button => {

     button.onclick = function(event) {

      event.currentTarget.classList.toggle("active");
    };
   })

}



 function renderPrice() {
//   // Iteration 4: change the HTML of `<aside class="panel price">`


 const panelPrice = document.querySelector(".panel.price")

  let price = basePrice + 1
  if(state.pepperoni) {
    panelPrice.children[2].children[0].style.visibility = 'visible'
  } else {
    panelPrice.children[2].children[0].style.visibility = 'hidden'
    price -= ingredients.pepperoni.price 
  }

  if(state.mushrooms) {
    panelPrice.children[2].children[1].style.visibility = 'visible'
  } else {
    price -= ingredients.mushrooms.price
    panelPrice.children[2].children[1].style.visibility = 'hidden'
  }

  if(state.greenPeppers) {
    panelPrice.children[2].children[2].style.visibility = 'visible'
  } else {
    panelPrice.children[2].children[2].style.visibility = 'hidden'
    price -= ingredients.greenPeppers.price
  }

  if(state.whiteSauce) {
    panelPrice.children[2].children[3].style.visibility = 'visible'
  } else {
    panelPrice.children[2].children[3].style.visibility = 'hidden'
    price -=  ingredients.whiteSauce.price
  }
  if(state.glutenFreeCrust) {
    panelPrice.children[2].children[4].style.visibility = 'visible'
  } else {
  panelPrice.children[2].children[4].style.visibility = 'hidden'
  price -= ingredients.glutenFreeCrust.price
  }
  let ultimatePrice = basePrice + price
  panelPrice.children[3].textContent = `$${ultimatePrice}`
  return ultimatePrice

}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});