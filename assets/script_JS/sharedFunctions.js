/*************************************************************function to display the home page**************************************/
const addTargetPage = (btn,page) => {
  btn.addEventListener("click", () => {
    location.href = page;
  });
};

/********************************class to build an object from form valide customer information**************************************/
class customerData {
  constructor(firstName, lastName, address, city, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.city = city;
    this.email = email;
  }
}

/********************class to build object containing one object with customer data + an array of selected items in the cart*********/
class finalOrder {
  constructor(contact, products) {
    this.contact = contact;
    this.products = products;
  }
}

/***********************************class to build object containing them name, Color & Price of the item added in the cart**********/

class kartItem {
  constructor(name, color, price) {
    this.name = name;
    this.color = color;
    this.price = price;
  }
}

export { kartItem,finalOrder,addTargetPage,customerData };
