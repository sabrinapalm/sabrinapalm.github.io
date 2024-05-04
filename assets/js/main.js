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


document.getElementById("toggle-colors").addEventListener("click", function() {
  const root = document.documentElement;
  const currentBlack = getComputedStyle(root).getPropertyValue('--black').trim();
  const currentWhite = getComputedStyle(root).getPropertyValue('--white').trim();
  const currentTextColor = getComputedStyle(root).getPropertyValue('--text-color').trim();

  // Toggle colors
  root.style.setProperty('--black', currentWhite);
  root.style.setProperty('--white', currentBlack);
  root.style.setProperty('--text-color', currentTextColor === "#fff" ? "#111" : "#fff");
});
