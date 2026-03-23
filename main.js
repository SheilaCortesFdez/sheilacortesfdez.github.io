/* ================================================================
   CV Interactivo 3D – main.js
   Three.js r134 · Sin backend · GitHub Pages ready
   ================================================================ */

'use strict';

/* ----------------------------------------------------------------
   1. THREE.JS – ESCENA 3D DE FONDO
   ---------------------------------------------------------------- */
(function initThreeScene() {
  const canvas  = document.getElementById('three-canvas');
  const W       = () => window.innerWidth;
  const H       = () => window.innerHeight;

  /* Renderer */
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(W(), H());
  renderer.setClearColor(0x000000, 0);

  /* Escena + cámara */
  const scene  = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, W() / H(), 0.1, 200);
  camera.position.set(0, 0, 20);

  /* Luces */
  const ambLight = new THREE.AmbientLight(0xffffff, 0.4);
  scene.add(ambLight);

  const pointA = new THREE.PointLight(0xa78bfa, 2.5, 60);
  pointA.position.set(-15, 15, 10);
  scene.add(pointA);

  const pointB = new THREE.PointLight(0xf472b6, 2.0, 60);
  pointB.position.set(15, -10, 8);
  scene.add(pointB);

  const dirLight = new THREE.DirectionalLight(0xffffff, 0.6);
  dirLight.position.set(5, 10, 10);
  scene.add(dirLight);

  /* ---- PARTÍCULAS (campo de estrellas) ---- */
  const STAR_COUNT  = 1800;
  const starGeo     = new THREE.BufferGeometry();
  const starPos     = new Float32Array(STAR_COUNT * 3);
  for (let i = 0; i < STAR_COUNT * 3; i++) {
    starPos[i] = (Math.random() - 0.5) * 180;
  }
  starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
  const starMat = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.18,
    sizeAttenuation: true,
    transparent: true,
    opacity: 0.75,
  });
  const stars = new THREE.Points(starGeo, starMat);
  stars.raycast = () => {};   // no interceptable
  scene.add(stars);

  /* ---- PARTÍCULAS de color accent ---- */
  const GLOW_COUNT = 280;
  const glowGeo    = new THREE.BufferGeometry();
  const glowPos    = new Float32Array(GLOW_COUNT * 3);
  for (let i = 0; i < GLOW_COUNT * 3; i++) {
    glowPos[i] = (Math.random() - 0.5) * 70;
  }
  glowGeo.setAttribute('position', new THREE.BufferAttribute(glowPos, 3));
  const glowMat = new THREE.PointsMaterial({
    color: 0xa78bfa,
    size: 0.35,
    sizeAttenuation: true,
    transparent: true,
    opacity: 0.6,
  });
  const glowParticles = new THREE.Points(glowGeo, glowMat);
  glowParticles.raycast = () => {};   // no interceptable
  scene.add(glowParticles);

  /* ---- OBJETOS FLOTANTES INTERACTIVOS ---- */

  // Materiales compartidos
  const matViolet = new THREE.MeshStandardMaterial({
    color: 0xa78bfa,
    metalness: 0.5,
    roughness: 0.3,
    emissive: 0x3a2080,
    emissiveIntensity: 0.3,
  });
  const matPink = new THREE.MeshStandardMaterial({
    color: 0xf472b6,
    metalness: 0.4,
    roughness: 0.35,
    emissive: 0x6b0050,
    emissiveIntensity: 0.3,
  });
  const matCyan = new THREE.MeshStandardMaterial({
    color: 0x67e8f9,
    metalness: 0.5,
    roughness: 0.25,
    emissive: 0x003a45,
    emissiveIntensity: 0.4,
  });
  const matGold = new THREE.MeshStandardMaterial({
    color: 0xfbbf24,
    metalness: 0.7,
    roughness: 0.2,
    emissive: 0x5a3500,
    emissiveIntensity: 0.3,
  });
  const matWire = new THREE.MeshStandardMaterial({
    color: 0xa78bfa,
    wireframe: true,
    transparent: true,
    opacity: 0.35,
  });

  /* Definición de objetos flotantes con tooltip */
  const floatingObjects = [];

  function addFloating(mesh, x, y, z, label, speedMult) {
    mesh.position.set(x, y, z);
    mesh.userData.label    = label;
    mesh.userData.baseY    = y;
    mesh.userData.speed    = (0.3 + Math.random() * 0.4) * (speedMult || 1);
    mesh.userData.offset   = Math.random() * Math.PI * 2;
    mesh.userData.rotSpeed = {
      x: (Math.random() - 0.5) * 0.008,
      y: (Math.random() - 0.5) * 0.012,
    };
    scene.add(mesh);
    floatingObjects.push(mesh);
    return mesh;
  }

  // Icosaedro → Java
  addFloating(
    new THREE.Mesh(new THREE.IcosahedronGeometry(1.3, 0), matViolet.clone()),
    -8, 4, -5, '☕ Java · Spring Boot', 1
  );

  // Torus → Bases de datos
  addFloating(
    new THREE.Mesh(new THREE.TorusGeometry(1.1, 0.4, 16, 40), matPink.clone()),
    7, 2, -6, '🗄️ MongoDB · Oracle · MySQL', 0.8
  );

  // Octaedro → Testing
  addFloating(
    new THREE.Mesh(new THREE.OctahedronGeometry(1.2, 0), matCyan.clone()),
    -6, -4, -4, '🧪 JUnit5 · JMeter', 1.1
  );

  // Dodecaedro → DevOps
  addFloating(
    new THREE.Mesh(new THREE.DodecahedronGeometry(1.1, 0), matGold.clone()),
    6, -3, -5, '⚙️ Jenkins · OpenShift', 0.9
  );

  // Torus Knot → Arquitectura
  addFloating(
    new THREE.Mesh(new THREE.TorusKnotGeometry(0.8, 0.28, 80, 12), matViolet.clone()),
    0, 6, -8, '🏗️ Arquitectura Hexagonal · DDD', 0.7
  );

  // Cubo wireframe → GitHub
  addFloating(
    new THREE.Mesh(new THREE.BoxGeometry(1.6, 1.6, 1.6), matWire.clone()),
    -10, 0, -3, '🐙 GitHub · Git · CI/CD', 1.2
  );

  // Esfera → Frontend / Three.js
  addFloating(
    new THREE.Mesh(new THREE.SphereGeometry(1.0, 32, 32), matPink.clone()),
    9, 5, -7, '🌐 HTML · CSS · Three.js', 1.0
  );

  // Cono → SOLID / Clean Code
  addFloating(
    new THREE.Mesh(new THREE.ConeGeometry(0.9, 1.8, 6, 1), matCyan.clone()),
    3, -6, -6, '✨ Clean Code · SOLID', 0.85
  );

  /* ---- ANILLO decorativo grande (fondo) ---- */
  const ringGeo = new THREE.TorusGeometry(14, 0.08, 8, 120);
  const ringMat = new THREE.MeshBasicMaterial({ color: 0xa78bfa, transparent: true, opacity: 0.12 });
  const ring    = new THREE.Mesh(ringGeo, ringMat);
  ring.rotation.x = 0.4;
  scene.add(ring);

  const ring2    = new THREE.Mesh(new THREE.TorusGeometry(18, 0.05, 8, 120), ringMat.clone());
  ring2.rotation.x = -0.3;
  ring2.rotation.y = 0.5;
  scene.add(ring2);

  /* ---- GRID de líneas en el fondo ---- */
  const gridHelper = new THREE.GridHelper(80, 30, 0x2a1a5e, 0x1a0e3a);
  gridHelper.position.y = -14;
  scene.add(gridHelper);

  /* ----------------------------------------------------------------
     INTERACCIÓN CON RATÓN
  ---------------------------------------------------------------- */
  const mouse     = new THREE.Vector2(9999, 9999);
  const raycaster = new THREE.Raycaster();
  let targetCamX  = 0, targetCamY = 0;

  document.addEventListener('mousemove', (e) => {
    // Parallax de cámara — siempre activo para efecto visual
    targetCamX = ((e.clientX / window.innerWidth)  - 0.5) * 6;
    targetCamY = ((e.clientY / window.innerHeight) - 0.5) * -3;
  });

  // Clic sobre objetos → scroll a sección correspondiente
  canvas.addEventListener('click', (e) => {
    mouse.x =  (e.clientX / window.innerWidth)  * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    const hits = raycaster.intersectObjects(floatingObjects, false);
    if (hits.length > 0) {
      const label = hits[0].object.userData.label;
      if (label.includes('Java') || label.includes('Arquitectura') || label.includes('Clean')) {
        scrollToSection('skills');
      } else if (label.includes('MongoDB') || label.includes('Oracle')) {
        scrollToSection('skills');
      } else if (label.includes('JUnit') || label.includes('Testing')) {
        scrollToSection('skills');
      } else if (label.includes('Jenkins')) {
        scrollToSection('skills');
      } else if (label.includes('GitHub') || label.includes('Git')) {
        scrollToSection('contact');
      } else if (label.includes('HTML')) {
        scrollToSection('projects');
      } else {
        scrollToSection('skills');
      }
    }
  });

  /* ----------------------------------------------------------------
     LOOP DE ANIMACIÓN
  ---------------------------------------------------------------- */
  let t = 0;
  function animate() {
    requestAnimationFrame(animate);
    t += 0.008;

    // Cámara parallax suave
    camera.position.x += (targetCamX - camera.position.x) * 0.04;
    camera.position.y += (targetCamY - camera.position.y) * 0.04;
    camera.lookAt(0, 0, 0);

    // Estrellas giran lentamente
    stars.rotation.y = t * 0.03;
    stars.rotation.x = t * 0.01;

    // Partículas accent giran al revés
    glowParticles.rotation.y = -t * 0.05;

    // Anillos
    ring.rotation.z  = t * 0.04;
    ring2.rotation.z = -t * 0.03;

    // Objetos flotantes
    floatingObjects.forEach((obj) => {
      obj.position.y = obj.userData.baseY
        + Math.sin(t * obj.userData.speed + obj.userData.offset) * 0.9;
      obj.rotation.x += obj.userData.rotSpeed.x;
      obj.rotation.y += obj.userData.rotSpeed.y;
    });

    renderer.render(scene, camera);
  }
  animate();

  /* ---- Resize ---- */
  window.addEventListener('resize', () => {
    camera.aspect = W() / H();
    camera.updateProjectionMatrix();
    renderer.setSize(W(), H());
  });
})();


