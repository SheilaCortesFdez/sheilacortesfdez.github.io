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
  const sections = Array.from(document.querySelectorAll('section[id], .content-section[id]'));
  const navLinks = Array.from(document.querySelectorAll('.nav-link'));
  const visibleSections = new Map();

  if (!sections.length || !navLinks.length) return;

  function setActiveLink(sectionId) {
    navLinks.forEach((link) => {
      const isActive = link.getAttribute('href') === `#${sectionId}`;
      link.classList.toggle('active', isActive);
    });
  }

  function getFallbackSectionId() {
    const navHeight = document.getElementById('main-nav')?.offsetHeight || 0;
    const offset = navHeight + 24;
    let currentSectionId = sections[0].id;

    sections.forEach((section) => {
      if (window.scrollY >= section.offsetTop - offset) {
        currentSectionId = section.id;
      }
    });

    return currentSectionId;
  }

  function updateActiveLink() {
    const currentSectionId = visibleSections.size
      ? Array.from(visibleSections.entries()).sort((a, b) => b[1] - a[1])[0][0]
      : getFallbackSectionId();

    setActiveLink(currentSectionId);
  }

  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        visibleSections.set(entry.target.id, entry.intersectionRatio);
      } else {
        visibleSections.delete(entry.target.id);
      }
    });

    updateActiveLink();
  }, {
    rootMargin: '-18% 0px -48% 0px',
    threshold: [0.15, 0.3, 0.45, 0.6],
  });

  sections.forEach((section) => obs.observe(section));

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      const sectionId = link.getAttribute('href')?.replace('#', '');
      if (sectionId) setActiveLink(sectionId);

      window.requestAnimationFrame(() => link.blur());
    });
  });

  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink();
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
   8. FORMULARIO DE CONTACTO (envío simulado sin backend)
   ================================================================ */
(function initContactForm() {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('contact-form-status');
  if (!form || !status) return;

  function t(key, fallback) {
    if(typeof i18n !== 'undefined' && typeof currentLang !== "undefined" && i18n[currentLang] && i18n[currentLang][key]) {
        return i18n[currentLang][key];
    }
    return fallback;
  }

  form.addEventListener('submit', async(e) => {
    e.preventDefault();
    if(!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    const endpoint = (form.dataset.endpoint || '').trim();
    if (!endpoint || endpoint.includes('REEMPLAZA_TU_ID')) {
      status.textContent = t('contact.form-status.missingEndpoint', 'Error: No se ha configurado el endpoint de envío.');
      return;
    }
    const nameInput = form.querySelector('#contact-name');
    const emailInput = form.querySelector('#contact-email');
    const companyInput = form.querySelector('#contact-company');
    const messageInput = form.querySelector('#contact-message');
    if(!nameInput || !emailInput || !companyInput || !messageInput) return;

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const company = companyInput.value.trim();
    const message = messageInput.value.trim();

    const subject = company ? `Oportunidad profesional - ${company})` : `Oportunidad profesional`;

    const payload = {
        name,
        email,
        company,
        message,
        _subject: subject,
    };

    try {
        status.textContent = t('contact.form.status.sending', 'Enviando mensaje...');

        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
             'Accept': 'application/json',
          },
          body: JSON.stringify(payload),
        });

        if(!response.ok){
            throw new Error('send_failed');
        }

        form.reset();
        status.textContent = t('contact.form.status.success', '¡Mensaje enviado con éxito! Te responderé lo antes posible.');
    } catch (error){
        status.textContent = t('contact.form.error', 'Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.');
    }
  });
})();
