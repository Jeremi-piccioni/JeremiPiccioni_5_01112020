const divError = document.querySelector("#error");
const nameInput = document.querySelector("#nameInput");
const passwordInput = document.querySelector("#passwordInput");
const submitBtn =  document.querySelector("#why-not");

submitBtn.addEventListener("click", (e) => {
  
    divError.innerText = ""
    messages = [];

  if (nameInput.value ==="" || typeof(nameInput.value) === "number" ||  nameInput.value == null) {
      //  console.log('pouete1!!')
        messages.push("A valide name is required");
  }

  if (passwordInput.value ==="" ||  nameInput.value == null) {
    //  console.log('pouete2!!')
      messages.push("A password is required");   
}

  if(messages.length > 0) {
    e.preventDefault()
    divError.innerText = messages.join('  /  ')
    return
  }

  location.href = "ordersSummary.html"
});
