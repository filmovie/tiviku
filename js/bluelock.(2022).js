let scrollmenu = document.createElement('div');
scrollmenu.align ="center";
scrollmenu.className = "scrollmenu";
document.body.appendChild(scrollmenu);

var frm = document.getElementById("gtu");
var goe = document.getElementById("goe");

goe.remove()

let form = document.createElement("form");
form.innerHTML ="<div class='container'><div class='left'><input type='text'name='' id='cari' onkeyup='prosesMenu()' placeholder='search'><br><br></div></div>";
frm.appendChild(form);

let a1 = document.createElement('span');
a1.innerHTML = "<a class='film' href=' fvod/1.bluelock.(2022)v.html '><button><img class='gfilm' src=' gambar/block1.jpg ' alt=' eps.01 '></button></a>";
scrollmenu.appendChild(a1);

let a2 = document.createElement('span');
a2.innerHTML = "<a class='film' href=' fvod/2.bluelock.(2022)v.html '><button><img class='gfilm' src=' gambar/block2.jpg ' alt=' eps.02 '></button></a>";
scrollmenu.appendChild(a2);

let a3 = document.createElement('span');
a3.innerHTML = "<a class='film' href=' fvod/3.bluelock.(2022)v.html '><button><img class='gfilm' src=' gambar/block3.jpg ' alt=' eps.03 '></button></a>";
scrollmenu.appendChild(a3);

let a4 = document.createElement('span');
a4.innerHTML = "<a class='film' href=' fvod/4.bluelock.(2022)v.html '><button><img class='gfilm' src=' gambar/block4.jpg ' alt=' eps.04 '></button></a>";
scrollmenu.appendChild(a4);

let a5 = document.createElement('span');
a5.innerHTML = "<a class='film' href=' fvod/5.bluelock.(2022)v.html '><button><img class='gfilm' src=' gambar/block5.jpg ' alt=' eps.05 '></button></a>";
scrollmenu.appendChild(a5);

let a6 = document.createElement('span');
a6.innerHTML = "<a class='film' href=' fvod/6.bluelock.(2022)v.html '><button><img class='gfilm' src=' gambar/block6.jpg ' alt=' eps.06 '></button></a>";
scrollmenu.appendChild(a6);

let a7 = document.createElement('span');
a7.innerHTML = "<a class='film' href=' fvod/7.bluelock.(2022)v.html '><button><img class='gfilm' src=' gambar/block7.jpg ' alt=' eps.07 '></button></a>";
scrollmenu.appendChild(a7);