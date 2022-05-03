var	client_id = '',
	client_secret = '',
	redirect_uri = encodeURI(''),
	scopes = "user-read-private user-read-email user-modify-playback-state " +
	"user-read-playback-position user-library-read streaming " +
	"user-read-playback-state user-read-recently-played playlist-read-private";

$('#login_btn').click(function() {
	let	logInUri = 'https://accounts.spotify.com/authorize' +
		'?client_id=' + client_id +
		'&response_type=code' +
		'&redirect_uri=' + redirect_uri +
		'&scope=' + scopes +
		'&show_dialog=true';
	window.open(logInUri, '_self',)
})
