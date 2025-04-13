

/*2705. Compact Object
Given an object or array obj, return a compact object.

A compact object is the same as the original object, except with keys containing falsy values removed. This operation applies to the object and any nested objects. Arrays are considered objects where the indices are keys. A value is considered falsy when Boolean(value) returns false.

You may assume the obj is the output of JSON.parse. In other words, it is valid JSON.
*/
/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    if(typeof obj !== 'object' || obj === null){ //base case
        return obj;
    }
    // Case for arrays: recursively compact each element and remove falsy values
    if (Array.isArray(obj)){
        const _arr = new Array();
        obj.forEach((element)=> {
            let compact_element = compactObject(element);
            if(Boolean(compact_element)){
                _arr.push(compact_element);
            }
        });
        return _arr; 
    } else { //Object case
        const _obj = new Object();
        for (const [key, value] of Object.entries(obj)) {
            let compact_val = compactObject(value);
            if(Boolean(compact_val)){
                _obj[key] = compact_val;
            }
        }
        return _obj;
    }

}
/**
 * Example 1:

Input: obj = [null, 0, false, 1]
Output: [1]
Explanation: All falsy values have been removed from the array.

Example 2:

Input: obj = {"a": null, "b": [false, 1]}
Output: {"b": [1]}
Explanation: obj["a"] and obj["b"][0] had falsy values and were removed.

Example 3:

Input: obj = [null, 0, 5, [0], [false, 16]]
Output: [5, [], [16]]
Explanation: obj[0], obj[1], obj[3][0], and obj[4][0] were falsy and removed.

 */