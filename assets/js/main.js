document.addEventListener('DOMContentLoaded', function (event) {
  var headerHeight = document.querySelector('.ds-header').offsetHeight

  document
    .querySelectorAll('.ds-banner,.ds-main-section')
    .forEach(function (element) {
      element.style.marginTop = headerHeight + 20 + 'px'
    })

  window.addEventListener('scroll', function () {
    if (window.pageYOffset >= 10) {
      document.querySelector('.ds-header').classList.add('ds-fixed-header')
    } else {
      document.querySelector('.ds-header').classList.remove('ds-fixed-header')
    }
  })
  window.dispatchEvent(new Event('scroll'))
})

const currentTheme = localStorage.getItem('theme') || 'light'
document.documentElement.setAttribute('data-theme', currentTheme)

document.getElementById('toggle-colors').addEventListener('click', function () {
  const newTheme =
    document.documentElement.getAttribute('data-theme') === 'dark'
      ? 'light'
      : 'dark'
  document.documentElement.setAttribute('data-theme', newTheme)
  localStorage.setItem('theme', newTheme)
})

// document.addEventListener('DOMContentLoaded', function () {
//   const target = document.getElementById('animatedText')
//   const message = 'FRONTEND DEVELOPER'
//   const letters = message.split('')
//   let i = 0

//   function addLetter() {
//     if (i < letters.length) {
//       target.innerHTML += letters[i]
//       i++
//       setTimeout(addLetter, 200)
//     }
//   }

//   addLetter()
// })
