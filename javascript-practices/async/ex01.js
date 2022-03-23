const ex01=function(param, callback){ //결과를 callback에 넣음
    //비동기 코드: 파일 시스템 접근, 네트워크 통신, SQL to DB, setTimeout
    
    setTimeout (function(){
        if(param==='param-data'){
            callback(null, 'ok');
        } else{
            callback(new Error('fail'), null);
        }
    }, 2000);
    
}

//test01: success
ex01('param-data', function(error, res){
    if(error){
        console.log(error);
    }else{
        console.log(res); //성공했을 때의 결과
    }
    
});

//test02: fail
ex01('param-error', function(error, res){
    if(error){
        console.log(error);
    }else{
        console.log(res); //성공했을 때의 결과
    }
});



console.log("wait....");