// BarberFlowBR — Worker bundle generated from the complete v11 project.
// This file is the actual deployment entrypoint. D1 is read from env.DB.
const ROOT = "<!doctype html><html lang=\"es\"><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><meta http-equiv=\"refresh\" content=\"0; url=/reservar/\"><title>BarberFlowBR v11</title></head><body><p>BarberFlowBR</p></body></html>\n";
const RESERVAR = "<!doctype html><html lang=\"es\"><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1,viewport-fit=cover\"><meta name=\"theme-color\" content=\"#050806\"><title>Reservar \u00b7 BarberFlowBR</title><style>\n:root{--bg:#050806;--card:rgba(22,27,24,.78);--line:rgba(255,255,255,.1);--text:#f5f7f5;--muted:#9da59f;--green:#009c3b;--yellow:#ffdf00;--red:#ff453a}*{box-sizing:border-box}body{margin:0;background:radial-gradient(650px 500px at 15% -10%,#06351c,transparent 65%),radial-gradient(650px 500px at 105% 8%,#071737,transparent 65%),var(--bg);color:var(--text);font-family:-apple-system,BlinkMacSystemFont,\"SF Pro Text\",Arial,sans-serif;min-height:100vh}.wrap{max-width:560px;margin:auto;padding:calc(22px + env(safe-area-inset-top)) 18px 40px}.brand{font-weight:900;letter-spacing:-.6px;font-size:22px}.brand span{background:linear-gradient(110deg,#009c3b,#ffdf00,#fff,#002776);-webkit-background-clip:text;color:transparent}.sub{color:var(--muted);font-size:13px;margin-top:4px}.card{background:var(--card);border:1px solid var(--line);border-radius:24px;padding:18px;margin-top:16px;backdrop-filter:blur(24px);box-shadow:0 18px 50px #0005}.steps{display:flex;gap:7px;margin:18px 0}.step{height:4px;flex:1;border-radius:5px;background:#333}.step.on{background:var(--green)}h1{font-size:31px;letter-spacing:-1.3px;margin:22px 0 8px}h2{font-size:21px;margin:0 0 12px}.muted{color:var(--muted)}.service{display:flex;align-items:center;gap:12px;width:100%;text-align:left;padding:15px;border-radius:17px;border:1px solid var(--line);background:#ffffff09;color:inherit;margin:8px 0}.service b{display:block}.service small{display:block;color:var(--muted);margin-top:4px}.price{margin-left:auto;font-weight:800;white-space:nowrap}.field{margin:12px 0}.field label{display:block;color:#b7beb9;font-size:13px;margin:0 4px 6px}.field input{width:100%;border:1px solid var(--line);background:#7676802e;color:var(--text);border-radius:14px;padding:13px;outline:0}.btn{width:100%;padding:14px;border-radius:15px;font-weight:800;margin-top:10px;border:1px solid var(--line)}.primary{background:var(--green);color:white}.secondary{background:#ffffff0d}.danger{background:#ff453a16;color:#ff8b83}.row{display:flex;gap:9px}.row>*{flex:1}.choice{display:grid;grid-template-columns:1fr 1fr;gap:8px}.choice button{padding:13px;border-radius:14px;background:#fff8;border:1px solid var(--line);color:var(--text)}.choice button.selected{background:#009c3b2c;border-color:#009c3b99}.times{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.time{padding:12px 5px;border-radius:13px;border:1px solid var(--line);background:#ffffff08;color:var(--text);font-weight:700}.time:disabled{opacity:.25}.warning{background:#ffdf0010;border:1px solid #ffdf0030;border-radius:15px;padding:13px;line-height:1.45;color:#ddd59a;font-size:13px}.confirm{line-height:1.55}.success{text-align:center;padding:10px 2px}.bigcheck{font-size:54px}.link{color:#72c7ff;text-decoration:none;font-weight:700}.hidden{display:none}.error{color:#ff8179;margin-top:10px;font-size:14px}.address{margin-top:14px;padding-top:14px;border-top:1px solid var(--line);font-size:13px;color:var(--muted);line-height:1.5}@media(min-width:520px){.times{grid-template-columns:repeat(4,1fr)}}\n</style></head><body><main class=\"wrap\"><div class=\"brand\"><span>BARBERFLOWBR</span></div><div class=\"sub\">Reserv\u00e1 tu turno con Santi Toro</div><div class=\"steps\"><i class=\"step on\"></i><i class=\"step\"></i><i class=\"step\"></i><i class=\"step\"></i></div><div id=\"app\"></div></main><script>\nconst $=id=>document.getElementById(id),fmt=n=>new Intl.NumberFormat('es-AR',{style:'currency',currency:'ARS',maximumFractionDigits:0}).format(n),esc=s=>String(s??'').replace(/[&<>\"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;',\"'\":'&#039;'}[c]));let data,sel={service:null,date:null,time:null};\nasync function api(url,opt){let r=await fetch('/api'+url,opt);let j=await r.json();if(!r.ok)throw Object.assign(new Error(j.error||'Error'),{data:j});return j}\nfunction setStep(n){document.querySelectorAll('.step').forEach((x,i)=>x.classList.toggle('on',i<=n))}\nasync function start(){try{data=await api('/public');showServices()}catch(e){$('app').innerHTML='<div class=\"card\"><h2>No se pudo cargar BarberFlowBR</h2><p class=\"muted\">Prob\u00e1 nuevamente en unos segundos.</p></div>'}}\nfunction showServices(){setStep(0);$('app').innerHTML='<h1>Eleg\u00ed tu servicio</h1><p class=\"muted\">Todos los servicios disponibles para reservar online.</p><div class=\"card\">'+data.services.map(s=>`<button class=\"service\" onclick=\"pickService('${s.id}')\"><div><b>${esc(s.name)}</b><small>${s.duration>=60?`${Math.floor(s.duration/60)} h${s.duration%60?' '+s.duration%60+' min':''}`:`${s.duration} min`}</small></div><span class=\"price\">${fmt(s.price)}</span></button>`).join('')+'</div><button class=\"btn secondary\" onclick=\"myTurns()\">Ver mis turnos</button>'}\nfunction pickService(id){sel.service=data.services.find(s=>s.id===id);showDates()}\nfunction showDates(){setStep(1);let t=new Date(data.today+'T12:00:00');let days=[0,1,2].map(i=>{let d=new Date(t);d.setDate(d.getDate()+i);return d});$('app').innerHTML='<h1>Eleg\u00ed el d\u00eda</h1><p class=\"muted\">Pod\u00e9s reservar hoy, ma\u00f1ana o pasado ma\u00f1ana.</p><div class=\"card choice\">'+days.map((d,i)=>{let key=d.toLocaleDateString('en-CA');let label=i===0?'Hoy':i===1?'Ma\u00f1ana':'Pasado ma\u00f1ana';return `<button onclick=\"pickDate('${key}')\"><b>${label}</b><br><small>${d.toLocaleDateString('es-AR',{weekday:'long',day:'numeric',month:'long'})}</small></button>`}).join('')+'</div><button class=\"btn secondary\" onclick=\"showServices()\">Atr\u00e1s</button>'}\nasync function pickDate(date){sel.date=date;try{let x=await api(`/availability?date=${date}&service=${sel.service.id}`);showTimes(x.times)}catch(e){alert(e.message)}}\nfunction showTimes(times){setStep(2);$('app').innerHTML='<h1>Eleg\u00ed el horario</h1><p class=\"muted\">Los horarios se calculan seg\u00fan la duraci\u00f3n del servicio y los turnos ya ocupados.</p><div class=\"card\"><div class=\"times\">'+times.map(t=>`<button class=\"time\" onclick=\"pickTime('${t}')\">${t}</button>`).join('')+(times.length?'':'<p class=\"muted\">No quedan horarios disponibles para ese d\u00eda.</p>')+'</div></div><button class=\"btn secondary\" onclick=\"showDates()\">Atr\u00e1s</button>'}\nfunction pickTime(t){sel.time=t;showCustomer()}\nfunction showCustomer(){setStep(3);$('app').innerHTML='<h1>Tus datos</h1><p class=\"muted\">Solo necesitamos tu nombre y WhatsApp.</p><div class=\"card\"><div class=\"field\"><label>Nombre</label><input id=\"name\" autocomplete=\"name\" placeholder=\"Tu nombre\"></div><div class=\"field\"><label>WhatsApp</label><input id=\"wa\" inputmode=\"tel\" autocomplete=\"tel\" placeholder=\"Ej. 2477 123456\"></div><div class=\"warning\">Importante: si cancel\u00e1s tu turno con menos de 1 hora de anticipaci\u00f3n, se notificar\u00e1 a Santi Toro para el posterior abono del 50% del valor del servicio.</div><button class=\"btn primary\" onclick=\"review()\">Continuar</button><div id=\"err\" class=\"error\"></div></div><button class=\"btn secondary\" onclick=\"showTimesForBack()\">Atr\u00e1s</button>'}\nasync function showTimesForBack(){let x=await api(`/availability?date=${sel.date}&service=${sel.service.id}`);showTimes(x.times)}\nfunction review(){let name=$('name').value.trim(),wa=$('wa').value.trim();if(!name||!wa){$('err').textContent='Complet\u00e1 nombre y WhatsApp.';return}sel.name=name;sel.wa=wa;$('app').innerHTML=`<h1>Confirm\u00e1 tu turno</h1><div class=\"card confirm\"><h2>${esc(sel.service.name)}</h2><p><b>${esc(sel.date)}</b> \u00b7 <b>${esc(sel.time)}</b></p><p>Duraci\u00f3n: ${sel.service.duration>=60?Math.floor(sel.service.duration/60)+' h'+(sel.service.duration%60?' '+sel.service.duration%60+' min':''):sel.service.duration+' min'}</p><p>Precio: <b>${fmt(sel.service.price)}</b></p><p>Nombre: ${esc(sel.name)}<br>WhatsApp: ${esc(sel.wa)}</p><div class=\"warning\">Importante: si cancel\u00e1s con menos de 1 hora de anticipaci\u00f3n, se notificar\u00e1 a Santi Toro para el posterior abono del 50% del valor del servicio.</div><div class=\"address\">\ud83d\udccd ${esc(data.address)}<br>\ud83d\udcde ${esc(data.phone)}<br><br>Para consultas o aclaraciones espec\u00edficas sobre el servicio. Por favor, no utilizar para solicitar turnos o consultas generales.</div><button class=\"btn primary\" onclick=\"book()\">Confirmar turno</button><button class=\"btn secondary\" onclick=\"showCustomer()\">Atr\u00e1s</button><div id=\"err\" class=\"error\"></div></div>`}\nasync function book(){try{let r=await api('/book',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({service:sel.service.id,date:sel.date,time:sel.time,name:sel.name,whatsapp:sel.wa})});$('app').innerHTML=`<div class=\"card success\"><div class=\"bigcheck\">\u2713</div><h1>Turno confirmado</h1><p>${esc(r.service)} \u00b7 ${fmt(r.price)}</p><p><b>${esc(r.date)}</b> \u00b7 <b>${esc(r.time)}</b><br>Duraci\u00f3n: ${r.duration} min</p><div class=\"address\">\ud83d\udccd ${esc(r.address)}<br>\ud83d\udcde ${esc(r.phone)}</div><button class=\"btn primary\" onclick=\"myTurns()\">Ver mis turnos</button><button class=\"btn secondary\" onclick=\"start()\">Reservar otro turno</button></div>`}catch(e){if(e.data?.error)$('err').textContent=e.data.error;else alert(e.message)}}\nasync function myTurns(){let wa=prompt('Ingres\u00e1 tu n\u00famero de WhatsApp');if(!wa)return;try{let r=await api('/my-appointments?whatsapp='+encodeURIComponent(wa));$('app').innerHTML='<h1>Mis turnos</h1><div class=\"card\">'+(r.appointments.length?r.appointments.map(a=>`<div style=\"padding:14px 0;border-bottom:1px solid var(--line)\"><b>${esc(a.service_name)}</b><br><span class=\"muted\">${String(a.date).slice(0,10)} \u00b7 ${String(a.time).slice(0,5)}</span><br><span>${fmt(a.price)}</span><button class=\"btn danger\" onclick=\"cancelTurn('${a.id}','${esc(wa)}')\">Cancelar turno</button></div>`).join(''):'<p class=\"muted\">No encontramos turnos pendientes con ese WhatsApp.</p>')+'<div class=\"address\">\ud83d\udccd '+esc(r.address)+'<br>\ud83d\udcde '+esc(r.phone)+'</div></div><button class=\"btn secondary\" onclick=\"start()\">Volver</button>'}catch(e){alert(e.message)}}\nasync function cancelTurn(id,wa){let r0;try{r0=await api('/my-appointments?whatsapp='+encodeURIComponent(wa))}catch(e){alert(e.message);return}let a=r0.appointments.find(x=>x.id===id);if(!a)return;let ap=new Date(String(a.date).slice(0,10)+'T'+String(a.time).slice(0,5)+':00-03:00');let late=(ap-Date.now())<3600000;if(late&&!confirm('Est\u00e1s cancelando con menos de 1 hora de anticipaci\u00f3n. Se notificar\u00e1 a Santi Toro para el posterior abono del 50% del valor del servicio. \u00bfConfirm\u00e1s la cancelaci\u00f3n?'))return;try{let r=await api('/cancel',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({id,whatsapp:wa})});alert(r.late?'Turno cancelado. Se notific\u00f3 a Santi Toro.':'Turno cancelado.');myTurns()}catch(e){alert(e.message)}}\nstart();\n</script></body></html>\n";
const GESTION = "<!doctype html><html lang=\"es\"><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1,viewport-fit=cover\"><meta name=\"theme-color\" content=\"#050806\"><title>Gesti\u00f3n \u00b7 BarberFlowBR v11</title><style>\n:root{--bg:#050806;--card:rgba(22,27,24,.78);--line:rgba(255,255,255,.1);--text:#f5f7f5;--muted:#9da59f;--green:#009c3b;--yellow:#ffdf00;--red:#ff453a;--blue:#0a84ff}*{box-sizing:border-box}body{margin:0;background:radial-gradient(700px 500px at 15% -10%,#06351c,transparent 65%),radial-gradient(650px 520px at 105% 8%,#071737,transparent 65%),var(--bg);color:var(--text);font-family:-apple-system,BlinkMacSystemFont,\"SF Pro Text\",Arial,sans-serif;min-height:100vh}.wrap{max-width:780px;margin:auto;padding:calc(18px + env(safe-area-inset-top)) 16px 100px}.top{display:flex;justify-content:space-between;align-items:center}.brand{font-weight:900;font-size:21px}.brand span{background:linear-gradient(110deg,#009c3b,#ffdf00,#fff,#002776);-webkit-background-clip:text;color:transparent}.sub{font-size:13px;color:var(--muted);margin-top:3px}.bell{position:relative;width:43px;height:43px;border-radius:50%;background:#ffffff0d;border:1px solid var(--line);font-size:21px}.dot{position:absolute;right:5px;top:4px;width:8px;height:8px;background:var(--red);border-radius:50%}h1{font-size:32px;letter-spacing:-1.3px;margin:22px 0 16px}.card{background:var(--card);border:1px solid var(--line);border-radius:21px;overflow:hidden;backdrop-filter:blur(24px);box-shadow:0 18px 50px #0005}.metricgrid{display:grid;grid-template-columns:1fr 1fr;gap:10px}.metric{padding:16px;background:#ffffff08;border:1px solid var(--line);border-radius:18px}.metric b{display:block;font-size:24px}.metric small{color:var(--muted)}.toolbar{display:flex;gap:8px;overflow:auto;margin:12px 0}.toolbar button,.btn{padding:11px 14px;border-radius:13px;border:1px solid var(--line);background:#ffffff09;color:var(--text);font-weight:700;white-space:nowrap}.toolbar button.active,.primary{background:var(--green);color:#fff}.row{padding:15px;border-bottom:1px solid var(--line)}.row:last-child{border-bottom:0}.rowhead{display:flex;justify-content:space-between;gap:10px}.muted{color:var(--muted)}.badge{font-size:10px;padding:4px 7px;border-radius:8px;background:#ffdf0015;color:#ffdf00}.done{background:#34c75918;color:#72ed92}.cancel{background:#ff453a18;color:#ff8179}.actions{display:flex;gap:8px;margin-top:10px}.actions button{flex:1}.section{margin-top:22px}.section-title{font-size:12px;color:var(--muted);text-transform:uppercase;letter-spacing:.7px;margin:0 0 8px 3px}.fab{position:fixed;right:20px;bottom:88px;width:57px;height:57px;border:0;border-radius:50%;background:var(--green);color:white;font-size:28px;box-shadow:0 12px 30px #009c3b55}.nav{position:fixed;bottom:0;left:0;right:0;background:#0a0c0bd9;backdrop-filter:blur(25px);border-top:1px solid var(--line);padding:8px 8px calc(8px + env(safe-area-inset-bottom));display:flex;justify-content:center}.navin{width:100%;max-width:780px;display:grid;grid-template-columns:repeat(3,1fr)}.tab{text-align:center;color:#7f8781;font-size:11px;padding:5px}.tab b{display:block;font-size:20px}.tab.active{color:#fff}.tab.active b{color:#34c759}.overlay{display:none;position:fixed;inset:0;background:#0008;z-index:20;align-items:flex-end}.overlay.show{display:flex}.sheet{width:100%;max-height:90vh;overflow:auto;background:#141715f2;border-radius:26px 26px 0 0;padding:12px 18px calc(25px + env(safe-area-inset-bottom));backdrop-filter:blur(30px)}.handle{width:38px;height:5px;background:#626862;border-radius:5px;margin:3px auto 17px}.field{margin:11px 0}.field label{display:block;color:#b7beb9;font-size:13px;margin-bottom:6px}.field input,.field select,.field textarea{width:100%;padding:12px;border-radius:13px;border:1px solid var(--line);background:#7676802e;color:var(--text)}.field textarea{min-height:70px}.save{background:var(--green)!important}.danger{background:#ff453a18!important;color:#ff8179!important}.schedule{font-size:13px;line-height:1.7}.notification{padding:14px;border-bottom:1px solid var(--line)}.empty{padding:35px;text-align:center;color:var(--muted)}\n</style></head><body><main class=\"wrap\"><header class=\"top\"><div><div class=\"brand\"><span>BARBERFLOWBR</span></div><div class=\"sub\">Gesti\u00f3n de Santi</div></div><button class=\"bell\" onclick=\"notifications()\">\u2667<i id=\"dot\" class=\"dot\"></i></button></header><div id=\"app\"></div></main><button id=\"fab\" class=\"fab\" onclick=\"openBlock()\">\uff0b</button><nav class=\"nav\"><div class=\"navin\"><button class=\"tab active\" data-v=\"agenda\"><b>\u25f7</b>Agenda</button><button class=\"tab\" data-v=\"contacts\"><b>\u2659</b>Contactos</button><button class=\"tab\" data-v=\"gains\"><b>$</b>Ganancias</button><button class=\"tab\" data-v=\"services\"><b>\u2726</b>Servicios</button></div></nav><div id=\"overlay\" class=\"overlay\" onclick=\"if(event.target===this)closeSheet()\"><div id=\"sheet\" class=\"sheet\"></div></div><script>\nconst $=id=>document.getElementById(id),fmt=n=>new Intl.NumberFormat('es-AR',{style:'currency',currency:'ARS',maximumFractionDigits:0}).format(n),esc=s=>String(s??'').replace(/[&<>\"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;',\"'\":'&#039;'}[c]));let D=null,view='agenda';\nasync function api(url,opt){let r=await fetch('/api'+url,opt);let j=await r.json();if(!r.ok)throw Object.assign(new Error(j.error||'Error'),{data:j});return j}\nfunction showSheet(h){$('sheet').innerHTML=h;$('overlay').classList.add('show')}function closeSheet(){$('overlay').classList.remove('show')}\nasync function boot(){try{D=await api('/admin');render()}catch(e){login()}}\nfunction login(){showSheet('<div class=\"handle\"></div><h2>Gesti\u00f3n privada</h2><p class=\"muted\">Ingres\u00e1 el PIN de 4 d\u00edgitos de Santi.</p><div class=\"field\"><label>PIN</label><input id=\"pin\" inputmode=\"numeric\" maxlength=\"4\" type=\"password\"></div><button class=\"btn primary\" onclick=\"doLogin()\">Entrar</button><button class=\"btn\" onclick=\"recover()\">Olvid\u00e9 mi PIN</button>')}\nasync function doLogin(){try{await api('/login',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({pin:$('pin').value})});closeSheet();D=await api('/admin');render()}catch(e){alert(e.message)}}\nasync function recover(){showSheet('<div class=\"handle\"></div><h2>Recuperar PIN</h2><p class=\"muted\">Respond\u00e9 la pregunta de recuperaci\u00f3n.</p><div class=\"field\"><label>Respuesta</label><input id=\"ans\"></div><div class=\"field\"><label>Nuevo PIN</label><input id=\"newpin\" inputmode=\"numeric\" maxlength=\"4\" type=\"password\"></div><button class=\"btn primary\" onclick=\"doRecover()\">Cambiar PIN</button>')}\nasync function doRecover(){try{await api('/recover',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({answer:$('ans').value,newPin:$('newpin').value})});alert('PIN cambiado.');login()}catch(e){alert(e.message)}}\nfunction render(){document.querySelectorAll('.tab').forEach(x=>x.classList.toggle('active',x.dataset.v===view));$('fab').style.display=view==='agenda'?'block':'none';if(view==='agenda')agenda();if(view==='contacts')contacts();if(view==='gains')gains();if(view==='services')settings()}\nfunction agenda(){let t=D.today, xs=D.appointments.filter(a=>String(a.date).slice(0,10)>=t),today=xs.filter(a=>String(a.date).slice(0,10)===t),done=today.filter(a=>a.status==='done'),pending=today.filter(a=>a.status==='pending'),cancel=today.filter(a=>a.status==='cancelled');$('app').innerHTML=`<h1>Agenda</h1><div class=\"actions\"><button class=\"btn primary\" onclick=\"newAppointment()\">\uff0b Nuevo turno</button></div><div class=\"metricgrid\"><div class=\"metric\"><b>${pending.length}</b><small>Pendientes hoy</small></div><div class=\"metric\"><b>${fmt(done.reduce((s,a)=>s+Number(a.price),0))}</b><small>Ganado hoy</small></div><div class=\"metric\"><b>${cancel.length}</b><small>Cancelados hoy</small></div><div class=\"metric\"><b>${D.notifications.length}</b><small>Avisos sin leer</small></div></div><div class=\"section\"><div class=\"section-title\">Pr\u00f3ximos turnos</div><div class=\"card\">${xs.length?xs.map(a=>`<div class=\"row\"><div class=\"rowhead\"><b>${String(a.date).slice(0,10)} \u00b7 ${String(a.time).slice(0,5)}</b><span class=\"badge ${a.status==='done'?'done':a.status==='cancelled'?'cancel':''}\">${a.status==='done'?'Hecho':a.status==='cancelled'?'Cancelado':'Pendiente'}</span></div><div>${esc(a.name)} \u00b7 ${esc(a.service_name)} \u00b7 ${fmt(a.price)}</div><small class=\"muted\">${esc(a.whatsapp)}</small>${a.status==='pending'&&String(a.date).slice(0,10)===t?`<div class=\"actions\"><button class=\"btn primary\" onclick=\"finish('${a.id}')\">\u2713 Hecho</button><button class=\"btn danger\" onclick=\"cancelManual('${a.id}')\">Cancelar</button></div>`:''}</div>`).join(''):'<div class=\"empty\">No hay turnos pr\u00f3ximos.</div>'}</div></div>`}\nfunction contacts(){let xs=D.clients;$('app').innerHTML='<h1>Contactos</h1><div class=\"card\">'+(xs.length?xs.map(c=>`<div class=\"row\"><div class=\"rowhead\"><b>${esc(c.name)}</b><span>${esc(c.whatsapp)}</span></div><small class=\"muted\">${c.visits} visitas \u00b7 ${c.cancellations} cancelaciones \u00b7 ${c.late_cancellations} tard\u00edas \u00b7 ${c.no_shows} no asisti\u00f3 \u00b7 ${fmt(c.total_spent)}</small></div>`).join(''):'<div class=\"empty\">Todav\u00eda no hay contactos.</div>')+'</div>'}\nfunction settings(){let s=D.settings;$('app').innerHTML=`<h1>Servicios</h1><div class=\"section-title\">Servicios online</div><div class=\"card\">${D.services.map(x=>`<div class=\"row\"><div class=\"rowhead\"><b>${esc(x.name)}</b><b>${fmt(x.price)}</b></div><small class=\"muted\">${x.duration} min \u00b7 ${x.online?'Online':'Solo Santi'}</small><div class=\"actions\"><button class=\"btn\" onclick=\"editService('${x.id}')\">Editar</button></div></div>`).join('')}<div class=\"actions\" style=\"padding:15px\"><button class=\"btn primary\" onclick=\"editService('')\">\uff0b Agregar servicio</button></div></div><div class=\"section\"><div class=\"section-title\">Local</div><div class=\"card\"><div class=\"row\"><b>Direcci\u00f3n</b><div class=\"muted\">${esc(s.address)}</div></div><div class=\"row\"><b>Tel\u00e9fono</b><div class=\"muted\">${esc(s.phone)}</div></div><div class=\"actions\" style=\"padding:0 15px 15px\"><button class=\"btn primary\" onclick=\"editSettings()\">Editar</button></div></div></div><div class=\"section\"><div class=\"section-title\">Horarios</div><div class=\"card\"><div class=\"row schedule\">Martes 15:00\u201320:00<br>Mi\u00e9rcoles 15:00\u201320:00<br>Jueves 10:00\u201312:00 y 15:00\u201320:00<br>Viernes 10:00\u201320:00<br>S\u00e1bado 10:00\u201320:00<br>Domingo y lunes cerrado</div></div></div><div class=\"section\"><button class=\"btn\" onclick=\"changePin()\">Cambiar PIN</button><button class=\"btn\" onclick=\"changeRecovery()\">Cambiar recuperaci\u00f3n</button><button class=\"btn danger\" onclick=\"logout()\">Cerrar sesi\u00f3n</button></div>`}\nfunction gains(){let done=D.appointments.filter(a=>a.status==='done'),today=done.filter(a=>String(a.date).slice(0,10)===D.today),revenue=today.reduce((s,a)=>s+Number(a.price),0),month=done.filter(a=>String(a.date).slice(0,7)===D.today.slice(0,7)).reduce((s,a)=>s+Number(a.price),0);$('app').innerHTML=`<h1>Ganancias</h1><div class=\"metricgrid\"><div class=\"metric\"><b>${fmt(revenue)}</b><small>Hoy</small></div><div class=\"metric\"><b>${fmt(month)}</b><small>Este mes</small></div><div class=\"metric\"><b>${done.length}</b><small>Turnos finalizados</small></div><div class=\"metric\"><b>${fmt(done.reduce((s,a)=>s+Number(a.price),0))}</b><small>Acumulado visible</small></div></div>`}\nfunction editService(id){let x=id?D.services.find(s=>s.id===id):{name:'',price:0,duration:30,online:true};showSheet(`<div class=\"handle\"></div><h2>${id?'Editar':'Nuevo'} servicio</h2><div class=\"field\"><label>Nombre</label><input id=\"sn\" value=\"${esc(x.name)}\"></div><div class=\"field\"><label>Precio</label><input id=\"sp\" type=\"number\" value=\"${x.price}\"></div><div class=\"field\"><label>Duraci\u00f3n (minutos)</label><input id=\"sd\" type=\"number\" value=\"${x.duration}\"></div><label><input id=\"so\" type=\"checkbox\" ${x.online?'checked':''}> Reservable online</label><button class=\"btn save\" onclick=\"saveService('${id}')\">Guardar</button>`)}\nasync function saveService(id){await api('/admin/service',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({id:id||null,name:$('sn').value.trim(),price:Number($('sp').value),duration:Number($('sd').value),online:$('so').checked})});closeSheet();D=await api('/admin');render()}\nfunction editSettings(){showSheet(`<div class=\"handle\"></div><h2>Datos del local</h2><div class=\"field\"><label>Direcci\u00f3n</label><input id=\"address\" value=\"${esc(D.settings.address)}\"></div><div class=\"field\"><label>Tel\u00e9fono</label><input id=\"phone\" value=\"${esc(D.settings.phone)}\"></div><button class=\"btn save\" onclick=\"saveSettings()\">Guardar</button>`)}\nasync function saveSettings(){await api('/admin/settings',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({address:$('address').value,phone:$('phone').value})});closeSheet();D=await api('/admin');render()}\nfunction changePin(){showSheet('<div class=\"handle\"></div><h2>Cambiar PIN</h2><div class=\"field\"><label>Nuevo PIN de 4 d\u00edgitos</label><input id=\"cpin\" inputmode=\"numeric\" maxlength=\"4\" type=\"password\"></div><button class=\"btn save\" onclick=\"savePin()\">Guardar</button>')}\nasync function savePin(){let p=$('cpin').value;if(!/^\\d{4}$/.test(p))return alert('El PIN debe tener 4 d\u00edgitos.');await api('/admin/pin',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({pin:p})});alert('PIN cambiado.');closeSheet()}\nfunction changeRecovery(){showSheet('<div class=\"handle\"></div><h2>Recuperaci\u00f3n</h2><div class=\"field\"><label>Pregunta</label><input id=\"rq\" value=\"'+esc(D.settings.recoveryQ)+'\"></div><div class=\"field\"><label>Respuesta</label><input id=\"ra\"></div><button class=\"btn save\" onclick=\"saveRecovery()\">Guardar</button>')}\nasync function saveRecovery(){await api('/admin/recovery',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({question:$('rq').value,answer:$('ra').value})});alert('Recuperaci\u00f3n actualizada.');closeSheet();D=await api('/admin');render()}\nfunction newAppointment(){let clients=D.clients,services=D.services;showSheet(`<div class=\"handle\"></div><h2>Nuevo turno</h2><div class=\"field\"><label>Contacto</label><select id=\"ac\">${clients.map(c=>`<option value=\"${c.id}\">${esc(c.name)} \u00b7 ${esc(c.whatsapp)}</option>`).join('')}</select></div><div class=\"field\"><label>Servicio</label><select id=\"as\">${services.map(s=>`<option value=\"${s.id}\">${esc(s.name)} \u00b7 ${fmt(s.price)}</option>`).join('')}</select></div><div class=\"field\"><label>Fecha</label><input id=\"ad\" type=\"date\" min=\"${D.today}\" value=\"${D.today}\"></div><div class=\"field\"><label>Hora</label><input id=\"at\" type=\"time\" value=\"15:00\"></div><button class=\"btn save\" onclick=\"saveAppointment()\">Guardar</button>`)}\nasync function saveAppointment(){try{await api('/admin/appointment',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({clientId:$('ac').value,date:$('ad').value,time:$('at').value,serviceId:$('as').value,status:'pending',notes:''})});closeSheet();D=await api('/admin');render()}catch(e){alert(e.message)}}\nfunction openBlock(){showSheet('<div class=\"handle\"></div><h2>Bloquear horario</h2><div class=\"field\"><label>Fecha</label><input id=\"bd\" type=\"date\" min=\"'+D.today+'\" value=\"'+D.today+'\"></div><div class=\"field\"><label>Desde</label><input id=\"bs\" type=\"time\" value=\"15:00\"></div><div class=\"field\"><label>Hasta</label><input id=\"be\" type=\"time\" value=\"16:00\"></div><label><input id=\"whole\" type=\"checkbox\"> Bloquear todo el d\u00eda</label><div class=\"field\"><label>Motivo (opcional)</label><input id=\"br\"></div><button class=\"btn save\" onclick=\"createBlock(false)\">Continuar</button>')}\nasync function createBlock(confirmFlag){let body={date:$('bd').value,start:$('bs').value,end:$('be').value,wholeDay:$('whole').checked,reason:$('br').value,confirm:confirmFlag,cancelAffected:false};try{let r=await api('/admin/block',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(body)});closeSheet();D=await api('/admin');render();alert('Bloqueo aplicado.')}catch(e){if(e.data?.affected){let list=e.data.affected.map(a=>`${String(a.time).slice(0,5)} \u00b7 ${a.name} \u00b7 ${a.service_name}`).join('\\n');showSheet(`<div class=\"handle\"></div><h2>Hay turnos afectados</h2><p class=\"muted\">Contactalos manualmente antes de cancelar.</p><pre style=\"white-space:pre-wrap\">${esc(list)}</pre><div class=\"actions\"><button class=\"btn\" onclick=\"closeSheet()\">Conservar turnos</button><button class=\"btn danger\" onclick=\"applyAffectedBlock()\">Cancelar y bloquear</button></div>`)}else alert(e.message)}}\nasync function applyAffectedBlock(){let body={date:$('bd').value,start:$('bs').value,end:$('be').value,wholeDay:$('whole').checked,reason:$('br').value,confirm:true,cancelAffected:true};await api('/admin/block',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(body)});closeSheet();D=await api('/admin');render();alert('Turnos afectados cancelados y horario bloqueado.')}\nasync function finish(id){await api('/admin/finish',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({id})});D=await api('/admin');render()}\nasync function cancelManual(id){if(!confirm('\u00bfCancelar este turno?'))return;await api('/admin/appointment',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({id,clientId:D.appointments.find(a=>a.id===id).client_id,date:String(D.appointments.find(a=>a.id===id).date).slice(0,10),time:String(D.appointments.find(a=>a.id===id).time).slice(0,5),serviceId:D.appointments.find(a=>a.id===id).service_id,status:'cancelled',notes:''})});D=await api('/admin');render()}\nfunction notifications(){let n=D.notifications;showSheet('<div class=\"handle\"></div><h2>Avisos</h2>'+(n.length?n.map(x=>`<div class=\"notification\"><b>${esc(x.title)}</b><p class=\"muted\">${esc(x.body)}</p><button class=\"btn\" onclick=\"readNote('${x.id}')\">Marcar visto</button></div>`).join(''):'<p class=\"empty\">No hay avisos nuevos.</p>'))}\nasync function readNote(id){await api('/admin/notifications/read',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({id})});D=await api('/admin');notifications()}\nasync function logout(){await api('/logout',{method:'POST'});D=null;login()}\ndocument.querySelectorAll('.tab').forEach(b=>b.onclick=()=>{view=b.dataset.v;render()});boot();\n</script></body></html>\n";

