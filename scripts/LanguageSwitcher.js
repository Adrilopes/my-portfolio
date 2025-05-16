i18next
  .use(i18nextHttpBackend)
  .init({
    lng: 'pt', 
    debug: true,
    backend: {
      loadPath: 'locales/{{lng}}/translation.json'
    },
    interpolation: {
      escapeValue: false
    },
  }, function(err, t) {
    jqueryI18next.init(i18next, $, { useOptionsAttr: true });
    $('body').localize();
    applyHtmlTranslations();
    updateCurriculumLink(i18next.language); 
  });

$('.lang-btn').on('click', function (e) {
  e.preventDefault();
  const lang = $(this).data('lang');

  $('.lang-btn').removeClass('active');
  $(this).addClass('active');

  i18next.changeLanguage(lang, function () {
    $('body').localize();
    applyHtmlTranslations();
    updateCurriculumLink(lang); 
  });
});

function applyHtmlTranslations() {
  $('[data-i18n-html]').each(function () {
    const key = $(this).data('i18n-html');
    $(this).html(i18next.t(key));
  });
}

function updateCurriculumLink(lang) {
  const curriculumLink = $('.button-curriculo').closest('a'); 
  let pdfPath = '';

  switch (lang) {
    case 'pt':
      pdfPath = './cv/cv-pt.pdf';
      break;
    case 'en':
      pdfPath = './cv/cv-en.pdf';
      break;
    case 'es':
      pdfPath = './cv/cv-en.pdf';
      break;
    default:
      pdfPath = './cv/cv-pt.pdf'; 
  }

  if (curriculumLink.length > 0) {
    curriculumLink.attr('href', pdfPath);
  }
}