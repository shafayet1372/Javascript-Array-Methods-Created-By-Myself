let ages = [ 32,30, 18, 40];
function myFind(arr,cb){
 let result;
 for(let i=0;i<arr.length;i++){
     if(cb(arr[i],i,arr)){
         result=arr[i]
         break;
     }
 }
return result;
}


  let result=myFind(ages,function(value,index,array){
     if(value>=18){
         return true;
     }else{
         return false;
     }
  })
  console.log(result)