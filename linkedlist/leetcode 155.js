
var MinStack = function() {
    this.array = []
    this.min = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
   let value = this.array.push(val)

   if(this.min.at(-1)>=val || !this.min.length) this.min.push(val)

    return val
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.array.length!==0){
        let value = this.array.pop()
        if(this.min.at(-1) == value) this.min.pop()

        return value
    }


    return undefined
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if(this.array.length!==0) return this.array.at(-1)

    return undefined
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    
    
    if(this.min.length){
       return this.min.at(-1)
    }

    return undefined
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */