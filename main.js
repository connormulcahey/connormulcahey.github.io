
var hr = (new Date()).getHours();

if (hr < 6 || hr > 6) {
	$('body').addClass('night');
}
