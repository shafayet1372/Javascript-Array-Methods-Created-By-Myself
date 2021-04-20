let ages = [3, 10, 20,18];
function myFindIndex(arr,cb){
 let index;
 for(let i=0;i<arr.length;i++){
     if(cb(arr[i],i,arr)){
         index=i
         break;
     }
 }
return index;
}


  let index=myFindIndex(ages,function(value,index,array){
     if(value>=18){
         return true;
     }else{
         return false;
     }
  })
  console.log(index)