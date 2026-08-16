const questions = [
  // 5.5 Application of Nanotechnology in Industry
  {section:'5.5',topic:'Nanoscience',q:'Which statement correctly describes nanoscience?',options:['It studies substances larger than 1 metre.','It studies the processing of substances at a scale of about 1 nm to 100 nm.','It only studies radioactive substances.','It is the study of acids and alkalis only.'],answer:1,exp:'Nanosains（纳米科学）研究的是 nanoscale 范围内的物质处理，课本给出的范围约为 1 nm 至 100 nm。'},
  {section:'5.5',topic:'Nanotechnology',q:'What is nanotechnology?',options:['The production of energy only from sunlight.','The study of reactions that occur only at high temperature.','The development of substances or devices using the properties of nanoparticles.','The separation of mixtures using filtration only.'],answer:2,exp:'Nanotechnology 是利用 nanoparticles（纳米粒子）的特殊性质来发展材料、产品或装置，而不只是单纯观察很小的物体。'},
  {section:'5.5',topic:'Nanoscale',q:'Which object is clearly within the nanoscale range discussed in this topic?',options:['A 10 nm gold nanoparticle','A 5 μm red blood cell','A 1 mm full stop','A 2 cm coin'],answer:0,exp:'1–100 nm 属于 nanoscale。10 nm 的 gold nanoparticle 正在这个范围内；μm、mm、cm 都明显更大。'},
  {section:'5.5',topic:'Nanoparticles',q:'Why can nanoparticles be especially useful as coating agents?',options:['They always have a bright colour.','They are heavier than all ordinary particles.','They cannot interact with surfaces.','Their very small size allows them to coat surfaces more evenly.'],answer:3,exp:'纳米粒子非常细小，因此能够更均匀地覆盖材料表面，这也是 nanotechnology 在 coating 应用上的优势之一。'},
  {section:'5.5',topic:'Cosmetics',q:'Which is an advantage of using nanoparticles in some cosmetic products?',options:['They make all cosmetics completely harmless.','Their small size can allow better penetration and more even coverage.','They prevent every chemical reaction on the skin.','They make the product insoluble in all liquids.'],answer:1,exp:'课本以 cosmetics 为例指出，极小的 nanoparticles 可以更容易作用于皮肤，并且更均匀地覆盖表面；但这并不代表所有产品都绝对无害。'},
  {section:'5.5',topic:'Electronics',q:'Which application of nanotechnology is associated with semiconductors and electronics?',options:['Producing larger and less efficient circuits','Producing only biodegradable plastics','Producing smaller, more efficient semiconductors and high-conductivity wiring','Producing soap from vegetable oils'],answer:2,exp:'在 semiconductor/electronics 领域，nanotechnology 可帮助制造更小、更高效率的 semiconductor，并应用于高导电性的 wiring systems。'},
  {section:'5.5',topic:'Energy',q:'Which pair is an example of nanotechnology applications in energy and electricity?',options:['More efficient solar cells and longer-lasting batteries','Larger fuel tanks and thicker wires','Soap production and food colouring','Hard-water treatment and saponification'],answer:0,exp:'课本列出的 energy/electricity 应用包括更小、更高效率的 solar cells，以及更持久的 batteries。'},
  {section:'5.5',topic:'Textiles',q:'A fabric is water-resistant, dirt-resistant and provides UV protection. Which technology is most closely related to these improvements?',options:['Fermentation','Neutralisation','Saponification','Nanotechnology'],answer:3,exp:'Nanotechnology 可用于 textile，使布料具有防水、防污、防火、抗皱或 UV protection 等功能。'},
  {section:'5.5',topic:'Medicine',q:'Which is a medical application of nanotechnology?',options:['Making water harder','Developing highly sensitive testing devices and more effective drug delivery systems','Increasing the melting point of fats','Producing scum in hard water'],answer:1,exp:'医学领域的 nanotechnology 应用包括 highly sensitive testing devices，以及更有效、更精准的 drug delivery systems。'},
  {section:'5.5',topic:'Agriculture',q:'Which application is related to nanotechnology in agriculture?',options:['Producing calcium scum','Reducing the number of carbon atoms in graphite','Using more effective pesticides and more efficient fertilisation methods','Converting oils into soap'],answer:2,exp:'农业方面可利用 nanotechnology 提升 pesticide 的作用效率，也可以提高 fertilisation 的效率与覆盖效果。'},
  {section:'5.5',topic:'Graphene',q:'Graphene is best described as _____.',options:['an allotrope of carbon','a sodium salt of a fatty acid','a type of antibiotic','a heavy metal found in wastewater'],answer:0,exp:'Graphene 是 carbon allotrope（碳的同素异形体）之一，与 graphite 和 diamond 一样都由碳组成，但结构与性质不同。'},
  {section:'5.5',topic:'Graphene properties',q:'Which is NOT a physical property of graphene highlighted in this topic?',options:['Strong and hard','Transparent','A good conductor of heat and electricity','A poor electrical conductor with very high resistance'],answer:3,exp:'Graphene 的特点包括 strong, hard, transparent、良好的 heat/electricity conductivity、very low electrical resistance、impermeable 和 elastic。因此“poor conductor”错误。'},
  {section:'5.5',topic:'Graphene application',q:'Why is graphene suitable for many electronic applications?',options:['It reacts rapidly with all metals.','It has excellent electrical conductivity and very low electrical resistance.','It dissolves easily in water.','It is a sodium salt.'],answer:1,exp:'Graphene 的原子排列使电子传导表现优秀，而且 electrical resistance 很低，因此很适合 electronics。'},
  {section:'5.5',topic:'Graphene membrane',q:'Which application is most closely related to graphene membranes?',options:['Increasing the hardness of water','Producing animal fats','Water filtration and separation of gaseous mixtures','Making food sweeter'],answer:2,exp:'Graphene membrane 可应用在 water filtration，并用于分离某些 gaseous mixtures；这是 graphene 在 membrane 技术中的重要用途。'},
  {section:'5.5',topic:'Graphene composite',q:'A manufacturer wants a lightweight composite material with high mechanical strength. Why may graphene be useful?',options:['Graphene always produces oxygen gas.','Graphene neutralises all acids.','Graphene forms soap in water.','Graphene has high mechanical strength and can reinforce polymer composites.'],answer:3,exp:'Graphene 具有很高的 mechanical strength，因此可加入 polymer/composite materials，提升材料强度，同时保持较轻薄的特性。'},

  // 5.6 Application of Green Technology in Industrial Waste Management
  {section:'5.6',topic:'Definition',q:'What is Green Technology?',options:['Technology designed mainly to increase waste production','Technology or applications developed to minimise the negative effects of harmful human activities','Technology that must use fossil fuels','Technology used only inside chemical laboratories'],answer:1,exp:'Green Technology（绿色科技）的核心，是减少人类活动对环境造成的负面影响，并更可持续地使用资源。'},
  {section:'5.6',topic:'Energy sector',q:'Which is an example of Green Technology in the energy-supply sector?',options:['Solar and wind energy','Burning more coal without emission control','Producing more landfill waste','Adding heavy metals to wastewater'],answer:0,exp:'Green Technology 的 energy supply 可包括 renewable energy，例如 solar、hydro、geothermal 和 wind。'},
  {section:'5.6',topic:'Waste management',q:'Which pair represents Green Technology approaches in waste management?',options:['Open burning and dumping waste into rivers','Increasing single-use plastics and untreated discharge','Adding lead and mercury to industrial wastewater','Recycling and landfill leachate treatment'],answer:3,exp:'在 waste management 中，recycling、waste segregation、composting、methane gas recovery 以及 landfill leachate treatment 都是较符合 Green Technology 的做法。'},
  {section:'5.6',topic:'Objectives',q:'What is a main aim of applying Green Technology to waste and wastewater management?',options:['To increase greenhouse-gas emissions','To make wastewater more toxic','To improve waste management, reduce greenhouse-gas emissions and produce cleaner wastewater','To prevent all forms of recycling'],answer:2,exp:'Green Technology 应用于 waste/wastewater management，是为了提高处理效率、减少 greenhouse gas emissions，并让排出的 wastewater 更清洁。'},
  {section:'5.6',topic:'Leachate',q:'What is leachate?',options:['Pure water collected from rainfall','Contaminated liquid produced when water leaches through solid waste','Gas produced only by solar panels','A solid metal removed from graphene'],answer:1,exp:'Leachate（渗滤液）是水经过 solid waste 后带出污染物形成的 contaminated liquid，因此在 landfill 中需要适当处理。'},
  {section:'5.6',topic:'Waste stages',q:'Which process can recover useful energy from gases produced by decomposing waste?',options:['Methane gas recovery','Adding more plastic to landfill','Discharging leachate directly into rivers','Mixing wastewater with untreated sewage'],answer:0,exp:'有机废物分解可产生 methane。Methane gas recovery 可以把这种气体收集并利用，减少排放同时回收能源。'},
  {section:'5.6',topic:'Wastewater types',q:'Which list correctly shows the three broad types of wastewater stated in this topic?',options:['Acidic water, alkaline water and distilled water','Soft water, hard water and sea water','Hot water, cold water and rainwater','Domestic wastewater, stormwater runoff and industrial wastewater'],answer:3,exp:'课本把 wastewater 分为 domestic wastewater、stormwater runoff 和 industrial wastewater。'},
  {section:'5.6',topic:'Industrial wastewater',q:'Which pollutant may be present in industrial wastewater and requires careful treatment?',options:['Only sodium chloride from table salt','Only oxygen dissolved in water','Heavy metals such as arsenic, mercury and lead','Only glucose from food'],answer:2,exp:'Industrial wastewater 可能含有难以生物分解的有害物质，包括 arsenic、mercury、lead 等 heavy metals，所以需要系统性处理。'},
  {section:'5.6',topic:'Electrocoagulation',q:'The landfill leachate treatment method described in this topic is based on which principle?',options:['Hydrogenation','Electrolysis, through an electrocoagulation process','Esterification','Fermentation only'],answer:1,exp:'课本介绍的 Landfill Leachate Treatment Method 使用 electrolysis 原理，也称为 electrocoagulation process。'},
  {section:'5.6',topic:'Electrodes',q:'Which materials may be used as electrodes in the electrocoagulation process described in the textbook?',options:['Carbon or copper','Sulphur or phosphorus only','Sodium metal or potassium metal','Plastic or rubber'],answer:0,exp:'在课本所述 electrocoagulation 中，可使用 carbon 或 copper electrodes，而 wastewater 本身作为 electrolyte。'},
  {section:'5.6',topic:'Wastewater treatment',q:'What happens to pollutants during electrocoagulation?',options:['They become sunlight.','They evaporate instantly without treatment.','They are converted completely into oxygen gas.','They form flocs that can settle and be removed as sludge.'],answer:3,exp:'Electrocoagulation 会使污染物形成 flocs（絮状物），之后沉降并从水中分离，形成 sludge 供进一步处理。'},
  {section:'5.6',topic:'Treated water',q:'After proper treatment, what can happen to wastewater?',options:['It must always be stored forever.','It must be mixed with untreated waste.','It may be reused for crop irrigation or discharged as treated effluent.','It must be converted into solid plastic.'],answer:2,exp:'处理后的 wastewater 可以视水质情况用于 crop irrigation，或作为符合要求的 effluent 排放，而不是直接排放未处理污水。'},
  {section:'5.6',topic:'Sludge',q:'What may be done with sludge after proper treatment?',options:['It must always be poured directly into rivers.','It may be used as fertiliser or disposed of appropriately depending on its composition.','It is always safe to eat.','It must be converted into graphene.'],answer:1,exp:'Sludge 是否能再利用要看 composition。经过适当处理后，部分 sludge 可用作 agricultural fertiliser；若不适合，则必须以合适方法处置。'},
  {section:'5.6',topic:'Importance',q:'Which statement best explains the importance of Green Technology?',options:['It can reduce pollution, improve resource management and help mitigate global warming.','It is designed to increase carbon footprints.','It eliminates the need for waste management.','It requires all products to be made from metals.'],answer:0,exp:'Green Technology 的价值包括减少 environmental pollution、提高资源管理效率、推动 cleaner energy，并帮助 mitigate global warming。'},
  {section:'5.6',topic:'Application',q:'A school produces food waste and plastic bottles, while lights and fans are often left on unnecessarily. Which plan best applies Green Technology?',options:['Burn all waste openly and leave all electrical appliances on.','Send food waste and plastics together to landfill without sorting.','Use more disposable plastics and increase electricity consumption.','Compost food waste, recycle plastics and reduce unnecessary electricity use.'],answer:3,exp:'最符合 Green Technology 的方案是从源头减少浪费：food waste composting、plastic recycling，以及降低不必要的 electricity consumption。'}
];

