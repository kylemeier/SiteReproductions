
var navicon = document.getElementById('navicon');

navicon.addEventListener('click', function() {
    var d = document.getElementById('navbar-toggle');
    if (d.className == 'navbar-collapse'){
	d.className = 'navbar-expand';
	}else{
		d.className = "navbar-collapse";	
	}
}, false);

// navicon.addEventListener('click', function() {
//     var d = document.getElementById('navbar-toggle');
// 	d.className = "navbar-collapse";
// }, false);

