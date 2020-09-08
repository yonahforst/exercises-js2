/*
E-commerce

You have to create an e-commerce shopping cart

First of all we need 2 arrays, 
the list of available products and the list of products introduced in the shopping cart.

1. Fill the products list with at least 4 products, what attributes de we have? 
at least should have:
var product = {
  id:
  name:
  price:
  stock:
}
id is a unique number that identifies each product

3. Create a function addToShoppingCart to add a product to the shopping cart list giving the product id,
the function will add the product to the selectedProduct list, and add the price to the totalPrice

4. Create the function removeFrom ShoppingCart to remove a product that a client does not like anymore

5. Create the function shop, the function will empty the list and set 0 in the totalPrice of the shopping cart
In addition will substract 1 in the product stock of bought products

6. If there is not enough stock, the product cannot be added to the shopping cart
*/

var products = [];

var product1 = {
  id: 1,
  name: "Toaster X56 Plus",
  price: 12.98,
  stock: 105
};
var product2 = {
  id: 2,
  name: "Watch Rocker",
  price: 9.99,
  stock: 2
};
var product3 = {
  id: 3,
  name: "Computer mouse",
  price: 20.50,
  stock: 10,
}
var product4 = {
  id: 4,
  name: "Coffee mug",
  price: 2.99,
  stock: 78,
}

products.push(product1);
products.push(product2);
products.push(product3);
products.push(product4);

var shoppingCart = {
  totalPrice: 0,
  selectedProducts: []
};
/**
when i call addToShoppingCart(4)
shopping cart should equal: {
  totalPrice: 2.99,
  selectedProducts: [ product4 ]
}
then when i call addToShoppingCard(2)
shopping cart should equal: {
  totalPrice: 12.98,
  selectProducts: [ product4, product2 ]
}
*/
function addToShoppingCart(id){
  //find product in products array which has the given ID (if none, return)
  var product = products.find(product => product.id === id)
  if (!product || product.stock < 1)
    return

  //push product to shopping cart's selected product array
  shoppingCart.selectedProducts.push(product)
  //add product price to existing total price of the shopping cart
  shoppingCart.totalPrice = shoppingCart.totalPrice + product.price
}

/**
 if shopping cart equals: {
  totalPrice: 12.98,
  selectedProducts: [ product4, product2 ]
}
and i call removeFromShoppingCart(999)
nothing should happen
if i call removeFromShoppingCart(4)
the shopping cart should equal: {
  totalPrice: 9.99,
  selectedProducts: [ product2 ]
}
*/
function removeFromShoppingCart(id){
  // find product in shopping cart. If it doesn't exist, return.
  var productIndex = shoppingCart.selectedProducts.findIndex(product => product.id === id)
  if (productIndex === -1)
    return


  // remove product from shopping cart
  var removedProducts = shoppingCart.selectedProducts.splice(productIndex, 1)
  
  var product = removedProducts[0]

  // subtract the product price from the shopping carts total price
  shoppingCart.totalPrice = shoppingCart.totalPrice - product.price
}

//// ANOTHER WAY OF WRITING THE FUNCTION
// function removeFromShoppingCart(id){
//   // find product in shopping cart. If it doesn't exist, return.
//   var product = shoppingCart.selectedProducts.find(product => product.id === id)
//   if (!product)
//     return

//   // remove product from shopping cart
//   shoppingCart.selectedProducts = shoppingCart.selectedProducts.filter(product => product.id !== id)

//   // subtract the product price from the shopping carts total price
//   shoppingCart.totalPrice = shoppingCart.totalPrice - product.price
// }



/**
 if shopping cart equals: {
  totalPrice: 12.98,
  selectedProducts: [ product4, product2 ]
}
and i call shop(), the shoppingCart should equal: {
  totalPrice: 0,
  selectedProducts: []
}
and product4.stock should be one less
and product2.stock should be one less
*/
function shop(){
  // for each product in the selected products:
  // find the product in our available products array
  // and remove 1 from the inventory
  for (const selectedProduct of shoppingCart.selectedProducts) {
    const product = products.find(product => product.id === selectedProduct.id)
    product.stock--
  }

  // after, set the total price to 0 and the selected products to []
  shoppingCart = {
    selectedProducts: [],
    totalPrice: 0
  }
}

//results
addToShoppingCart(1);
console.log("Step 1");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p=>p.name));
addToShoppingCart(2);
console.log("Step 2");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p=>p.name));
addToShoppingCart(4);
console.log("Step 3");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p=>p.name));
removeFromShoppingCart(2);
console.log("Step 4");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p=>p.name));
shop();
console.log("Step 5");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p=>p.name));