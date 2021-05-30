console.log('Hello world!');
console.log("greeting from ")
//alert("Yoo")
alert(" Hello this is anto!!!")

// variables
// manipulate DOM with js

var b ='sweet';
console.log(b);

var someNumber=45;
console.log(someNumber);

var age = prompt('What is ur age!');
document.getElementById('sometext').innerHTML=age;
// number in javascript

var num=5.9;
num++;
console.log(num);

// divide, multi, reminder
var number =18;
console.log(number%6);

/* 
1.create an functon
2.call an function
*/

//creating an funnction
/*
function fun() {
    alert('this is an function');
}
// call an function

fun(); */

/* lets create a function that take in an name and says hello followed by an your name */
/*
function greeting() 
{
    var name = prompt('What is your name!');
    var result = 'Hello' +' '+ name; // string concadation
    console.log(result);
}

greeting();
*/
// How do argument work in function ?
//how do we add 2 number together in an function?
/*
function sumnumber(num1,num2) {
    var result = num1+num2;
    console.log(result);
}

sumnumber(45,50)

*/


// function
/*
function greeting(yourname) {
    var result = 'Hello' + '  ' + yourname;
    console.log(result);

}
var name = prompt('What is your name!');
greeting(name) 

*/

//While Loops
/*
var num = 21;

while(num<30){
    num+=1;
    console.log(num)
}
*/

// for loop
/*
for(let num=40;num<=80;num++) {
    console.log(num)
}
*/


// Data types
/*
let your_age =18 ;//number
let your_name ='anto'//string
let name = {first:'Anto', last:'Jerik'};//object
let truth = false;// boolean
let groceries =['apple','banana'];//array
let random;//undefined
let nothing =null;// value null


//string in js common methods

let fruit = 'banana\napple';
let morefruit = 'payaya';
console.log(fruit)
console.log(morefruit.length);
console.log(morefruit.indexOf('aya'));
console.log(morefruit.slice(3,5));
console.log(morefruit.replace('aya' ,'lov'));
console.log(morefruit.toUpperCase());
console.log(morefruit.toLowerCase());
console.log(morefruit.split(''));//split by comma
console.log(morefruit.split(','));// split by character

*/

//Array
/*
let fruits = ['banana','pineapple','orange'];

console.log(fruits[2]); // access value at index 2nd

fruits[0]='peer';
console.log(fruits);

for (let i=0; i<=fruits; i++){
    console.log(fruits[i]);
}

//arry common methods

console.log('to string', fruits.toString());
console.log(fruits.join('-'));
console.log(fruits.pop(),fruits);// remove last item
console.log(fruits.push('KIWI'),fruits);//append
console.log(fruits[2]);
fruits[3]='new fruits'
console.log(fruits)
fruits.shift();// remove first items
console.log(fruits)
fruits.unshift('peer');// add first element to array
console.log(fruits)

let vegetables=['brocolli','tomota','carrot'];
let allgroceries = fruits.concat(vegetables);// combine arrays
console.log(allgroceries);
console.log(allgroceries.slice(1,4));
console.log(allgroceries.reverse());


let someNumber=[4,9,6,4,7,1,5,3,0,2];
console.log(someNumber.sort());

let emptyarray = new Array();
for (let num=0; num<=10; num++){
    emptyarray.push(num);
}
console.log(emptyarray);
*/


//objects in js

/*
let students = {first:'Anto',
last:'jerik', 
age:26, 
height:167,
studentsInfo: function(){
    return this.first+'\n'+ this.last;
}};
console.log(students.first)
console.log(students.age);
//students.first='notanto';// change value
console.log(students.first);
console.log(students.studentsInfo());
*/