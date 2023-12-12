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
a1.innerHTML = "<a class='film' href=' fvod/1.Avatar.The.Legend.Of.Aang.(2005).dubbing.html '><button class='gf'><p><b>eps.01</b></p></button></a>";
scrollmenu.appendChild(a1);

let a2 = document.createElement('span');
a2.innerHTML = "<a class='film' href=' fvod/2.Avatar.The.Legend.Of.Aang.(2005).dubbing.html '><button class='gf'><p><b>eps.02</b></p></button></a>";
scrollmenu.appendChild(a2);

let a3 = document.createElement('span');
a3.innerHTML = "<a class='film' href=' fvod/3.Avatar.The.Legend.Of.Aang.(2005).dubbing.html '><button class='gf'><p><b>eps.03</b></p></button></a>";
scrollmenu.appendChild(a3);

let a4 = document.createElement('span');
a4.innerHTML = "<a class='film' href=' fvod/4.Avatar.The.Legend.Of.Aang.(2005).dubbing.html '><button class='gf'><p><b>eps.04</b></p></button></a>";
scrollmenu.appendChild(a4);

let a5 = document.createElement('span');
a5.innerHTML = "<a class='film' href=' fvod/5.Avatar.The.Legend.Of.Aang.(2005).dubbing.html '><button class='gf'><p><b>eps.05</b></p></button></a>";
scrollmenu.appendChild(a5);

let a6 = document.createElement('span');
a6.innerHTML = "<a class='film' href=' fvod/6.Avatar.The.Legend.Of.Aang.(2005).dubbing.html '><button class='gf'><p><b>eps.06</b></p></button></a>";
scrollmenu.appendChild(a6);

let a7 = document.createElement('span');
a7.innerHTML = "<a class='film' href=' fvod/7.Avatar.The.Legend.Of.Aang.(2005).dubbing.html '><button class='gf'><p><b>eps.07</b></p></button></a>";
scrollmenu.appendChild(a7);

let a8 = document.createElement('span');
a8.innerHTML = "<a class='film' href=' fvod/8.Avatar.The.Legend.Of.Aang.(2005).dubbing.html '><button class='gf'><p><b>eps.08</b></p></button></a>";
scrollmenu.appendChild(a8);

let a9 = document.createElement('span');
a9.innerHTML = "<a class='film' href=' fvod/9.Avatar.The.Legend.Of.Aang.(2005).dubbing.html '><button class='gf'><p><b>eps.09</b></p></button></a>";
scrollmenu.appendChild(a9);

let a10 = document.createElement('span');
a10.innerHTML = "<a class='film' href=' fvod/10.Avatar.The.Legend.Of.Aang.(2005).dubbing.html '><button class='gf'><p><b>eps.10</b></p></button></a>";
scrollmenu.appendChild(a10);