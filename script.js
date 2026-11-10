
document.getElementById('menu').addEventListener('click',function(){document.getElementById('nav').classList.toggle('open');});
var q=document.getElementById('quiz');
if(q){q.addEventListener('submit',function(e){e.preventDefault();
var c=0,a=0,k={q1:'n',q2:'t',q3:'i'};
for(var n in k){var v=q.elements[n].value;if(v){a++;if(v===k[n])c++;}}
var r=document.getElementById('res');
if(a<3){r.textContent='Responda a todas as perguntas.';return;}
r.textContent=c===3?'Parabéns! 3/3 – Já sabe que a prevenção e o apoio fazem a diferença. 🌟':'Acertou '+c+'/3. Reveja a página “O Tema” e tente de novo.';});}
