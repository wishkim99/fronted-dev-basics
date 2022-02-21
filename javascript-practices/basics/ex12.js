/**
 * Array 확장(prototype 기반의 확장): List 메소드 추가
 */
Array.prototype.insert=function(index, value){
    if(value instanceof Array){
        // for(var i=0; i<value.length; i++){
        //     this.splice(index++, 0, value[i]);
        // }
        console.log(this); //a라는 걸 알 수 있음

        var f=function(e){
            this.splice(index++, 0, e);
        };

        //어휘상의 this=> 여기서의 this
        //오류!!
        //콜백 안의 this는 예측 못한다(어휘상의 this와 일치하지 않는다.)
        // value.forEach(function(e){
        //   this.splice(index++, 0, e);  
        // });

     
        //해결 방법1
        // var _this=this;
        // value.forEach(function(e){ //함수안에 this는 value가 아님, 그냥 호출하는 것=> 함수 안에서의 this는 조심해라!!!
        //     console.log("!!!!!"+ _this); //this는 전역객체
        //     _this.splice(index++, 0, e);
        // });

        //해결방법2: 함수의 bind로 함수 실행 때의 this를 세팅 해줄 수 있다.
        value.forEach(function(e){
            this.splice(index++, 0, e);  
        }.bind(this)); //호출 됐을 때 bind로 묶여있는 this를 이걸로 해달라는 의미

        // value=this.forEach(function(e){ //함수안에 this는 value가 아님, 그냥 호출하는 것
        //     console.log(this); //this는 전역객체
        //     this.splice(index++, 0, e);
        // });

        //호출과 동시에 this를 쓰고 싶으면 call apply 사용하기
        
    }else{
        this.splice(index, 0, value);   
    }
}

Array.prototype.remove=function(index){
    this.splice(index, 1);
}

//List로 사용하기
var a=[1,2,4];
console.log(a);

a.insert(2,3);
console.log(a);


a.remove(3);
console.log(a);

a.insert(2, ['a', 'b', 'c']) //기대 [1,2,'a', 'b', 'c']
console.log(a) //결과