/*****************************************************************************************************************/

let displayData = () => {

    
    let bearName = localStorage.getItem('selectedItemName')
    let h2ItemName = document.createElement('h2')
    h2ItemName.innerHTML = bearName
    document.querySelector('section').appendChild(h2ItemName)

    let bearColor = localStorage.getItem('selectedColor')
    let h3ItemColor = document.createElement('h3')
    h3ItemColor.innerHTML = bearColor
    document.querySelector('section').appendChild(h3ItemColor)

    let bearPrice = localStorage.getItem('itemPrice')
    let h4ItemPrice = document.createElement('h4')
    h4ItemPrice.innerHTML = bearPrice
    document.querySelector('section').appendChild(h4ItemPrice) 
}

// displayData()


// const itemAttributs = (item)=> {

//     for (let attribut of item ) {  

//         console.log(attribut['name'])
//         console.log(attribut['color'])
//         console.log(attribut['price'])
//   }
// }

/***************************************Creating HTML Structur to display items*******************************/

let cart = JSON.parse(localStorage.getItem('cartSession'))
console.log(cart)
let numberOfItem = Object.keys(cart).length


// let numberOfItem = () => {            /* compte le nombre d'objets dans le tableau */
//     if(cart ==null){return}
//     else{Object.keys(cart).length}
// }  


let numberOfObjectInItem = Object.keys(cart[0]).length 

// let numberOfObjectInItem = () => {            /* compte le nombre d'element par item */
//     if(cart ===null){return}
//     else{Object.keys(cart[0]).length}
// }  

//console.log(Object.keys(cart[0]).length)


const arrayCriteria = ['name','color','price']
//console.log(criteria[0])

const divToDisplayEachItem = () => {

    for ( let i=0; i < numberOfItem; i++) {  

        let itemDiv = document.createElement('div')
        itemDiv.setAttribute('id', 'item-number' + (i+1))
        document.querySelector('.All-items').appendChild(itemDiv)

        for ( let j=0; j < numberOfObjectInItem; j++) {  

            let elP = document.createElement('p')
            elP.setAttribute('class', 'attribut-number' + (j))
            itemDiv.appendChild(elP)
            let criteria = arrayCriteria[j]
            elP.innerHTML = cart[i][criteria]
           
            }
        }
    }
 
    divToDisplayEachItem()

//getPrices(i)

// const arrayPop = [1,2,3,4,5]
// let arraypipe = arrayPop.map(x => x+1)
// console.log(arraypipe)

/********************************************Array Additioner***************************************************/
// const additioner = (accumulator, currentValue ) => accumulator + currentValue
// let totalPriceItems = pricesArray.reduce(additioner)
// console.log(totalPriceItems)


/*************************************Diplay Total Cart Or NO ITEM YET IN CART************************************/

// const displayTotal = (totalPriceItems) => {

//     const elPForTotal= document.createElement('p')
//     elPForTotal.setAttribute('id','grand-total')
//     elPForTotal.innerHTML = totalPriceItems + " €"
//     document.querySelector('.totalPrice').appendChild(elPForTotal)

// }

/**************************************************Get Prices to calculate total********************************/
let pricesArray= []

const getPrices = () => {

for (i=0; i<numberOfItem; i++) {
    
    let pPrice = document.getElementsByClassName('attribut-number2')
    let textPrice = pPrice[i].textContent
    //console.log('textPrice =' + textPrice)

    let price = Number(textPrice.replace(/[^\d]/g, ""))
   // console.log('price= ' + price)
    
    pricesArray.push(price)
   // console.log(pricesArray)

    }

  //  localStorage.setItem('totalPriceItemsInCart:',totalPriceItems)  
  // displayTotal(totalPriceItems)

}

getPrices()

const additioner = (accumulator, currentValue ) => accumulator + currentValue
let totalPriceItems = pricesArray.reduce(additioner)
console.log(totalPriceItems)


const displayTotal = () => {

    const elPForTotal= document.createElement('p')
    elPForTotal.setAttribute('id','grand-total')
    elPForTotal.innerHTML = "Grand Total: " + totalPriceItems + " €" 
    
    let divTotalPrice = document.querySelector('.totalPrice')
    
    if(totalPriceItems>0) {
        divTotalPrice.appendChild(elPForTotal)
    }

    else{
        elPForTotal.innerHTML = "No item in the cart !! GO AND BUY ONE !!"
        divTotalPrice.appendChild(elPForTotal)
    }
}

displayTotal()

//dispayTotal(totalPriceItems)










