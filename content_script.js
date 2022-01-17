var switch_location = '.bg-header-main .justify-between > .flex.items-center:last-child';
var dark_mode_switch = '<label class="dark-switch flex justify-between items-center cursor-pointer md:inline-flex md:justify-start"><input type="checkbox" class="sr-only switch__input" id="dark-mode" checked=""><div onclick="" class="switch theme-switch relative inline-block w-50 h-24 rounded-full md:ml-16"><div class="switch__knob absolute h-24 w-24 rounded-full"></div></div></label>';
var user_setting = window.localStorage.getItem('theme');

// Toggle theme
function changeTheme() {
	var b = document.querySelector('body');
	b.classList.toggle('dark');
	// Remember user's theme setting
	if(b.classList.contains('dark')) {
		window.localStorage.removeItem('theme');
	} else {
		window.localStorage.setItem('theme', 'original');
	}
}

// Enable dark theme
if(!user_setting){
	var enable_theme = setInterval(function(){
		if(document.querySelector('body')) {
			document.querySelector('body').classList.add('dark');
			clearInterval(enable_theme);
		}
	}, 20);
}

// Add toggle switch
document.onreadystatechange = function () {
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    document.querySelector(switch_location).insertAdjacentHTML('beforeend', dark_mode_switch);
	document.querySelector('#dark-mode').checked=!user_setting;
	document.querySelector('.theme-switch').onclick = function() { changeTheme(); }
  }
}

