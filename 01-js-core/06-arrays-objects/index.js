let arr=[1,3,4,5,6,7];
console.log(arr);

//push at last
   arr.push(23,23)
   // remove last
   arr.pop()
   // remove strting 
   arr.shift();
// add starting
arr.unshift(23,45)
    console.log(arr);

    //map
   let num= arr.map(a =>a*5);
   console.log(num);
   //filter
   let even_num=num.filter(a=> a%2==0);
   console.log(even_num);

   // reduce
   let add= num.reduce((a,b)=> a+b ,0);
   console.log(add);