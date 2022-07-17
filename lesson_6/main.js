/* 
    Mảng trong Javascript - Array

    1. Tạo mảng
        -Cách tạo
        -Sử dụng cách nào?Tại sao?
        -Kiểm tra data type?
    2.Truy xuất mảng
        -Độ dài mảng
        -Lấy phần tử theo index


*/



console.log(languages)

var languages = new Array(
    'Javascript',
    'PHP',
    'Ruby',
    null,
    undefined,
    function(){

    },
    {},
    123
);

console.log(Array.isArray({}))

/**
 * Làm việc với Array
 * 
 * //Keyword: Javascript with Array
 * 
 * 1.To String
 * 2.Join chèn vào
 * 3.Pop  xóa bỏ 1 phần tử
 * 4.Push  thêm 1 hoặc nhiều phần tử
 * 5.Shift  mất đi 1 phần tử đầu
 * 6.Unshift thêm 1 phần tử ở đầu mảng
 * 7.Splicing  đặt con trỏ vào vị trí [] đến tham số thứ 2 xóa phần tử đó
 * 8.Concat hợp nhất 2 mảng hoặc nhiều mảng
 * 9.Slicing cắt phần tử đếm từ vị trí cuối mảng
 * 
 */

var languages = [
    'Javascript',
    'PHP',
    'Ruby'
];

console.log(languages.splice(1))



// cuối mảng và trả về phần tử đã xóa



console.log(languages.slice(-1))