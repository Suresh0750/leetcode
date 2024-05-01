/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.array = new Array(k)
    this.size = k
    this.front = -1
    this.rear = -1
    this.length = 0
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if(this.isFull()) return false
    
    
        this.rear = (this.rear+1)%this.size
        this.array[this.rear] = value
        this.length++
        if(this.front == -1){
            this.front = this.rear
        }

        return true
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {

    if(this.isEmpty()) return false

    this.fornt = this.front%this.size
    this.array[this.front] = null
    this.front++
    this.length--
    if(!this.length){
        this.front = -1
        this.rear = -1
    }

    return true
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    
    if(!this.length) return -1
    
    this.front = this.front%this.size
    return this.array[this.front]
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if(this.length==0) return -1

    this.rear = this.rear%this.size
    return this.array[this.rear]
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.length == 0
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return this.length == this.size
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */