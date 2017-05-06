
var hr = (new Date()).getHours();

if (hr < 6 || hr > 18) {
	$('body').addClass('night');
}
