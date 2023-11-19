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