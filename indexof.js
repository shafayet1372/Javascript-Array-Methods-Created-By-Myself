let fruits = ["Banana", "Orange", "Apple", "Mango"];

function myIndexOf(arr,value){
  
for(let i=0;i<arr.length;i++){
    if(arr[i]==value){
        return i
    }
}
return -1;
}

let result=myIndexOf(fruits,"sade")
console.log(result)