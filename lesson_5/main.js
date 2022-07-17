/* 
    1.Tạo giá trị number
    -Các cách tạo
    -Dùng cách nào? Tại sao?
    -Kiểm tra data type

    2.Làm việc với number
    -To string
    -To fixed
*/

var age = 18;
var PI = 3.5;

var myString= PI.toString();

console.log(PI.toFixed(3))

// var otherNumber = new Number(9);

// console.log(typeof age)

var result = 20 / 'ABC'

console.log(isNaN(result))//kiểu số ko hợp lệ

var isNumber = function(value){
    if(isNaN(value)){
        return false;
    }
    else if(typeof value == 'number'){
        return true;
    }
    else{
        return false;
    }
       
}

console.log(isNumber(999)); // true
console.log(isNumber('abc')); // false
console.log(isNumber('100')); // false

console.log(isNumber(NaN)); // false
console.log(isNumber(100 / 'abc')); // false