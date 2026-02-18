var TimeLimitedCache = function() {
    const valueMap = new Map(); //<k,v>
    const timeoutMap = new Map(); //<Key, Timeout>
    
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    valueMap.set(key, value)
    timeoutMap.set(key,duration)
    
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    //check the timeout threshold
    
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    //get list of keys in map, we dont need to do anything special because we are supposed to 
    //remove the key when it reaches 0
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
/**
 * @param {number} millis
 * @return {Promise}
 */
async function handle_key_timeout(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
}


function keyTimeOut(){
    //remove the key?
    //remove the key's timeout value map value
}

/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var keyTimeout = function(key, timeout) { //if this method is called again we need to override a previous timeout
    //Issue is we have to override previous timeout
    //Create a timer timeout using the passed function and arg
    let timer = setTimeout(() => {}, timeout);
    //We should only reach here if we either time out or the the fn completes and we need to clear the timeout
    return function() {
        setTimeout(timer); //if we reach here we should clear our timeout in timer to stop memory leak
    };
}
