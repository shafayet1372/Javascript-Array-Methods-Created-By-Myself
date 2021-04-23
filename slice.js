let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];



function mySlice(arr,start,end){

    start =start || 0
    end=end || arr.length
    let newar=[]
    for(let i=start;i<end;i++){

        newar.push(arr[i])
    }
    return newar

}
let v=mySlice(fruits,0,3)
console.log(v)