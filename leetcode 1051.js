/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    // Bubble sort 
    let expected = [...heights]
    let loop;
    function swap(arr,i,j){
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
    do{
        loop = false
        for(let i=0;i<heights.length-1;i++){
            if(heights[i]>heights[i+1]){
                swap(heights,i,i+1)
                loop = true
            }
        }
    }while(loop)

    let c=0
    heights.filter((data,i)=>{
        if(data!=expected[i]) c++
    })

    return c
};