/* 
    CHUOI TROG JAVASCRIPT


    1.Tạo chuỗi
        -Các cách tạo chuỗi
        -Nên dùng cách nào? Lý do?
        -Kiểm tra data type
    2.Một số case sử du5n5ng backslash(\)
    3.Xem độ dài chuỗi
    4.Chú ý độ dài khi viết code
    5.Template string ES6
*/

var fullName = 'Son Dang la Sieu Nhan f';

console.log(fullName.length);


var firstName='Chuong'
var lastName='vu'

console.log(`Toi la: ${firstName} ${lastName}`) //template string


// LÀM VIỆC VỚI CHUỖI

var myString = 'Hoc JS tai JS F8!';

//Keyword: Javascript string methods


    // 1.Length
    console.log(myString.length)
    // 2.Find index
    console.log(myString.indexOf('JS' , 6))
    console.log(myString.lastIndexOf('ABC'))
    // 3.Convert to upper case
   
    // 4.Convert to lower case
    console.log(myString.toUpperCase())
    console.log(myString.toLowerCase())
    // 5. Replace
    console.log(myString.replace(/JS/g, 'JavaScript'))
    // 6.Trim
    console.log(myString.trim().length)
    // 7.Split
    var lagauges = 'Javascript, PHP, Ruby';

    console.log(lagauges.split(','))
    // 8.Cut String
    console.log(myString.slice(4, 6))
    // 9.Get a character by index
    console.log(myString.charAt(10)) 
    console.log(typeof myString[10]) 
