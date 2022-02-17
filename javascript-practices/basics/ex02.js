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
        Number()=> object type
        String()=> object type
        Boolean()=> object type
        Object()=> object type
        Array()=> object type
    2.  {} 객체 리터럴, J(ava) S(cript) O(bject) N(otation)
    3. [] 배열 리터럴
    4. null

- function
    1. funcntion f(){...}
    2. var f=function(){...}
    3. var f= new Function(...);
*/

/*
자바 스크립트 객체를 구분하는 또 다른 방법
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
var s2=new String("Hello World");
var b2=new Boolean(false);
var o=new Object();
var a=new Array(); //배열도 객체다

var o2={};
var a2=[];

var n=null;

console.log("i2: " + typeof(i2));
console.log("s2: " + typeof(s2));
console.log("b2: " + typeof(b2));
console.log("o: " + typeof(o));
console.log("a: " + typeof(a));
console.log("o2: " + typeof(o2));
console.log("a2: " + typeof(a2));
console.log("n: " + typeof(n));


var F=function(){
    
}

var o=new F();
console.log("F: "+typeof(F));


function f(){
    console.log("!!!");
}

f();

var o= new f();

console.log("===객체2: function type]==========================")
function f1(a,b){
    return a+b;
}

var i=10
var f2=function(a,b){
    return a+b;
}

var f3=new Function("a", "b", "return a+b;");

console.log("f1: "+typeof(f1));
console.log("f2: "+typeof(f2));
console.log("f3: "+typeof(f3));

console.log("===원시타입과 윈시타입의 Wrapper 객체는 구분없이 사용할 수 있다.==========================");
console.log(i+i2);
console.log(s+s2);

//원시타입에 메소드가 호출 될 때,
//임시 Wrapper 객체가 만들어져 메소드 호출이 일어난 뒤 사라진다.(유사객체!!)
console.log("===원시타입도 메소드 호출이 가능하다?==========================");
console.log(b.valueOf()); //JSEngine안에서 new Boolean(b).valueOf();
console.log(b2.valueOf());