const DEFAULTS = {
  address: 'Italia 900',
  phone: '+54 9 2477 690562',
  pin: '3001',
  recoveryQ: '¿Cómo se llama el perro de Luis?',
  recoveryA: 'Apolo',
  schedule: {
    2: [['15:00','20:00']],
    3: [['15:00','20:00']],
    4: [['10:00','12:00'],['15:00','20:00']],
    5: [['10:00','20:00']],
    6: [['10:00','20:00']]
  }
};
const SERVICES = [
  ['s1','Corte',14000,25],
  ['s2','Corte + barba',17000,30],
  ['s3','Color',80000,120],
  ['s4','Mechas',60000,120],
  ['s5','Global',80000,150]
];

const json = (status, body, headers={}) => new Response(JSON.stringify(body), {
  status,
  headers: { 'content-type':'application/json; charset=utf-8', 'cache-control':'no-store', ...headers }
});
const uid = p => `${p}${crypto.randomUUID().replaceAll('-','').slice(0,12)}`;
const minutes = t => { const [h,m]=String(t).slice(0,5).split(':').map(Number); return h*60+m; };
const hhmm = m => `${String(Math.floor(m/60)).padStart(2,'0')}:${String(m%60).padStart(2,'0')}`;
const today = () => new Intl.DateTimeFormat('en-CA',{timeZone:'America/Argentina/Buenos_Aires'}).format(new Date());
const cleanWA = v => String(v||'').replace(/\D/g,'');

