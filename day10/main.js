/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Set<*>}
 */
const join = function (arr1, arr2) {
    // let result = [...arr1];
    let result = arr1.concat(arr2);
    console.log('result::', result);
    // console.log('result::', Object.values([...arr1,...arr2]));

    let tmp = result.reduce((accumulator, currentValue) => {
        accumulator[currentValue.id] = {...accumulator[currentValue.id], ...currentValue}
        console.log("currentValue", currentValue)
        console.log("accumulator[currentValue.id]", accumulator[currentValue.id])
        console.log("accumulator", accumulator)
        console.log("fff", accumulator[currentValue.id] && accumulator)
        return  accumulator
    }, {})


    console.log(Object.values(tmp))
    arr2.forEach((item) => {
        let existsID = result.findIndex((obj) => obj.id === item.id);

        if (existsID > 0) result[existsID] = item;

        else result.push(item)
    })
    return result;
};


const arr1 = [{"id":1,"b":{"b": 94},"v":[4,3],"y":48}],
    arr2 = [{"id":1,"b":{"c": 84},"v":[1,3]}];

join(arr1, arr2);
