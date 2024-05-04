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


const currentTheme = localStorage.getItem("theme") || "light";
document.documentElement.setAttribute("data-theme", currentTheme);

document.getElementById("toggle-colors").addEventListener("click", function() {
    const newTheme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
});