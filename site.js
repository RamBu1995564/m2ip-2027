/* EDIT SHARED NAVIGATION HERE: every page uses this file. */
const NAV_ITEMS = [
 ['index.html','Home'],['about.html','About'],['syllabus.html','Syllabus'],
 ['programme.html','Programme'],['speakers.html','Speakers'],
 ['committees.html','Committees'],['applications.html','Applications'],['contact.html','Contact']
];
const currentFile = location.pathname.split('/').pop() || 'index.html';
const links = NAV_ITEMS.map(([file,label]) => `<a href="${file}" ${currentFile===file?'aria-current="page"':''}>${label}</a>`).join('');
document.getElementById('site-header').innerHTML = `<div class="container nav-wrap"><a class="brand" href="index.html"><strong>M2IP <span>2027</span></strong><small>VIT CHENNAI</small></a><button class="menu" id="menuButton" aria-expanded="false" aria-controls="navigation">Menu</button><nav id="navigation" aria-label="Main navigation">${links}</nav></div>`;
document.getElementById('site-footer').innerHTML = `<div class="container"><span>© 2027 M2IP · Department of Mathematics · VIT Chennai</span><div class="footer-links"><a href="support.html">Fees & accommodation</a><a href="outcomes.html">Outcomes & awards</a><a href="faq.html">FAQs</a><a href="contact.html">Contact</a><a href="#main">Back to top ↑</a></div></div>`;

/* SETUP: Paste your Google Form URL below. Keep the brochure at
   assets/M2IP-2027-brochure.pdf relative to this HTML file. */
const APPLICATION_URL = "";
const OPEN_DATE = new Date('2026-12-01T00:00:00+05:30');
const CLOSE_DATE = new Date('2026-12-31T00:00:00+05:30');
const menu = document.getElementById('menuButton');
const nav = document.getElementById('navigation');
function closeMenu(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';nav.classList.toggle('open',open);menu.setAttribute('aria-expanded',String(open));});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){closeMenu();menu.focus();}});
matchMedia('(min-width:1101px)').addEventListener('change',closeMenu);
function validURL(url){try{return new URL(url).protocol==='https:';}catch{return false;}}
function updateApplications(){const now=new Date();let label,message,enabled=false;
if(now<OPEN_DATE){label='Applications open 01 December';message='Applications open on 01 December 2026. No payment is required to apply.';}
else if(now>=CLOSE_DATE){label='Applications closed';message='The application window has closed. Please contact the convenor for enquiries.';}
else if(validURL(APPLICATION_URL)){label='Apply Now';message='Apply by 30 December 2026. No payment is required at this stage.';enabled=true;}
else{label='Application link to be announced';message='The application link will be published here. Please contact the convenor for assistance.';}
document.querySelectorAll('.apply').forEach(b=>{b.textContent=label;b.disabled=!enabled;});document.querySelectorAll('.status').forEach(p=>p.textContent=message);}
document.querySelectorAll('.apply').forEach(b=>b.addEventListener('click',()=>{if(validURL(APPLICATION_URL))window.open(APPLICATION_URL,'_blank','noopener,noreferrer');}));
updateApplications();setInterval(updateApplications,60000);
