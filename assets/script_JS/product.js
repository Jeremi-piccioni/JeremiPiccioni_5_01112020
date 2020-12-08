import { addTargetPage } from "./sharedFunctions.js";

/*************************************Importing the Item Constructor from cartItemConstructor.js********************************************/

import { kartItem } from "./sharedFunctions.js";


/**********************************************writing the correct call URL thanks to selected bear ID from the local storage***************/

function getCurrentBearUrl() {
  let bearclickedID = localStorage.getItem("bearclickedID");
  return `http://localhost:3000/api/teddies/${bearclickedID}`;
}

/*****************************************Getting Info form local Storage******************************************************************/

const showCurrentBear = () => {

  // Get bears data from the server with fetch method
  fetch(getCurrentBearUrl()).then((bearData) =>

    bearData.json().then((bear) => {

      const titleBearName = document.querySelector(".productName"); // Displaying clicked Bear criterias (Name, Photo, Description,Price)
      titleBearName.innerHTML = bear["name"];

      document.querySelector(".product-pic").src = bear["imageUrl"];

      document.querySelector(".product-description").innerHTML = bear["description"];

      document.querySelector(".product-price").innerHTML = bear["price"] + " €";

      let select = document.createElement("select")
      select.setAttribute("id", "colors");

      for (let color of bear["colors"]) {    // Creation of the drop down menu to display bear colors

        insertColor(color, select);
      }

      document.querySelector(".product-colors").appendChild(select); //
      select.addEventListener("change", function (e) {
        localStorage.setItem("color", select.value);
      });
    })
  );
};

document.addEventListener("DOMContentLoaded",()=>{

  showCurrentBear();
  let homePageBtn = document.querySelector(".btn_back_to_home"); // Send to home page on click
  addTargetPage(homePageBtn,"index.html");
})

/*********************************************back home button*****************************************************************************/


/*********************************************Add product to kart*************************************************************************/

const passingProductSpecificationsToLS = () => {
  let kartButton = document.getElementById("kart-button");

  kartButton.addEventListener("click", function () { // On click of cart button get item Name, selected color, price to send to LocalStorage

    let selectedItemName = document.querySelector(".productName").textContent;
    localStorage.setItem("selectedItemName", selectedItemName);

    let colorPicked = document.getElementById("colors").value;
    localStorage.setItem("selectedColor", colorPicked);

    let selectedItemPrice = document.querySelector(".product-price")
      .textContent;
    localStorage.setItem("itemPrice", selectedItemPrice);
  });
};
passingProductSpecificationsToLS();

/*********************************************Go to Cart Page******************************************************************************/

let addToCartBtn = document.getElementById("kart-button");
let goToCartPageBtn = document.getElementById("kart-btn");

/***********************************************************Send cart Session & Id to Local Storage****************************************/

const addToCartSessionToLS = () => {
  
  addToCartBtn.addEventListener("click", function () { // on click of cart button get Name, selected color, price and Id of item to local storage 'cartSession'


    let selectedItemName = document.querySelector(".productName").textContent;
    let colorPicked = document.getElementById("colors").value;
    let selectedItemPrice = document.querySelector(".product-price")
      .textContent;

    let selectedItemId = localStorage.getItem("bearclickedID");
    let selectedIteamsIdArray = [];

    let cartSession = [];

    if (localStorage.getItem("cartSession") != null) {
      console.log("Cart session is not null");
      cartSession = JSON.parse(localStorage.getItem("cartSession"));
      selectedIteamsIdArray = JSON.parse(
        localStorage.getItem("selectedIteamsIdArray")
      );
    }

    cartSession.push(
      new kartItem(selectedItemName, colorPicked, selectedItemPrice)
    );
    localStorage.setItem("cartSession", JSON.stringify(cartSession));
    selectedIteamsIdArray.push(selectedItemId);
    localStorage.setItem(
      "selectedIteamsIdArray",
      JSON.stringify(selectedIteamsIdArray)
    );
  });
};

addToCartSessionToLS();

function insertColor(color, select) {
  let option = document.createElement("option");
  option.setAttribute("value", color);
  option.setAttribute("id", "color-chosen");
  option.innerHTML = color;
  select.appendChild(option);
}

addTargetPage(goToCartPageBtn,"cart.html");
