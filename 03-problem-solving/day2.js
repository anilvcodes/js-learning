// addto cart 

let cart =[];

 
function addtocart(product){
    cart.push(product);
    console.log(cart);
  
}

addtocart("pen")
addtocart("book")
addtocart("book- cse ")
console.log(cart.length);


//Day 2: Even/odd checker banao.

function oddOrEven(num){
    if(num%2===0){
        console.log("even number");}
        else{
            console.log("odd number");
        }
    }
oddOrEven(23);
oddOrEven(22)