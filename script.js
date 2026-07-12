const API_URL='https://script.google.com/macros/s/AKfycbzwUjnsbDWmyreM_BmB1xGL9fgowC3jGICJGTx7NZ8BLUkX_49QrTqK2Ztu6kVbN-aH/exec';
const WHATSAPP_NUMBER='14037008800';
let lang='es',property='cabin',events=[],month=new Date(),calendarReady=false,timer;

const T={
 es:{menuStay:'Alojamiento',menuExperience:'Experiencia',menuGallery:'Galería',menuGuide:'Guía local',menuAvailability:'Disponibilidad',menuReviews:'Reseñas',menuFaq:'Preguntas',menuContact:'Contacto',eyebrow:'Naturaleza privada en Panamá',heroTitle:'Escápese al corazón del bosque tropical',heroText:'Cabaña, domo junto al río, cascadas, vida silvestre y una experiencia auténtica.',check:'Ver disponibilidad',welcome:'Bienvenido a Aqeel Cabin',welcomeText:'Dos alojamientos privados en la misma propiedad, aproximadamente a 150 metros de distancia, rodeados de selva tropical y acceso al río.',f1:'Bosque tropical',f2:'Río natural',f3:'Vida silvestre',stayEyebrow:'Su escapada privada',stayTitle:'Elija su alojamiento',cabinText:'Cabaña privada con cocina completa, terraza, hamacas, BBQ, estacionamiento y Starlink.',domeText:'Domo privado junto al río con cama queen, aire acondicionado, cocineta, baño, terraza y BBQ.',checkCabin:'Revisar disponibilidad',checkDome:'Revisar disponibilidad',videoEyebrow:'Vea antes de viajar',videoTitle:'Viva la experiencia',riverVideo:'El río de la propiedad',slothVideo:'Vida silvestre cerca de la cabaña',toucanVideo:'Aves tropicales en la propiedad',galleryEyebrow:'Fotos reales',galleryTitle:'Galería',tabCabin:'Cabaña',tabDome:'Domo',tabNature:'Río y naturaleza',tabWildlife:'Vida silvestre',guideEyebrow:'Planifique antes de llegar',guideTitle:'Transporte, tiendas y restaurantes',transportTitle:'Transporte público',transportText:'Desde Penonomé, tome un autobús con dirección a Churuquita Grande. Después de bajarse, hay una caminata aproximada de 20 minutos por el camino de grava hasta la propiedad. Confirme el punto exacto por WhatsApp antes de viajar.',confirmTransport:'Confirmar por WhatsApp',driveTitle:'Llegada en automóvil',driveText:'Se puede llegar directamente. El último kilómetro es un camino de grava y hay estacionamiento gratuito en la propiedad.',maps:'Abrir Google Maps',shopsTitle:'Compre antes de llegar',shopsText:'Hay dos pequeños supermercados chinos cercanos para artículos básicos. Para una compra completa, los supermercados grandes de Penonomé están aproximadamente a 30 minutos.',restaurantsTitle:'Restaurantes cercanos',restaurantsText:'Hay restaurantes locales en la zona y una selección más amplia en Penonomé, aproximadamente a 30 minutos.',oldGuide:'Ver la guía original con enlaces',guideNote:'La guía anterior permanece enlazada para conservar los nombres, mapas y referencias originales mientras se trasladan todos los detalles al nuevo diseño.',availabilityEyebrow:'Reserve directamente',availabilityTitle:'Disponibilidad',arrival:'Fecha de llegada',nights:'Noches',guests:'Huéspedes',checkButton:'Revisar fechas',loading:'Cargando disponibilidad…',error:'No se pudo cargar el calendario. Contáctenos por WhatsApp.',available:'Disponible',booked:'Ocupado',unknown:'Sin datos',choose:'Seleccione una fecha exacta.',availableResult:'Estas fechas parecen disponibles.',bookedResult:'Una o más noches aparecen ocupadas.',whatsappConfirm:'Enviar solicitud por WhatsApp',reviewsEyebrow:'Experiencias verificadas',reviewsTitle:'Reseñas de huéspedes',googleReviewText:'Consulte la calificación y las reseñas más recientes directamente en Google.',googleReviews:'Ver reseñas en Google',airbnbCabinText:'Vea las reseñas verificadas de huéspedes de la cabaña en Airbnb.',airbnbDomeText:'Vea las reseñas verificadas de huéspedes del domo en Airbnb.',airbnbReviews:'Ver reseñas en Airbnb',reviewNote:'Los enlaces de Airbnb se mantienen cerca del final de la página para que la reserva directa sea la opción principal.',faqTitle:'Preguntas frecuentes',faqIntro:'Escriba su pregunta en español o inglés. Los enlaces incluidos en la respuesta se pueden abrir directamente.',searching:'Buscando una respuesta…',noanswer:'No fue posible obtener una respuesta. Contáctenos por WhatsApp.',storyTitle:'Nuestra historia',storyText:'Aqeel Cabin & Jungle River Dome lleva el nombre de nuestro hijo Aqeel. La propiedad nació como parte de su viaje familiar a Panamá y se convirtió en un lugar donde otras familias pueden reconectarse con la naturaleza.',contactTitle:'Reserve directamente',contactText:'Envíe la fecha exacta, número de noches, número de huéspedes y si desea la cabaña o el domo.'},
 en:{menuStay:'Stay',menuExperience:'Experience',menuGallery:'Gallery',menuGuide:'Local guide',menuAvailability:'Availability',menuReviews:'Reviews',menuFaq:'FAQ',menuContact:'Contact',eyebrow:'Private nature in Panama',heroTitle:'Escape to the heart of the rainforest',heroText:'Cabin, riverside dome, waterfalls, wildlife and an authentic nature experience.',check:'Check availability',welcome:'Welcome to Aqeel Cabin',welcomeText:'Two private accommodations on the same property, about 150 metres apart, surrounded by rainforest with river access.',f1:'Rainforest',f2:'Natural river',f3:'Wildlife',stayEyebrow:'Your private escape',stayTitle:'Choose your stay',cabinText:'Private cabin with full kitchen, terrace, hammocks, BBQ, parking and Starlink.',domeText:'Private riverside dome with queen bed, air conditioning, kitchenette, bathroom, deck and BBQ.',checkCabin:'Check availability',checkDome:'Check availability',videoEyebrow:'See it before you travel',videoTitle:'Experience the property',riverVideo:'The river on the property',slothVideo:'Wildlife near the Cabin',toucanVideo:'Tropical birds on the property',galleryEyebrow:'Real property photos',galleryTitle:'Gallery',tabCabin:'Cabin',tabDome:'Dome',tabNature:'River & nature',tabWildlife:'Wildlife',guideEyebrow:'Plan before arrival',guideTitle:'Transportation, stores and restaurants',transportTitle:'Public transportation',transportText:'From Penonomé, take a bus toward Churuquita Grande. After getting off, there is an approximately 20-minute walk along the gravel road to the property. Confirm the exact drop-off point by WhatsApp before travelling.',confirmTransport:'Confirm through WhatsApp',driveTitle:'Arriving by car',driveText:'You can drive directly to the property. The final kilometre is a gravel road, and free parking is available.',maps:'Open Google Maps',shopsTitle:'Shop before arrival',shopsText:'Two small Chinese supermarkets are nearby for basic supplies. For a full grocery shop, the larger supermarkets in Penonomé are approximately 30 minutes away.',restaurantsTitle:'Nearby restaurants',restaurantsText:'There are local restaurants in the area and a wider selection in Penonomé, approximately 30 minutes away.',oldGuide:'View the original guide and links',guideNote:'The previous guide remains linked to preserve the original names, maps and references while every detail is moved into the new design.',availabilityEyebrow:'Book directly',availabilityTitle:'Availability',arrival:'Arrival date',nights:'Nights',guests:'Guests',checkButton:'Check dates',loading:'Loading availability…',error:'The calendar could not be loaded. Please contact us on WhatsApp.',available:'Available',booked:'Booked',unknown:'No data',choose:'Please select an exact date.',availableResult:'These dates appear available.',bookedResult:'One or more nights appear booked.',whatsappConfirm:'Send request on WhatsApp',reviewsEyebrow:'Verified experiences',reviewsTitle:'Guest reviews',googleReviewText:'See the latest rating and reviews directly on Google.',googleReviews:'View reviews on Google',airbnbCabinText:'See verified Airbnb guest reviews for the Cabin.',airbnbDomeText:'See verified Airbnb guest reviews for the Dome.',airbnbReviews:'View reviews on Airbnb',reviewNote:'Airbnb links are kept near the bottom of the page so direct booking remains the primary option.',faqTitle:'Frequently asked questions',faqIntro:'Type your question in English or Spanish. Links included in answers can be opened directly.',searching:'Searching for an answer…',noanswer:'An answer could not be generated. Please contact us on WhatsApp.',storyTitle:'Our story',storyText:'Aqeel Cabin & Jungle River Dome is named after our son, Aqeel. The property began as part of our family journey to Panama and became a place where other families can reconnect with nature.',contactTitle:'Book directly',contactText:'Send the exact date, number of nights, number of guests, and whether you prefer the Cabin or Dome.'}
};

