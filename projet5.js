/*****************************************************Retrive Bears Data******************************************/

const allDataBearsRequest = new XMLHttpRequest()

allDataBearsRequest.onreadystatechange = function(){
if(this.readyState == 4 && this.status == 200) {

    let bearsData = JSON.parse(this.responseText)
    //console.log(bearsData[0])
    //console.log(bearsData[0]['colors'])
    getBearsInfo(bearsData)
    //bearsInfo(bearsData)
    //getBearsProduct(bearsData)
    displayBearsName(bearsData)
    
    
  }
}

allDataBearsRequest.open("GET","http://localhost:3000/api/teddies",true)
allDataBearsRequest.send()

/******************************************************Get Bears Name*********************************************/

let getBearsInfo = (bearsData) => {
    
    for (let oursName of bearsData) { console.log('oursName= ' + oursName['name']) }
    for (let oursUrl of bearsData) { console.log('oursUrl= ' + oursUrl['imageUrl']) }
    for (let oursColor of bearsData) { console.log('oursColor= ' + oursColor['colors']) }
    for (let oursPrice of bearsData) { console.log('oursPrice= ' + oursPrice['price']) }
    for (let ours_id of bearsData) { console.log('ours_id= ' + ours_id['_id']) }
    
} 

/****************************************************Get Bears Specifications**************************************/

const bearsSpecification = ['colors','_id','name','price','imageUrl']
const bearsVariable = ['oursName','oursUrl','oursColor','oursPrice','ours_id']

const getBearsSpecification = () => {
    for ( let bearCriteria of bearsSpecification ) {console.log(bearCriteria)}
    
}

//getBearsSpecification()

/*****************************************************Get  All Bears Info******************************************/

//Essai 1:

const bearsInfo = (bearsData) => {

    let getBearsSpecification = () => {
        for ( let bearCriteria of infoID ) {
            for (let oursName of bearsData) { console.log(oursName[bearCriteria]) }
    }
  }
} 


// Essai 2

// let getBearsName = (bearsData,infoID) => {
    
//     for (let oursName of bearsData) {  
//         for ( let bearCriteria of infoID )
        
//         console.log(oursName[bearCriteria])
    
//     }
// } 

/*****************************************************Get Bears Product*******************************************/


let getBearsProduct = (bearsData) => {
    
    for (let ours of bearsData) { 
        
        console.log('oursName= ' + ours['name']) 
        console.log('oursUrl= ' + ours['imageUrl'])
        console.log('oursColor= ' + ours['colors'])
        console.log('oursPrice= ' + ours['price'])
        console.log('ours_id= ' + ours['_id'])
    }
   
} 

/******************************************************Display Bears Names*****************************************/

const displayBearsName = (bearsData) => {

    for (let bearName of bearsData) { 

       console.log(bearName['name'])

       let bearLink = document.createElement('a')
       bearLink.setAttribute('href','product.html')
       bearLink.setAttribute('id',bearName['name'])
       let divLink = document.querySelector('.link').appendChild(bearLink)
       document.getElementById(bearName['name']).innerHTML = bearName['name']
       }
     }
    

