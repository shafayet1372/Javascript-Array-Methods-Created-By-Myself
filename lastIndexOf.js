let fruits = ["Banana", "Orange", "Apple", "Mango","Apple"];

function myLastIndexOf(arr,value,start){
  start=start || arr.length
for(let i=start;i>0;i--){
    if(arr[i]==value){
        return i
    }
}
return -1;
}

let result=myLastIndexOf(fruits,"Apple",5)
console.log(result)