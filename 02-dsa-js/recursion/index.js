function fact(n){
    if(n==0 || n==1){
    return 1;
    }
     return n * fact(n-1);
    
}
console.log(fact(10));



function count_down(n){
    if(n==0){
        console.log("done!")
        return;
    }
    console.log(n);
    count_down(n-1);
}
count_down(5)


function fabon(n1){
    if(n1<=1);{
        return 1;
    }
    return  fabon(n1-1)+fabon(n1-2)
}
console.log(fabon(5));