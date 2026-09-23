const certifications = [
  {
    name: "cert.name0",
    url: "sources/Docker&Kubernetes.pdf"
  },
  {
    name: "cert.name1",
    url: "sources/Certificado_SheilaCortesFdez.pdf"
  },
  {
    name: "cert.name2",
    url: "https://www.udemy.com/certificate/UC-2cf46462-50d6-4ddd-888f-4684662dd9dc/"
  },
  {
    name: "cert.name3",
    url: "https://www.udemy.com/certificate/UC-Q4NYAE18/?utm_campaign=email&utm_source=sendgrid.com&utm_medium=email"
  },
   {
      name: "cert.name4",
      url: "sources/SpringBootCeroNinja.pdf"
   },
];


let certCurrentIndex = 0;
let certCardsPerView = 4;


function getCertCardsPerView() {

  if (window.innerWidth <= 700) {
    return 1;
  }

  if (window.innerWidth <= 1000) {
    return 2;
  }

  return 4;
}


function loadCertifications() {

  const grid = document.getElementById("certifications-grid");

  if (!grid) {
    console.error("❌ No existe #certifications-grid");
    return;
  }

  grid.innerHTML = certifications.map(cert => `
    <div class="card proj-card cert-card">

      <h4 data-i18n="${cert.name}"></h4>

      <div class="proj-links">

        <a class="proj-link" href="${cert.url}" target="_blank" rel="noopener" data-i18n="cert.button"></a>

      </div>

    </div>
  `).join("");


  createCertDots();

  updateCertCarousel();

  /*
   * Aplicar traducciones después de crear
   * las tarjetas dinámicamente.
   */
  applyLang(currentLang);

}


function updateCertCarousel() {
  const track = document.getElementById("certifications-grid");
  const windowEl = document.querySelector(".cert-carousel-window");

  if (!track || !windowEl) return;

  const cards = track.querySelectorAll(".cert-card");

  if (!cards.length) return;

  certCardsPerView = getCertCardsPerView();

  const maxIndex = Math.max(
    0,
    cards.length - certCardsPerView
  );

  if (certCurrentIndex > maxIndex) {
    certCurrentIndex = maxIndex;
  }

  /*
   * Ancho REAL disponible del carrusel.
   */
  const windowWidth = windowEl.clientWidth;

  /*
   * Espacio entre tarjetas.
   */
  const gap = 16;

  /*
   * Calculamos el ancho exacto de cada tarjeta.
   */
  const cardWidth =
    (windowWidth - gap * (certCardsPerView - 1))
    / certCardsPerView;

  /*
   * Aplicamos el ancho real a TODAS las tarjetas.
   */
  cards.forEach(card => {
    card.style.flex = `0 0 ${cardWidth}px`;
    card.style.width = `${cardWidth}px`;
    card.style.minWidth = `${cardWidth}px`;
  });

  /*
   * Calculamos exactamente cuánto debemos desplazar.
   */
  const offset =
    certCurrentIndex * (cardWidth + gap);

  track.style.transform =
    `translate3d(-${offset}px, 0, 0)`;

  updateCertButtons();
  updateCertDots();
}

/*
* Funciones para navegar entre certificaciones
*/
function nextCertification() {
  const maxIndex = Math.max(
    0,
    certifications.length - certCardsPerView
  );

  if (certCurrentIndex < maxIndex) {
    certCurrentIndex++;
    updateCertCarousel();
  }
}

function previousCertification() {
  const maxIndex = Math.max(
    0,
    certifications.length - certCardsPerView
  );

  if (certCurrentIndex > 0) {
    certCurrentIndex--;
    updateCertCarousel();
  }
}


function updateCertButtons() {

  const prevButton =
    document.getElementById("cert-prev");

  const nextButton =
    document.getElementById("cert-next");

  if (!prevButton || !nextButton) return;

  /*
   * Si hay menos tarjetas que espacios
   * visibles, ocultamos los botones.
   */
  if (certifications.length <= certCardsPerView) {

    prevButton.style.visibility = "hidden";
    nextButton.style.visibility = "hidden";

  } else {

    prevButton.style.visibility = "visible";
    nextButton.style.visibility = "visible";

  }

}

/*
* Funciones para crear y actualizar los puntos de navegación
*/
function createCertDots() {

  const dotsContainer =
    document.getElementById("cert-carousel-dots");

  if (!dotsContainer) return;

  const pages = Math.ceil(
    certifications.length / certCardsPerView
  );

  dotsContainer.innerHTML = "";

  /*
   * Si todas las tarjetas caben en una sola vista,
   * no necesitamos puntos.
   */
  if (pages <= 1) return;

  for (let i = 0; i < pages; i++) {

    const dot = document.createElement("button");

    dot.type = "button";

    dot.className = "cert-dot";

    dot.setAttribute(
      "aria-label",
      `Go to certifications page ${i + 1}`
    );

    dot.addEventListener("click", () => {

      certCurrentIndex =
        Math.min(
          i * certCardsPerView,
          certifications.length - certCardsPerView
        );

      updateCertCarousel();

    });

    dotsContainer.appendChild(dot);

  }

}

/*
* Función para actualizar el estado de los puntos de navegación
*/
function updateCertDots() {

  const dots =
    document.querySelectorAll(".cert-dot");

  if (!dots.length) return;

  const currentPage =
    Math.floor(
      certCurrentIndex / certCardsPerView
    );

  dots.forEach((dot, index) => {

    dot.classList.toggle(
      "active",
      index === currentPage
    );

  });

}

document.addEventListener(
  "DOMContentLoaded",
  () => {

    loadCertifications();

    const prevButton =
      document.getElementById("cert-prev");

    const nextButton =
      document.getElementById("cert-next");

    if (prevButton) {

      prevButton.addEventListener(
        "click",
        previousCertification
      );

    }

    if (nextButton) {

      nextButton.addEventListener(
        "click",
        nextCertification
      );

    }

  }
);


/*
 * Recalcular el carrusel cuando cambia
 * el tamaño de la ventana.
 */
window.addEventListener(
  "resize",
  () => {

    const oldCardsPerView =
      certCardsPerView;

    const newCardsPerView =
      getCertCardsPerView();

    if (oldCardsPerView !== newCardsPerView) {

      certCurrentIndex = 0;

      createCertDots();

    }

    updateCertCarousel();

  }
);