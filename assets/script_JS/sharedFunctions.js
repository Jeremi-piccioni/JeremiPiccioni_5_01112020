const backHomePageButton = () => {
    const btn = document.querySelector('.btn_back_to_home')
    btn.addEventListener('click', () => {location.href = "index.html"})
  }
  
export {backHomePageButton}

class customerData {   //class to build an object from form valide customer information
  
  constructor(firstName, lastName, address, city, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.city = city;
    this.email = email;
  }
}

export {customerData}



class finalOrder {  // class to build object containing one object with customer data + an array of selected items in the cart
   
  constructor(contact, products) {
    this.contact = contact;
    this.products = products;
  }
}

export{finalOrder}