const $ = id => document.getElementById(id);
const startScreen=$('startScreen'),quizScreen=$('quizScreen'),reportScreen=$('reportScreen'),quizForm=$('quizForm');
const studentNameInput=$('studentName'),startBtn=$('startBtn'),submitBtn=$('submitBtn'),copyLinkBtn=$('copyLinkBtn'),printBtn=$('printBtn'),retryBtn=$('retryBtn'),toast=$('toast');
let studentName='',lastAnswers=[];

function esc(str=''){return String(str).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));}
function renderQuiz(){
  quizForm.innerHTML=questions.map((item,i)=>`<article class="card question-card" data-index="${i}"><div class="q-meta"><span class="q-num">Q${i+1} · ${item.section}</span><span class="q-topic">${esc(item.topic)}</span></div><h3>${esc(item.q)}</h3><div class="options">${item.options.map((opt,j)=>`<label class="option"><input type="radio" name="q${i}" value="${j}"/><span class="letter">${String.fromCharCode(65+j)}</span><span>${esc(opt)}</span></label>`).join('')}</div></article>`).join('');
  quizForm.addEventListener('change',updateProgress);
}
function updateProgress(){
  let answered=0;
  questions.forEach((_,i)=>{if(quizForm.querySelector(`input[name="q${i}"]:checked`))answered++;});
  $('answeredCount').textContent=`${answered} answered`;
  $('progressBar').style.width=`${answered/questions.length*100}%`;
  $('progressText').textContent=`${answered} of ${questions.length} completed`;
  $('sectionLabel').textContent=answered<15?'Section 5.5':'Section 5.6';
}
function getAnswers(){return questions.map((_,i)=>{const selected=quizForm.querySelector(`input[name="q${i}"]:checked`);return selected?Number(selected.value):-1;});}
function compute(answers){
  const correct=answers.map((a,i)=>a===questions[i].answer);
  const score=correct.filter(Boolean).length;
  const score55=correct.slice(0,15).filter(Boolean).length;
  const score56=correct.slice(15).filter(Boolean).length;
  return{correct,score,score55,score56,pct:Math.round(score/30*100)};
}
function answerText(q,idx){return idx===-1||idx===undefined||idx===null?'No answer':`${String.fromCharCode(65+idx)}. ${q.options[idx]}`;}
function renderReviewItem(q,i,chosen,isCorrect,includeCorrectItems=true){
  if(!includeCorrectItems&&isCorrect)return'';
  return`<article class="review-item ${isCorrect?'correct':'wrong'}"><div class="review-top"><div class="review-q"><span class="q-num">Q${i+1} · ${q.section}</span><br>${esc(q.q)}</div><span class="status ${isCorrect?'good':'bad'}">${isCorrect?'✓ Correct':'✕ Review'}</span></div><div class="answer-lines"><div class="your"><strong>Your answer:</strong> ${esc(answerText(q,chosen))}</div><div class="correct-answer"><strong>Correct answer:</strong> ${esc(answerText(q,q.answer))}</div><div class="explanation"><strong>中文解析：</strong>${esc(q.exp)}</div></div></article>`;
}
function showReport(name,answers,shared=false){
  studentName=name||'Student';lastAnswers=answers;
  const r=compute(answers),wrong=30-r.score;
  startScreen.classList.add('hidden');quizScreen.classList.add('hidden');reportScreen.classList.remove('hidden');
  $('reportTitle').textContent=`${studentName}'s Results`;
  $('reportMeta').textContent=shared?'Shared revision report · Form 5 Chemistry 5.5 & 5.6':`Completed ${new Date().toLocaleString()}`;
  $('scorePct').textContent=`${r.pct}%`;
  $('overallScore').textContent=`${r.score} / 30`;
  $('score55').textContent=`${r.score55} / 15`;
  $('score56').textContent=`${r.score56} / 15`;
  $('wrongCount').textContent=String(wrong);
  $('reviewBadge').textContent=wrong===0?'All correct':`${wrong} to discuss`;
  $('scoreRing').style.background=`conic-gradient(var(--accent) ${r.pct*3.6}deg, #162c43 0deg)`;
  const wrongHtml=questions.map((q,i)=>renderReviewItem(q,i,answers[i],r.correct[i],false)).join('');
  $('wrongReview').innerHTML=wrongHtml?`<div class="review-list">${wrongHtml}</div>`:'<div class="empty-review">Excellent — no wrong answers. Chapter 5 review completed.</div>';
  $('fullReview').innerHTML=`<div class="review-list">${questions.map((q,i)=>renderReviewItem(q,i,answers[i],r.correct[i],true)).join('')}</div>`;
  if(shared)copyLinkBtn.textContent='Copy This Report Link';
  window.scrollTo({top:0,behavior:'smooth'});
}
function encodeReport(name,answers){
  const payload=JSON.stringify({n:name,a:answers}),bytes=new TextEncoder().encode(payload);
  let binary='';bytes.forEach(b=>binary+=String.fromCharCode(b));
  return btoa(binary).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'');
}
function decodeReport(encoded){
  const b64=encoded.replace(/-/g,'+').replace(/_/g,'/'),padded=b64+'='.repeat((4-b64.length%4)%4),binary=atob(padded),bytes=Uint8Array.from(binary,c=>c.charCodeAt(0));
  return JSON.parse(new TextDecoder().decode(bytes));
}
function buildShareUrl(){return`${location.origin}${location.pathname}#report=${encodeReport(studentName,lastAnswers)}`;}
function showToast(msg){toast.textContent=msg;toast.classList.remove('hidden');setTimeout(()=>toast.classList.add('hidden'),2200);}

