


let ar=[1,3,4,5,6]

function myReduce(arr,cb,acc){
   let i;
    if(acc || acc==0){
        i=0
    }else{
        acc=arr[0]
        i=1
        
    }
    console.log(i)
      for( i;i<arr.length;i++){

          acc=cb(acc,arr[i])
          console.log(acc)
      }
   
      
return acc
}

let result=myReduce(ar,function(acc,value){
  return acc+value
},10)
console.log(result)