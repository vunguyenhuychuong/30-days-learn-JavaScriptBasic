
//Câu lệnh rẽ nhánh - If else

var date = 2;

if(date === 2) {
    console.log('Hôm nay là thứ 2');
}

 else if(date === 3) {
    console.log('Hôm nay là thứ 3');
}

else if(date === 4) {
    console.log('Hôm nay là thứ 4')
}

else{
    console.log('không biết')
}

var date = 5;

switch(date) {
    case 2:
    case 3:
    case 4:
        console.log('Hôm nay là thứ 2, 3, 4')
        break;
    case 5:
        console.log('KO');
        break;

}

/* 
    Toán tử 3 ngôi  - Ternary operator
*/

var course = {
    name: 'Javascript',
    coin: 250
}
// if(course.coin > 0){
//     console.log(`${course.coin} Coins`);
// }else{
//     console.log('Miễn phí');
// }


var result = course.coin > 0 ? `${course.coin} Coins` : `Mien Phi`;
console.group(result)