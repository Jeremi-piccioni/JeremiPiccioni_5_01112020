/********************************Get Bear Object****************************************************************/

const oursNamesRequest = new XMLHttpRequest()

oursNamesRequest.onreadystatechange = function () {
if(this.readyState == 4 && this.status == 200) {

    let bearDescriptionList = JSON.parse(this.responseText)
    //console.log(bearDescriptionList)
    displayBearsNames(bearDescriptionList)
    
 }
}

oursNamesRequest.open("GET","http://localhost:3000/api/teddies", true)
oursNamesRequest.send()

/*********************************Display Bears Name on Index Page*********************************************/

const displayBearsNames = (bearDescriptionList) => {

for (let bearsObject of bearDescriptionList ) {

    const bearLink = document.createElement('a')
    bearLink.setAttribute('href','product.html')
    bearLink.setAttribute('id',bearsObject['name'])
    bearLink.innerHTML = bearsObject['name']
    const linkDiv = document.querySelector('.link')
    linkDiv.appendChild(bearLink)

    //console.log(bearsObject['name'])

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


