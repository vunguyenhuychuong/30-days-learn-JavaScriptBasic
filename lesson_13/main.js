// Callback?

// Là hàm (function) được truyền qua đối số
// Khi gọi hàm khác

// 1. Là hàm
// 2. Được truyền qua đối số
// 3. Được gọi lại(trong hàm nhận đối số)

function myFunction(param){
    //console.log(typeof param);
    if(typeof param == 'function'){
        param('Học lập trình');
    }   
}

function myCallback(value) {
    console.log('Value: ', value);
}

myCallback(123);

myFunction(myCallback);

Array.prototype.map2= function(callback) {
    var outptut = [], arrayLength = this.length;

    var arrayLength = this.length;
    for(var i = 0; i < arrayLength; i++){
        // myCallback(this[i], i);
        var result = callback(this[i], i);
        //console.log('result: ', result);
        outptut.push(result);
    }
    return outptut;
}

var cousres = [
    'Javascript',
    'PHP',
    'Ruby'
];

var htmls = cousres.map2(function(cousres){
    return `<h2>${cousres}</h2>`
});

console.log(htmls.join(''));

// var htmls = cousres.map(function(cousres){
//     return `<h2>${cousres}</h2>`
// });

// console.log(htmls.join(``));