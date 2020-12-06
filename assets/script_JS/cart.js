/******************************************************************************Back to home page*******************/

import { backHomePageButton } from "./sharedFunctions.js";
backHomePageButton();
/************************************************************************import All Class*****************************/

import { customerData } from "./sharedFunctions.js";
import { finalOrder } from "./sharedFunctions.js";

/*****************************************************************************Back to product page****************/

const backToProductPageButton = () => {
  const btn = document.querySelector(".btn_back_to_product");
  btn.addEventListener("click", () => {
    location.href = "product.html";
  });
};

backToProductPageButton();

/***************************************Creating HTML Structur to display items*******************************/

let cart = JSON.parse(localStorage.getItem("cartSession"));

let numberOfItem; // = Object.keys(cart).length
let numberOfObjectInItem;

if (cart == null || cart == "") {
  document.querySelector(".totalPrice").innerHTML =
    "No Item in the cart yet ! ";
  let divForm = document.querySelector(".form-style-7"); // set from Div as Invisible if no item in the cart
  divForm.setAttribute("class", "invisible");
} else {
  numberOfItem = Object.keys(cart).length; // count the number of item in the cart
  numberOfObjectInItem = Object.keys(cart[0]).length; // count the number of value in the array
}

const arrayCriteria = ["name", "color", "price"];

const divToDisplayEachItem = () => {
  for (let i = 0; i < numberOfItem; i++) {
    let itemDiv = document.createElement("div"); // create 1 div per item added in cart
    itemDiv.setAttribute("id", "item-number" + (i + 1));
    let allItemsDiv = document.querySelector(".All-items").appendChild(itemDiv);

    let cancelButton = document.createElement("button"); // create 1 cancel button for each item added in cart
    cancelButton.setAttribute("id", "cancel_button" + (i + 1));
    cancelButton.setAttribute("class", "cancel_btn");
    cancelButton.innerHTML = "clear article nº" + (i + 1) + " from cart";
    document.querySelector(".All-items").appendChild(cancelButton);

    cancelButton.addEventListener("click", () => {
      cart.splice(i, 1); // On click of cancel button remove the item from cart array

      localStorage.setItem("cartSession", JSON.stringify(cart));
      cart = localStorage.getItem("cartSession");

      allItemsDiv.removeChild;
      location.reload();
    });

    for (let j = 0; j < numberOfObjectInItem; j++) {
      let elH2 = document.createElement("h2");
      elH2.setAttribute("class", "attribut-number-title" + j);
      elH2.innerHTML = arrayCriteria[j] + ": ";
      itemDiv.appendChild(elH2); // Set title of item properties in a H2 element

      let elP = document.createElement("p");
      elP.setAttribute("class", "attribut-number" + j);
      itemDiv.appendChild(elP);
      let criteria = arrayCriteria[j];
      elP.innerHTML = cart[i][criteria]; // Set the selected item properties in a <p> under the H2 element
    }
  }
};

divToDisplayEachItem();

/**************************************************Get Prices to calculate total***************************************************************/
let pricesArray = [];

const getPrices = () => {
  for (let i = 0; i < numberOfItem; i++) {
    let pPrice = document.getElementsByClassName("attribut-number2");
    let textPrice = pPrice[i].textContent; // get price string from HTLM page
    let price = Number(textPrice.replace(/[^\d]/g, "")); // remove € sign and convert string to number
    
    pricesArray.push(price); // pushs all prices of items in cart to variable pricesArray as an array
  }
};
getPrices();

/**************************************************Calculate and display total price of all items in the cart*********************************/

const displayTotal = () => {
  if (cart == null || cart == "") {
    // if cart is emplty return
    return;
  }

  let totalPriceItems = pricesArray.reduce(function (
    accumulator,
    currentValue
  ) {
    return accumulator + currentValue; // Make additions of all prices of variable pricesArray
  });

  const elPForTotal = document.createElement("p");
  elPForTotal.setAttribute("id", "grand-total");
  elPForTotal.innerHTML = "Grand Total: " + totalPriceItems + " €"; // Display grand total in <p> element

  let divTotalPrice = document.querySelector(".totalPrice");
  divTotalPrice.appendChild(elPForTotal);
  localStorage.setItem("Total_price_Order", totalPriceItems);
};

