let scrollmenu = document.createElement('div');
scrollmenu.align ="center";
scrollmenu.className = "scrollmenu";
document.body.appendChild(scrollmenu);

var frm = document.getElementById("gtu");
var goe = document.getElementById("goe");

goe.remove()

let form = document.createElement("form");
form.innerHTML ="<div class='container'><div class='left'><input type='text'name='' id='cari' onkeyup='prosesMenu()' placeholder='search'></div></div>";
frm.appendChild(form);

let a1 = document.createElement('span');
a1.innerHTML = "<a class='film' href=' fvod/1.one.piece.(2023).dubbing.html '><button><img class='gfilm' src=' gambar/0ne1.jpg ' alt=' eps.1 '></button></a>";
scrollmenu.appendChild(a1);

let a2 = document.createElement('span');
a2.innerHTML = "<a class='film' href=' fvod/2.one.piece.(2023).dubbing.html '><button><img class='gfilm' src=' gambar/0ne2.jpg ' alt=' eps.2 '></button></a>";
scrollmenu.appendChild(a2);

let a3 = document.createElement('span');
a3.innerHTML = "<a class='film' href=' fvod/3.one.piece.(2023).dubbing.html '><button><img class='gfilm' src=' gambar/0ne3.jpg ' alt=' eps.3 '></button></a>";
scrollmenu.appendChild(a3);

let a4 = document.createElement('span');
a4.innerHTML = "<a class='film' href=' fvod/4.one.piece.(2023).dubbing.html '><button><img class='gfilm' src=' gambar/0ne4.jpg ' alt=' eps.4 '></button></a>";
scrollmenu.appendChild(a4);

let a5 = document.createElement('span');
a5.innerHTML = "<a class='film' href=' fvod/5.one.piece.(2023).dubbing.html '><button><img class='gfilm' src=' gambar/0ne5.jpg ' alt=' eps.5 '></button></a>";
scrollmenu.appendChild(a5);

let a6 = document.createElement('span');
a6.innerHTML = "<a class='film' href=' fvod/6.one.piece.(2023).dubbing.html '><button><img class='gfilm' src=' gambar/0ne6.jpg ' alt=' eps.6 '></button></a>";
scrollmenu.appendChild(a6);

let a7 = document.createElement('span');
a7.innerHTML = "<a class='film' href=' fvod/7.one.piece.(2023).dubbing.html '><button><img class='gfilm' src=' gambar/0ne7.jpg ' alt=' eps.7 '></button></a>";
scrollmenu.appendChild(a7);

let a8 = document.createElement('span');
a8.innerHTML = "<a class='film' href=' fvod/8.one.piece.(2023).dubbing.html '><button><img class='gfilm' src=' gambar/0ne8.jpg ' alt=' eps.8 '></button></a>";
scrollmenu.appendChild(a8);
