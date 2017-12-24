// array of images contained in ../img/
var imgUrls = [
	"01.jpg", "02.jpg", "03.jpg", "04.gif", "05.jpg", 
	"06.png", "07.jpg", "08.jpg", "09.jpg", "10.jpg", 
	"11.jpg", "12.png", "13.jpg", "14.png", "15.jpg", 
	"16.jpg", "17.jpg", "18.jpg", "19.jpg", "20.jpg",
	"21.jpg"
];

//selects two random images
function randomImg(){
	var length = imgUrls.length;
	function getRandomInt(min, max) {
    	return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	$("#img-one").attr("src", "../img/" + imgUrls[getRandomInt(1,length)]);
	$("#img-two").attr("src", "../img/" + imgUrls[getRandomInt(1,length)]);
}

var scrollPos; 

//skews the slash based on scroll position
function skewSlash(){
	scrollPos = $('body').scrollTop();
	scrollPos2 = scrollPos * .05;
	$('#slash').css("transform", "skew(" + scrollPos + "deg, " + scrollPos2 + "deg)");
}

$(document).ready(function(){

	randomImg();

	$(window).scroll(function(){
		skewSlash();
	});

});