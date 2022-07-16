/* 




3.Tính chất
-Không thực thi khi định nghĩa
-Sẽ thực thi khi được gọi
-Có thể nhận tham số
-Có thể trả về 1 giá trị

4.Tạo hàm đầu tiên

*/

var age = 18;

// function showDialog() {
//     //code
//     alert('Hi xin chào các bạn!');
// }

// showDialog();

/* 
1.Tham số
    -Định Nghĩa?
    -Kiễu dữ liệu
    -Tính private?
    -1 tham số
    -Nhiều tham số

2.Truyền tham số
    -1 tham số
    -Nhiều tham số

3.Arguments?
    -Đối tượng arguments
    -Giới thiệu vòng for
*/


function writeLog(message, message2){
    console.log(typeof message)
    console.log(message2)
}

function writeLog(){
    var myString ='';
    for(var param of arguments){
        myString += `${param} - `
    }
    console.log(myString);
}
writeLog('log 1', 'log 2', 'log 3')


//Return orng hàm - Javascript cơ bản

var isConfirm= confirm('Message?');

console.log(isConfirm);

function cong(a, b){
    // return a + b;
    // console.log('123')
    // alert()
    return '2' + '8';
}

var result = cong(2, 8);

console.log(result);

/* 
    Một số điều cần biết về function

    1.Khi function đặt trùng tên? => ghi đè hàm
    2.Khai báo biến trong hàm?  => phạm vi chỉ ở trong function
    3.Định nghĩa hàm trong hàm? =>
*/

function showMessage() {
    function showMessage2(){
        console.log('Message 2');
    }

    showMessage2();
 }

 showMessage();

 /* 
    Các loại funtcion 

    1.Declaration function
    2.EXpression function
    3.Arrow function
 
 */

    showMessage()
    function showMessage(){
        console.log('Declaration function');
    }

    var showMessage2 = function(){
        console.log('Expression function');
    }

    

