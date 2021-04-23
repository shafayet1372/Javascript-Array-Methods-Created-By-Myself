let fruits = ["Banana", "Orange", "Apple", "Mango"];


function mytoString(arr){
let str=""

for(let i=0;i<arr.length;i++){


    if(i==arr.length-1){
        str=str+arr[i]
    }else{
        str=str+arr[i]+','
    }
   
}
return str
}

let result=mytoString(fruits)
console.log(result)