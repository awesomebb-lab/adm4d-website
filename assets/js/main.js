(function(){var s=document.getElementById('sticky'),h=document.querySelector('.hero');
function f(){s.classList.toggle('on',window.scrollY>h.offsetHeight+40)}addEventListener('scroll',f,{passive:true});f()})();

(function(){var M=['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
var now=new Date(),y=now.getFullYear(),m=now.getMonth(),sel=null,slot=null;
var days=document.getElementById('days'),name=document.getElementById('mname'),slots=document.getElementById('slots'),book=document.getElementById('book');
function draw(){name.textContent=M[m]+' '+y;days.innerHTML='';var first=new Date(y,m,1),off=(first.getDay()+6)%7,n=new Date(y,m+1,0).getDate();
for(var i=0;i<off;i++)days.appendChild(document.createElement('span'));
for(var d=1;d<=n;d++){var b=document.createElement('button');b.type='button';b.textContent=d;var dt=new Date(y,m,d),wd=dt.getDay();
b.disabled=dt<new Date(now.getFullYear(),now.getMonth(),now.getDate())||wd===0||wd===6;
if(sel&&sel.getTime()===dt.getTime())b.className='sel';
b.addEventListener('click',(function(dt){return function(){sel=dt;slot=null;slots.classList.add('on');book.classList.remove('on');slots.querySelectorAll('button').forEach(function(x){x.classList.remove('sel')});draw()}})(dt));days.appendChild(b)}}
document.getElementById('prev').onclick=function(){m--;if(m<0){m=11;y--}draw()};document.getElementById('next').onclick=function(){m++;if(m>11){m=0;y++}draw()};
slots.querySelectorAll('button').forEach(function(b){b.addEventListener('click',function(){slot=b.textContent;slots.querySelectorAll('button').forEach(function(x){x.classList.remove('sel')});b.classList.add('sel');book.classList.add('on')})});
book.addEventListener('submit',function(ev){ev.preventDefault();var n=book.n.value.trim(),e=book.e.value.trim();if(!n||!e||!sel||!slot)return;
var when=sel.getDate()+' de '+M[sel.getMonth()]+' de '+sel.getFullYear()+', '+slot;
location.href='mailto:hola@adm4d.com?subject='+encodeURIComponent('Reunión de 15 min — '+n)+'&body='+encodeURIComponent('Nombre: '+n+'\nCorreo: '+e+'\nFecha: '+when+'\n\nSolicito una videollamada de 15 minutos.')});
draw()})();

(function(){var b=document.getElementById('menuBtn'),m=document.getElementById('navmenu');
if(!b||!m)return;
function set(o){m.classList.toggle('on',o);document.body.classList.toggle('locked',o);b.setAttribute('aria-expanded',o);b.textContent=o?'Cerrar':'Menú'}
b.addEventListener('click',function(){set(!m.classList.contains('on'))});
m.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){set(false)})});
addEventListener('keydown',function(e){if(e.key==='Escape')set(false)})})();
