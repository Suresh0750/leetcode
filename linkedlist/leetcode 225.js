
var MyStack = function() {
    this.item = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.item.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    if(this.item.length) return this.item.pop()

    return undefined
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    if(this.item.length) return this.item[this.item.length-1]

    return undefined
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    if(this.item.length) return false

    return true
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */