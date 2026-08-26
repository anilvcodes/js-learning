// addto cart 

let cart =[];

 
function addtocart(product){
    cart.push(product);
    console.log(cart);
    for(let i=0;i<cart.length;i++){
    console.log(cart[i]);
}
}

addtocart("pen")
addtocart("book")
addtocart("book- cse ")
console.log(cart.length);