const groups={
 cabin:[
  ['cabin-exterior.jpg','Aqeel Cabin'],['cabin-interior-jungle.jpg','Jungle windows inside Aqeel Cabin'],['cabin-breakfast.jpg','Breakfast beside the rainforest windows'],['cabin-side.jpg','Cabin surrounded by tropical forest']
 ],
 dome:[
  ['dome-aerial.jpg','Aqeel Jungle River Dome'],['dome-tiny-planet.jpg','Dome surrounded by rainforest'],['dome-jungle.jpg','Dome hidden in the jungle'],['dome-forest.jpg','Dome and forest setting']
 ],
 nature:[
  ['river-rocks.jpg','Natural river'],['river-green.jpg','Green river pool'],['river-wide.jpg','River and rainforest'],['river-hammock.jpg','Relaxing beside the river'],['waterfall.jpg','Nearby waterfall']
 ],
 wildlife:[
  ['sloth.jpg','Sloth in the rainforest'],['toucans.jpg','Toucans near the property'],['woodpeckers.jpg','Woodpeckers'],['motmot.jpg','Motmot'],['blue-bird.jpg','Tropical bird']
 ]
};
let active='cabin',lightIndex=0,lightItems=[];

function applyLang(){
 document.documentElement.lang=lang;
 document.querySelectorAll('[data-i18n]').forEach(el=>{const value=T[lang][el.dataset.i18n];if(value)el.textContent=value});
 document.querySelectorAll('[data-lang]').forEach(b=>b.classList.toggle('active',b.dataset.lang===lang));
 const q=document.querySelector('#faqInput'); q.placeholder=lang==='es'?q.dataset.placeholderEs:q.dataset.placeholderEn;
 renderGallery(); renderCalendar();
}
document.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click',()=>{lang=b.dataset.lang;applyLang()}));

