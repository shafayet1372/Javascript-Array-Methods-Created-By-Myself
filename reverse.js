let fruits = ["Banana", "Orange", "Apple", "Mango"];


function myReverse(arr){
   
    let newar=[]
    for(let i=arr.length-1;i>0;i--){
    newar.push(arr[i])
    }
    return newar

}


let result=myReverse(fruits)
console.log(result)