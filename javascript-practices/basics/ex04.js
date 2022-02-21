/*
변수의 범위(Scope)
1. 자바 스크립트는 어휘에서 변수의 범위를 알 수 있다.(Lexical Scope)
2. ES6 이전(<=ES5)
    - 자바와 같은 블록 범위를 지원하지 못했다.
    - 함수범위
    - function(){...} 안에서 변수 앞에 var 키워드를 사용하면 함수 범위를 가지게 된다.
    - 만약에 var 키워드가 없이 함수 안에서 변수를 정의하면 전역 범위를 가지게 된다.(hoisting)
3. ES6 이후(ES6)
    - Block Scope을 적용할 수 있는 두 개의 키워드를 지원(let, const)
    - let: 변수
    - const: 상수

4. 결론
    const/let만 사용하고 *반드시 붙히자.(안 붙이면 hoisting)
*/

var i=10;
var f=function(){
    var i=30;
    j=100;
    console.log(i);
    i=j-1;
}

//var키워드는 함수블록에서 함수 범위만 가지게 할 때 적용된다.
if(90+10==100){
    var k=20;
}

{
    let x=1000000;
    const PI=3.14;
    x=100;

    //상수이기 떄문에 에러
   // PI=0;

}

// error: 접근이 안된다.
// console.log(x);

f();
console.log(i);
console.log(j);
console.log(k);

// o=10;
// o;

// var p = undefined;
/*
var f=function(){
     i=10; //var를 안해주면 global 영역이 됨-> 밑에 i를 참조할 수 있게 됨
}

f();

if(i>10){
}
*/