document.querySelectorAll('[data-property-link]').forEach(a=>a.addEventListener('click',()=>{
 property=a.dataset.propertyLink; document.querySelector('#property').value=property; loadCalendar();
}));

function renderGallery(){
 const g=document.querySelector('#galleryGrid');g.innerHTML='';lightItems=groups[active];
 lightItems.forEach(([src,caption],i)=>{const b=document.createElement('button');b.type='button';const im=document.createElement('img');im.loading='lazy';im.src=src;im.alt=caption;b.append(im);b.addEventListener('click',()=>openLight(i));g.append(b)});
}
document.querySelectorAll('.tabs button').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.tabs button').forEach(x=>x.classList.remove('active'));b.classList.add('active');active=b.dataset.filter;renderGallery()}));
function openLight(i){lightIndex=i;const [src,caption]=lightItems[i];document.querySelector('#lbImage').src=src;document.querySelector('#lbCaption').textContent=caption;document.querySelector('#lightbox').hidden=false;document.body.style.overflow='hidden'}
function closeLight(){document.querySelector('#lightbox').hidden=true;document.body.style.overflow=''}
document.querySelector('#close').onclick=closeLight;document.querySelector('#lbPrev').onclick=()=>openLight((lightIndex-1+lightItems.length)%lightItems.length);document.querySelector('#lbNext').onclick=()=>openLight((lightIndex+1)%lightItems.length);document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLight()});

