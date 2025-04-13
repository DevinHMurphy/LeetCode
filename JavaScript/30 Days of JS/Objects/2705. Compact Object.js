/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    if (Array.isArray(obj)){
        const _arr = new Array();
        obj.forEach((element)=> {
            if(Boolean(value)){
                if(Array.isArray(value) || value.length > 1){
                    _arr.push(compactObject(value));
                else {
                    _arr.push(value);
                }
            }
            
        });
    return _arr
    }
    else {
        for (const [key, value] of Object.entries(obj)) {
            if(Boolean(value)){
                if(Array.isArray(value) || value.length > 1){
                    _obj[key] = compactObject(value)
                } else {
                    _obj[key] = value;
                }
            }
        }
    return _obj;
    }
}