/* ================================================================
   2. NAVEGACIÓN ACTIVA (IntersectionObserver)
   ================================================================ */
(function initNav() {
  const sections  = document.querySelectorAll('section[id], .content-section[id]');
  const navLinks  = document.querySelectorAll('.nav-link');

  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((a) => a.classList.remove('active'));
        const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach((s) => obs.observe(s));
})();


/* ================================================================
   3. REVEAL CARDS (IntersectionObserver)
   ================================================================ */
(function initReveal() {
  const revealEls = document.querySelectorAll('.reveal');

  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach((el) => obs.observe(el));
})();


/* ================================================================
   4. SKILL BARS ANIMADAS (IntersectionObserver)
   ================================================================ */
(function initSkillBars() {
  const cards = document.querySelectorAll('.skill-card');

  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      // Animar cada barra de la tarjeta con delay escalonado
      const fills = entry.target.querySelectorAll('.skill-fill');
      fills.forEach((fill, i) => {
        const pct = fill.dataset.pct || '70';
        // Resetear a 0 por si el elemento ya fue visible antes
        fill.style.transition = 'none';
        fill.style.width = '0%';
        // Forzar reflow para que el navegador registre el 0% antes de animar
        void fill.offsetWidth;
        // Restaurar transición y animar con delay escalonado
        fill.style.transition = `width 1.4s cubic-bezier(0.16, 1, 0.3, 1) ${i * 120}ms`;
        fill.style.width = pct + '%';
      });

      obs.unobserve(entry.target);
    });
  }, { threshold: 0.2 });

  cards.forEach((card) => obs.observe(card));
})();