async function sha256(value){
  const data = new TextEncoder().encode(String(value));
  const digest = await crypto.subtle.digest('SHA-256', data);
  return [...new Uint8Array(digest)].map(x=>x.toString(16).padStart(2,'0')).join('');
}
function cookies(req){
  const out={};
  for(const part of (req.headers.get('cookie')||'').split(';')){
    const [k,...v]=part.trim().split('='); if(k) out[k]=v.join('=');
  }
  return out;
}
function sessionCookie(token){
  return `bf_session=${token}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=604800`;
}
function clearSessionCookie(){ return 'bf_session=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0'; }
function dateDiff(a,b){ return Math.round((new Date(`${a}T12:00:00Z`)-new Date(`${b}T12:00:00Z`))/86400000); }
function scheduleFor(date){ const dow=new Date(`${date}T12:00:00Z`).getUTCDay(); return DEFAULTS.schedule[dow]||[]; }
function validDate(date){ const d=dateDiff(date,today()); return d>=0 && d<=2; }
function slotTimes(start,duration){ const out=[]; for(let m=minutes(start);m<minutes(start)+duration;m+=15) out.push(hhmm(m)); return out; }
function startsFor(date,duration){
  if(!validDate(date)) return [];
  const out=[];
  for(const [a,b] of scheduleFor(date)){
    for(let m=minutes(a);m<=minutes(b);m+=15){
      const end=m+duration;
      if(end>1440) continue;
      out.push(hhmm(m));
    }
  }
  return out;
}
function startInsideSchedule(date,time){ return scheduleFor(date).some(([a,b])=>minutes(time)>=minutes(a)&&minutes(time)<minutes(b)); }
function allowedStart(date,time,duration){
  if(!startInsideSchedule(date,time)) return false;
  return startsFor(date,duration).includes(time);
}
async function dbInit(db){
  // The schema is installed from schema.sql before first use. This tiny bootstrap is idempotent
  // and makes a fresh D1 database self-starting even when the schema was not imported yet.
  const statements = [
    `CREATE TABLE IF NOT EXISTS bf_settings (id INTEGER PRIMARY KEY,address TEXT NOT NULL,phone TEXT NOT NULL,pin_hash TEXT NOT NULL,recovery_q TEXT NOT NULL,recovery_a_hash TEXT NOT NULL)`,
    `CREATE TABLE IF NOT EXISTS bf_services (id TEXT PRIMARY KEY,name TEXT NOT NULL,price INTEGER NOT NULL,duration INTEGER NOT NULL,online INTEGER NOT NULL DEFAULT 1)`,
    `CREATE TABLE IF NOT EXISTS bf_clients (id TEXT PRIMARY KEY,name TEXT NOT NULL,whatsapp TEXT UNIQUE NOT NULL,visits INTEGER NOT NULL DEFAULT 0,cancellations INTEGER NOT NULL DEFAULT 0,late_cancellations INTEGER NOT NULL DEFAULT 0,no_shows INTEGER NOT NULL DEFAULT 0,total_spent INTEGER NOT NULL DEFAULT 0,last_visit TEXT)`,
    `CREATE TABLE IF NOT EXISTS bf_appointments (id TEXT PRIMARY KEY,client_id TEXT NOT NULL,service_id TEXT NOT NULL,service_name TEXT NOT NULL,price INTEGER NOT NULL,duration INTEGER NOT NULL,date TEXT NOT NULL,time TEXT NOT NULL,status TEXT NOT NULL,source TEXT NOT NULL DEFAULT 'online',notes TEXT DEFAULT '',created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,cancelled_at TEXT,late_cancel INTEGER NOT NULL DEFAULT 0)`,
    `CREATE TABLE IF NOT EXISTS bf_slots (date TEXT NOT NULL,time TEXT NOT NULL,owner_id TEXT NOT NULL,kind TEXT NOT NULL,PRIMARY KEY(date,time))`,
    `CREATE TABLE IF NOT EXISTS bf_blocks (id TEXT PRIMARY KEY,date TEXT NOT NULL,start_time TEXT NOT NULL,end_time TEXT NOT NULL,whole_day INTEGER NOT NULL DEFAULT 0,reason TEXT DEFAULT '')`,
    `CREATE TABLE IF NOT EXISTS bf_notifications (id TEXT PRIMARY KEY,kind TEXT NOT NULL,title TEXT NOT NULL,body TEXT NOT NULL,created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,seen INTEGER NOT NULL DEFAULT 0)`,
    `CREATE TABLE IF NOT EXISTS bf_sessions (token_hash TEXT PRIMARY KEY,expires_at TEXT NOT NULL)`,
    `CREATE TABLE IF NOT EXISTS bf_daily_summaries (date TEXT PRIMARY KEY,turns INTEGER NOT NULL DEFAULT 0,revenue INTEGER NOT NULL DEFAULT 0,cancelled INTEGER NOT NULL DEFAULT 0)`,
    `CREATE INDEX IF NOT EXISTS idx_appt_date_time ON bf_appointments(date,time)`,
    `CREATE INDEX IF NOT EXISTS idx_appt_client ON bf_appointments(client_id,date)`,
    `CREATE INDEX IF NOT EXISTS idx_blocks_date ON bf_blocks(date)`,
    `CREATE INDEX IF NOT EXISTS idx_notifications_seen ON bf_notifications(seen,created_at)`
  ];
  await db.batch(statements.map(s=>db.prepare(s)));
  const st=await db.prepare('SELECT * FROM bf_settings WHERE id=1').first();
  if(!st){
    await db.prepare('INSERT INTO bf_settings(id,address,phone,pin_hash,recovery_q,recovery_a_hash) VALUES(1,?,?,?,?,?)')
      .bind(DEFAULTS.address,DEFAULTS.phone,await sha256(DEFAULTS.pin),DEFAULTS.recoveryQ,await sha256(DEFAULTS.recoveryA.toLowerCase())).run();
  }
  const n=await db.prepare('SELECT COUNT(*) AS n FROM bf_services').first();
  if(Number(n?.n||0)===0){
    await db.batch(SERVICES.map(s=>db.prepare('INSERT INTO bf_services(id,name,price,duration,online) VALUES(?,?,?,?,1)').bind(...s)));
  }
}
async function rollover(db){
  const now=today();
  const old=await db.prepare(`SELECT * FROM bf_appointments WHERE date<? AND status='pending'`).all(now);
  if(!old.results.length) return;
  const stm=[];
  for(const a of old.results){
    stm.push(db.prepare(`UPDATE bf_appointments SET status='cancelled',cancelled_at=CURRENT_TIMESTAMP WHERE id=?`).bind(a.id));
    stm.push(db.prepare(`DELETE FROM bf_slots WHERE owner_id=?`).bind(a.id));
    stm.push(db.prepare(`UPDATE bf_clients SET cancellations=cancellations+1 WHERE id=?`).bind(a.client_id));
    stm.push(db.prepare(`INSERT INTO bf_daily_summaries(date,turns,revenue,cancelled) VALUES(?,0,0,1) ON CONFLICT(date) DO UPDATE SET cancelled=cancelled+1`).bind(a.date));
  }
  await db.batch(stm);
}
async function settings(db){ return db.prepare('SELECT * FROM bf_settings WHERE id=1').first(); }
async function isAdmin(req,db){
  const raw=cookies(req).bf_session; if(!raw) return false;
  const h=await sha256(raw);
  const r=await db.prepare('SELECT 1 FROM bf_sessions WHERE token_hash=? AND expires_at>CURRENT_TIMESTAMP').bind(h).first();
  return !!r;
}
async function notify(db,kind,title,body){ await db.prepare('INSERT INTO bf_notifications(id,kind,title,body) VALUES(?,?,?,?)').bind(uid('n'),kind,title,body).run(); }
async function service(db,id){ return db.prepare('SELECT * FROM bf_services WHERE id=?').bind(id).first(); }
async function occupiedSlots(db,date){ return db.prepare('SELECT time FROM bf_slots WHERE date=? ORDER BY time').bind(date).all(); }
async function publicData(db){
  const st=await settings(db); const sv=await db.prepare('SELECT id,name,price,duration FROM bf_services WHERE online=1 ORDER BY name').all();
  return {address:st.address,phone:st.phone,services:sv.results,schedule:DEFAULTS.schedule,days:3,today:today()};
}
async function canReserve(db,date,time,duration){
  if(!validDate(date)||!allowedStart(date,time,duration)) return false;
  const slots=slotTimes(time,duration);
  if(slots.some(t=>minutes(t)>=1440)) return false;
  for(const t of slots){ const x=await db.prepare('SELECT 1 FROM bf_slots WHERE date=? AND time=?').bind(date,t).first(); if(x) return false; }
  return true;
}
async function clientByWA(db,wa){ return db.prepare('SELECT * FROM bf_clients WHERE whatsapp=?').bind(wa).first(); }
async function insertAppointment(db,{id,clientId,s,date,time,status='pending',source='online',notes=''}){
  const slots=slotTimes(time,s.duration);
  const stm=[db.prepare(`INSERT INTO bf_appointments(id,client_id,service_id,service_name,price,duration,date,time,status,source,notes) VALUES(?,?,?,?,?,?,?,?,?,?,?)`).bind(id,clientId,s.id,s.name,s.price,s.duration,date,time,status,source,notes)];
  for(const t of slots) stm.push(db.prepare('INSERT INTO bf_slots(date,time,owner_id,kind) VALUES(?,?,?,?)').bind(date,t,id,'appointment'));
  await db.batch(stm);
}
async function cancelAppointment(db,a,late=false){
  await db.batch([
    db.prepare(`UPDATE bf_appointments SET status='cancelled',cancelled_at=CURRENT_TIMESTAMP,late_cancel=? WHERE id=?`).bind(late?1:0,a.id),
    db.prepare('DELETE FROM bf_slots WHERE owner_id=?').bind(a.id),
    db.prepare(`UPDATE bf_clients SET cancellations=cancellations+1,late_cancellations=late_cancellations+? WHERE id=?`).bind(late?1:0,a.client_id)
  ]);
}

