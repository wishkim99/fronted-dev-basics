/**
 * Default parameter
 */

const print=function(strs, end='\n'){
    console.log(strs.join(end));
}

print(['Always', 'with', 'me']); //개행으로 함수 관리
print(['Always', 'with', 'me'], ' '); //space로 함수 관리
