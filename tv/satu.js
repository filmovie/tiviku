const body = document.querySelector('body');

const div = document.querySelector('article');

const btn = document.getElementById('btn');

const script=
document.createElement('script');

function buka() {
				if(div.className=='tutup') {
								div.className='';
								btn.innerHTML='<b>buka</b>';
				}else {
							 div.className='tutup';
							 btn.innerHTML='<b>tutup</b>';
							  script.src="dua.js";
								body.appendChild(script);
				}
}
