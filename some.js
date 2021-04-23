
let ages = [1, 2, 3, 32];
function mySome(arr,cb){
 let result;
 for(let i=0;i<arr.length;i++){
     if(cb(arr[i],i,arr)){
         result=true;
         break;
     }else{
         result=false;
        
     }
 }
return result;
}


  let result=mySome(ages,function(value,index,array){
     if(value>=18){
         return true;
     }else{
         return false;
     }
  })
  console.log(result)