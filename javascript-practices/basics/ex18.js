/**
 * URL 다루기
 */

var url1="http://mysite.com/user?name=둘리&no=10"
;

//1. escape: URL 전부 encoding, 사용 X, deprecated
var url2= escape(url1);
console.log(url2);

//2. encodeURI: parameter만 encoding, 사용(O)
var url3= encodeURI(url1);
console.log(url3);
//loacation.href=encodeURL(url1);

//3. encodeURIComponent: 값만 엔코딩 해야하는 경우, 사용(O)
var url4=encodeURIComponent(url1); //잘못 사용한 경우
console.log(url4);

//4.
//만들어야 할 URL
//http://mysite.com/user?no=10&name=둘리&email=dooly@gmail.com
var url="http://mysite.com/user";

var params={
    name: '둘리',
    email: 'dooly@gamil.com',
    no: 10
};

/*
jQuery는 dom element를 탐색하는 함수다

jQuery=function(){...}
$ = jQuery;
$object=$(" ")

jQuery("") <-> $("")

$.ajax({
    url: url,
    type: 'post',
    data: toQueryString(o)
})
*/
var toQueryString=function(o){
    var qs=[];

    for(prop in o){
       qs.push(prop+"="+encodeURIComponent(o[prop]));
    }

    return qs.join("&");
}

var url5= url+"?"+toQueryString(params);
console.log(url5);

