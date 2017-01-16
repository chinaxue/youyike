var designWidth=750;
window.addEventListener('resize',resize);
resize();
function resize(){
	var w=document.documentElement.clientWidth;
	var fontSize=w/designWidth*100;
	document.documentElement.style.fontSize=fontSize+'px';
}
var mySwiper = new Swiper('.swiper-container', {
	autoplay: 3000,
	loop:true
})














