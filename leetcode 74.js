var searchMatrix = function(matrix, target) {
    
    let i=0

    while(i<matrix.length){

        let insideArr = matrix[i]
        let left = 0
        let right = insideArr.length-1

        while(left<=right){

            let mid = Math.floor((left+right)/2)

            if(insideArr[mid] == target){

                return true

            }else if(insideArr[mid]<target){

                left = mid+1

            }else{

                right = mid-1

            }
        }

        i++
    }

    return false
};