startBtn.addEventListener('click',()=>{
  studentName=studentNameInput.value.trim()||'Student';
  startScreen.classList.add('hidden');quizScreen.classList.remove('hidden');
  window.scrollTo({top:0,behavior:'smooth'});
});
submitBtn.addEventListener('click',()=>{
  const answers=getAnswers(),unanswered=answers.filter(a=>a===-1).length;
  if(unanswered>0&&!confirm(`${unanswered} question(s) are unanswered. Submit anyway?`))return;
  showReport(studentName,answers,false);
  history.replaceState(null,'',location.pathname);
});
copyLinkBtn.addEventListener('click',async()=>{
  const url=buildShareUrl();
  try{await navigator.clipboard.writeText(url);showToast('Report link copied');}
  catch{prompt('Copy this report link:',url);}
});
printBtn.addEventListener('click',()=>window.print());
retryBtn.addEventListener('click',()=>{
  history.replaceState(null,'',location.pathname);
  reportScreen.classList.add('hidden');startScreen.classList.remove('hidden');
  quizForm.reset();updateProgress();window.scrollTo({top:0,behavior:'smooth'});
});
function loadSharedReport(){
  const match=location.hash.match(/^#report=(.+)$/);if(!match)return false;
  try{
    const data=decodeReport(match[1]);
    if(!Array.isArray(data.a)||data.a.length!==questions.length)throw new Error('Invalid report');
    showReport(String(data.n||'Student'),data.a.map(Number),true);return true;
  }catch(err){console.error(err);showToast('This report link is invalid or incomplete.');return false;}
}

renderQuiz();
if(!loadSharedReport())updateProgress();
