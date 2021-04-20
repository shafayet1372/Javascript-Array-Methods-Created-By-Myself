

let fruits = ["Banana", "Orange", "Apple", "Mango"];

function myFill(arr,value,start,end){
 start=start || 0
 end=end || arr.length
 for(let i=start;i<end;i++){
     arr[i]=value
 }
return arr;
}

let result=myFill(fruits,'sdsd',0,2)
console.log(result)