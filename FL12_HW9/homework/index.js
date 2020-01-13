//function convert
function convert(...arg) {
    for (let i = 0; i < arg.length; i++) {
        if (typeof arg[i] === 'string') {
            arg[i] = Number(arg[i]);
        } else {
            arg[i] = String(arg[i]);
        }
    }
    return arg;
}
convert('1', 2, 3, '4');

//function executeforEach
function executeforEach(mass, callback) {
    for (let x = 0; x < mass.length; x++) {
        callback(mass[x], x, mass);
    }
}
executeforEach([1, 2, 3], function (el) { 
    console.log(el * 2) 
});

//function mapArray
function mapArray(arr, callback) {
    let numArray = [];
    executeforEach(arr, function (el) { 
        numArray.push(callback(Number(el))) 
    });
    return numArray;
}
mapArray([2, '5', 8], function (el) { 
    return el + 3 
});

//function filterArray
function filterArray(arr, callback) {
    let boolArray = [];
    let rezultArray = [];
    executeforEach(arr, function (el) { 
        boolArray.push(callback(el)) 
    });
    for (let i = 0; i < boolArray.length; i++) {
        if (boolArray[i]) {
            rezultArray.push(arr[i]);
        }
    }
    return rezultArray;
}
filterArray([2, 5, 8], function (el) { 
    return el % 2 === 0 
});

//function flipOver
function flipOver(str) {
    let reverseStr = '';
    let x = str.length - 1;
    for (x; x >= 0; x--) {
        reverseStr = reverseStr + str[x];
    }
    return reverseStr;
}
flipOver('hey world');

//function makeListFromRange
function makeListFromRange(mass) {
    let longArr = [];
    for (let x = mass[0]; x <= mass[1]; x++) {
        longArr.push(x);
    }
    return longArr;
}
makeListFromRange([2, 7]);

//function getArrayOfKeys
const actors = [
    { name: 'tommy', age: 36 },
    { name: 'lee', age: 28 }
];
function getArrayOfKeys(arr, key) {
    let valueArr = [];
    executeforEach(arr, function (keyword) { 
        valueArr.push(keyword[key]) 
    })
    return valueArr;
}
getArrayOfKeys(actors, 'name');

//function substitute
function substitute(arg) {
    return mapArray(arg, function (star) {
        if (star < 30) {
            star = '*';
        }
        return star;
    });
}
substitute([58, 14, 48, 2, 31, 29]);

//function getPastDay
const date = new Date(2019, 0, 2);
function getPastDay(date, day) {
    var newDate = new Date(date - day * 86400000);
    return newDate.getDate();
}
getPastDay(date, 1);
getPastDay(date, 2);
getPastDay(date, 365);

//function formatDate
function formatDate(date) {
    var yearDate = date.getFullYear();
    var monthDate = date.getMonth() + 1;
    var dayDate = date.getDate();
    var hoursDate = date.getHours();
    var minuteDate = date.getMinutes();
    return `${yearDate}/${monthDate}/${dayDate} ${hoursDate}:${minuteDate}`;
}
formatDate(new Date());