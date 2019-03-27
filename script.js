/*****
 * Hoisting
 
 calculateAge(1965);

 function calculateAge(year) {
     console.log(2016 - year);
 }

//  이거는 function expression 이기때문에 위에 있는 function deceration 처럼 되지 않음?
// 실행됨
var retirement = function(year) {
    console.log(65 - ( 2016 - year));
}
retirement(1990);

// 실행안됨
retirement(1990);
var retirement = function(year) {
    console.log(65 - ( 2016 - year));
}

// variables
// 실행됨
var age = 23;
console.log(age);
// undefined
console.log(age);
var age = 23;

console.log(age);
var age = 23;

function foo(){
    var age = 65;
    // global execution contecxt 로 저장
    console.log(age);
}
foo();
console.log(age);

var a = 'Hello!';
first();

function first(){
    var b = 'Hi';
    second();

        function second() {
            var c = 'Hey';
            third()
     }
}


function third(){
    var d = 'John';
    // console.log(c);
    console.log(a+d);
}
*/
/**********
 * This keyword
 */

//  console.log(this);
/*** 
calculateAge(1980);
function calculateAge(year) {
    console.log(2016 - year);
    console.log(this);
}
*/

var john = {
    name: 'John',
    yearofBirth: 1990,
    calculateAge: function(){
        console.log(this);
        console.log(2016 - this.yearofBirth);
/*
        function innerFunction(){
            console.log(this);
        }
        innerFunction();
        */
    }
}
/***** 
john.calculateAge();

var mike = {
    name: 'Mike',
    yearofBirth : 1880,
    
};

mike.calculateAge = john.calculateAge;
mike.calculateAge();
******/














