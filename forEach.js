let ages = [3, 10, 20,18];
function myForEach(arr,cb){
 
 for(let i=0;i<arr.length;i++){
    if(cb(arr[i],i,arr)){
        cb(arr[i],i,arr)
       
    }
     
 }

}


myForEach(ages,function(value,index,array){
     if(value>=18){
       console.log( `value:${value} index:${index}`)
     }
  })
  myForEach(ages,function(value,index,array){
    console.log(`value:${value}`)
 })
