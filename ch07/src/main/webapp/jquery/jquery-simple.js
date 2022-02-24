// 간단 jQuery 만들기

var jQuery = function(param) {
	if(typeof(param)	=== 'function') {
		window.addEventListener('load', param); //로딩되었을 때 함수의 해당 모든 값을 실행 
		return;
	}
	
	if(typeof(param) === 'string') {
		var elements = document.querySelectorAll(param); //par element가 들어가짐
		return new _jQuery(elements); //elements를 받아야 밑으로
	}	
}

var _jQuery = function(elements) {
	this.length = elements.length;
	for(var i = 0; i < elements.length; i++) {
		this[i] = elements[i];		
	}
}

_jQuery.prototype.jquery = 'jquery.simple.0.0.1';
_jQuery.prototype.css = function(name, value) {
	for(var i = 0; i < this.length; i++){
		this[i].style[name] = value;
	}
	
	return this;		
}

_jQuery.prototype.click = function(handler) {
	for(var i = 0; i < this.length; i++){
		this[i].addEventListener('click', handler);
	}
	
	return this;	
}

_jQuery.prototype.get = function(index) {
	return this[index];
}


var $ = jQuery;