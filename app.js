/* =======================================================
   app.js — lógica de la aplicación
   Depende de `planesEstudio`, definido en data.js
   (debe cargarse ANTES que este archivo).
======================================================= */

let state = {
  plan: "2025",
  view: "semestre",      // "semestre" | "malla"
  semIndex: 0,
  query: ""
};

const ORDINALES = ["1er","2do"];

function isElectivo(nombre){ return /\(E\)\s*$/.test(nombre.trim()); }
function nombreLimpio(nombre){ return nombre.replace(/\s*\(E\)\s*$/,'').trim(); }

function getSemestresFlat(planKey){
  const plan = planesEstudio[planKey];
  const out = [];
  plan.anios.forEach(anio => {
    anio.semestres.forEach(sem => {
      out.push({
        index: out.length,
        anio: anio.numero,
        nombreSemestre: sem.nombre,
        cursos: sem.cursos
      });
    });
  });
  return out;
}

function getCourseMap(planKey){
  const map = {};
  planesEstudio[planKey].anios.forEach(anio => {
    anio.semestres.forEach(sem => {
      sem.cursos.forEach(c => { map[c.codigo] = c; });
    });
  });
  return map;
}

function getPlanStats(planKey){
  let cursos = 0, creditos = 0, electivos = 0;
  planesEstudio[planKey].anios.forEach(anio => {
    anio.semestres.forEach(sem => {
      sem.cursos.forEach(c => {
        cursos++; creditos += c.cred;
        if (isElectivo(c.nombre)) electivos++;
      });
    });
  });
  return { cursos, creditos, electivos };
}

const ICONS = {
  silabo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 4h9l3 3v13H6z"/><path d="M15 4v3h3"/></svg>',
  practica: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 6h16M4 12h16M4 18h10"/></svg>',
  examen: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>'
};

/* =======================================================
   RENDER: cabecera / stats / selects
======================================================= */
function fillPlanSelect(){
  const sel = document.getElementById('selectPlan');
  sel.innerHTML = Object.keys(planesEstudio).map(k =>
    `<option value="${k}" ${k===state.plan?'selected':''}>Plan ${k}</option>`
  ).join('');
  sel.addEventListener('change', e => {
    state.plan = e.target.value;
    state.semIndex = 0;
    renderAll();
  });
}

function renderHeroStats(){
  const s = getPlanStats(state.plan);
  document.getElementById('statCursos').textContent = s.cursos;
  document.getElementById('statCreditos').textContent = s.creditos;
  document.getElementById('statElectivos').textContent = s.electivos;

  document.getElementById('planSummary').innerHTML = `
    <div class="row"><span>Plan vigente</span><b>${planesEstudio[state.plan].nombre.replace('Plan de Estudios ','')}</b></div>
    <div class="row"><span>Años</span><b>${planesEstudio[state.plan].anios.length}</b></div>
    <div class="row"><span>Semestres</span><b>${getSemestresFlat(state.plan).length}</b></div>
    <div class="row"><span>Cursos totales</span><b>${s.cursos}</b></div>
    <div class="row"><span>Créditos totales</span><b>${s.creditos}</b></div>
  `;
}

function renderSemNav(){
  const wrap = document.getElementById('semNavWrap');
  if (state.view !== 'semestre'){ wrap.style.display = 'none'; return; }
  wrap.style.display = 'flex';
  const flat = getSemestresFlat(state.plan);
  wrap.innerHTML = flat.map(s => `
    <div class="sem-pill ${s.index===state.semIndex?'active':''}" data-i="${s.index}" role="tab" tabindex="0">
      <span class="ch">${s.anio.toUpperCase()}</span>
      <span class="lb">${ORDINALES[s.index%2]} ${s.nombreSemestre.replace('Semestre','Sem.')}</span>
    </div>
  `).join('');
  wrap.querySelectorAll('.sem-pill').forEach(el => {
    const go = () => { state.semIndex = parseInt(el.dataset.i,10); renderMain(); renderSemNav(); };
    el.addEventListener('click', go);
    el.addEventListener('keydown', e => { if(e.key==='Enter'||e.key===' '){ e.preventDefault(); go(); } });
  });
}

/* =======================================================
   RENDER: tarjeta de curso (vista semestre)
======================================================= */
function openMaterial(url, tipo, codigo) {
  if (url) {
    window.open(url, '_blank');
  } else {
    alert(`Aún no hay ${tipo} subido para el curso ${codigo}.`);
  }
}

