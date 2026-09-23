/* =========================================
   ENGINEERING CASE STUDIES
========================================= */

(function initCaseStudies() {

  function setupCaseStudies() {

    const section = document.getElementById('case-studies');

    if (!section) {
      console.error('❌ No existe #case-studies');
      return;
    }

    const caseButtons = section.querySelectorAll('.case-link');

    console.log('✅ Case Study buttons:', caseButtons.length);

    caseButtons.forEach((button) => {

      button.addEventListener('click', function () {

        const modalId = this.dataset.modal;

        console.log('🔵 Abriendo modal:', modalId);

        if (!modalId) {
          console.error('❌ El botón no tiene data-modal');
          return;
        }

        openModal(modalId);

      });

    });

  }


  if (document.readyState === 'loading') {

    document.addEventListener(
      'DOMContentLoaded',
      setupCaseStudies
    );

  } else {

    setupCaseStudies();

  }

})();