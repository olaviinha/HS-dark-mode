var invert = setInterval(function(){
	document.querySelector('body').style='filter: invert(1) hue-rotate(180deg) brightness(.85)';
	document.querySelectorAll('img, .bg-header-main, iframe').forEach(function(revert) { revert.style='filter: invert(1) hue-rotate(180deg) brightness(1)' });
	document.querySelectorAll('iframe').forEach(function(dim) { dim.style='brightness(.65)' });
}, 1000);
