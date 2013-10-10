function slideshow(){
	firstChild = document.getElementsByClassName("slide")[0];
	secondChild = document.getElementsByClassName("slide")[1];
	lastChild = document.getElementsByClassName("slide")[2];
	$(secondChild).animate({opacity:100}, 2000);
	$(firstChild).animate({opacity:0}, 2000);
	$(firstChild).insertAfter(lastChild);	
}
slideshow();
setInterval(slideshow, 5000);