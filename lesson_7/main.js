
//Object trong Javascript

var myInfo = {
    name: 'Chuong VU',
    age: 18 ,
    address: 'Ninh Thuan, Viet Nam',
    getName: function() {
        return myInfo.name;
    }
};

console.log(myInfo.getName())


// Function -------> phương thức / method
// Others ---------> Thuộc tính / property
// myInfo['my-email'] = 'chuong@gmail.com';

// var myKey = 'address';
// console.log(myInfo[myKey]);
// console.log(myInfo.address);

function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName = function(){
        return `${this.firstName} ${this.lastName}`;
    }
}

var author = new User('Chuong', 'Vu','Avatar');
var user = new User('Hiep', 'Tran','Avatar');

User.prototype.className = 'JS'
User.prototype.getName = function(){
    return this.className;
}

console.log(user.className)
console.log(author.getName())
// author.title = 'Chia sẻ dạo';
// user.comment = 'ssdsd';

// console.log(author)
// console.log(user)
/* 
    Oject prototype - Basic

    1.Prototype là gì ? thừa kế 1 tính năng khác cũng như constructor của object đó
    2. Sử dụng khi nào?

*/

/* 
    Đối tượng
*/

var date = new Date();

console.log(date.getFullYear());

var month = date.getMonth();
var year = date.getFullYear();
var day = date.getDate();

console.log(`${date}/${month}/${year}`)

var year = new Date();
function getNextYear(){
    return new Date().getFullYear() + 1;
}

/* 
    Math Object

    -Math.PI
    -Math.round()
    -Math.abs()
    -Math.ceil()
    -Math.floor()
    -Math.random()
    -Math.min()
    -Math.max()

*/

console.log(Math.round(1.3));
console.log(Math.abs(3.3))
console.log(Math.ceil(4.4));
console.log(Math.floor(5.6))
console.log(Math.random(100))

var random = Math.floor(Math.random() * 10);

var bonus = [
        '10 coun',
        '20 coin',
        '30 coin',
        '40 coin',

]
var random = Math.floor(Math.random() * 100);

if(random < 50){
    console.log('CƯờng hóa thành công')
}

/* 
Hãy tạo hàm getRandomItem, hàm này nhận 1 tham số là mảng và 
sẽ trả về ngẫu nhiên 1 phần tử của mảng.
*/

function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}




