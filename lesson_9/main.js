/* 
    VÒng lặp - loop


    1.for - Lặp với điều kiện đúng
    2.for/in - Lặp qua key của đối tượng
    3.for/of - Lặp qua value của đối tượng
    4.while - Lặp khi điều kiện đúng
    5.do/while - Lặp ít nhất 1 lần, sau đó lặp khi điều kiện đúng

*/

//for loop

// for(var i = 1; i<= 1000; i++ ){
//     console.log(i);
// }
/* 
Hãy tạo hàm getRandNumbers có 3 tham số là min, max, length. Hàm này sẽ trả về một mảng gồm length phần tử, các giá trị trong mảng là số ngẫu nhiên, giá trị trong khoảng từ min tới max.

Gợi ý: Math.random() * (max - min) + min là cách tạo ra 1 số ngẫu nhiên trong khoảng min - max.
*/

function getRandNumbers (min, max, length) {
    var car = []; 
    for(var i = 0; i< length; i++) {
        car[i] = Math.floor(Math.random()*(max-min)+min);
    }
    return car;
}

// for(var i= 1; i<=1000; i++){
//     console.log(i);
// }

var myArray = [
    'Javascript',
    'PHP',
    'Java',
    'Dart',
    'Ruby',
    'Python'
];

for(var i = 0; i < myArray.length; i++){
    console.log(myArray[i]);
}

/*
    For/in loop
*/

var myInfo ={
    name: 'Chuong Vu',
    age: 18,
    address: 'Ninh Thuan, VN'
};

for(var key in myInfo){
    console.log(key);
}

var myString= 'Javascript';

var languages = 'Javacript';

for(var key in languages){
    console.log(languages[key]);
}


function run(object) {
    var arr = [];
    var i = 0;
    for (var key in object) {
    arr[i] = `Thuộc tính ${key} có giá trị ${object[key]}`;
    i++;
    }
}

console.log(run({ name: 'Nguyen Van A', age: 16 }));

//For/of loop

var languages = [
    'Javascript',
    'PHP',
    'Java'
];

for(var value of languages){
    console.log(value);
}

//while loop

var i = 0;

while(i < 1000) {
    i++;
}

var i = 0;
var isSuccess = false;
do {
    i++;

    console.log(i);
    if(true){
        isSuccess = true;
    }
}while(!isSuccess && i <= 3);
//Break & countinue in loop

for(var i =0; i < 10; i++){
    console.log(i);

    if(i >= 5){
        break;
    }
}

for (var i = 0; i < 10; i++){
    if(i%2 !== 0){
        continue;
    }

    console.log(i);
}

// Vòng lặp lồng nhau - Nested loop

var myArray = [
    [1, 2],
    [3, 4],
    [5,6]
];

for(var i = 0; i < myArray.length; i++){
    for(var j =0; j <myArray[i].length;j++){
        console.log(myArray[i][j]);
    }
}
//  Loop

for (var i = 100; i > 0; i--){
    console.log(i)
}

for(var i = 0; i <= 100; i += 5){
    console.log(i);
}