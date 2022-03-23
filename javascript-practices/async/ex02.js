const fetch=function(param, callback){ //결과를 callback에 넣음
    return new Promise(function(resolve, reject){//반드시 응답을 하겠다
         //비동기 코드: 파일 시스템 접근, 네트워크 통신, SQL to DB, setTimeout
         setTimeout(function() {
            if(param === 'param-data') {
                resolve('ok');
            } else {
                reject(new Error('fail'));
            }
        }, 2000);    
    }) 
}
if(require.main == module) {
    // test01: success
    fetch('param-data').then(function(res){
        console.log(res);
    });

    // test01: fail
    fetch('param-error').catch(function(error){
        console.error(error);
    });

    // 일반적으로
    // fetch('param....')
    //    .then(res => {                
    //    })
    //    .catch(error => {
    //    });

    console.log("wait.....");
} else {
    module.exports = fetch;
}

