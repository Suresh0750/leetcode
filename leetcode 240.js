var searchMatrix = function(matrix, target) {


    let i = 0
    while(i<matrix.length){
    
    let insideArr = matrix[i]
    let left = 0
    let right = insideArr.length

        if(isCheck(insideArr,target)){

            while(left<=right){

                let mid = Math.floor((left+right)/2)

                if(insideArr[mid]==target){

                    return true
                }else if(insideArr[mid]<target){

                    left = mid+1

                }else{

                    right = mid-1
                }
            }
        }

        i++
    }
    
    function isCheck(arr,t){

        return arr[0]<= t && t<=arr[arr.length-1]
    }

    return false
};