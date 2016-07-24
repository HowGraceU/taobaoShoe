var mySlide=document.getElementById("slide");
var myDl=mySlide.getElementsByTagName("dl");
var last=0;
for (var i = 0; i < myDl.length; i++) {
	myDl[i].getElementsByTagName("dt")[0].style.backgroundPosition=i*-48+"px "+0;
	myDl[i].index=i;
	myDl[i].onmouseenter=function () {
		if(last<this.index){
			for (var i = last + 1; i <= this.index; i++) {
				myDl[i].style.left=i*myDl[i].getElementsByTagName('dt')[0].offsetWidth+"px";
			}
			last=this.index;
		}else if(last>this.index){
			for (var i = last; i >= this.index+1; i--){
				myDl[i].style.left=i*myDl[i].getElementsByTagName('dt')[0].offsetWidth+myDl[i].getElementsByTagName('dd')[0].offsetWidth+"px";
			}
			last=this.index;
		}
	}
}

function toTopFun(){
	var scroll=document.body.scrollTop+document.documentElement.scrollTop,
	cha=scroll/10;
	if(scroll>0){
		document.body.scrollTop-=cha;
		document.documentElement.scrollTop-=cha;
		timer=setTimeout(toTopFun,30);
	}
}

var rightNav=document.getElementById("rightNav"),
timer=null;
rightNav.onclick=function(en){
	oEvent = en || window.event;
	oTarget = oEvent.target || oEvent.srcElement;
	if(oTarget.tagName === 'A'){
		if(oTarget.id){
			toTopFun();
		}else{
			clearTimeout(timer);
		}
	}
}
		// for (var i = 0; i < myDl.length; i++) {
		// 	if(i<=this.index){
		// 		myDl[i].style.left=i*myDl[i].getElementsByTagName('dt')[0].offsetWidth+"px";
		// 	}else{
		// 		myDl[i].style.left=i*myDl[i].getElementsByTagName('dt')[0].offsetWidth+myDl[i].getElementsByTagName('dd')[0].offsetWidth+"px";
		// 	}
		// }
		//
		//
		//
		// myDl[i].onmouseleave=function () {
		// 	for (var j = 1; j <= this.index; j++) {
		// 		myDl[j].style.left=parseInt(myDl[j].style.left)+750+"px";
		// 	}
		// }