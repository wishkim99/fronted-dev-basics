/*
자바 스크립트 객체3: 확장
*/

var o={
    name: "name",
    age: 10
};

var f=function(){
    console.log('Hello World');
}

console.log(o);
f();

console.log("==확장===============");
o.another={
    name: '마이콜',
    age: 30
}; 

f.another={
    name: '마이콜',
    age: 30
}; 

console.log(f);

console.log("==기본 타입의 (primitive type)은 확장되지 않는다.======================");
var i1=10;
var i2=new Number(10);
i2.another={
    name: '마이콜',
    age: 30
};

console.log(i2);

i1.another={}; //에러는 안나지만 그냥 안됨 //new Number(i1).another={}
console.log(i1.another);