async function onRequest(context){
  const {request,env,params}=context;
  const db=env.DB;
  const path='/' + (Array.isArray(params.path)?params.path.join('/'):(params.path||''));
  const method=request.method;
  if(path==='/health' && method==='GET'){
    if(!db) return json(503,{ok:false,d1:false,error:'Falta configurar el binding D1 llamado DB.'});
    try{
      const r=await db.prepare('SELECT 1 AS ok').first();
      return json(200,{ok:true,d1:true,select:Number(r?.ok||0)===1});
    }catch(e){
      console.error('D1_HEALTH_ERROR', e);
      return json(503,{ok:false,d1:false,error:'D1 no responde'});
    }
  }
  if(!db) return json(500,{error:'Falta configurar el binding D1 llamado DB.'});
  try{
    await dbInit(db);
    await rollover(db);
    let body={};
    if(method!=='GET'&&method!=='HEAD') { try{ body=await request.json(); }catch{} }

    if(method==='GET'&&path==='/public') return json(200,await publicData(db));

    if(method==='GET'&&path==='/availability'){
      const u=new URL(request.url),date=u.searchParams.get('date'),serviceId=u.searchParams.get('service');
      const s=await service(db,serviceId);
      if(!date||!s||!s.online) return json(400,{error:'Datos inválidos'});
      const times=startsFor(date,s.duration).filter(async()=>true);
      const free=[];
      for(const t of times) if(await canReserve(db,date,t,s.duration)) free.push(t);
      return json(200,{date,service:s.id,times:free});
    }

    if(method==='POST'&&path==='/book'){
      const {service:serviceId,date,time,name,whatsapp}=body; const s=await service(db,serviceId); const wa=cleanWA(whatsapp);
      if(!s||!s.online||!date||!time||!String(name||'').trim()||wa.length<8) return json(400,{error:'Completá todos los datos'});
      if(!validDate(date)) return json(400,{error:'Solo se pueden reservar hoy, mañana o pasado mañana'});
      const id=uid('a'); const cid=uid('c'); const old=await clientByWA(db,wa); const clientId=old?.id||cid;
      const stm=[];
      if(!old) stm.push(db.prepare('INSERT INTO bf_clients(id,name,whatsapp) VALUES(?,?,?)').bind(clientId,String(name).trim(),wa));
      else stm.push(db.prepare('UPDATE bf_clients SET name=? WHERE id=?').bind(String(name).trim(),clientId));
      if(!await canReserve(db,date,time,s.duration)) return json(409,{error:'Ese horario ya no está disponible'});
      stm.push(db.prepare(`INSERT INTO bf_appointments(id,client_id,service_id,service_name,price,duration,date,time,status,source) VALUES(?,?,?,?,?,?,?,?,?,?)`).bind(id,clientId,s.id,s.name,s.price,s.duration,date,time,'pending','online'));
      for(const t of slotTimes(time,s.duration)) stm.push(db.prepare('INSERT INTO bf_slots(date,time,owner_id,kind) VALUES(?,?,?,?)').bind(date,t,id,'appointment'));
      stm.push(db.prepare('INSERT INTO bf_notifications(id,kind,title,body) VALUES(?,?,?,?)').bind(uid('n'),'booking','Nuevo turno online',`${String(name).trim()} · ${s.name} · ${date} · ${time}`));
      try { await db.batch(stm); } catch(e) { return json(409,{error:'Ese horario acaba de ser ocupado. Elegí otro.'}); }
      const st=await settings(db); return json(200,{id,service:s.name,price:s.price,duration:s.duration,date,time,address:st.address,phone:st.phone});
    }

    if(method==='GET'&&path==='/my-appointments'){
      const u=new URL(request.url),wa=cleanWA(u.searchParams.get('whatsapp')); const r=await db.prepare(`SELECT a.*,c.name,c.whatsapp FROM bf_appointments a JOIN bf_clients c ON c.id=a.client_id WHERE c.whatsapp=? AND a.date>=? AND a.status='pending' ORDER BY a.date,a.time`).bind(wa,today()).all(); const st=await settings(db);
      return json(200,{appointments:r.results,address:st.address,phone:st.phone});
    }

    if(method==='POST'&&path==='/cancel'){
      const {id,whatsapp}=body,wa=cleanWA(whatsapp); const a=await db.prepare(`SELECT a.*,c.whatsapp FROM bf_appointments a JOIN bf_clients c ON c.id=a.client_id WHERE a.id=? AND c.whatsapp=?`).bind(id,wa).first();
      if(!a||a.status!=='pending') return json(404,{error:'Turno no encontrado'});
      const ap=Date.parse(`${a.date}T${String(a.time).slice(0,5)}:00-03:00`); const hours=(ap-Date.now())/3600000; if(hours<0)return json(400,{error:'El turno ya comenzó o pasó'});
      const late=hours<1; await cancelAppointment(db,a,late);
      if(late) await notify(db,'late_cancel','Cancelación con menos de 1 hora',`${a.service_name} · ${a.date} · ${String(a.time).slice(0,5)} · corresponde informar 50% (${Math.round(a.price/2)})`); else await notify(db,'cancel','Turno cancelado',`${a.service_name} · ${a.date} · ${String(a.time).slice(0,5)}`);
      return json(200,{ok:true,late,halfPrice:late?Math.round(a.price/2):0});
    }

    if(method==='POST'&&path==='/login'){
      const st=await settings(db); if(await sha256(body.pin||'')!==st.pin_hash) return json(401,{error:'PIN incorrecto'});
      const raw=crypto.randomUUID()+crypto.randomUUID(), h=await sha256(raw); await db.prepare(`INSERT INTO bf_sessions(token_hash,expires_at) VALUES(?,datetime('now','+7 days'))`).bind(h).run();
      return json(200,{ok:true},{'set-cookie':sessionCookie(raw)});
    }

    if(method==='POST'&&path==='/recover'){
      const st=await settings(db); if(await sha256(String(body.answer||'').trim().toLowerCase())!==st.recovery_a_hash)return json(401,{error:'Respuesta incorrecta'});
      if(!/^\d{4}$/.test(String(body.newPin||'')))return json(400,{error:'El PIN debe tener 4 dígitos'});
      await db.prepare('UPDATE bf_settings SET pin_hash=? WHERE id=1').bind(await sha256(body.newPin)).run(); return json(200,{ok:true});
    }

    if(!(await isAdmin(request,db))) return json(401,{error:'No autorizado'});

    if(method==='GET'&&path==='/admin'){
      const [st,sv,ap,cl,bl,n,summ]=await Promise.all([
        settings(db),
        db.prepare('SELECT id,name,price,duration,online FROM bf_services ORDER BY name').all(),
        db.prepare(`SELECT a.*,c.name,c.whatsapp FROM bf_appointments a JOIN bf_clients c ON c.id=a.client_id WHERE a.date>=? ORDER BY a.date,a.time`).bind(today()).all(),
        db.prepare('SELECT * FROM bf_clients ORDER BY name').all(),
        db.prepare('SELECT * FROM bf_blocks WHERE date>=? ORDER BY date,start_time').bind(today()).all(),
        db.prepare('SELECT * FROM bf_notifications WHERE seen=0 ORDER BY created_at DESC').all(),
        db.prepare("SELECT * FROM bf_daily_summaries WHERE date>=date(?,'-2 months') ORDER BY date DESC").bind(today()).all()
      ]);
      return json(200,{settings:{address:st.address,phone:st.phone,recoveryQ:st.recovery_q},services:sv.results,appointments:ap.results,clients:cl.results,blocks:bl.results,notifications:n.results,summaries:summ.results,schedule:DEFAULTS.schedule,today:today()});
    }
    if(method==='POST'&&path==='/admin/settings'){await db.prepare('UPDATE bf_settings SET address=?,phone=? WHERE id=1').bind(body.address,body.phone).run();return json(200,{ok:true});}
    if(method==='POST'&&path==='/admin/pin'){if(!/^\d{4}$/.test(String(body.pin||'')))return json(400,{error:'El PIN debe tener 4 dígitos'});await db.prepare('UPDATE bf_settings SET pin_hash=? WHERE id=1').bind(await sha256(body.pin)).run();return json(200,{ok:true});}
    if(method==='POST'&&path==='/admin/recovery'){await db.prepare('UPDATE bf_settings SET recovery_q=?,recovery_a_hash=? WHERE id=1').bind(body.question,await sha256(String(body.answer||'').trim().toLowerCase())).run();return json(200,{ok:true});}
    if(method==='POST'&&path==='/admin/service'){
      if(body.id) await db.prepare('UPDATE bf_services SET name=?,price=?,duration=?,online=? WHERE id=?').bind(body.name,Number(body.price),Number(body.duration),body.online?1:0,body.id).run();
      else await db.prepare('INSERT INTO bf_services(id,name,price,duration,online) VALUES(?,?,?,?,?)').bind(uid('s'),body.name,Number(body.price),Number(body.duration),body.online===false?0:1).run();
      return json(200,{ok:true});
    }
    if(method==='POST'&&path==='/admin/appointment'){
      const {id,clientId,date,time,serviceId,status='pending',notes=''}=body; const s=await service(db,serviceId); if(!s)return json(400,{error:'Servicio inválido'});
      if(id){
        const old=await db.prepare('SELECT * FROM bf_appointments WHERE id=?').bind(id).first(); if(!old)return json(404,{error:'Turno no encontrado'});
        if(old.status==='done')return json(400,{error:'Los turnos hechos no se editan'});
        await db.batch([db.prepare('DELETE FROM bf_slots WHERE owner_id=?').bind(id),db.prepare('UPDATE bf_appointments SET date=?,time=?,service_id=?,service_name=?,price=?,duration=?,status=?,notes=? WHERE id=?').bind(date,time,s.id,s.name,s.price,s.duration,status,notes,id)]);
        if(status!=='cancelled'){
          if(!await canReserve(db,date,time,s.duration))return json(409,{error:'Horario ocupado'});
          await db.batch(slotTimes(time,s.duration).map(t=>db.prepare('INSERT INTO bf_slots(date,time,owner_id,kind) VALUES(?,?,?,?)').bind(date,t,id,'appointment')));
        }
        return json(200,{ok:true});
      }
      if(!clientId||!validDate(date)||!await canReserve(db,date,time,s.duration))return json(409,{error:'Horario ocupado o datos inválidos'});
      await insertAppointment(db,{id:uid('a'),clientId,s,date,time,status,source:'manual',notes}); return json(200,{ok:true});
    }
    if(method==='POST'&&path==='/admin/block'){
      const {date,start,end,wholeDay,reason}=body; let affected=[];
      if(wholeDay) affected=(await db.prepare(`SELECT a.*,c.name,c.whatsapp FROM bf_appointments a JOIN bf_clients c ON c.id=a.client_id WHERE a.date=? AND a.status='pending'`).bind(date).all()).results;
      else affected=(await db.prepare(`SELECT a.*,c.name,c.whatsapp FROM bf_appointments a JOIN bf_clients c ON c.id=a.client_id WHERE a.date=? AND a.status='pending' AND a.time<? AND time(a.time, '+'||a.duration||' minutes')>?`).bind(date,end,start).all()).results;
      if(affected.length&&!body.confirm)return json(409,{affected});
      const bid=uid('b'); const bStart=wholeDay?'00:00':start,bEnd=wholeDay?'23:59':end;
      const stm=[db.prepare('INSERT INTO bf_blocks(id,date,start_time,end_time,whole_day,reason) VALUES(?,?,?,?,?,?)').bind(bid,date,bStart,bEnd,wholeDay?1:0,reason||'')];
      const blockSlots=[]; if(wholeDay){for(let m=0;m<1440;m+=15)blockSlots.push(hhmm(m));}else{for(let m=minutes(start);m<minutes(end);m+=15)blockSlots.push(hhmm(m));}
      for(const t of blockSlots)stm.push(db.prepare('INSERT INTO bf_slots(date,time,owner_id,kind) VALUES(?,?,?,?)').bind(date,t,bid,'block'));
      if(affected.length&&body.cancelAffected){for(const a of affected){stm.push(db.prepare(`UPDATE bf_appointments SET status='cancelled',cancelled_at=CURRENT_TIMESTAMP WHERE id=?`).bind(a.id));stm.push(db.prepare('DELETE FROM bf_slots WHERE owner_id=?').bind(a.id));stm.push(db.prepare('UPDATE bf_clients SET cancellations=cancellations+1 WHERE id=?').bind(a.client_id));}}
      try{await db.batch(stm);}catch(e){return json(409,{error:'No se pudo aplicar el bloqueo porque se superpone con otro horario.'});}
      return json(200,{ok:true,affected:affected.length});
    }
    if(method==='POST'&&path==='/admin/notifications/read'){await db.prepare('UPDATE bf_notifications SET seen=1 WHERE id=?').bind(body.id).run();return json(200,{ok:true});}
    if(method==='POST'&&path==='/admin/finish'){
      const a=await db.prepare('SELECT * FROM bf_appointments WHERE id=?').bind(body.id).first(); if(!a||a.date!==today()||a.status!=='pending')return json(400,{error:'Solo se puede finalizar un turno pendiente de hoy'});
      await db.batch([
        db.prepare(`UPDATE bf_appointments SET status='done' WHERE id=?`).bind(a.id),
        db.prepare('DELETE FROM bf_slots WHERE owner_id=?').bind(a.id),
        db.prepare('UPDATE bf_clients SET visits=visits+1,total_spent=total_spent+?,last_visit=? WHERE id=?').bind(a.price,today(),a.client_id),
        db.prepare(`INSERT INTO bf_daily_summaries(date,turns,revenue,cancelled) VALUES(?,?,?,0) ON CONFLICT(date) DO UPDATE SET turns=turns+1,revenue=revenue+excluded.revenue`).bind(today(),1,a.price)
      ]); return json(200,{ok:true});
    }
    if(method==='POST'&&path==='/logout'){const raw=cookies(request).bf_session;if(raw)await db.prepare('DELETE FROM bf_sessions WHERE token_hash=?').bind(await sha256(raw)).run();return json(200,{ok:true},{'set-cookie':clearSessionCookie()});}
    return json(404,{error:'Ruta no encontrada'});
  }catch(e){ console.error(e); return json(500,{error:'Error interno',diagnostic:'PUBLIC_ROUTE_FAILED'}); }
}


export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.pathname === "/api" || url.pathname.startsWith("/api/")) {
      const raw = url.pathname.replace(/^\/api\/?/, "");
      const path = raw ? raw.split("/").filter(Boolean) : [];
      return onRequest({ request, env, ctx, params: { path } });
    }

    if (url.pathname === "/" || url.pathname === "") {
      return new Response(ROOT, {headers:{"content-type":"text/html; charset=utf-8","cache-control":"no-store"}});
    }
    if (url.pathname === "/reservar" || url.pathname === "/reservar/") {
      return new Response(RESERVAR, {headers:{"content-type":"text/html; charset=utf-8","cache-control":"no-store"}});
    }
    if (url.pathname === "/gestion" || url.pathname === "/gestion/") {
      return new Response(GESTION, {headers:{"content-type":"text/html; charset=utf-8","cache-control":"no-store"}});
    }

    return new Response("No encontrado", {status:404});
  }
};
