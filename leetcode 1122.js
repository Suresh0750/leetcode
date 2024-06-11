/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let i = 0

 let obj = {}

 while(i<arr1.length){
     if(obj.hasOwnProperty(arr1[i])){
         obj[arr1[i]]++
     }else{
         obj[arr1[i]] =1
     }
     i++
 }

 let final = []

i = 0
//   console.log(obj)
while(i<arr2.length){

     let inarr = []
     
     inarr.length = obj[arr2[i]]
     
     inarr.fill(arr2[i])
     
 final = final.concat(inarr) 
 
 delete obj[arr2[i]]
 i++
}

//   console.log(obj)
for(let key in obj){
 //   console.log(key)
   let inarr = new Array(obj[key])
   inarr.fill(+(key))
   final = final.concat(inarr)
}
return final

};