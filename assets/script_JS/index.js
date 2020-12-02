/********************************Get Bears data from server******************************************************/

const bearsData = new XMLHttpRequest()

bearsData.onreadystatechange = function () {
if(this.readyState == 4 && this.status == 200) {

    let bearsParsedData = JSON.parse(this.responseText)

    displayBearsNames(bearsParsedData)
    
   }
}

bearsData.open("GET","http://localhost:3000/api/teddies", true)
bearsData.send()

/*********************************Display Bears Name on Index Page*********************************************/

const displayBearsNames = (bearsParsedData) => {

for (let bearsObject of bearsParsedData ) {

    const bearLink = document.createElement('a')
    bearLink.setAttribute('href','product.html')
    bearLink.setAttribute('id',bearsObject['name'])
    bearLink.innerHTML = bearsObject['name']
    const linkDiv = document.querySelector('.link')
    linkDiv.appendChild(bearLink)

    bearsDescriptionToLS(bearsObject,bearLink)

  }
}

/********************************Passing object to local storage**********************************************/

const bearsDescriptionToLS = (bearsObject,bearLink) => {

    bearLink.addEventListener('click',()=>{

        console.log(JSON.stringify(bearsObject))

        localStorage.setItem('bearclicked', JSON.stringify(bearsObject) )
      }
    )
  }


