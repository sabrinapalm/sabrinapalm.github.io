document.addEventListener('DOMContentLoaded', function (event) {
  var mastheadheight = document.querySelector('.ds-header').offsetHeight;

  document
    .querySelectorAll('.ds-banner,.ds-main-section')
    .forEach(function (element) {
      element.style.marginTop = mastheadheight + 'px';
    });

  window.addEventListener('scroll', function () {
    if (window.pageYOffset >= 10) {
      document.querySelector('.ds-header').classList.add('ds-fixed-header');
    } else {
      document.querySelector('.ds-header').classList.remove('ds-fixed-header');
    }
  });
  window.dispatchEvent(new Event('scroll'));
});
