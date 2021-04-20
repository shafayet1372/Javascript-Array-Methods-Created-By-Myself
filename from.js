

let string="helsoddsdsd sdasdsad"

function myFrom(str){
let newar=[]
for(let i=0;i<str.length;i++){
    newar.push(str[i])
}
return newar
}

let result=myFrom(string)
console.log(result)