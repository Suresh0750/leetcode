

let s = "()"


let result = []

for(let i=0;i<s.length;i++){
    console.log(i)
    
    if(s[i]=="(" && s[i+1]==")"){
        result.push(1)
    }else if(s[i]=="[" && s[i+1]=="]"){
        result.push(1)
    }else if(s[i+1]=="{"&&s[i+1]=="}"){
        result.push(1)
    }else{
        result.push(0)
    }
    i++
}


console.log(result.every((val)=> val==1))
console.log(result)