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

//console.log(localStorage.getItem("cartSession"));

let cart = JSON.parse(localStorage.getItem("cartSession"));
//console.log(cart);

let numberOfItem; // = Object.keys(cart).length
let numberOfObjectInItem; /* compte le nombre d'objets dans le tableau */

if (cart == null || cart == "") {
  document.querySelector(".totalPrice").innerHTML =
    "No Item in the cart yet ! ";
    let divForm = document.querySelector('.form')  // Passe le form en invisible
    //console.log(divForm)
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
      //console.log(i);

      cart.splice(i, 1);
      //console.log(cart);

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
//console.log(totalPriceItems);


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
const townInput = document.querySelector("#town"); 
const zipcodeInput = document.querySelector("#zipcode");
const submitBtn =  document.querySelector("#submit");
const divError = document.querySelector("#error");

submitBtn.addEventListener("click", (e) => {
  
    divError.innerText = ""
    messages = [];

  if (nameInput.value ==="" || nameInput.value <=0 || nameInput.value >=0 || nameInput.value == null) {
      //console.log('pass in nameInput ')
      messages.push("A valide name is required");
  }

  if (forenameInput.value ==="" ||  nameInput.value <=0 || nameInput.value >=0  ||  forenameInput.value == null) {
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

if (townInput.value ==="" || townInput.value <=0 || townInput.value >=0 || townInput.value == null) {
  //console.log('pass in nameInput ')
  messages.push("A valide town is required");
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
                                            townInput.value,
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
  let JSONfinalOrderForDB = JSON.stringify(finalOrderForDB)

});

/**********************XMLHTTPREQUEST POST SEND CART ORDER TO DB DISPLAY RESPONSE TO CUSTOMER**********************/

const sendOrderToDb = new XMLHttpRequest()

sendOrderToDb.onreadystatechange = function () {
if(this.readyState == 4 && this.status == 200) {

    let CommandID = JSON.parse(this.responseText)
    //console.log(CommandID)
    //displayBearsNames(bearDescriptionList)
    
   }
}

sendOrderToDb.open("POST","http://localhost:3000/api/teddies/order", true)

// let orderValidationPost = JSON.stringify(
//     { 
//       contact: {                                                       // <-- Hard coded request !!
//                 firstName:"JEREMI",    
//                 lastName:"PICCIONI",
//                 address :"62 Rue Frédéric Mistral",
//                 city:"Le Havre",
//                 email :"jeremi.piccioni@gmail.com"
//               },

//       products:["5beaacd41c9d440000a57d97","5be9c8541c9d440000665243"]
//   }
// )

//console.log(orderValidationPost)
//console.log(JSON.parse(orderValidationPost))
sendOrderToDb.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
//sendOrderToDb.send(JSONfinalOrderForDB)

sendOrderToDb.onreadystatechange = function() {  //Call a function when the state changes.
      if(sendOrderToDb.readyState == 4 && sendOrderToDb.status == 201) {
          alert(sendOrderToDb.responseText);
      }
  }

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