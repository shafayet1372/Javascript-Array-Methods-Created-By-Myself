let ar=[
{
    name:'shafayet',age:21
},
{
  name:"hasan",age:23
}
,
{
    name:"saimon",age:30
}
]

function myMap(arr,cb){
let result=[]
for(let i=0;i<arr.length;i++){
    
    result.push(cb(arr[i],i,arr))
}
return result
}

let newar=myMap(ar,function(value,index,arr){
     return value.age
})
console.log(newar)