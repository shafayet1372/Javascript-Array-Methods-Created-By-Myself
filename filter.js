
let ages = [32, 33, 18, 40];
function myFilter(arr,cb){
 let result=[];
 for(let i=0;i<arr.length;i++){
     if(cb(arr[i],i,arr)){
         result.push(arr[i])
     }
 }
return result;
}


  let result=myFilter(ages,function(value,index,array){
     if(value>=30){
         return true;
     }else{
         return false;
     }
  })
  console.log(result)