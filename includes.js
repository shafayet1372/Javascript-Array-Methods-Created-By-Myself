let fruits = ["Banana", "Orange", "Apple", "Mango"];

function myIncludes(arr,value,start){
  start=start || 0
for(let i=start;i<arr.length;i++){
    if(arr[i]==value){
        return true
    }
}
return false;
}

let result=myIncludes(fruits,"ango",0)
console.log(result)