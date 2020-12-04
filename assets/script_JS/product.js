/************************************************Passing Colors to LS**************************************************************************/
const passingColorToLS = () => {

    let colorChosen = document.getElementById('menuColor')
    
    colorChosen.addEventListener('change', function(){
    
           let colorPicked = document.getElementById('menuColor').value 
           localStorage.setItem('color',colorPicked)
    
       }
      )
     } 
       
    /*****************************************Getting Info form local Storage******************************************************************/
    
    const gettingInfoFromLS = () => {
    
        let bearData = JSON.parse(window.localStorage.getItem('bearclicked'))
    
        let bearClikedNameInfoName = bearData['name']
        let bearClikedNameInfoImageUrl = bearData['imageUrl']
        let bearClikedNameInfoDescription = bearData['description']
        let bearClikedNameInfoColors = bearData['colors']
        let bearClikedNameInfoPrice = bearData['price']
        
        const titleBearName = document.querySelector('.productName') // Displaying clicked Bear criterias (Name, Photo, Description,Price)
        titleBearName.innerHTML = bearClikedNameInfoName
    
        const bearPhoto = document.querySelector('.product-pic').src = bearClikedNameInfoImageUrl
    
        const bearDescription = document.querySelector('.product-description')
        bearDescription.innerHTML = bearClikedNameInfoDescription
     
        const bearPrice = document.querySelector('.product-price')
        bearPrice.innerHTML = bearClikedNameInfoPrice + " €"

        const ElSelectMenuColor = document.createElement('select') // end of Displaying the clicked Bear
        ElSelectMenuColor.setAttribute('id','menuColor')
    
        
            for (let bearColor of bearClikedNameInfoColors) {  // Creation of the drop down menu to display bear colors
    
                let EloptionColor = document.createElement('option')
                EloptionColor.setAttribute('value',bearColor)
                EloptionColor.setAttribute('id','color-chosen')
                EloptionColor.innerHTML = bearColor
            
                ElSelectMenuColor.appendChild(EloptionColor)
               
              }
            
            document.querySelector('.product-colors').appendChild(ElSelectMenuColor)  // 
            passingColorToLS()
             }
    
    gettingInfoFromLS()
    
    
    /*********************************************back home button*****************************************************************************/
    
    // const backHomePageButton = () => {
    //     let btn = document.querySelector('.btn_back_to_home')
    //     btn.addEventListener('click', () => {location.href = "index.html"})
    // }
    
    // backHomePageButton()

    import { backHomePageButton } from "./sharedFunctions.js"
    backHomePageButton()

    /*********************************************Add product to kart*************************************************************************/

       
    const passingProductSpecificationsToLS = () => {
    
        let kartButton = document.getElementById('kart-button')
        
        kartButton.addEventListener('click', function(){   // On click of cart button get item Name, selected color, price to send to LocalStorage
        
            let selectedItemName = document.querySelector('.productName').textContent
            localStorage.setItem('selectedItemName',selectedItemName)
    
            let colorPicked = document.getElementById('menuColor').value 
            localStorage.setItem('selectedColor',colorPicked)
    
            let selectedItemPrice = document.querySelector('.product-price').textContent
            localStorage.setItem('itemPrice',selectedItemPrice)

            }
          )
         } 
         passingProductSpecificationsToLS()
    
    /*********************************************Go to Cart Page******************************************************************************/
    
    const goToCartPageButton = () => {
        const btn = document.querySelector('#kart-btn')
        btn.addEventListener('click', () => {location.href = "cart.html"})
    }
    
    goToCartPageButton()
    
    /*************************************Importing the Item Constructor from cartItemConstructor.js********************************************/
    
    import {kartItem} from './cartItemConstructor.js'
   
    /***********************************************************Send cart Session & Id to Local Storage****************************************/
    
     const addToCartSessionToLS = () => {
      
        let kartBtn = document.getElementById('kart-button')
        
        kartBtn.addEventListener('click', function(){ // on click of cart button get Name, selected color, price and Id of item to local storage 'cartSession'
    
          let selectedItemName = document.querySelector('.productName').textContent
          let colorPicked = document.getElementById('menuColor').value 
          let selectedItemPrice = document.querySelector('.product-price').textContent
    
          let selectedItem = JSON.parse(localStorage.getItem('bearclicked'))
          let selectedItemId = selectedItem['_id']
          let selectedIteamsIdArray= []
    
          let cartSession = []
    
            if (localStorage.getItem('cartSession') != null) {
    
            console.log('Cart session is not null')
            cartSession = JSON.parse(localStorage.getItem('cartSession'))
            selectedIteamsIdArray = JSON.parse(localStorage.getItem('selectedIteamsIdArray'))
    
            }
            
            cartSession.push(new kartItem(selectedItemName,colorPicked,selectedItemPrice))
            localStorage.setItem('cartSession',JSON.stringify(cartSession)) 
            selectedIteamsIdArray.push(selectedItemId)
            localStorage.setItem('selectedIteamsIdArray',JSON.stringify(selectedIteamsIdArray)) 
    
        })
     }
    
     addToCartSessionToLS()
    
    
    
    