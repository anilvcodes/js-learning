console.log(" all arrays concept in js ");
 let arr=[12,34,56,78,98];
 console.log(Math.min(...arr));
 console.log(Math.max(...arr));
 console.log(arr.length);
 const sum_arr= arr.reduce((a,b)=>a+b,0);
 console.log(sum_arr);
 const mult_arr =arr.map((index)=>index*5);
 console.log(mult_arr);
 let  sum=0;
 for(const num of arr){
    sum=sum+num;
 }
 console.log(sum);