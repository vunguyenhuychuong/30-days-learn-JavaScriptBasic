/* 
    GIới thiệu 1 số hàm built in
    1.ALert
    2.Console
    3.Confirm
    4.Prompt
    5.Set timeout
    6.Set interval
*/
// confirm('Xac nhan ban du tuoi');
// prompt('Xac nhan ban du tuoi');
// setTimeout(function(){
//         alert('Thong bao')
// }), 1000;
// setInterval(function(){
//     console.log('Day la log' + Math.random())
// },1000);


/* 
    Giới thiệu về toán tử trong JavaScript
    1.Toán tử số học - Arithmetic
    2.Toán tử gán - Assignment
    3.Toán tử so sánh - Comparison
    4.Toán tử logic - Logical

*/

// var a = 1;
// var b = 2;

// if(a > 0 && b > 0 ){
//     alert('a & b lớn hơn 0');
// }

/*
    Toán tử số học 

    Toán tử gán     Ví dụ       Tương đương
    =               x = y       x = y
    +=              x += y      x = x + y
    -=              x -= y      x = x - y
    *=              x *= y      x = x * y
    /=              x /= y      x = x / y
    **=             x **= y     x = x ** y
*/

// var a = 1;
// a -= 2; // a = a -2

// console.log(a);
// x++ tăng giá trị biến lên 1 và trả về giá trị trước khi tăng
// ++x tăng giá trị biến lên 1 và trả về giá trị sau khi tăng
// x-- giảm giá trị biến xuống 1 và trả về giá trị trước khi giảm
// --x giảm giá trị biến xuống 1 và trả về giá trị sau khi giảmm

// console.log('--- Hậu tố ---');

// var number1 = 1;

// console.log(number1++); // 1
// console.log(number1); // 2

// console.log(number1++); // 2
// console.log(number1); // 3

// console.log('--- Tiền tố ---');

// var number2 = 1;

// console.log(++number2); // 2
// console.log(number2); // 2

// console.log(++number2); // 3
// console.log(number2); // 3

var a = 6;

//Việc 1: + 1 cho a, a = a + 1 => a = 7
//Việc 2: Trả về a sau khi được + 1

var output = ++a; // 6
//Việc 1: a copy, a copy = 6
var result = a--;//6
//việc 2 : trừ 1 của aa, a = a - 1 => a = 5
//việc 3: Trả về a copy

console.log('output: ' , output);

