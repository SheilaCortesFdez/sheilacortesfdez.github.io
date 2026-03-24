/* ================================================================
   8. INTERNACIONALIZACIÓN (i18n) – ES / EN
   ================================================================ */
const i18n = {
  es: {
    'nav.home':        'Inicio',
    'nav.about':       'Sobre mí',
    'nav.skills':      'Habilidades',
    'nav.experience':  'Experiencia',
    'nav.education':   'Formación',
    'nav.certifications':'Certificaciones',
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

    'cert.title':      '📜 Certificaciones',
    'cert.name1':      'Desarrollo con IA: de 0 a Producción',
    'cert.name2':      'Spring Framework 6 & Spring Boot 3 desde cero a experto',
    'cert.name3':      'Universidad Java: De Cero a Master ',
    'modal.ia.lead':   'Certificación de Iniciación al Desarrollo con IA',
    'modal.spring.lead':   'Certificación de Finalización del curso de Spring Framework 6 & Spring Boot 3',
    'modal.UniJava.lead':   'Universidad Java: De Cero a Master',
    'cert.button':    'Certificado →',

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
    'modal.cert.lead': 'Desarrollo con IA: de 0 a Producción',
  },

  en: {
    'nav.about':       'About',
    'nav.home':        'Home',
    'nav.skills':      'Skills',
    'nav.experience':  'Experience',
    'nav.education':   'Education',
    'nav.certifications':'Certifications',
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

    'cert.title':      '📜 Certifications',
    'cert.name1':      'AI-powered development: from zero to production',
    'cert.name2':      'Spring Framework 6 & Spring Boot 3 from zero to expert',
    'cert.name3':      'Universidad Java: De Cero a Master ',
    'modal.spring.lead':   'Spring Framework 6 & Spring Boot 3 Course Completion Certificate',
    'modal.UniJava.lead':   'Java University: From Zero to Master',
    'cert.button':    'Certificate →',


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
    'modal.cert.lead': 'AI-powered development: from zero to production',

  },
};

/* Idioma activo (se inicia en el idioma del navegador si es inglés, o en español por defecto) */
let currentLang = (navigator.language || '').startsWith('en') ? 'en' : 'es';

function applyLang(lang) {
  currentLang = lang;
  const dict = i18n[lang];

  document.documentElement.lang = lang;
  document.getElementById('lang-label').textContent = lang === 'es' ? 'EN' : 'ES';

  const nodes = Array.from(document.querySelectorAll('[data-i18n]')).reverse();
  nodes.forEach((el) => {
  if(!el.isConnected) return; // Evitar actualizar elementos que ya no están en el DOM
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