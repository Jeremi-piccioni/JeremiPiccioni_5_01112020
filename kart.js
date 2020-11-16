//const { stringify } = require("uuid")

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


const itemAttributs = (item)=> {

    for (let attribut of item ) {  

        console.log(attribut['name'])
        console.log(attribut['color'])
        console.log(attribut['price'])
  }
}



/***************************************Creating HTML Structur to display items*******************************/
let cart = JSON.parse(localStorage.getItem('cartSession'))

let numberOfItem = Object.keys(cart).length /* compte le nombre d'objets dans le tableau */ 
console.log(Object.keys(cart).length)

let numberOfObjectInItem = Object.keys(cart[0]).length /* compte le nombre d'element par item */
console.log(Object.keys(cart[0]).length)


const arryCriteria = ['name','color','price']
//console.log(criteria[0])

const divToDisplayEachItem = () => {

    for ( let i=0; i < numberOfItem; i++) {  

        let itemDiv = document.createElement('div')
        itemDiv.setAttribute('id', 'item-number' + (i+1))
        document.querySelector('.All-items').appendChild(itemDiv)

        for ( let j=0; j < numberOfObjectInItem; j++) {  

            let elP = document.createElement('p')
            elP.setAttribute('id', 'attribut-number' + (j))
            itemDiv.appendChild(elP)
            let criteria = arryCriteria[j]
            elP.innerHTML = cart[i][criteria]
           
            }
        }
    }
 
    divToDisplayEachItem()


     
     // bearAttributs()


// const bearAttributs = () =>{
//     for (let attribut of cart ) {  

//         console.log(attribut['name'])
//         console.log(attribut['color'])
//         console.log(attribut['price'])

//         const pForAttribut = document.createElement('p')
//         pForAttribut.setAttribute('class','')

//     }
// }
// bearAttributs()









