// forEach, find, filter, some, every, reduce

//1. Object prototype
//2. For in
//3. hasOwnProperty

// var courses = [
//     'Javascript',
//     'PHP'
// ];
// var courses = new Array(10);// nếu truền 1 ptu nó sẽ hiểu là độ dài mảng còn 2 trờ lên là hiểu phần tử mảng

// courses.length = 10;
// courses.push('Javasript', 'PHP');

// console.log(courses);// phần tử thực
//console.log(courses);

// for(var i = 0; i < courses.length; ++i){
//     console.log(courses[i]);
// }

// for(var index in courses){
//     console.log(courses[index]);
// }

//mảng nó sẽ dc nằm trong constructor Array(xanh lá) kế thừa từ 
//th prototype

Array.prototype.testMethod1 = 1;
Array.prototype.testMethod2 = function() {

};

Array.prototype.forEach2 = function(callback){
    for(var index in this){
        //this.hasOwnProperty(index)
        //console.log('index: ' , index);
        if(index, this.hasOwnProperty(index)){
            callback(this[index], index, this); 
        }
    }
}

var khoahoc = new Array(100);

khoahoc.push('Javascript', 'Ruby');

// console.log(Array.prototype);

console.log(Number.prototype);

// var khoahoc = [
//     'Javascript',
//     'PHP',
//     'Ruby'
// ];





khoahoc.forEach2(function(khoahocs, index, array){
    console.log(khoahocs, index, array);
});

