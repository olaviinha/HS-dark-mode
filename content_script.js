const switch_location = '.bg-header-main .justify-between > .flex.items-center:last-child';
const dark_mode_switch = '<label class="dark-switch flex justify-between items-center cursor-pointer md:inline-flex md:justify-start"><input type="checkbox" class="sr-only switch__input" id="dark-mode" checked=""><div onclick="" class="switch theme-switch relative inline-block w-50 h-24 rounded-full md:ml-16"><div class="switch__knob absolute h-24 w-24 rounded-full"></div></div></label>';
const html = document.querySelector('html');
let dark_mode_off = window.localStorage.getItem('theme');

// Toggle theme
function changeTheme() {
	html.classList.toggle('dark');
	// Remember theme
	if(html.classList.contains('dark')) {
		window.localStorage.removeItem('theme');
	} else {
		window.localStorage.setItem('theme', 'original');
	}
}

// Enable dark theme on pageload
if(!dark_mode_off && window.self === window.top) html.classList.add('dark');

document.onreadystatechange = function () {
	// Inject theme toggle switch once page loaded
	if (window.self === window.top && (document.readyState === 'complete' || document.readyState === 'interactive')) {
		let switch_location_el = document.querySelector(switch_location);
		if(switch_location_el) {
			document.querySelector(switch_location).insertAdjacentHTML('beforeend', dark_mode_switch);
			document.querySelector('#dark-mode').checked=!dark_mode_off;
			document.querySelector('.theme-switch').onclick = function() { changeTheme(); }
		}

	}
	// Additional styles for iframes ("HS Live" articles etc.)
	if (window.self !== window.top) {
		html.classList.add('dark-iframe');
	}
}
