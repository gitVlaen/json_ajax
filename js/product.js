
$(document).ready(function(){

	$("#color li:first-child").mouseover(function(){

		$("#cimg").attr("src","img/img_7.jpg");

	});

	$("#color li:nth-child(2)").mouseover(function(){

		$("#cimg").attr("src","img/img_6.jpg");

	});

	$("#color li:nth-child(3)").mouseover(function(){

		$("#cimg").attr("src","img/img_3.jpg");

	});

	$("#color li:last-child").mouseover(function(){

		$("#cimg").attr("src","img/img_8.jpg");

	});
});
