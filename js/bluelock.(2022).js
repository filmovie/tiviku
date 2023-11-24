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

let a8 = document.createElement('span');
a8.innerHTML = "<a class='film' href=' fvod/8.bluelock.(2022)v.html '><button><img class='gfilm' src=' gambar/block8.jpg ' alt=' eps.08 '></button></a>";
scrollmenu.appendChild(a8);

let a9 = document.createElement('span');
a9.innerHTML = "<a class='film' href=' fvod/9.bluelock.(2022)v.html '><button><img class='gfilm' src=' gambar/block9.jpg ' alt=' eps.09 '></button></a>";
scrollmenu.appendChild(a9);

let a10 = document.createElement('span');
a10.innerHTML = "<a class='film' href=' fvod/10.bluelock.(2022)v.html '><button><img class='gfilm' src=' gambar/block10.jpg ' alt=' eps.10 '></button></a>";
scrollmenu.appendChild(a10);

let a11 = document.createElement('span');
a11.innerHTML = "<a class='film' href=' fvod/11.bluelock.(2022)v.html '><button><img class='gfilm' src=' gambar/block11.jpg ' alt=' eps.11 '></button></a>";
scrollmenu.appendChild(a11);

let a12 = document.createElement('span');
a12.innerHTML = "<a class='film' href=' fvod/12.bluelock.(2022)v.html '><button><img class='gfilm' src=' gambar/block12.jpg ' alt=' eps.12 '></button></a>";
scrollmenu.appendChild(a12);

let a13 = document.createElement('span');
a13.innerHTML = "<a class='film' href=' fvod/13.bluelock.(2022)v.html '><button><img class='gfilm' src=' gambar/block13.jpg ' alt=' eps.13 '></button></a>";
scrollmenu.appendChild(a13);