function courseCard(curso, courseMap){
  const elective = isElectivo(curso.nombre);
  const nombre = nombreLimpio(curso.nombre);
  const prqHtml = (curso.prq && curso.prq.length)
    ? `<div class="prq-row">` + curso.prq.map(code => {
        const c = courseMap[code];
        const label = c ? nombreLimpio(c.nombre) : code;
        return `<span class="prq-chip" title="${code}${c ? ' · ' + label : ''}">→ ${label.length > 22 ? label.slice(0,20)+'…' : label}</span>`;
      }).join('') + `</div>`
    : `<span class="prq-none">Sin prerrequisitos</span>`;

  const silaboUrl = curso.silabo ? `'${curso.silabo}'` : 'null';
  const practicasUrl = curso.practicas ? `'${curso.practicas}'` : 'null';
  const examenesUrl = curso.examenes ? `'${curso.examenes}'` : 'null';

  return `
    <div class="course-card ${elective?'elective':''}">
      <div class="course-top">
        <div class="course-name">${nombre}</div>
        <div class="course-cred">${curso.cred} cr</div>
      </div>
      <div class="course-code">Cód. ${curso.codigo}</div>
      ${elective ? `<div class="badge-row"><span class="badge">Electivo</span></div>` : ``}
      ${prqHtml}
      <div class="materials">
        <div class="mat-btn" title="Sílabo" onclick="openMaterial(${silaboUrl}, 'sílabo', '${curso.codigo}')">${ICONS.silabo}<span class="l">Sílabo</span></div>
        <div class="mat-btn" title="Prácticas" onclick="openMaterial(${practicasUrl}, 'prácticas', '${curso.codigo}')">${ICONS.practica}<span class="l">Prácticas</span></div>
        <div class="mat-btn" title="Exámenes" onclick="openMaterial(${examenesUrl}, 'exámenes', '${curso.codigo}')">${ICONS.examen}<span class="l">Exámenes</span></div>
      </div>
    </div>
  `;
}

/* =======================================================
   RENDER: vista semestre / búsqueda / malla completa
======================================================= */
function renderMain(){
  const main = document.getElementById('mainContent');
  const courseMap = getCourseMap(state.plan);

  if (state.query.trim().length > 0){
    renderSemNavVisibility(false);
    const q = state.query.trim().toLowerCase();
    let matches = [];
    Object.values(courseMap).forEach(c => {
      if (c.nombre.toLowerCase().includes(q) || c.codigo.toLowerCase().includes(q)) matches.push(c);
    });
    main.innerHTML = `
      <div class="section-title"><h2>Resultados de búsqueda</h2><span class="meta">${matches.length} curso(s)</span></div>
      <p class="search-results-note">Buscando <b>"${state.query}"</b> en ${planesEstudio[state.plan].nombre}</p>
      <div class="course-grid">
        ${matches.length ? matches.map(c => courseCard(c, courseMap)).join('') : '<p style="color:var(--text-faint)">No se encontraron cursos.</p>'}
      </div>
    `;
    return;
  }

  renderSemNavVisibility(state.view === 'semestre');

  if (state.view === 'semestre'){
    const flat = getSemestresFlat(state.plan);
    const sem = flat[state.semIndex] || flat[0];
    main.innerHTML = `
      <div class="section-title">
        <h2>${sem.anio} · ${sem.nombreSemestre}</h2>
        <span class="meta">${sem.cursos.length} cursos</span>
      </div>
      <div class="course-grid">
        ${sem.cursos.map(c => courseCard(c, courseMap)).join('')}
      </div>
    `;
  } else {
    const plan = planesEstudio[state.plan];
    main.innerHTML = `
      <div class="section-title">
        <h2>Malla completa — ${plan.nombre}</h2>
        <span class="meta">Desliza horizontalmente →</span>
      </div>
      <div class="malla">
        ${plan.anios.map(anio => `
          <div class="anio-col">
            <h3 class="anio-titulo">${anio.numero}</h3>
            ${anio.semestres.map(sem => `
              <div class="sem-block">
                <p class="sem-block-title">${sem.nombre}</p>
                ${sem.cursos.map(c => {
                  const elective = isElectivo(c.nombre);
                  const prq = (c.prq && c.prq.length) ? `Prerreq: ${c.prq.join(', ')}` : 'Sin prerrequisito';
                  return `
                    <div class="mini-card ${elective?'elective':''}">
                      <div class="mini-top"><span>${nombreLimpio(c.nombre)}</span><span class="mini-cred">${c.cred}cr</span></div>
                      <div class="mini-info">${c.codigo} · ${prq}</div>
                    </div>
                  `;
                }).join('')}
              </div>
            `).join('')}
          </div>
        `).join('')}
      </div>
    `;
  }
}

function renderSemNavVisibility(show){
  document.getElementById('semNavWrap').style.display = show ? 'flex' : 'none';
}

/* =======================================================
   INIT
======================================================= */
function renderAll(){
  renderHeroStats();
  renderSemNav();
  renderMain();
}

function initApp(){
  document.getElementById('tabSemestre').addEventListener('click', () => {
    state.view = 'semestre';
    document.getElementById('tabSemestre').classList.add('active');
    document.getElementById('tabMalla').classList.remove('active');
    renderSemNav();
    renderMain();
  });
  document.getElementById('tabMalla').addEventListener('click', () => {
    state.view = 'malla';
    document.getElementById('tabMalla').classList.add('active');
    document.getElementById('tabSemestre').classList.remove('active');
    renderSemNav();
    renderMain();
  });

  let searchTimeout;
  document.getElementById('searchInput').addEventListener('input', e => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      state.query = e.target.value;
      renderMain();
    }, 150);
  });

  fillPlanSelect();
  renderAll();
}

document.addEventListener('DOMContentLoaded', initApp);
