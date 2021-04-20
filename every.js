
let ages = [32, 33, 18, 40];
function myEvery(arr,cb){
 let result;
 for(let i=0;i<arr.length;i++){
     if(cb(arr[i],i,arr)){
         result=true;
     }else{
         result=false;
         break;
     }
 }
return result;
}


  let result=myEvery(ages,function(value,index,array){
     if(value>=18){
         return true;
     }else{
         return false;
     }
  })
  console.log(result)