var onTabClicked=function(){
	
	//unselected
	var liSelected=document.getElementsByClassName("selected");
	
	(lisSelected.length===1)&&(lisSelected[0].className="");		


	//select
	this.className='selected';
}
window.onload=function(){
	//var els=document.getElementByClassName("tab-box");
	//console.log(els);
	
	var divTabBox=document.getElementsByClassName("tab-box")[0];
	var ul=divTabBox.childNodes[1];
	
	var liTabs=ul.getElementsByTagName("li");
	
	for(var i=0; i<liTabs.length; i++){
		liTabs[i].onclick=onTabClicked;
	} 
		
	console.log(ul);
	
}