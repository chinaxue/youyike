var designWidth=750;
// var xian=document.querySelectorAll('.mtbd .xian');
// var mtbd=document.querySelector('.mtbd').offsetWidth;
window.addEventListener('resize',resize);
resize();
function resize(){
	// for(var i=0;i<xian.length;i++){
	// 	xian[i].style.width=mtbd+'px';
	// }
	var w=document.documentElement.clientWidth;
	var fontSize=w/designWidth*100;
	document.documentElement.style.fontSize=fontSize+'px';
}
var mySwiper = new Swiper('.swiper-container', {
	autoplay: 3000,
	loop:true
})














