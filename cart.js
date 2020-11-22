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
} else {
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
//}

const displayTotal = () => {
  const elPForTotal = document.createElement("p");
  elPForTotal.setAttribute("id", "grand-total");
  elPForTotal.innerHTML = "Grand Total: " + totalPriceItems + " €";

  let divTotalPrice = document.querySelector(".totalPrice");

  if (totalPriceItems >= 0 || totalPriceItems == undefined) {
    // A voir si la 2em conditions fonctionne!! <-fonction non utiliser, elle est en L57
    divTotalPrice.appendChild(elPForTotal);
  } else {
    elPForTotal.innerHTML = "No item in the cart !! GO AND BUY ONE !!";
    divTotalPrice.appendChild(elPForTotal);
  }
};

displayTotal();

const btnSubmit = document.querySelector("#submit");
btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
});
