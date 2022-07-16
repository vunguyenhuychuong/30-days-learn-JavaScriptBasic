/* 
    * Toán tử logic
    * 1 && - ANd
    * 3. || - Or
    * 
*/

// var a = 1;
// var b = 2;
// var c = 3;

// if(!a > 0){
//     console.log('DIEU KIEN DUNG!');
// }

/* 
    Kiểu dữ liệu trong Javascript

    1.Dữ liệu nguyên thủy - Primitive Data
    -Number
    -String
    -Boolean
    -Undefined
    -Null
    -Symbol

    2.Dữ liệu phức tạp - Complex Data
    -Function
    -Object
*/
//Number type
var a = 1;
var b = 2;
var c = 1.5;

//String type
var fullName='Son Dang';

// Boolean type
console.log(fullName)

// Undefined type
var age;

//Null
var isNull = null;

//Symbol
var id = Symbol('id');
var id2 = Symbol('id');

//function
var myFunction = function(){
    alert('Hi chào các bạn');
};

// Object types
var myObject = {
    name: 'Son Dang',
    age : 18,
    address: 'Ha Noi',

    myFunction: function() {

    }
};

var myArray = [
    'JavaScript',
    'PHP',
    'Ruby'
];


var a = 1;
var b ='1';

/* 
    * ===
    * !==
    * 
*/
// === so sánh vả value và cả type
console.log(a !== b)

