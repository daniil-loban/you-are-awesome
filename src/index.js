// DO WHATEVER YOU WANT HERE
const createEnumerableProperty = (propertyName) => propertyName;

const createNotEnumerableProperty = (propertyName) => Symbol(propertyName);

const createProtoMagicObject = () => {
    let object = new Function;
    object.prototype = Object.getPrototypeOf(object);

    return object;
};

const incrementor = () => {
    incrementor.value = incrementor.value || 0;
    
    function inc() {
        incrementor.value += 1;
        return inc;
    }
    inc.toString = () => {
        incrementor.value += 1;
        return incrementor.value
    };

    return inc;
};

const asyncIncrementor = () => {
    asyncIncrementor.value = asyncIncrementor.value || 0;

    return new Promise((resolve, reject) => 
               resolve(++asyncIncrementor.value));
}

const createIncrementer = () => {
    const incrementer = function*(){
        let value = 0;
        while(true)
            yield ++value;
    }

    return incrementer();     
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (valueBack) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        reject(new Error("Time is Out!"));
        }, 2000);

        setTimeout(() => {
        resolve(valueBack);
        }, 1000);
    });
};

const getDeepPropertiesCount = (object) => {
    let count = Object.getOwnPropertyNames(object).length;
    for(let key of Object.getOwnPropertyNames(object))
        if(Object.getOwnPropertyNames(object[key]).length > 0)
            count += getDeepPropertiesCount(object[key]);  // recursion 
    
    return count;
};

const createSerializedObject = () =>  {
    return new String(JSON.stringify({someNumber:123}));
}

const sortByProto = (array) => array.sort(/* (a,b) => a.__proto__ - b.__proto__) */);

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;
