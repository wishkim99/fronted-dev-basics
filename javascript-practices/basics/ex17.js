console.log("==global object ========");

global.name='둘리'; //global로 variable context에 접근할 수 있음
console.log(name, global.name); //n이라는 변수는 variabe 변수로, 그러나 전역객체엔 포함되지 않음

//global은 property라고 생각
//node쪽에선 별로 중요하지 않지만 브라우저에선 글로벌이 중요

//cf
email='dooly@gmail.com'; //var나 let, const만 쓰면 하나의 모듈안에서 쓰지만 빼면 글로벌이 됨=> 다른곳에서 사용가능!!
console.log(email, global.email);