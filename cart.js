/*****************************************************************************************************************/
let displayData = () => {
  let bearName = localStorage.getItem("selectedItemName");
  let h2ItemName = document.createElement("h2");
  h2ItemName.innerHTML = bearName;
  document.querySelector("section").appendChild(h2ItemName);

  let bearColor = localStorage.getItem("selectedColor");
  let h3ItemColor = document.createElement("h3");
  h3ItemColor.innerHTML = bearColor;
  document.querySelector("section").appendChild(h3ItemColor);

  let bearPrice = localStorage.getItem("itemPrice");
  let h4ItemPrice = document.createElement("h4");
  h4ItemPrice.innerHTML = bearPrice;
  document.querySelector("section").appendChild(h4ItemPrice);
};

/***************************************Creating HTML Structur to display items*******************************/

console.log(localStorage.getItem("cartSession"));

let cart = JSON.parse(localStorage.getItem("cartSession"));
console.log(cart);

let numberOfItem; // = Object.keys(cart).length
let numberOfObjectInItem; /* compte le nombre d'objets dans le tableau */

if (cart == null || cart == "") {
  document.querySelector(".totalPrice").innerHTML =
    "No Item in the cart yet ! ";
    let divForm = document.querySelector('.form')  // Passe le form en invisible
    console.log(divForm)
    divForm.setAttribute('class','invisible')
} 

else {
  numberOfItem = Object.keys(cart).length;
  numberOfObjectInItem = Object.keys(cart[0]).length;
}

const arrayCriteria = ["name", "color", "price"];
//console.log(criteria[0])

const divToDisplayEachItem = () => {
  for (let i = 0; i < numberOfItem; i++) {
    let itemDiv = document.createElement("div");
    itemDiv.setAttribute("id", "item-number" + (i + 1));
    let allItemsDiv = document.querySelector(".All-items").appendChild(itemDiv);

    let cancelButton = document.createElement("button");
    cancelButton.setAttribute("id", "cancel_button" + (i + 1));
    cancelButton.innerHTML = "clear article nº" + (i + 1) + " form cart";
    document.querySelector(".All-items").appendChild(cancelButton);

    cancelButton.addEventListener("click", () => {
      console.log(i);

      cart.splice(i, 1);
      console.log(cart);

      localStorage.setItem("cartSession", JSON.stringify(cart));
      cart = localStorage.getItem("cartSession");

      allItemsDiv.removeChild;
      location.reload();

    });

    for (let j = 0; j < numberOfObjectInItem; j++) {
      let elP = document.createElement("p");
      elP.setAttribute("class", "attribut-number" + j);
      itemDiv.appendChild(elP);
      let criteria = arrayCriteria[j];
      elP.innerHTML = cart[i][criteria];
    }
  }
};

divToDisplayEachItem();

/**************************************************Get Prices to calculate total********************************/
let pricesArray = [];

const getPrices = () => {
  for (i = 0; i < numberOfItem; i++) {
    let pPrice = document.getElementsByClassName("attribut-number2");
    let textPrice = pPrice[i].textContent;
    //console.log('textPrice =' + textPrice)

    let price = Number(textPrice.replace(/[^\d]/g, ""));
    // console.log('price= ' + price)

    pricesArray.push(price);
    // console.log(pricesArray)
  }
};

getPrices();

const additioner = (accumulator, currentValue) => 
  // if (currentValue =="") {return}
  // else{
accumulator + currentValue;
let totalPriceItems = pricesArray.reduce(additioner);
console.log(totalPriceItems);


const displayTotal = () => {
  const elPForTotal = document.createElement("p");
  elPForTotal.setAttribute("id", "grand-total");
  elPForTotal.innerHTML = "Grand Total: " + totalPriceItems + " €";

  let divTotalPrice = document.querySelector(".totalPrice");

  if (totalPriceItems >= 0 ) {
    divTotalPrice.appendChild(elPForTotal);
  } 
  
  else {

    elPForTotal.innerHTML = "No item in the cart !! GO AND BUY ONE !!";
    divTotalPrice.appendChild(elPForTotal);

  }
};

displayTotal();

// const btnSubmit = document.querySelector("#submit");
// btnSubmit.addEventListener("click", (e) => {
//   e.preventDefault();
// });

/*************************************************Validate order & Go to Orders Summary************************************************/

const nameInput = document.querySelector("#name");
const forenameInput = document.querySelector("#forename"); 
const emailInput = document.querySelector("#email"); 
const phoneInput = document.querySelector("#phone"); 
const addressInput = document.querySelector("#address"); 
const zipcodeInput = document.querySelector("#zipcode");
const submitBtn =  document.querySelector("#submit");
const divError = document.querySelector("#error");

submitBtn.addEventListener("click", (e) => {
  
    divError.innerText = ""
    messages = [];

  // console.log( typeof(parseInt(nameInput.value) ))  
  // console.log(parseInt(nameInput.value)+1)
  // console.log(nameInput.value)  
  // parseInt ????? 
  // Number() ?????

  // console.log(zipcodeInput.value.toString().length)  
  // console.log(zipcodeInput.value)

  if (nameInput.value ==="" || nameInput.value <=0 || nameInput.value >=0 || nameInput.value == null) {
        console.log('pass in nameInput ')
        messages.push("A valide name is required");
  }

  if (forenameInput.value ==="" ||  nameInput.value <=0 || nameInput.value >=0  ||  forenameInput.value == null) {
      console.log('pass in forenameInput')
      messages.push("A valide forename is required");
}

  if (emailInput.value ==="" ||  emailInput.value == null || emailInput.value.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/) ==null ) {
      console.log('pass in emailInput')
      messages.push("A valide email is required");   
}

if (phoneInput.value ==="" ||
    isNaN(phoneInput.value) ||  
    phoneInput.value == null  ||
    phoneInput.value.toString().length != 10 ) {  // a verifier à voir si ca fait l'affaire...
    console.log('pass in phoneInput')
    messages.push("A valide phone number is required");
}

if (addressInput.value ==="" 
    ||  nameInput.value <=0 || nameInput.value >=0 // pas assez fiable
    ||  addressInput.value == null ) {
    console.log('pass in addressInput')
    messages.push("A valide address is required");
}

if (zipcodeInput.value ==="" 
    || isNaN(zipcodeInput.value) 
    || zipcodeInput.value == null 
    || zipcodeInput.value.toString().length != 5  ) { // pas assez fiable
    console.log('pass in zipcodeInput')
    messages.push("A valide zipcode is required");
}

  if(messages.length > 0) {
    e.preventDefault()
    divError.innerText = messages.join(" / ")
    return
  }
  location.href = "ordersSummary.html"
});




