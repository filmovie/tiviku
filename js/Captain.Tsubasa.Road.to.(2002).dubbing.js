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
a1.innerHTML = "<a class='film' href=' fvod/1.Captain.Tsubasa.Road.to.(2002).dubbingv.html '><button class='gf'><p><b>eps.01</b></p></button></a>";
scrollmenu.appendChild(a1);

let a2 = document.createElement('span');
a2.innerHTML = "<a class='film' href=' fvod/2.Captain.Tsubasa.Road.to.(2002).dubbingv.html '><button class='gf'><p><b>eps.02</b></p></button></a>";
scrollmenu.appendChild(a2);

let a3 = document.createElement('span');
a3.innerHTML = "<a class='film' href=' fvod/3.Captain.Tsubasa.Road.to.(2002).dubbingv.html '><button class='gf'><p><b>eps.03</b></p></button></a>";
scrollmenu.appendChild(a3);

let a4 = document.createElement('span');
a4.innerHTML = "<a class='film' href=' fvod/4.Captain.Tsubasa.Road.to.(2002).dubbingv.html '><button class='gf'><p><b>eps.04</b></p></button></a>";
scrollmenu.appendChild(a4);

let a5 = document.createElement('span');
a5.innerHTML = "<a class='film' href=' fvod/5.Captain.Tsubasa.Road.to.(2002).dubbingv.html '><button class='gf'><p><b>eps.05</b></p></button></a>";
scrollmenu.appendChild(a5);