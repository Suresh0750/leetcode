/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
  let c = 1
    let arr = []
    for(let i=0;i<chars.length;i++){
        if(chars[i]==chars[i+1]){
            c++
        }else{
            arr.push(String(chars[i]))
            arr.push(c)
            c = 1
        }
    }


  i =0 
  let res = []
  while(i<arr.length){
      if(isNaN(arr[i])){
          console.log(arr[i])
          res.push(arr[i])
      }else if(String(arr[i]).length>1){
          res.push(...(String(arr[i]).split('')))
      }else if(arr[i]!=1 || i%2==0){
          res.push(`${arr[i]}`)
      }
      i++
  }
    i = 0
  while(i<res.length){
    chars[i] = String(res[i])
    i++
  }
  chars.length = res.length
  return chars.length
};

