/*

변수와 데이터 타입
변수라는 이름으로 데이터를 담는다

[기본타입]
-undefined
-number
-string
-booolean


[객체] 
- object 
    1. new 생성자 함수() 사용해서 생성
    2. 
- function 
*/

console.log("===기본타입(primitive, 원시)]====================")
var u=undefined; //var u; 동일, 선언과 정의의 구분이 없다.
var i=10;
var s="Hello world";
var b=true;

console.log("u: "+ typeof(u));
console.log("i: "+ typeof(i));
console.log("s: "+ typeof(s));
console.log("b: "+ typeof(b));

console.log("===객체1: object type]===========================")
//함수들은 new를 붙여 object 타입의 객체를 만들 수 있다
//new가 어떤 객체를 가리키게 되는데 그게 바로 object
var i2=new Number(1); //new뒤에 붙는 함수가 생성자 함수
var i2=new String("Hello World");
var b2=new Boolean(false);
var o=new Object();
var a=new Array(); //배열도 객체다

console.log("i2: " + typeof(i2));
console.log("s2: " + typeof(s2));
console.log("b2: " + typeof(b2));
console.log("o: " + typeof(o));
console.log("a: " + typeof(a));

function f(){
    console.log("!!!");
}

f();

var o= new f();

console.log("===객체2: function type]==========================")