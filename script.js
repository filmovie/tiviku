var vid1 = 'https://video.e-droid.net/files_busc/v2091515_2354874901.mp4';
let vid2 =
'https://video.e-droid.net/files_busc/v2091556_2354874901.mp4';
let vid3 = 'https://www.themoviedb.org/t/p/w220_and_h330_face/l5SB4myR9UekeDGDJU2pkqTSfxx.jpg';
var vid4 = 'https://dl.dropbox.com/s/j9mwbw92bjaddu5/Noise.%282023%29.mp4';


$('.thumb-1').on('click', function(){
	console.log('hola');
	$('video').attr('src', vid1);
});

$('.thumb-2').on('click', function(){
	$('.vimv').attr('src', vid2);
});

$('.thumb-3').on('click', function(){
	$('.vimv').attr('src', vid3);
});

$('.thumb-4').on('click', function(){
	$('video').attr('src', vid4);
});