function ymd(d){return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`}
function isBooked(s){return events.some(e=>s>=e.start&&s<e.end)}
async function loadCalendar(){
 calendarReady=false;const status=document.querySelector('#calendarStatus');status.textContent=T[lang].loading;status.className='';
 try{const r=await fetch(`${API_URL}?action=calendar&property=${property}&_=${Date.now()}`,{cache:'no-store'});const d=await r.json();if(!Array.isArray(d.events))throw new Error('No events');events=d.events;calendarReady=true;status.textContent=''}
 catch(e){events=[];status.textContent=T[lang].error;status.className='error'}
 renderCalendar();
}
function renderCalendar(){
 const g=document.querySelector('#calendar');if(!g)return;g.innerHTML='';const y=month.getFullYear(),m=month.getMonth(),first=new Date(y,m,1),days=new Date(y,m+1,0).getDate();document.querySelector('#month').textContent=new Intl.DateTimeFormat(lang==='es'?'es-PA':'en-CA',{month:'long',year:'numeric'}).format(first);
 for(let i=0;i<first.getDay();i++)g.append(document.createElement('div'));
 const today=new Date();today.setHours(0,0,0,0);
 for(let d=1;d<=days;d++){const dt=new Date(y,m,d),s=ymd(dt),booked=calendarReady&&isBooked(s),c=document.createElement('div');c.className='day '+(!calendarReady?'unknown':booked?'booked':'');if(s===ymd(new Date()))c.classList.add('today');if(dt<today)c.classList.add('past');c.innerHTML=`<b>${d}</b><small>${calendarReady?(booked?T[lang].booked:T[lang].available):T[lang].unknown}</small>`;g.append(c)}
}
document.querySelector('#property').addEventListener('change',e=>{property=e.target.value;loadCalendar()});
document.querySelector('#prev').onclick=()=>{month=new Date(month.getFullYear(),month.getMonth()-1,1);renderCalendar()};
document.querySelector('#next').onclick=()=>{month=new Date(month.getFullYear(),month.getMonth()+1,1);renderCalendar()};

function buildWhatsAppMessage(arrival,nights,guests){
 const propertyName=property==='cabin'?'Aqeel Cabin':'Aqeel Jungle River Dome';
 return lang==='es'
  ?`Hola, me gustaría solicitar una reserva directa.\n\nAlojamiento: ${propertyName}\nFecha de llegada: ${arrival}\nNoches: ${nights}\nHuéspedes: ${guests}\n\nEl calendario muestra estas fechas como disponibles. Por favor confirme el precio y la reserva. Gracias.`
  :`Hello, I would like to request a direct booking.\n\nProperty: ${propertyName}\nArrival date: ${arrival}\nNights: ${nights}\nGuests: ${guests}\n\nThe calendar shows these dates as available. Please confirm the price and booking. Thank you.`;
}

document.querySelector('#checkBtn').onclick=()=>{
 const a=document.querySelector('#arrival').value,n=Math.max(1,+document.querySelector('#nights').value||1),guests=Math.max(1,+document.querySelector('#guests').value||1),r=document.querySelector('#availabilityResult');r.innerHTML='';
 if(!a){r.textContent=T[lang].choose;r.className='error';return}
 if(!calendarReady){r.textContent=T[lang].error;r.className='error';return}
 let booked=false;const d=new Date(a+'T00:00:00');for(let i=0;i<n;i++){const x=new Date(d);x.setDate(x.getDate()+i);if(isBooked(ymd(x)))booked=true}
 if(booked){r.textContent=T[lang].bookedResult;r.className='error';return}
 r.className='success';const text=document.createElement('span');text.textContent=T[lang].availableResult+' ';const link=document.createElement('a');link.className='button whatsapp-confirm';link.target='_blank';link.rel='noopener';link.href=`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildWhatsAppMessage(a,n,guests))}`;link.textContent=T[lang].whatsappConfirm;r.append(text,link);
};

function linkify(text){
 const escaped=String(text).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[ch]));
 return escaped
  .replace(/(https?:\/\/[^\s<]+)/gi,'<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>')
  .replace(/(^|\s)(www\.[^\s<]+)/gi,'$1<a href="https://$2" target="_blank" rel="noopener noreferrer">$2</a>')
  .replace(/\n/g,'<br>');
}
document.querySelector('#faqInput').oninput=e=>{clearTimeout(timer);const q=e.target.value.trim();if(q.length<3){document.querySelector('#answer').hidden=true;document.querySelector('#faqStatus').textContent='';return}timer=setTimeout(()=>ask(q),700)};
async function ask(q){
 document.querySelector('#faqStatus').textContent=T[lang].searching;
 try{const r=await fetch(`${API_URL}?action=ask&question=${encodeURIComponent(q)}&language=${lang}&property=${property}&_=${Date.now()}`,{cache:'no-store'});const d=await r.json();const a=document.querySelector('#answer');a.hidden=false;a.innerHTML=linkify(d.answer||d.message||T[lang].noanswer)}
 catch(e){const a=document.querySelector('#answer');a.hidden=false;a.innerHTML=linkify(T[lang].noanswer)}
 document.querySelector('#faqStatus').textContent='';
}

const menuToggle=document.querySelector('#menuToggle'),navLinks=document.querySelector('#navLinks');
menuToggle.addEventListener('click',()=>{const open=navLinks.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));menuToggle.textContent=open?'×':'☰'});
navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{navLinks.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');menuToggle.textContent='☰'}));

document.querySelector('#arrival').min=ymd(new Date());
applyLang();loadCalendar();
