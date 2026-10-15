(() => {
  'use strict';
  const es = {
    skip:'Saltar al contenido',home:'Texas Tow Boy — inicio',nav:'Navegación principal',navServices:'Servicios',navArea:'Cobertura',navQuote:'Cotiza gratis',
    heroEyebrow:'Grúas 24/7 — Dallas y todo Texas',heroLine1:'UNA LLAMADA.',heroLine2:'LO LLEVAMOS',heroLine3:'TODO.',heroIntro:'¿Varado? ¿Tu auto falló? ¡Te ponemos en marcha!',callNow:'Llama ahora',textUs:'Envía un SMS',alternateCall:'o llama al 214-650-1616',freeQuotes:'Cotizaciones gratis',dayNight:'De día o de noche',truckAlt:'La grúa Ford negra de Fabian transportando un sedán plateado en el centro de Dallas.',photoCaption:'DE DALLAS. POR TODO TEXAS.',strip1:'DALLAS / DFW',strip2:'TODO TEXAS',strip3:'LLAMA O ENVÍA UN SMS, 24/7',
    servicesEyebrow:'01 / LISTOS CUANDO NOS NECESITES',servicesTitle:'UNA SOLUCIÓN.<br>UN CAMINO ADELANTE.',servicesIntro:'Desde una batería descargada hasta un traslado de larga distancia. Grúas y asistencia vial con una sola llamada.',service1:'Grúas 24/7',service1Body:'Servicio ligero y pesado. De día o de noche.',service2:'Asistencia vial',service2Body:'Paso de corriente y apertura de vehículos.',service3:'Rescate vehicular',service3Body:'Rescate con cabrestante y recuperación por accidente.',service4:'Recuperación del corralón',service4Body:'¿Necesitas una grúa desde el corralón? Llama o envía un SMS.',service5:'Larga distancia',service5Body:'Traslados en DFW y por todo Texas.',service6:'Comercial y flotillas',service6Body:'Grúas y traslados para tus vehículos de trabajo.',serviceCta:'Cuéntanos qué necesitas. Cotiza gratis.',
    vehiclesEyebrow:'02 / LO QUE TRANSPORTAMOS',vehiclesTitle:'MÁS QUE<br>SOLO AUTOS.',vehiclesIntro:'Dinos qué necesitas transportar.',vehicle1:'Autos',vehicle2:'Camionetas',vehicle3:'Vans Sprinter',vehicle4:'Autos chatarra',vehicle5:'Tractores',vehicle6:'Botes',vehicle7:'Montacargas',vehicle8:'Y más.',
    howEyebrow:'03 / VAMOS A PONERTE EN MARCHA',howTitle:'TRES PASOS. UNA LLAMADA.',step1:'Llama o envía un SMS',step1Body:'Comparte tu ubicación, tu vehículo y lo que pasó.',step2:'Vamos por ti',step2Body:'Confirma los detalles y tu cotización con Fabian.',step3:'Sigue tu camino',step3Body:'Asistencia vial o un traslado a tu destino.',
    areaEyebrow:'04 / NUESTRA COBERTURA',areaTitle:'DALLAS. DFW.<br>POR TODO TEXAS.',areaBody:'Grúas locales y traslados de larga distancia. A donde necesites ir en Texas, llama o envía un SMS con tu punto de recogida y destino para cotizar gratis.',areaCta:'Hablemos de tu traslado',
    quoteEyebrow:'05 / COTIZA SIN COMPROMISO',quoteTitle:'TU PRÓXIMO PASO<br>EMPIEZA AQUÍ.',quoteIntro:'Unos detalles. Un mensaje a Fabian. Organicemos tu traslado.',ratherCall:'¿Prefieres llamar? Estamos aquí 24/7.',quoteNote:'Se abrirá tu aplicación de mensajes con los detalles listos. Revisa el mensaje y toca enviar.',requiredNote:'Todos los campos son obligatorios excepto el destino.',nameLabel:'Tu nombre',namePlaceholder:'Nombre',vehicleLabel:'Vehículo',vehiclePlaceholder:'Año, marca y modelo',pickupLabel:'Punto de recogida',pickupPlaceholder:'Dirección, cruce o punto de referencia',dropoffLabel:'Destino (opcional)',dropoffPlaceholder:'¿A dónde vamos?',situationLabel:'¿Qué pasó?',situationPlaceholder:'Cuéntanos qué ayuda necesitas',sendQuote:'Cotizar por mensaje de texto',smsFallback:'Abrir mi mensaje otra vez',formStatus:'Tu mensaje está listo. Si no se abrió tu aplicación, toca el enlace de abajo o llama al 214-418-2693.',
    instagramTitle:'SIGUE NUESTROS TRASLADOS.',instagramAria:'@texas.tow.boy en Instagram (abre una pestaña nueva)',footerTagline:'¡Una llamada y lo llevamos todo!',footerContact:'LLAMA O ENVÍA UN SMS, 24/7',footerOwner:'PROPIETARIO / FABIAN MUNOZ',footerArea:'Dallas / DFW / Todo Texas',quickContact:'Contacto rápido',call:'Llamar',text:'SMS',quote:'Cotizar',
    smsIntro:'Hola Fabian, quisiera una cotización de Texas Tow Boy.',smsName:'Nombre',smsVehicle:'Vehículo',smsPickup:'Recogida',smsDropoff:'Destino',smsSituation:'Qué pasó',smsUnknown:'Por confirmar',
    title:'Texas Tow Boy | Grúas 24/7 en Dallas y Texas',description:'Llama o envía un SMS a Texas Tow Boy al 214-418-2693. Grúas 24/7, asistencia vial y traslados en Dallas, DFW y todo Texas. Cotiza gratis.',socialTitle:'Texas Tow Boy | ¡Una llamada y lo llevamos todo!',socialDescription:'Grúas 24/7. Dallas, DFW y todo Texas. Llama o envía un SMS al 214-418-2693 para cotizar gratis.',socialAlt:'Logo de Texas Tow Boy y su grúa negra transportando un sedán en el centro de Dallas.'
  };
  const en = {formStatus:'Your text is ready. If your messaging app didn’t open, use the link below or call 214-418-2693.',smsIntro:'Hi Fabian, I’d like a quote from Texas Tow Boy.',smsName:'Name',smsVehicle:'Vehicle',smsPickup:'Pickup',smsDropoff:'Drop-off',smsSituation:'What happened',smsUnknown:'To be confirmed',title:document.title,description:document.querySelector('meta[name="description"]').content,socialTitle:document.querySelector('meta[property="og:title"]').content,socialDescription:document.querySelector('meta[property="og:description"]').content,socialAlt:document.querySelector('meta[property="og:image:alt"]').content};
  const attributes = {i18n:null,aria:'aria-label',alt:'alt',placeholder:'placeholder'};
  Object.entries(attributes).forEach(([kind,attr]) => document.querySelectorAll(`[data-${kind}]`).forEach(node => {en[node.dataset[kind]] = attr ? node.getAttribute(attr) : node.innerHTML;}));
  let language = 'en';
  let generated = false;
  const form = document.getElementById('quote-form');
  const status = document.getElementById('form-status');
  const fallback = document.getElementById('sms-fallback');
  const isIOS = () => /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  function quoteMessage() {
    const t = language === 'es' ? es : en;
    const value = name => form.elements[name].value.trim();
    return `${t.smsIntro}\n\n${t.smsName}: ${value('name')}\n${t.smsVehicle}: ${value('vehicle')}\n${t.smsPickup}: ${value('pickup')}\n${t.smsDropoff}: ${value('dropoff') || t.smsUnknown}\n${t.smsSituation}: ${value('situation')}`;
  }
  function smsHref() { return `sms:+12144182693${isIOS() ? '&' : '?'}body=${encodeURIComponent(quoteMessage())}`; }
  function setLanguage(next) {
    language = next;
    const t = next === 'es' ? es : en;
    document.documentElement.lang = next;
    Object.entries(attributes).forEach(([kind,attr]) => document.querySelectorAll(`[data-${kind}]`).forEach(node => {
      const value = t[node.dataset[kind]];
      if (attr) node.setAttribute(attr,value); else node.innerHTML = value;
    }));
    const toggle = document.getElementById('language');
    toggle.innerHTML = `${next === 'en' ? 'ES' : 'EN'} <span aria-hidden="true">↗</span>`;
    toggle.lang = next === 'en' ? 'es' : 'en';
    toggle.setAttribute('aria-label', next === 'en' ? 'ES — Cambiar a español' : 'EN — Switch to English');
    document.title = t.title;
    document.querySelector('meta[name="description"]').content = t.description;
    ['og:title','twitter:title'].forEach(key => document.querySelector(`meta[${key.startsWith('og:') ? 'property' : 'name'}="${key}"]`).content=t.socialTitle);
    ['og:description','twitter:description'].forEach(key => document.querySelector(`meta[${key.startsWith('og:') ? 'property' : 'name'}="${key}"]`).content=t.socialDescription);
    ['og:image:alt','twitter:image:alt'].forEach(key => document.querySelector(`meta[${key.startsWith('og:') ? 'property' : 'name'}="${key}"]`).content=t.socialAlt);
    document.querySelector('meta[property="og:locale"]').content=next==='es'?'es_US':'en_US';
    document.querySelector('meta[property="og:locale:alternate"]').content=next==='es'?'en_US':'es_US';
    if(generated) { status.textContent=t.formStatus; fallback.href=smsHref(); }
    try {localStorage.setItem('ttb-language', next);} catch {}
  }
  document.getElementById('language').addEventListener('click',()=>setLanguage(language === 'en' ? 'es' : 'en'));
  form.addEventListener('submit',event=>{
    event.preventDefault();
    // Native validation runs first; reject whitespace-only values as well.
    for(const field of form.querySelectorAll('[required]')) {
      if(!field.value.trim()) { field.value=''; field.reportValidity(); return; }
    }
    const href = smsHref();
    generated=true;
    fallback.href=href;
    fallback.hidden=false;
    status.textContent=(language==='es'?es:en).formStatus;
    window.location.href=href;
  });
  form.addEventListener('input',()=>{if(generated) fallback.href=smsHref();});
  document.getElementById('year').textContent = new Date().getFullYear();
  try {if(localStorage.getItem('ttb-language')==='es')setLanguage('es');} catch {}
})();
