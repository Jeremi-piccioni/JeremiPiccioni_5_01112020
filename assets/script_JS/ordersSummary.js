let localstorageOrder = localStorage.getItem('Valide_Order')

let serverResponse = JSON.parse(localstorageOrder)

let orderId = serverResponse['orderId']  // Get order Id response from server


let DivTotalPrice = document.querySelector('#total_price')
DivTotalPrice.innerText = "Total price: " + localStorage.getItem('Total_price_Order') + " €"

let DivOrder_id = document.querySelector('#order_id')
DivOrder_id.innerText = "Order ID: " + orderId



let btnHomePage = document.querySelector('.btn_back_to_home') // Send to home page on click

btnHomePage.addEventListener('click', () => {

    localStorage.clear()                // clear localStorage before new order and back to home page
//  location.href = "index.html"

})


import { backHomePageButton } from "./sharedFunctions.js"  // problem il manque la fonction clear Local Storage. Comment l'ajouter la backHomePageButton ?
backHomePageButton()