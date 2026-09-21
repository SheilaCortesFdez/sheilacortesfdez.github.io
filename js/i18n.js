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
    'about.p1':        'Soy <strong>Backend Java Developer con más de 8 años de experiencia</strong> en desarrollo de software, principalmente en entornos bancarios y empresariales.',
    'about.p2':        'Mi especialización está en el desarrollo de <strong>microservicios y APIs REST con Java y Spring Boot, </strong>trabajando con arquitecturas por capas y arquitectura hexagonal, bases de datos relacionales y procesos de integración y despliegue continuo.',
    'about.p3':        'A lo largo de mi experiencia he participado en todo el ciclo de vida del software: <strong>desarrollo, testing, code review, despliegue, monitorización y resolución de incidencias en producción.</strong>',
    'about.p4':        'Actualmente estoy especialmente interesada en posiciones de <strong>Backend Java / Software Engineer</strong> donde pueda seguir trabajando en sistemas distribuidos, arquitectura backend y mejora continua de aplicaciones en producción.',

    'about.location':  'España',
    'about.role':      'Backend Software Engineer',
    'about.languages': 'Español (nativo) · Inglés (B1)',

    'skills.title':  '🛠️ Habilidades técnicas',
    'skills.legend.1': 'Básico',
    'skills.legend.3': 'Intermedio',
    'skills.legend.4': 'Avanzado',
    'skills.legend.5': 'Profesional',
    'skills.db':     'Bases de datos',
    'skills.testing':'Testing & Calidad',
    'skills.arch':   'Arquitectura & Patrones',
    'skills.mvc':    'MVC / Por capas',

    'exp.title':          '💼 Experiencia',
    'exp.job1.date':      '2023 – Actualidad',
    'exp.job1.role':      'Consultora Backend Java',
    'exp.job1.company':   'Sector bancario / financiero · España',
    'exp.job1.desc':      'Desarrollo y mantenimiento de microservicios backend para sistemas financieros, utilizando Java y Spring Boot.',
    'exp.job1.dot1':       'Desarrollo y mantenimiento de microservicios backend con <strong>Java y Spring Boot</strong> para sistemas financieros.',
    'exp.job1.dot2':       'Diseño y evolución de <strong>APIs REST</strong> siguiendo arquitectura hexagonal, principios SOLID y buenas prácticas de Clean Code.',
    'exp.job1.dot3':       'Desarrollo de pruebas unitarias y de integración utilizando <strong>JUnit 5, Mockito y Newman</strong> para garantizar la calidad de los servicios.',
    'exp.job1.dot4':       'Integración con bases de datos <strong>Oracle y MySQL</strong>, trabajando con distintos modelos de persistencia según las necesidades del servicio.',
    'exp.job1.dot5':       'Participación en procesos de integración y despliegue continuo mediante <strong>Jenkins y GitHub Actions, con despliegues sobre OpenShift</strong>.',
    'exp.job1.dot6':       'Monitorización y análisis del comportamiento de los servicios mediante <strong>Dynatrace, logs y métricas, participando en la resolución de incidencias</strong>.',
    'exp.job1.dot7':       'Participación en code reviews y mejora continua de la calidad del código mediante herramientas como <strong>SonarQube y Fortify</strong>.',
    'exp.job2.role':      'Desarrolladora Full Stack Java',
    'exp.job2.company':   'Sector bancario / financiero · España',
    'exp.job2.desc':      'Desarrollo y mantenimiento de aplicaciones y servicios backend utilizando Java y tecnologías del ecosistema Spring.',
    'exp.job2.dot1':      'Desarrollo de servicios backend y <strong>APIs REST con Java y Spring Boot</strong>.',
    'exp.job2.dot2':      'Integración con sistemas existentes mediante <strong>APIs REST y servicios SOAP</strong>.',
    'exp.job2.dot3':      'Desarrollo y mantenimiento de consultas y estructuras de datos en <strong>MySQL</strong>.',
    'exp.job2.dot4':      'Implementación de tests unitarios con <strong>JUnit 5</strong> y pruebas de APIs mediante Newman.',
    'exp.job2.dot5':      'Análisis de rendimiento y pruebas de carga utilizando <strong>JMeter</strong>.,
    'exp.job2.dot6':      'Resolución de incidencias y análisis de problemas en diferentes entornos.',
    'exp.job2.dot7':      'Automatización de procesos mediante <strong>Jenkins</strong>.',
    'exp.job2.dot8':      'Aplicación de herramientas de análisis estático y seguridad como <strong>SonarQube</strong>.',
    'exp.job2.dot9':      'Participación en mantenimiento evolutivo y desarrollo de nuevas funcionalidades.',

    'edu.title':        '🎓 Formación',
    'edu.center':       'Centro de formación · España',
    'edu.daw.title':    'CFGS – Desarrollo de Aplicaciones Web',
    'edu.daw.desc':     'Desarrollo deaplicaciones con tecnologías web. Diseño de bases de datos relacionales y desarrollo frontend con HTML5, CSS, JavaScript y JQuery.',
    'edu.daw.project':  '<strong>Proyecto fin de curso:</strong> <em>FunkBreakSchool</em> — plataforma web completa con gestión de usuarios, roles, horarios, inscripciones y panel de administración.',
    'edu.dam.title':    'CFGS – Desarrollo de Aplicaciones Multiplataforma',
    'edu.dam.desc':     'Desarrollo de aplicaciones móviles Android y de escritorio. Especialización en Java, bases de datos relacionales, interfaces gráficas y acceso a datos.',
    'edu.dam.tech':     '<strong>Tecnologías:</strong> Java 8 · Spring Framework · Hibernate · PHP · JavaScript ES6 · jQuery · MySQL · Oracle · MongoDB · Neo4j · Git/GitHub',

    'edu.cont.title':   'Formación continua',
    'edu.cont.center':  'Cursos online & autodidacta',
    'edu.cont.year':    '2023 – Actualidad',
    'edu.cont.desc':    'Arquitectura hexagonal, DDD, microservicios, seguridad web (OWASP) y desarrollo con IA.',

    'cert.title':      '📜 Certificaciones',
    'cert.name0':      'Microservicios Guía Completa de Docker & Kubernetes',
    'cert.name1':      'Desarrollo con IA: de 0 a Producción',
    'cert.name2':      'Spring Framework 6 & Spring Boot 3 desde cero a experto',
    'cert.name3':      'Universidad Java: De Cero a Master ',
    'cert.name4':      'Desarrollo Web con Spring Boot - De Cero a Ninja',
    'modal.ia.lead':   'Certificación de Iniciación al Desarrollo con IA',
    'modal.spring.lead':   'Certificación de Finalización del curso de Spring Framework 6 & Spring Boot 3',
    'modal.UniJava.lead':   'Universidad Java: De Cero a Master',
    'cert.button':    'Certificado →',

    'proj.title':    '🚀 Proyectos',
    'proj.more':     'Ver más',
    'proj.fbs.desc': 'Plataforma web para escuela de baile. Gestión de usuarios, roles, horarios, inscripciones y contenido multimedia. Proyecto de fin de grado superior.',
    'proj.cv.title': 'CV Interactivo 3D',
    'proj.cv.desc':  'Este mismo portfolio. Construido con Three.js y JavaScript puro, sin backend, desplegable en GitHub Pages con escena 3D interactiva.',
    'proj.crochet.title': 'Mamen Crochet',
    'proj.crochet.desc':  'Aplicación para amantes del crochet. Descubre piezas únicas hechas a mano, ideales para regalar, decorar o coleccionar.',

    'modal.crochet.title': '🧶 Mamen Crochet',
    'modal.crochet.lead':  'Proyecto personal',
    'modal.crochet.desc':  'Aplicación dedicada al mundo del crochet. Descubre piezas únicas de crochet hechas a mano, ideales para regalar, decorar o coleccionar.',
    'modal.crochet.li1':   '<strong>Tecnologías: </strong>HTML, CSS, JavaScript y Three.js ',
    'modal.crochet.li2':   '<strong>Funcionalidades:</strong> Poder dar visibilidad al trabajo de la artesana y permitir a los usuarios realizar pedidos de sus muñecas favoritas',
    'modal.crochet.li3':   '<strong>Estado:</strong> Publicado ',
    'modal.crochet.li4':   '<strong>Motivación:</strong> Proyecto personal',
    'modal.crochet.li5':   '<strong>Acceder</strong> →',

    'contact.title': '📬 Contacto',
    'contact.intro': '¿Tienes una oportunidad o quieres hablar? <strong>Estaré encantada de escucharte.</strong>',
    'contact.form.title': 'Escríbeme un mensaje',
    'contact.form.modalTitle': 'Formulario de contacto',
    'contact.form.teaser': 'Si prefieres, puedes abrir un formulario rápido y enviarme un email.',
    'contact.form.open': 'Email',
    'contact.form.name': 'Nombre',
    'contact.form.email': 'Email',
    'contact.form.company': 'Empresa (opcional)',
    'contact.form.message': 'Mensaje',
    'contact.form.submit': 'Enviar Email',
    'contact.form.namePh': 'Tu nombre',
    'contact.form.emailPh': 'tu@email.com',
    'contact.form.messagePh': 'Cuéntame sobre la oportunidad',
    'contact.form.status.missingEndpoint': 'Error: No se ha configurado el endpoint de envío.',
    'contact.form.status.sending': 'Enviando mensaje...',
    'contact.form.status.success': '¡Mensaje enviado con éxito! Te responderé lo antes posible.',
    'contact.form.error': 'Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.',

    'footer.text': 'Hecho con ❤️ y <strong>Three.js</strong> · Sheila Cortés Fernández © 2026',

    'modal.fbs.lead': 'Proyecto de fin de CFGS DAW',
    'modal.fbs.desc': 'Plataforma web completa para la gestión de una escuela de baile estilo funk y breakdance.',
    'modal.fbs.li1':  '<strong>Tecnologías:</strong> php, MySQL, HTML5, CSS3, JavaScript, Bootstrap, SweeatAlert, jQuery',
    'modal.fbs.li2':  '<strong>Funcionalidades:</strong> Registro/login con roles (alumno, profesor, admin), gestión de clases y horarios, inscripciones, panel de administración',
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
      'about.p1':        'I am a <strong>Java Backend Developer with over 8 years of experience</strong> in software development, primarily within banking and enterprise environments.
      'about.p2':        'I specialize in developing <strong>microservices and REST APIs using Java and Spring Boot</strong>, working with layered and hexagonal architectures, relational databases, and continuous integration and deployment processes.',
      'about.p3':        'Throughout my career, I have been involved in the entire software development lifecycle: <strong>development, testing, code reviews, deployment, monitoring, and production incident resolution</strong>.',
      'about.p4':        'I am currently particularly interested in <strong>Backend Java / Software Engineer</strong> positions where I can continue working on distributed systems, backend architecture, and continuous improvement of production applications.',
      'about.location':  'Spain',
      'about.role':      'Backend Software Engineer',
      'about.languages': 'Spanish (native) · English (B1)',

      'skills.title':  '🛠️ Technical skills',
      'skills.legend.1': 'Basic',
      'skills.legend.3': 'Intermediate',
      'skills.legend.4': 'Advanced',
      'skills.legend.5': 'Professional',
      'skills.db':     'Databases',
      'skills.testing':'Testing & Quality',
      'skills.arch':   'Architecture & Patterns',
      'skills.mvc':    'MVC / Layered',

      'exp.title':          '💼 Experience',
      'exp.job1.date':      '2023 – Present',
      'exp.job1.role':      'Java Backend Consultant',
      'exp.job1.company':   'Banking / financial sector · Spain',
      'exp.job1.desc':      'Development and maintenance of backend microservices for financial systems, using Java and Spring Boot.',    'exp.job2.role':      'Full Stack Java Developer',
      'exp.job1.dot1':       'Development and maintenance of backend microservices using <strong>Java and Spring Boot</strong> for financial systems.',
      'exp.job1.dot2':       'Design and evolution of <strong>REST APIs</strong> following hexagonal architecture, SOLID principles, and Clean Code best practices.',
      'exp.job1.dot3':       'Development of unit and integration tests using <strong>JUnit 5, Mockito, and Newman</strong> to ensure service quality.',
      'exp.job1.dot4':       'Integration with <strong>Oracle and MySQL</strong> databases, working with various persistence models based on service requirements.',
      'exp.job1.dot5':       'Participation in continuous integration and deployment processes using <strong>Jenkins and GitHub Actions, with deployments on OpenShift</strong>.',
      'exp.job1.dot6':       'Monitoring and analyzing service behavior using <strong>Dynatrace, logs, and metrics, while participating in incident resolution</strong>.',
      'exp.job1.dot7':       'Participation in code reviews and continuous improvement of code quality using tools such as <strong>SonarQube and Fortify</strong>.',
      'exp.job2.role':      'Java Full Stack Developer',

      'exp.job2.company':   'Banking / financial sector · Spain',
      'exp.job2.desc':      'Development and maintenance of backend applications and services using Java and Spring ecosystem technologies.',
      'exp.job2.dot1':      'Development of backend services and <strong>REST APIs using Java and Spring Boot</strong>.',
      'exp.job2.dot2':      'Integration with existing systems using <strong>REST APIs and SOAP services</strong>.',
      'exp.job2.dot3':      'Development and maintenance of queries and data structures in <strong>MySQL</strong>.',
      'exp.job2.dot4':      'Implementation of unit tests using <strong>JUnit 5</strong> and API testing via Newman.',
      'exp.job2.dot5':      'Performance analysis and load testing using <strong>JMeter</strong>.,
      'exp.job2.dot6':      'Incident resolution and problem analysis in various environments.',
      'exp.job2.dot7':      'Process automation using <strong>Jenkins</strong>.',
      'exp.job2.dot8':      'Application of static analysis and security tools such as <strong>SonarQube</strong>.',
      'exp.job2.dot9':      'Participation in evolutionary maintenance and the development of new functionalities.',

      'edu.title':        '🎓 Education',
      'edu.center':       'Training centre · Spain',
      'edu.daw.title':    'HND – Web Application Development',
      'edu.daw.desc':     'Web application development. Relational database design and frontend development using HTML5, CSS, JavaScript and jQuery.',
      'edu.daw.project':  '<strong>Final project:</strong> <em>FunkBreakSchool</em> — complete web platform with user management, roles, timetables, enrolments and admin dashboard.',
      'edu.dam.title':    'HND – Multiplatform Application Development',
      'edu.dam.desc':     'Android and desktop application development. Specialisation in Java, relational databases, graphical interfaces and data access.',
      'edu.dam.tech':     '<strong>Technologies:</strong> Java 8 · Spring Framework · Hibernate · PHP · JavaScript ES6 · jQuery · MySQL · Oracle · MongoDB · Neo4j · Git/GitHub',

      'cert.title':      '📜 Certifications',
      'cert.name0':      'Microservices: A Complete Guide to Docker & Kubernetes',
      'cert.name1':      'AI-powered development: from zero to production',
      'cert.name2':      'Spring Framework 6 & Spring Boot 3 from zero to expert',
      'cert.name3':      'Java University: From Zero to Master',
      'cert.name4':      'Web Development with Spring Boot - From Zero to Ninja',
      'modal.spring.lead':   'Spring Framework 6 & Spring Boot 3 Course Completion Certificate',
      'modal.UniJava.lead':   'Java University: From Zero to Master',
      'cert.button':    'Certificate →',


      'proj.title':    '🚀 Projects',
      'proj.more':     'Learn more',
      'proj.fbs.desc': 'Web platform for a dance school. User management, roles, timetables, enrolments and multimedia content. Higher education final project.',
      'proj.cv.title': 'Interactive 3D CV',
      'proj.cv.desc':  'This very portfolio. Built with Three.js and vanilla JavaScript, no backend, deployable on GitHub Pages with an interactive 3D scene.',
      'proj.crochet.title': 'Mamen Crochet',
      'proj.crochet.desc':  'App for crochet lovers. Discover unique, handmade crochet pieces—perfect for gifting, decorating, or collecting.',

      'modal.crochet.title': '🧶 Mamen Crochet',
      'modal.crochet.lead':  'Personal project',
      'modal.crochet.desc':  'App dedicated to the world of crochet. Discover unique, handmade crochet pieces—perfect for gifting, decorating, or collecting.',
      'modal.crochet.li1':   '<strong>Technologies: </strong> HTML, CSS, JavaScript y Three.js',
      'modal.crochet.li2':   '<strong>Features:</strong> To showcase the artisans work and allow users to place orders for their favorite dolls.',
      'modal.crochet.li3':   '<strong>Status:</strong> Published',
      'modal.crochet.li4':   '<strong>Motivation:</strong> Personal project',
      'modal.crochet.li5':   '<strong>Visit Website →</strong>',

      'contact.title': '📬 Contact',
      'contact.intro': 'Have an opportunity or want to chat? <strong>I would love to hear from you.</strong>',
      'contact.form.title': 'Message me',
      'contact.form.modalTitle': 'Contact form',
      'contact.form.teaser': 'If you prefer, open a quick form and send me an email.',
      'contact.form.open': 'Open form',
      'contact.form.name': 'Name',
      'contact.form.email': 'Mail',
      'contact.form.company': 'Company (optional)',
      'contact.form.message': 'Message',
      'contact.form.submit': 'Send email',
      'contact.form.namePh': 'Your name',
      'contact.form.emailPh': 'you@email.com',
      'contact.form.companyPh': 'Company name',
      'contact.form.messagePh': 'Tell me about the opportunity',
      'contact.form.status.missingEndpoint': 'Error: The send endpoint has not been configured.',
      'contact.form.status.sending': 'Sending message...',
      'contact.form.status.success': '¡Message succesfully! I will reply as soon as possible..',
      'contact.form.error': 'Could not send the message. Please try again in a few seconds.',

      'footer.text': 'Made with ❤️ and <strong>Three.js</strong> · Sheila Cortés Fernández © 2026',

      'modal.fbs.lead': 'HND DAW final project',
      'modal.fbs.desc': 'Complete web platform for managing a funk and breakdance school.',
      'modal.fbs.li1':  '<strong>Technologies:</strong> php, MySQL, HTML5, CSS3, JavaScript, Bootstrap, SweeatAlert, jQuery',
      'modal.fbs.li2':  '<strong>Features:</strong> Registration/login with roles (student, teacher, admin), class and schedule management, enrolments, admin panel',
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

    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
        const key = el.getAttribute('data-i18n-placeholder');
            if(dict[key] !== undefined) {
                el.setAttribute('placeholder', dict[key]);
            }
    });
}

function toggleLang() {
  applyLang(currentLang === 'es' ? 'en' : 'es');
}

/* Aplicar idioma inicial al cargar */
document.addEventListener('DOMContentLoaded', () => {
  applyLang(currentLang);
});