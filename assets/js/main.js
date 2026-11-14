var scenarios=[
 {q:"In every team meeting, a senior mocks a junior colleague's regional accent and calls him by a nickname based on it. Others laugh nervously.",a:true,f:"Yes — harassment. Mocking an accent/regional identity is discriminatory + verbal harassment. The nervous laughter is not enjoyment, and 'every meeting' makes it a hostile-environment pattern."},
 {q:"A manager gives an employee tough, specific feedback on a delayed project in a private 1:1, and agrees on a support plan.",a:false,f:"Not harassment. Firm, private, work-focused feedback with support is legitimate management — even when it's uncomfortable to hear."},
 {q:"A colleague keeps sending flirty messages and memes late at night on the team WhatsApp group to one team member, who has started muting the group.",a:true,f:"Yes — harassment. Unwelcome sexualised messages on a work channel are sexual + cyber harassment. Muting/avoiding is a classic sign the behaviour is unwelcome."},
 {q:"A team lead deliberately stops inviting one member to project meetings and withholds information she needs, after she disagreed with him once.",a:true,f:"Yes — harassment. Deliberate exclusion and information-withholding to punish someone is bullying / psychological harassment, and it sabotages her work."},
 {q:"Two teammates who are close friends tease each other equally, both laugh genuinely, and either could say stop without any awkwardness.",a:false,f:"Not harassment — mutual, equal, welcome banter between peers is fine. The moment one side feels unable to say 'stop', the line is crossed."}
];
var si=0, answered=false;
function renderScen(){
  document.getElementById('scenQ').textContent = scenarios[si].q;
  document.getElementById('scenCount').textContent = 'Scenario '+(si+1)+' of '+scenarios.length;
  var f=document.getElementById('scenF'); f.className='scen-feedback'; f.textContent='';
  answered=false;
}
function answerScen(val){
  var s=scenarios[si], f=document.getElementById('scenF');
  var correct = (val===s.a);
  f.className='scen-feedback show '+(s.a?'bad':'good');
  f.innerHTML = '<b>'+(correct?'✓ You read it right. ':'Not quite — here\'s the read: ')+'</b> '+s.f;
  answered=true;
}
function nextScen(){ si=(si+1)%scenarios.length; renderScen(); }
renderScen();

function showTab(e,id){
  var btns=document.querySelectorAll('.tab-btn'); for(var i=0;i<btns.length;i++) btns[i].classList.remove('active');
  e.currentTarget.classList.add('active');
  var panels=document.querySelectorAll('.tab-panel'); for(var j=0;j<panels.length;j++) panels[j].classList.remove('active');
  document.getElementById(id).classList.add('active');
}
