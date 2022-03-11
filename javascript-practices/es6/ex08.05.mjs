/**
 * name$unamed export
 */

const add=function(a,b){
    return a+b;
}

const substract=function(a,b){
    return a-b;
}

const divide=function(a,b){
    return a/b;
}

export {add, substract, divide}

export default{add, substract} //default있을 땐 이름(math)으로 받아줌