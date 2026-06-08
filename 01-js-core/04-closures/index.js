console.log("learning Closures here")
 let age=25
function outer(){
    console.log(age);
     function inner(){
        let age_in =25;
        console.log(age+age_in);
     }
     inner();



}
outer()





function bankAccount() {
    let balance = 1000;

    return function deposit(amount) {
        balance += amount;
        console.log("Balance:", balance);
    };
}
const myAccount1 = bankAccount();
const myAccount2 = bankAccount();

myAccount1(500); 
myAccount1(100);  
myAccount2(200); 
 