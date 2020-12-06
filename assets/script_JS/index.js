/*********************************Display Bears Name on Index Page*********************************************/

const displayBearsNames = (bearsParsedData) => {   
  fetch("http://localhost:3000/api/teddies").then((  // Get bears data from the server with fetch method
    response 
  ) =>
    response
      .json()
      .then(function (bearObjects) {
        for (let singleBearObject of bearObjects) {
          const bearLink = document.createElement("a");
          bearLink.setAttribute("href", "product.html");
          bearLink.setAttribute("id", singleBearObject["name"]);
          bearName = bearLink.innerHTML = singleBearObject["name"];
          const linkDiv = document.querySelector(".link");
          linkDiv.appendChild(bearLink);

          bearLink.addEventListener("click", () => { // Setting bear clicked ID on local storage
            localStorage.setItem("bearclickedID", singleBearObject["_id"]);
          });
        }
      })
      .catch((error) => alert("Internal error: " + error))
  );
};

displayBearsNames();
