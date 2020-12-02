/******************************************************************************Back to home page*******************/
const backHomePageButton = () => {
  const btn = document.querySelector('.btn_back_to_home')
  btn.addEventListener('click', () => {location.href = "index.html"})
}

backHomePageButton()

/*****************************************************************************Back to product page****************/

const backToProductPageButton = () => {
  const btn = document.querySelector('.btn_back_to_product')
  btn.addEventListener('click', () => {location.href = "product.html"})
}

backToProductPageButton()

/***************************************Creating HTML Structur to display items*******************************/

let cart = JSON.parse(localStorage.getItem("cartSession"));

let numberOfItem;            // = Object.keys(cart).length
let numberOfObjectInItem;     

if (cart == null || cart == "") {
  document.querySelector(".totalPrice").innerHTML =
    "No Item in the cart yet ! ";
    let divForm = document.querySelector('.form-style-7')  // set from Div as Invisible if no item in the cart
    divForm.setAttribute('class','invisible')
} 

else {
  numberOfItem = Object.keys(cart).length;                // count the number of item in the cart
  numberOfObjectInItem = Object.keys(cart[0]).length;     // count the number of value in the array
}

const arrayCriteria = ["name", "color", "price"];

const divToDisplayEachItem = () => {
  for (let i = 0; i < numberOfItem; i++) {
    let itemDiv = document.createElement("div");
    itemDiv.setAttribute("id", "item-number" + (i + 1));
    let allItemsDiv = document.querySelector(".All-items").appendChild(itemDiv);

    let cancelButton = document.createElement("button");
    cancelButton.setAttribute("id", "cancel_button" + (i + 1));
    cancelButton.setAttribute("class","cancel_btn")
    cancelButton.innerHTML = "clear article nº" + (i + 1) + " form cart";
    document.querySelector(".All-items").appendChild(cancelButton);

    cancelButton.addEventListener("click", () => {
  
    cart.splice(i, 1);
      //console.log(cart);

    localStorage.setItem("cartSession", JSON.stringify(cart));
    cart = localStorage.getItem("cartSession");

    allItemsDiv.removeChild;
    location.reload();

    });

    for (let j = 0; j < numberOfObjectInItem; j++) {

      let elH2 = document.createElement("h2");   
      elH2.setAttribute("class", "attribut-number-title" + j);
      elH2.innerHTML = arrayCriteria[j] + ": ";   // arrayCriteria[j].charAt(0).toUpperCase() + arrayCriteria[j].slice(1) + ": "
      itemDiv.appendChild(elH2);                  // Set title of item properties in a H2 element
      
      let elP = document.createElement("p");     
      elP.setAttribute("class", "attribut-number" + j);
      itemDiv.appendChild(elP);                   
      let criteria = arrayCriteria[j];
      elP.innerHTML = cart[i][criteria];          // Set the selected item properties in a <p> under the H2 element

    }
  }
};

divToDisplayEachItem();

/**************************************************Get Prices to calculate total***************************************************************/
let pricesArray = [];

const getPrices = () => {
  for (let i = 0; i < numberOfItem; i++) {
    let pPrice = document.getElementsByClassName("attribut-number2");   
    let textPrice = pPrice[i].textContent;                             // get price string from HTLM page

    let price = Number(textPrice.replace(/[^\d]/g, ""));               // remove € sign and convert string to number

    pricesArray.push(price);                                           // push all prices of items in cart to variable pricesArray as an array 
  }
};
getPrices();

/**************************************************Calculate and display total price of all items in the cart*********************************/

