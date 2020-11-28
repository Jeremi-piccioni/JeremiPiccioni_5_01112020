let localstorageOrder = localStorage.getItem('Valide_Order')

//console.log(JSON.parse(localstorageOrder)) 
let serverResponse = JSON.parse(localstorageOrder)

let orderId = serverResponse['orderId']


let DivTotalPrice = document.querySelector('#total_price')
DivTotalPrice.innerText = "Total price: " + localStorage.getItem('Total_price_Order') + " €"

let DivOrder_id = document.querySelector('#order_id')
DivOrder_id.innerText = "Order ID: " + orderId

let elA = document.querySelector('#back_to_main_page')
elA.addEventListener('click', () => {localStorage.clear()})



