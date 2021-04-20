
//Array concat method
let hege = ["Cecilie", "Lone"];
let stale = ["Emil", "Tobias", "Linus"];

 function myConcat(ar1,ar2){
     let newar=[]
    for(let i=0;i<arguments.length;i++){
        
        for(let j=0;j<arguments[i].length;j++){
            newar.push(arguments[i][j])
        }
    }
    return newar
 }

 let v=myConcat(hege,stale)
 let anotherAr=['alice','jon']
 let newAr=myConcat(v,anotherAr)
 console.log(newAr)