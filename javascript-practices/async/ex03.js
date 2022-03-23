const fetch=require('./ex02');

const ex03 = async function(param){ //await를 쓰는 함수는 async를 붙이면 됨 
   try{
    const res=await fetch(param);
    console.log(res);
   }catch(err){
       console.error(err);
   }
    
}

ex03('param-data');
ex03('param-data');
console.log('wait...');
