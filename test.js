   /* 
   
   const btn = document.querySelector('button');
   const text = document.querySelector('.text');

   btn.addEventListener('click', () => {
       text.classList.toggle('is-visible');
   });



   let data = document.getElementById("return_Teddy_API");
   console.log("return_Teddy_API= " + data);

   */

// const e = require("express");


  //code Mentor

  
/*
   let xhr = new XMLHttpRequest();

   xhr.onreadystatechange = function() {
       if (this.readyState == 4 && this.status == 200) {
           let reponse = JSON.parse(this.responseText)
        
           console.log(reponse);

           reponse.map( (ours) => {

              let a = document.createElement('a');
              a.href = 'https:www.youtube.com/watch?v=dI-T7YcSpiY&t=27s';
              a.innerHTML = ours.name;
              document.getElementById("main").appendChild(a);

                 }
             )    
          } 
   }
 
   xhr.open("GET", "http://localhost:3000/api/teddies", true);
   xhr.send();

  // fin code mentor. */


 //Mon code :


/*
  let teddyHTMLRequest = new XMLHttpRequest();

 teddyHTMLRequest.onreadystatechange = function() {
     if (this.readyState == 4 && this.status == 200) {

         let dataOurs = JSON.parse(this.responseText);
         console.log(dataOurs[0].imageUrl);

         displayImgTeddy(dataOurs);

         let listOurs = document.createElement('ul');
         dataOurs.map( our,listOurs => {
                
            let elOurs = '<li>' + our.name + '</li>'
            listOurs.innerHTML = '<ul>' + elOurs + '</ul>';

            listOurs.style.listStyleType = "none";  
            listOurs.style.lineHeight = "5px";  

         document.getElementById('main').appendChild(listOurs);

         }
     );

            


        }
      } 

    teddyHTMLRequest.open("GET", "http://localhost:3000/api/teddies", true);
    teddyHTMLRequest.send();

    */

   /*
    let p = document.createElement('p');
    p.innerHTML = 'I got the feeling Baby !!'
    let div = document.getElementById('main').appendChild(p);

    */
   
    /*
    function displayImgTeddy(dataOurs) {

     let divPicture = document.createElement('div');
     divPicture.setAttribute("id","picture");

     
     divPicture.style.width = "250px";
     divPicture.style.height = "250px";
     divPicture.style.backgroundColor = "red";

     document.getElementById('main').appendChild(divPicture);
   
     let Img = document.createElement('img');
     Img.setAttribute("src",dataOurs[0].imageUrl); // <- remplacer le chemin de la photo du Teddy en dur par sa requete html
     Img.style.width ="200px"; 
     document.getElementById("picture").appendChild(Img);

    } */



/*
   let xhr = new XMLHttpRequest();

   xhr.onreadystatechange = function() {
       if (this.readyState == 4 && this.status == 200) {
           let reponse = JSON.parse(this.responseText)
        
           console.log(reponse);

           reponse.map( (ours) => {

              let a = document.createElement('a');
              a.href = 'https:www.youtube.com/watch?v=dI-T7YcSpiY&t=27s';
              a.innerHTML = ours.name;
              document.getElementById("main").appendChild(a);

                 }
             )    
          } 
   }
 
   xhr.open("GET", "http://localhost:3000/api/teddies", true);
   xhr.send();

*/
   

/*

let NewDiv = document.createElement('div');
NewDiv.setAttribute('id','photoDiv');

document.getElementById('main').appendChild(NewDiv);
NewDiv.innerHTML = "It's going to work baby !!";

//let PhotoStyle = document.getElementById('photoDiv')
NewDiv.style.width = "200px";
NewDiv.style.height = "200px";
NewDiv.style.backgroundColor = "red";

document.getElementById('main').appendChild(NewDiv); 

*/

  /*
   document.createElement('ul').setAttribute('id','Ours-ul');

   const ListOurs = OursName.map( our => '<li>' + our + '</li>').join('');
   // const HtmlList = '<ul>' + ListOurs.join('') + '</ul>';
   
   document.getElementById('Ours-ul').innerHTML = ListOurs
   document.getElementById('main').appendChild()
   
   console.log(ListOurs) 
   */

const OursName = ["Teddy","Nounours","SuperTed","Bouba"];

for(let listeOurs of OursName){
    const nounoursLink = document.createElement('a');
    nounoursLink.setAttribute('href','http://127.0.0.1:5500/product.html'); 
    document.querySelector('.link').appendChild(nounoursLink)
    nounoursLink.innerHTML = listeOurs
    nounoursLink.style.display = 'block'
    nounoursLink.addEventListener('click',  function() {  
        
        let linkClickedValue = nounoursLink.textContent
        console.log(linkClickedValue)
        localStorage.setItem('oursName',linkClickedValue)

    }  
  )   
}







     




  


