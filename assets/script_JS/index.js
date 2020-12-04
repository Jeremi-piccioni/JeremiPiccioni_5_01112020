/*********************************Display Bears Name on Index Page*********************************************/

const displayBearsNames = (bearsParsedData) => {

  fetch("http://localhost:3000/api/teddies").then((response) =>   // Get bears data from the server with fetch method
  response.json().then(function (bearObjects)  {

    for (let singleBearObject of bearObjects) {
      const bearLink = document.createElement("a");
      bearLink.setAttribute("href", "product.html");
      bearLink.setAttribute("id", singleBearObject["name"]);
      bearLink.innerHTML = singleBearObject["name"];
      const linkDiv = document.querySelector(".link");
      linkDiv.appendChild(bearLink);
  
      bearsDescriptionToLS(singleBearObject, bearLink);
      }
   }).catch(error => alert("Server can not be reach for the moment: "+ error) )
  );
};

displayBearsNames()

/********************************Passing object to local storage**********************************************/

const bearsDescriptionToLS = (singleBearObject, bearLink) => {
  bearLink.addEventListener("click", () => {
    console.log(JSON.stringify(singleBearObject));

    localStorage.setItem("bearclicked", JSON.stringify(singleBearObject));
  });
};
