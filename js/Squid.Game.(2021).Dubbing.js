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
a1.innerHTML = "<a class='film' href=' fvod/1.Squid.Game.(2021).Dubbingv.html '><button><img class='gfilm' src=' gambar/squid1.jpg ' alt=' eps.1 '></button></a>";
scrollmenu.appendChild(a1);

let a2 = document.createElement('span');
a2.innerHTML = "<a class='film' href=' fvod/2.Squid.Game.(2021).Dubbingv.html '><button><img class='gfilm' src=' gambar/squid2.jpg ' alt=' eps.2 '></button></a>";
scrollmenu.appendChild(a2);