displayTotal();

/*************************************************Validate order & Go to Orders Summary************************************************/

const nameInput = document.querySelector("#name");
const forenameInput = document.querySelector("#forename");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const addressInput = document.querySelector("#address");
const cityInput = document.querySelector("#city");
const zipcodeInput = document.querySelector("#zipcode");
const submitBtn = document.querySelector("#submit");
const divError = document.querySelector("#error");

let JSONfinalOrderForDB;

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  divError.innerText = "";
  let messages = [];

  if (
    nameInput.value === "" ||
    nameInput.value <= 0 ||
    nameInput.value >= 0 ||
    nameInput.value == null
  ) {
    messages.push("A valide name is required"); // name field of the form must be not empty and be only letters
  }

  if (
    forenameInput.value === "" ||
    forenameInput.value <= 0 ||
    forenameInput.value >= 0 ||
    forenameInput.value == null
  ) {
    messages.push("A valide forename is required"); // forename field of the form must be not empty and be only letters
  }

  if (addressInput.value.match(/^\d+\s[A-z]+\s[A-z]+/) == null) {
    // address field of the form must start with numbers then space then letters
    // then space and letters then any caraters (EX: 23 rue jean bernard)
    messages.push("A valide address is required");
  }

  if (
    cityInput.value === "" ||
    cityInput.value <= 0 ||
    cityInput.value >= 0 ||
    cityInput.value == null
  ) {
    messages.push("A valide city is required"); // city field of the form must be not empty and be only letters
  }

  if (
    zipcodeInput.value === "" ||
    isNaN(zipcodeInput.value) ||
    zipcodeInput.value == null ||
    zipcodeInput.value.toString().length != 5
  ) {
    messages.push("A valide zipcode is required"); // zipcode filed of the form must be 5 digits number and not empty
  }

  if (
    emailInput.value === "" ||
    emailInput.value == null ||
    emailInput.value.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/) == null
  ) {
    messages.push("A valide email is required"); // email field of the form must be a valide email and not empty
  }

  if (
    phoneInput.value === "" ||
    isNaN(phoneInput.value) ||
    phoneInput.value == null ||
    phoneInput.value.toString().length != 10
  ) {
    messages.push("A valide phone number is required"); // phone field of the form must be not empty  and 10 digits number
  }

  if (messages.length > 0) {
    // if there is an error in the above validations -> prevent to send forms data and display error message(s)

    e.preventDefault();
    divError.innerText = messages.join(" / ");
    return;
  }

  let customerDataObject = new customerData(
    forenameInput.value,
    nameInput.value,
    addressInput.value,
    cityInput.value,
    emailInput.value
  );

  let productsArray = JSON.parse(localStorage.getItem("selectedIteamsIdArray"));

  let finalOrderForDB = new finalOrder(customerDataObject, productsArray); // built object to use in fetch Post request
  console.log(finalOrderForDB);
  JSONfinalOrderForDB = JSON.stringify(finalOrderForDB); // format the object in JSON

  fetch("http://localhost:3000/api/teddies/order", { // Post customer data with fetch method
    method: "post",
    headers: { "Content-Type": "application/json;charset=UTF-8" },
    body: JSONfinalOrderForDB,
  })
    .then(function (response) {
      return response.text();
    })
    .then(function (text) {       // Get response from the server

      localStorage.setItem("Valide_Order", text); // Pass response to local storage
      location.href = "ordersSummary.html";
    })
    .catch(function (error) {
      console.error(error);
    });
});

/*******************************************************Form display function***********************************************************/

function adjust_textarea(h) {  //auto expand textarea of form 
  h.style.height = "20px";
  h.style.height = h.scrollHeight + "px";
}
