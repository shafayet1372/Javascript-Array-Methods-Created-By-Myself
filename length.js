let fruits = ["Banana", "Orange", "Apple", "Mango","sdsd"];


function myArrayLength(arr){
  let counter=0;
  let i=0;
    while(arr[i]!=undefined){
        counter++;
        i++;
    }
    return counter

}

let len=myArrayLength(fruits)
console.log(len)