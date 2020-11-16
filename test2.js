let listOurs
let listCameras
let listMeubles
//*******************************Creation liste ours************************************************************* */

function loadData(url,callBack){

const oursNamesRequest = new XMLHttpRequest();
oursNamesRequest.onreadystatechange = function () {
if(this.readyState == 4 && this.status == 200) {

    let listItems = JSON.parse(this.responseText);
    //console.log("OursNamesList = " + listItems)
    callBack(listItems)
    }
}

oursNamesRequest.open("GET", url, true);
oursNamesRequest.send();   // fin de la requete http de récupération des data des ours

}


 loadData("http://localhost:3000/api/teddies",createNounours);
 loadData("http://localhost:3000/api/cameras",createCameras);
 loadData("http://localhost:3000/api/furniture",createMeuble);


  function createNounours(listItems) {

    const elULOurs = document.createElement('ul');
         elULOurs.setAttribute('id','ListeDesOurs');
  
   document.getElementById('main').appendChild(elULOurs);

   const ListNameOurs = listItems.map( ours => '<li><a  href="' + ours.imageUrl +'">'+ ours.name +'</a> </li>');
   elULOurs.innerHTML = ListNameOurs.join('');

   listItems.forEach( item => {
       console.log(item.name)

       const nounoursLink = document.createElement('a');
       nounoursLink.setAttribute('href','http://127.0.0.1:5500/product.html'); 
       document.querySelector('.link').appendChild(nounoursLink)
       nounoursLink.innerHTML = item.name
       nounoursLink.style.display = 'block'
       
       nounoursLink.addEventListener('click',  function() {  
           
           let linkClickedValue = nounoursLink.textContent
           console.log(linkClickedValue)
           localStorage.setItem('ours',item)
           
      }  
    )
   }); 
}
/************************Creation liste CAMERAS******************************************************************/

            

//console.log(cameraRequest);

function createCameras(listCameras) {
    const elULCameras = document.createElement('ul');
          elULCameras.setAttribute('id','ListeDesCameras');

    document.getElementById('main').appendChild(elULCameras);
    const ListNameCameras = listCameras.map( camera => '<li><a href="' + camera.imageUrl +'">'+ camera.name +'</a> </li>');
    elULCameras.innerHTML = ListNameCameras.join('');
  
 }

 /************************Creation liste MEUBLE******************************************************************/

function createMeuble(listMeubles) {
    const elULMeubles = document.createElement('ul');
          elULMeubles.setAttribute('id','ListeDesMeubles');
  
    document.getElementById('main').appendChild(elULMeubles);
    const ListNameMeubles = listMeubles.map( meuble => '<li><a href="' + meuble.imageUrl +'">'+ meuble.name +'</a> </li>');

    elULMeubles.innerHTML = ListNameMeubles.join('');
 }

 /*******************************************************Stockage en local storage de la valeur du lien cliqué*************************************/
// const OursName = ["Teddy","Nounours","SuperTed","Bouba"];

// for(let listeOurs of OursName){
//     const nounoursLink = document.createElement('a');
//     nounoursLink.setAttribute('href','http://127.0.0.1:5500/product.html'); 
//     document.querySelector('.link').appendChild(nounoursLink)
//     nounoursLink.innerHTML = listeOurs
//     nounoursLink.style.display = 'block'
//     console.log(listOurs)
//     nounoursLink.addEventListener('click',  function() {  
        
//         let linkClickedValue = nounoursLink.textContent
//         console.log(linkClickedValue)
//         localStorage.setItem('oursName',linkClickedValue)
        
//     }  
//   )   
// }

 /*******************************************************Affichage les listes d'articles***********************************************************/

const dropDownSelectElement = document.querySelector('#dropDownList')

dropDownSelectElement.addEventListener('change', () => 

    {

    let dropDownValue = document.getElementById('dropDownList').value;
    console.log(dropDownValue);

    let listT = document.querySelector("#ListeDesOurs");
    let listC = document.querySelector("#ListeDesCameras");
    let listM = document.querySelector("#ListeDesMeubles");

    listT.setAttribute('class','invisible');
    listC.setAttribute('class','invisible');   
    listM.setAttribute('class','invisible');

    if(dropDownValue === "All") {
        listT.removeAttribute('class','invisible');
        listC.removeAttribute('class','invisible');
        listM.removeAttribute('class','invisible');
        
          } 

    if(dropDownValue === "Teddies") {
       listT.removeAttribute('class','invisible');
       listC.removeAttribute('class','invisible');
       listM.removeAttribute('class','invisible');

       listC.setAttribute('class','invisible');   
       listM.setAttribute('class','invisible');
       
         } 
    
    if(dropDownValue === "Cameras") {
        listT.removeAttribute('class','invisible');
        listC.removeAttribute('class','invisible');
        listM.removeAttribute('class','invisible');

        listT.setAttribute('class','invisible');
        listM.setAttribute('class','invisible');
          } 
    
    if(dropDownValue === "Meubles") {
        listT.removeAttribute('class','invisible');
        listC.removeAttribute('class','invisible');
        listM.removeAttribute('class','invisible');
    
        listT.setAttribute('class','invisible');
        listC.setAttribute('class','invisible');
              } 
     } 
  )






 