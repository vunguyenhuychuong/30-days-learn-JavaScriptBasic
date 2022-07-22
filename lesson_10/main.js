var course = [
    {
        id: 1,
        name: 'Java',
        coin : 250
    },
    {
        id: 2,
        name: 'HTML,CSS',
        coin: 130
    },
    {
        id:3,
        name:'PHP',
        coin: 200
    },
    {
        id:4,
        name:'JavaScript',
        coin:240
    },
];

var numbers= [100, 200, 220, 200, 480];

var totalCoin = numbers.reduce(function(total, numbers){
    return total + numbers;
},0);

console.log(totalCoin);

//--"Làm phẳng mảng từ Depth array - Mảng sâu"
var DepthArray = [ 1, 2,[3 , 4], 5, 6, [7 , 8, 9]];

var flatArray = DepthArray.reduce(function(flatOutput, depthItem){
        return flatOutput.concat(depthItem);
}, []);

console.log(flatArray);

//Lấy ra các khóa học đưa vào 1 mảng mới
var topics = [
    {

    
    topic: "Front-end",
    course: [
        {
            id: 1,
            title: "HTML, CSS"
        },
        {
            id: 2,
            title: "Javascript"
        }
    ]
    },
    {
        topic: "Back-end",
        course: [
            {
                id: 1,
                title: "PHP"
            },
            {
                id: 2,
                title: "NodeJs"
            }
        ]
    },
];

var newCourses = topics.reduce(function(course, topic){
    return course.concat(topic.course);
}, []) ;


console.log(newCourses);

var html = newCourses.map(function(course){
    return `
        <div>
            <h2>${course.title}</h2>
            <p>ID:${course.id}</p>
        </div>
    `;
});
console.log(html.join(''));
// course.map(function(){

// });

//Biến lưu trữ
// var totalCoin = 0;

// //Lặp qua các phần tử
// for(var course of course){

//     //Thực hiện việc lưu trữ
//     totalCoin += course.coin;
// }

// console.log(totalCoin);

// var i = 0;

// function coinHandler(accumulator, currentValue, currentIndex, originArray){
//     i++;


//     var total = accumulator + currentValue.coin
//     console.table({
//         'Lượt chạy: ': i,
//         'Biến tích trữ: ': accumulator,
//         'Giá khóa học: ' : currentValue.coin,
//         'Tích trữ được: ': total
//     });
//     return total;
// }

// var totalCoin = course.reduce(coinHandler, 0);

// var totalCoin = course.reduce(function(accumulator, currentValue){
//     return accumulator + currentValue.coin;
// }, 0);

// console.log(totalCoin);

// var totalCoin = course.reduce(function(total, course){
//     //i++;

//     //console.log(i, total, course);
    
//     return total + course.coin;
// },0);

// console.log(totalCoin);