let vid1 = 'https://video.e-droid.net/files_busc/v2189355_2482073551.mp4';
let log1 =
'https://www.mediafire.com/convkey/4d1a/xrc3k4vz2z33lp84g.jpg';
let vid2 =
'https://video.e-droid.net/files_busc/v2196186_2482073551.mp4';
let log2 = 'https://www.mediafire.com/convkey/4d1a/xrc3k4vz2z33lp84g.jpg';
let vid3 = 'https://video.e-droid.net/files_busc/v2196189_2482073551.mp4';
let log3 = 'https://www.mediafire.com/convkey/4d1a/xrc3k4vz2z33lp84g.jpg';
let vid4 = 'https://video.e-droid.net/files_busc/v2196191_2482073551.mp4';
let log4 = 'https://www.mediafire.com/convkey/4d1a/xrc3k4vz2z33lp84g.jpg';

$('.thumb-1').on('click', function(){
	$('.vimv').attr('src', vid1);
	$('.vimv').attr('poster',log1);
});

$('.thumb-2').on('click', function(){
	$('.vimv').attr('src',vid2);
	$('.vimv').attr('poster',log2);
});

$('.thumb-3').on('click', function(){
	$('.vimv').attr('src', vid3);
$('.vimv').attr('poster', log3);
});

$('.thumb-4').on('click', function(){
	$('.vimv').attr('src', vid4);
$('.vimv').attr('poster', log4);
});