/* ================================================================
   5. MODALES
   ================================================================ */
function openModal(id) {
  const overlay = document.getElementById('modal-' + id);
  if (overlay) overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(id) {
  const overlay = document.getElementById('modal-' + id);
  if (overlay) overlay.classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.open')
      .forEach((m) => m.classList.remove('open'));
    document.body.style.overflow = '';
  }
});


/* ================================================================
   6. SCROLL HELPER
   ================================================================ */
function scrollToSection(sectionId) {
  const el = document.getElementById(sectionId);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}


/* ================================================================
   7. CANVAS pointer-events: auto en scroll Y=0 (hero)
   ================================================================ */
(function initCanvasPointer() {
  const canvas = document.getElementById('three-canvas');

  function update() {
    const active = window.scrollY < window.innerHeight * 0.6;
    canvas.style.pointerEvents = active ? 'auto' : 'none';
    // Notificar al raycaster
    window.dispatchEvent(new CustomEvent('canvas-pointer-change', { detail: { active } }));
  }
  window.addEventListener('scroll', update, { passive: true });
  update();
})();


/* ================================================================
   8. INTERNACIONALIZACIÓN (i18n) – ES / EN
   ================================================================ */
const i18n = {
  es: {
    'nav.home':        'Inicio',
    'nav.about':       'Sobre mí',
    'nav.skills':      'Habilidades',
    'nav.experience':  'Experiencia',
    'nav.ed ucation':   'Formación',
    'nav.projects':    'Proyectos',
    'nav.contact':     'Contacto',

    'hero.badge':    '✦ Disponible para nuevas oportunidades',
    'hero.subtitle': 'Desarrolladora de Software · Java Backend · Spring Boot',
    'hero.hint':     'Mueve el ratón sobre la escena 3D <span class="bounce">↓</span>',
    'hero.cta':      'Ver mi perfil',

    'about.title':     '👩‍💻 Sobre mí',
    'about.p1':        'Soy <strong>Sheila Cortés Fernández</strong>, desarrolladora de software con sólidos conocimientos en <strong>Java y Spring Boot</strong>. Me apasiona crear soluciones robustas, limpias y bien estructuradas.',
    'about.p2':        'He trabajado con arquitecturas por capas y hexagonal, integración de bases de datos relacionales y NoSQL, testing automatizado y entornos de producción monitorizados con herramientas como Dynatrace y OpenShift.',
    'about.p3':        'Busco seguir creciendo en equipos donde la calidad del código, las buenas prácticas y el trabajo en equipo sean valores fundamentales.',
    'about.location':  'España',
    'about.role':      'Backend Developer',
    'about.languages': 'Español (nativo) · Inglés (B1)',

    'skills.title':  '🛠️ Habilidades técnicas',
    'skills.db':     'Bases de datos',
    'skills.testing':'Testing & Calidad',
    'skills.arch':   'Arquitectura & Patrones',
    'skills.mvc':    'MVC / Por capas',

    'exp.title':          '💼 Experiencia',
    'exp.job1.date':      '2023 – Actualidad',
    'exp.job1.role':      'Consultora Backend Java',
    'exp.job1.company':   'Sector bancario / financiero · España',
    'exp.job1.desc':      'Desarrollo y mantenimiento de microservicios en Java con Spring Boot bajo arquitectura hexagonal. Integración con bases de datos Oracle. Implementación de pipelines CI/CD con Jenkins y GitHub Actions. Monitorización con OpenShift y Dynatrace.',
    'exp.job2.role':      'Desarrolladora Full Stack Java',
    'exp.job2.company':   'Sector bancario / financiero · España',
    'exp.job2.desc':      'Desarrollo y mantenimiento de microservicios en Java con Spring Boot bajo arquitectura por capas. Integración con bases de datos MySQL y desarrollo de servicios SOAP. Desarrollo front-end con HTML5, CSS3, JavaScript y jQuery. Implementación de pipelines CI/CD con Jenkins. Monitorización con OpenShift.',

    'edu.title':        '🎓 Formación',
    'edu.center':       'Centro de formación · España',
    'edu.daw.title':    'CFGS – Desarrollo de Aplicaciones Web',
    'edu.daw.desc':     'Desarrollo full-stack con Java, Spring MVC, y tecnologías web. Diseño de bases de datos relacionales, creación de APIs REST y desarrollo frontend con HTML5, CSS3 y JavaScript.',
    'edu.daw.project':  '<strong>Proyecto fin de curso:</strong> <em>FunkBreakSchool</em> — plataforma web completa con gestión de usuarios, roles, horarios, inscripciones y panel de administración.',
    'edu.dam.title':    'CFGS – Desarrollo de Aplicaciones Multiplataforma',
    'edu.dam.desc':     'Desarrollo de aplicaciones móviles Android y de escritorio. Especialización en Java, bases de datos relacionales, interfaces gráficas y acceso a datos.',
    'edu.cont.title':   'Formación continua',
    'edu.cont.center':  'Cursos online & autodidacta',
    'edu.cont.year':    '2023 – Actualidad',
    'edu.cont.desc':    'Arquitectura hexagonal, DDD, microservicios, seguridad web (OWASP) y desarrollo con IA.',

    'proj.title':    '🚀 Proyectos',
    'proj.more':     'Ver más',
    'proj.fbs.desc': 'Plataforma web para escuela de baile. Gestión de usuarios, roles, horarios, inscripciones y contenido multimedia. Proyecto de fin de grado superior.',
    'proj.cv.title': 'CV Interactivo 3D',
    'proj.cv.desc':  'Este mismo portfolio. Construido con Three.js y JavaScript puro, sin backend, desplegable en GitHub Pages con escena 3D interactiva.',

    'contact.title': '📬 Contacto',
    'contact.intro': '¿Tienes una oportunidad o quieres hablar? <strong>Estaré encantada de escucharte.</strong>',

    'footer.text': 'Hecho con ❤️ y <strong>Three.js</strong> · Sheila Cortés Fernández © 2026',

    'modal.fbs.lead': 'Proyecto de fin de CFGS DAW',
    'modal.fbs.desc': 'Plataforma web completa para la gestión de una escuela de baile estilo funk y breakdance.',
    'modal.fbs.li1':  '<strong>Tecnologías:</strong> Java, Spring Boot, MySQL, HTML5, CSS3, JavaScript, jQuery',
    'modal.fbs.li2':  '<strong>Funcionalidades:</strong> Registro/login con roles (alumno, profesor, admin), gestión de clases y horarios, inscripciones, panel de administración',
    'modal.fbs.li3':  '<strong>Arquitectura:</strong> MVC por capas, API REST, autenticación con sesiones',
    'modal.fbs.li4':  '<strong>Integraciones:</strong> pdf.js para visualización de contenidos, jQuery para UI dinámica',
    'modal.cv.title': '🌐 CV Interactivo 3D',
    'modal.cv.lead':  'Portfolio personal — sin backend, 100% estático',
    'modal.cv.desc':  'Desplegable en GitHub Pages sin ningún servidor ni build step.',
    'modal.cv.li1':   '<strong>Motor 3D:</strong> Three.js (WebGL) con partículas, objetos flotantes animados e interacción con ratón (parallax)',
    'modal.cv.li2':   '<strong>Efectos:</strong> Parallax 3D, skill-bars con IntersectionObserver, glassmorphism, animaciones CSS',
    'modal.cv.li3':   '<strong>Sin bundler:</strong> Cargado por CDN, sin npm, sin Webpack',
    'modal.cv.li4':   '<strong>Rendimiento:</strong> requestAnimationFrame, transiciones CSS hardware-accelerated',
  },

  en: {
    'nav.home':        'Home',
    'nav.about':       'About',
    'nav.skills':      'Skills',
    'nav.experience':  'Experience',
    'nav.education':   'Education',
    'nav.projects':    'Projects',
    'nav.contact':     'Contact',

    'hero.badge':    '✦ Open to new opportunities',
    'hero.subtitle': 'Software Developer · Java Backend · Spring Boot',
    'hero.hint':     'Move your mouse over the 3D scene <span class="bounce">↓</span>',
    'hero.cta':      'View my profile',

    'about.title':     '👩‍💻 About me',
    'about.p1':        'I am <strong>Sheila Cortés Fernández</strong>, a software developer with strong knowledge in <strong>Java and Spring Boot</strong>. I am passionate about building robust, clean and well-structured solutions.',
    'about.p2':        'I have worked with layered and hexagonal architectures, relational and NoSQL database integration, automated testing and production environments monitored with tools like Dynatrace and OpenShift.',
    'about.p3':        'I am looking to keep growing in teams where code quality, best practices and teamwork are core values.',
    'about.location':  'Spain',
    'about.role':      'Backend Developer',
    'about.languages': 'Spanish (native) · English (B1)',

    'skills.title':  '🛠️ Technical skills',
    'skills.db':     'Databases',
    'skills.testing':'Testing & Quality',
    'skills.arch':   'Architecture & Patterns',
    'skills.mvc':    'MVC / Layered',

    'exp.title':          '💼 Experience',
    'exp.job1.date':      '2023 – Present',
    'exp.job1.role':      'Java Backend Consultant',
    'exp.job1.company':   'Banking / financial sector · Spain',
    'exp.job1.desc':      'Development and maintenance of Java microservices with Spring Boot under hexagonal architecture. Integration with Oracle databases. CI/CD pipeline implementation with Jenkins and GitHub Actions. Monitoring with OpenShift and Dynatrace.',
    'exp.job2.role':      'Full Stack Java Developer',
    'exp.job2.company':   'Banking / financial sector · Spain',
    'exp.job2.desc':      'Development and maintenance of Java microservices with Spring Boot under layered architecture. Integration with MySQL databases and SOAP service development. Front-end development with HTML5, CSS3, JavaScript and jQuery. CI/CD pipeline implementation with Jenkins. Monitoring with OpenShift.',

    'edu.title':        '🎓 Education',
    'edu.center':       'Training centre · Spain',
    'edu.daw.title':    'HND – Web Application Development',
        'edu.daw.desc':     'Full-stack development with Java, Spring MVC and web technologies. Relational database design, REST API creation and frontend development with HTML5, CSS3 and JavaScript.',
    'edu.daw.project':  '<strong>Final project:</strong> <em>FunkBreakSchool</em> — complete web platform with user management, roles, timetables, enrolments and admin dashboard.',
    'edu.dam.title':    'HND – Multiplatform Application Development',
    'edu.dam.desc':     'Android and desktop application development. Specialisation in Java, relational databases, graphical interfaces and data access.',
    'edu.cont.title':   'Continuous learning',
    'edu.cont.center':  'Online courses & self-taught',
    'edu.cont.year':    '2023 – Present',
    'edu.cont.desc':    'Hexagonal architecture, DDD, microservices, web security (OWASP) and AI-driven development.',

    'proj.title':    '🚀 Projects',
    'proj.more':     'Learn more',
    'proj.fbs.desc': 'Web platform for a dance school. User management, roles, timetables, enrolments and multimedia content. Higher education final project.',
    'proj.cv.title': 'Interactive 3D CV',
    'proj.cv.desc':  'This very portfolio. Built with Three.js and vanilla JavaScript, no backend, deployable on GitHub Pages with an interactive 3D scene.',

    'contact.title': '📬 Contact',
    'contact.intro': 'Have an opportunity or want to chat? <strong>I would love to hear from you.</strong>',

    'footer.text': 'Made with ❤️ and <strong>Three.js</strong> · Sheila Cortés Fernández © 2026',

    'modal.fbs.lead': 'HND DAW final project',
    'modal.fbs.desc': 'Complete web platform for managing a funk and breakdance school.',
    'modal.fbs.li1':  '<strong>Technologies:</strong> Java, Spring Boot, MySQL, HTML5, CSS3, JavaScript, jQuery',
    'modal.fbs.li2':  '<strong>Features:</strong> Registration/login with roles (student, teacher, admin), class and schedule management, enrolments, admin panel',
    'modal.fbs.li3':  '<strong>Architecture:</strong> Layered MVC, REST API, session-based authentication',
    'modal.fbs.li4':  '<strong>Integrations:</strong> pdf.js for content display, jQuery for dynamic UI',
    'modal.cv.title': '🌐 Interactive 3D CV',
    'modal.cv.lead':  'Personal portfolio — no backend, 100% static',
    'modal.cv.desc':  'Deployable on GitHub Pages with no server or build step.',
    'modal.cv.li1':   '<strong>3D engine:</strong> Three.js (WebGL) with particles, animated floating objects and mouse interaction (parallax)',
    'modal.cv.li2':   '<strong>Effects:</strong> 3D parallax, skill-bars with IntersectionObserver, glassmorphism, CSS animations',
    'modal.cv.li3':   '<strong>No bundler:</strong> Loaded via CDN, no npm, no Webpack',
    'modal.cv.li4':   '<strong>Performance:</strong> requestAnimationFrame, hardware-accelerated CSS transitions',
  },
};

/* Idioma activo (se inicia en el idioma del navegador si es inglés, o en español por defecto) */
let currentLang = (navigator.language || '').startsWith('en') ? 'en' : 'es';

function applyLang(lang) {
  currentLang = lang;
  const dict = i18n[lang];

  document.documentElement.lang = lang;
  document.getElementById('lang-label').textContent = lang === 'es' ? 'EN' : 'ES';

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });
}

function toggleLang() {
  applyLang(currentLang === 'es' ? 'en' : 'es');
}

/* Aplicar idioma inicial al cargar */
document.addEventListener('DOMContentLoaded', () => applyLang(currentLang));


