let fruits = ["Banana", "Orange", "Apple", "Mango"];

function myJoin(arr,way){
  way= way || ','
  let str=""
    for(let i=0;i<arr.length;i++){
        if(i==arr.length-1){
            str=str+arr[i]
        }else{
            str=str+arr[i]+way
        }
       
    }
    console.log(str)
}

myJoin(fruits,"+")
