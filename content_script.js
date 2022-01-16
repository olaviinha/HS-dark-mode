var switch_location = '.bg-header-main .justify-between > .flex.items-center:last-child';
var dark_mode_switch = '<label class="dark-switch flex justify-between items-center cursor-pointer md:inline-flex md:justify-start"><input type="checkbox" class="sr-only switch__input" id="dark-mode" checked=""><div onclick="javascript:document.querySelector(\'body\').classList.toggle(\'dark\')" class="switch relative inline-block w-50 h-24 rounded-full md:ml-16"><div class="switch__knob absolute h-24 w-24 rounded-full"></div></div></label>';
var theme_added = false;

var enable_theme = setInterval(function(){
  // Add dark theme
	if(document.querySelector('body') && !theme_added) {
		document.querySelector('body').classList.add('dark');
		theme_added = true;
	}
  // Add switch
	if (document.readyState === "complete" || document.readyState === "interactive") {
		document.querySelector(switch_location).insertAdjacentHTML("beforeend", dark_mode_switch);
		clearInterval(enable_theme); // Done
	}
}, 20);
