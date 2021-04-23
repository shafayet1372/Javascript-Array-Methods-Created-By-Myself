


let fruits = ["Banana", "Orange", "Apple", "Mango"];


function myUnshift(){
fruits =arguments[0]
let len=arguments.length-1;
let newar=[]
for(let i=0;i<fruits.length;i++){
    newar.push(fruits[i])

}
let counter=0;
for(let i=1;i<arguments.length;i++){
    fruits[counter]=arguments[i]
    counter++;
}

for(let i=0;i<newar.length;i++){
    fruits[len]=newar[i]
    len++
}

return fruits

}

let result=myUnshift(fruits,'sd',"sdsd","ssdsds")
console.log(fruits)