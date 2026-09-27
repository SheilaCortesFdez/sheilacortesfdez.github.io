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



    caseButtons.forEach((button) => {

      button.addEventListener('click', function () {

        const modalId = this.dataset.modal;

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