const displayTotal = () => {

  if (cart == null || cart == "") {return}

  let totalPriceItems = pricesArray.reduce(function(accumulator,currentValue ) {return accumulator + currentValue})

  const elPForTotal = document.createElement("p");
  elPForTotal.setAttribute("id", "grand-total");
  elPForTotal.innerHTML = "Grand Total: " + totalPriceItems + " €";

  console.log("pass in displayTotal fonction")
  console.log(totalPriceItems)


  let divTotalPrice = document.querySelector(".totalPrice");

  if (totalPriceItems >= 0 ) {
    divTotalPrice.appendChild(elPForTotal);
    localStorage.setItem('Total_price_Order',totalPriceItems)
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
const cityInput = document.querySelector("#city"); 
const zipcodeInput = document.querySelector("#zipcode");
const submitBtn =  document.querySelector("#submit");
const divError = document.querySelector("#error");

let JSONfinalOrderForDB

submitBtn.addEventListener("click", (e) => {
  
    e.preventDefault()
    divError.innerText = ""
    let messages = [];

  if (nameInput.value ==="" || nameInput.value <=0 || nameInput.value >=0 || nameInput.value == null) {
      //console.log('pass in nameInput ')
      messages.push("A valide name is required");
  }

  if (forenameInput.value ==="" ||  forenameInput.value <=0 || forenameInput.value >=0  ||  forenameInput.value == null) {
      //console.log('pass in forenameInput')
      messages.push("A valide forename is required");
}

  if (emailInput.value ==="" ||  emailInput.value == null || emailInput.value.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/) ==null ) {
     // console.log('pass in emailInput')
      messages.push("A valide email is required");   
}

if (phoneInput.value ===""  ||
    isNaN(phoneInput.value) ||  
    phoneInput.value == null||
    phoneInput.value.toString().length != 10 ) {        
    //console.log('pass in phoneInput')
    messages.push("A valide phone number is required");
}

if (addressInput.value.match(/^\d+\s[A-z]+\s[A-z]+/) == null) {
    //console.log('pass in addressInput')
    messages.push("A valide address is required");
}

if (cityInput.value ==="" || cityInput.value <=0 || cityInput.value >=0 || cityInput.value == null) {
  //console.log('pass in nameInput ')
  messages.push("A valide city is required");
}

if (zipcodeInput.value ==="" 
    || isNaN(zipcodeInput.value) 
    || zipcodeInput.value == null 
    || zipcodeInput.value.toString().length != 5  ) { 
    //console.log('pass in zipcodeInput')
    messages.push("A valide zipcode is required");
}

  if(messages.length > 0) {
    e.preventDefault()
    divError.innerText = messages.join(" / ")
    return
  }

  class customerData {
    constructor(firstName,lastName,address,city,email)  {
        this.firstName = firstName
        this.lastName = lastName
        this.address = address
        this.city = city
        this.email = email
     }
  }

  let customerDataObject = new customerData(forenameInput.value,
                                            nameInput.value,
                                            addressInput.value,
                                            cityInput.value,
                                            emailInput.value,
                                           )

  class finalOrder {
    constructor(contact,products) {
      this.contact = contact
      this.products = products
    }
  }

  let productsArray = JSON.parse(localStorage.getItem('selectedIteamsIdArray'))
  //console.log(productsArray)

  let finalOrderForDB = new finalOrder (customerDataObject,productsArray )
  console.log(finalOrderForDB)
  JSONfinalOrderForDB = JSON.stringify(finalOrderForDB)
  console.log(JSONfinalOrderForDB)

  const sendOrderToDb = new XMLHttpRequest()

  sendOrderToDb.onreadystatechange = function () {
    if(this.readyState == 4 && this.status == 200) {

    let CommandID = JSON.parse(this.responseText)
    
   }
}

sendOrderToDb.open("POST","http://localhost:3000/api/teddies/order", true)

//console.log(JSONfinalOrderForDB)

sendOrderToDb.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
sendOrderToDb.send(JSONfinalOrderForDB)
//sendOrderToDb.send(orderValidationPost)

sendOrderToDb.onreadystatechange = function() {  //Call a function when the state changes.
      if(sendOrderToDb.readyState == 4 && sendOrderToDb.status == 201) {
          
          localStorage.setItem('Valide_Order',(sendOrderToDb.responseText))
          location.href = "ordersSummary.html"
          //alert(sendOrderToDb.responseText)
      }
  }

});

//auto expand textarea
function adjust_textarea(h) {
  h.style.height = "20px";
  h.style.height = (h.scrollHeight)+"px";
}

/**********************XMLHTTPREQUEST POST SEND CART ORDER TO DB DISPLAY RESPONSE TO CUSTOMER**********************/

// const sendOrderToDb = new XMLHttpRequest()

// sendOrderToDb.onreadystatechange = function () {
// if(this.readyState == 4 && this.status == 200) {

//     let CommandID = JSON.parse(this.responseText)
    
//    }
// }

// sendOrderToDb.open("POST","http://localhost:3000/api/teddies/order", true)

// // let orderValidationPost = JSON.stringify(
// //     { 
// //       contact: {                                                       // <-- Hard coded request !!
// //                 firstName:"JEREMI_XXXXXXXX",    
// //                 lastName:"XXXXXX_PICCIONI",
// //                 address :"62 Rue Frédéric Mistral",
// //                 city:"Le Havre",
// //                 email :"jeremi.piccioni@gmail.com"
// //               },

// //       products:["5beaacd41c9d440000a57d97","5be9c8541c9d440000665243"]
// //   }
// // )

// console.log(orderValidationPost)
// console.log(JSONfinalOrderForDB)
// //console.log(JSON.parse(orderValidationPost))
// sendOrderToDb.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
// sendOrderToDb.send(orderValidationPost)
// //sendOrderToDb.send(orderValidationPost)

// sendOrderToDb.onreadystatechange = function() {  //Call a function when the state changes.
//       if(sendOrderToDb.readyState == 4 && sendOrderToDb.status == 201) {
//           alert(sendOrderToDb.responseText);
//       }
//   }

/**************************************************MAKING THE CUSTOMER DATA JSON**********************************/

// const makingCustomerDataJSON = () => {

// class customerData {
//   constructor(forename,name,address,town,email)  {
//       this.forename = forename
//       this.name = name
//       this.address = address
//       this.town = town
//       this.email = email
//   }
// }


// let customerDataObject = new customerData(forenameInput.value,
//                                           nameInput.value,
//                                           addressInput.value,
//                                           townInput.value,
//                                           emailInput.value)

// // // let JSONformatedCustomerData = JSON.parse(customerDataObject)

// }