/**
 * named exportI
 * 
 * exports(require.js)와 유사하다. 이 모듈을 improt 할 때에는 destruting이 가능하다.
*/

const add=function(a,b){
    return a+b;
}

const substract=function(a,b){
    return a-b;
}

export {add, substract}