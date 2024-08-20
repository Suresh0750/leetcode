/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    
      let min = +Infinity
    let res = []
    for(let i=0;i<list1.length;i++){
       if(list2.includes(list1[i])){
        let j = list2.indexOf(list1[i])
        res.push([list1[i],i+j])
        min = Math.min(min,(i+j))
       }
    }
    console.log(res)
   let final = []
   
   res.forEach((val)=>{
       if(val[1]<=min){
           final.push(val[0])
       }
   })
   

    return final
    
    console.log(final)
};