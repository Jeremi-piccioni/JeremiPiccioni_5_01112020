/************************************************Passing Color to LS**********************************************/
const passingColorToLS = () => {

let colorChosen = document.getElementById('menuColor')

colorChosen.addEventListener('change', function(){

       let colorPicked = document.getElementById('menuColor').value 
       localStorage.setItem('color',colorPicked)
       console.log(colorPicked)

   }
  )
 } 

/*******************************************Adding Color List****************************************************/

//Test: const colorTest = ['red','blue','pink']

// const displayColorPicker = (bearClikedNameInfoColors) => {
    
//     const ElSelectMenuColor = document.createElement('select')
//     ElSelectMenuColor.setAttribute('id','menuColor')

// for (let bearColor of bearClikedNameInfoColors) {

//     let EloptionColor = document.createElement('option')
//     EloptionColor.setAttribute('value','color-chosen')
//     //EloptionColor.addClass('color-chosen')
//     EloptionColor.innerHTML = bearColor

//     //console.log(bearColor)

//     ElSelectMenuColor.appendChild(EloptionColor)
   
//   }

//     document.querySelector('.colors').appendChild(ElSelectMenuColor)
// }


/********************************Displaying the clicked Bear***************************************************/

const displayInfo = (bearClikedNameInfoName,bearClikedNameInfoImageUrl,
                     bearClikedNameInfoDescription,bearClikedNameInfoColors,
                     bearClikedNameInfoPrice) => {

    const titleBearName = document.querySelector('.productName')
    titleBearName.innerHTML = "Item : " + bearClikedNameInfoName

    const bearPhoto = document.querySelector('.product-pic').src = bearClikedNameInfoImageUrl
  //  bearPhoto.setAttribute('scr', bearClikedNameInfoImageUrl)

    const bearDescription = document.querySelector('.product-description')
    bearDescription.innerHTML = "Product description : " + bearClikedNameInfoDescription

    const bearColors = document.querySelector('.product-colors')
   // displayColorPicker(bearColors)
    bearColors.innerHTML = "Color available : " 

    //console.log(bearClikedNameInfoColors)

    const bearPrice = document.querySelector('.product-price')
    bearPrice.innerHTML = "Price : " + bearClikedNameInfoPrice + " €"

    //displayColorPicker(bearClikedNameInfoColors)  
}

displayInfo()

/*****************************************Getting Info form local Storage****************************************/
const gettingInfoFromLS = () => {

    let bearData = JSON.parse(window.localStorage.getItem('bearclicked'))

    let bearClikedNameInfoName = bearData['name']
    let bearClikedNameInfoImageUrl = bearData['imageUrl']
    let bearClikedNameInfoDescription = bearData['description']
    let bearClikedNameInfoColors = bearData['colors']
    let bearClikedNameInfoPrice = bearData['price']

    //displayInfo(bearData)

    displayInfo(bearClikedNameInfoName,bearClikedNameInfoImageUrl,
        bearClikedNameInfoDescription,bearClikedNameInfoColors,
        bearClikedNameInfoPrice)

        const ElSelectMenuColor = document.createElement('select')
        ElSelectMenuColor.setAttribute('id','menuColor')

    
        for (let bearColor of bearClikedNameInfoColors) {

            let EloptionColor = document.createElement('option')
            EloptionColor.setAttribute('value',bearColor)
            EloptionColor.setAttribute('id','color-chosen')
            EloptionColor.innerHTML = bearColor
        
            ElSelectMenuColor.appendChild(EloptionColor)
           
          }
        
        document.querySelector('.product-colors').appendChild(ElSelectMenuColor)
        passingColorToLS()
         }

gettingInfoFromLS()


/*********************************************back home button****************************************************/

const backHomePageButton = () => {
    const btn = document.querySelector('.btn')
    btn.addEventListener('click', () => {location.href = "index.html"})
}

backHomePageButton()

/*********************************************Add product to kart************************************************/

const passingProductSpecificationsToLS = () => {

    let kartButton = document.getElementById('kart-button')
    
    kartButton.addEventListener('click', function(){
    

        let selectedItemName = document.querySelector('.productName').textContent
        localStorage.setItem('selectedItemName',selectedItemName)

        let colorPicked = document.getElementById('menuColor').value 
        localStorage.setItem('selectedColor',colorPicked)

        let selectedItemPrice = document.querySelector('.product-price').textContent
        localStorage.setItem('itemPrice',selectedItemPrice)

        //console.log(colorPicked)
       }
      )
     } 
     passingProductSpecificationsToLS()

    /*********************************************Go to kart button****************************************************/

const goToKartButton = () => {
    const btn = document.querySelector('#kart-btn')
    btn.addEventListener('click', () => {location.href = "kart.html"})
}

goToKartButton()

/*********************************************************Click incremetator***************************************/

class kartItem {

    constructor(name,color,price,quantity){
        this.name = name
        this.color = color
        this.price = price
        this.quantity = quantity

    }
}




// let numberOfClick = 0 //parseInt(localStorage.getItem('ClickNumber',numberOfClick))

 const addToKartClickCounter = () => {
  
    let kartBtn = document.getElementById('kart-button')
    
    kartBtn.addEventListener('click', function(){
      //  numberOfClick= parseInt(localStorage.getItem('ClickNumber',numberOfClick)) 
      //  console.log(localStorage.getItem('cartSession'))

      let selectedItemName = document.querySelector('.productName').textContent
      let colorPicked = document.getElementById('menuColor').value 
      let selectedItemPrice = document.querySelector('.product-price').textContent

      let cartSession = []

        if (localStorage.getItem('cartSession') != null) {

        cartSession = JSON.parse(localStorage.getItem('cartSession'))
        console.log('recup')
        }
        
        cartSession.push(new kartItem(selectedItemName,colorPicked,selectedItemPrice))
        localStorage.setItem('cartSession',JSON.stringify(cartSession)) 



    //     numberOfClick = numberOfClick + 1
    //    // console.log('avant= '+ numberOfClick)
    //     localStorage.setItem('ClickNumber',numberOfClick)
    //     let clickCounter = localStorage.getItem('ClickNumber',numberOfClick)
    //     //clickCounter++
        
    //     localStorage.setItem('ClickNumber',clickCounter)

        //numberOfClick= localStorage.getItem('ClickNumber',numberOfClick)
        //console.log('apres= '+ numberOfClick)

    })
 }

 addToKartClickCounter()

 /**********************************Passing number of click from Product Page to Home Page************************/

//  const passingNumberOfClickToHomePage = () => {

//     let bckToMainPageBtn = document.querySelector('button')
//     bckToMainPageBtn.addEventListener('click',function(){

//         localStorage.getItem('ClickNumer')

//     })

//  }




