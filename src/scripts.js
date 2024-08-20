// Burger menu toggle
const burger = document.querySelector('.burger')
const navLinks = document.querySelector('.nav-links')

burger.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active')
})

// Smooth scrolling for navbar links
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const targetId = this.getAttribute('href').substring(1)
    const targetSection = document.getElementById(targetId)

    window.scrollTo({
      top: targetSection.offsetTop - 60, // Adjust for fixed header height
      behavior: 'smooth'
    })
  })
})

document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('.section')

  const options = {
    threshold: 0.1 // 10% of the section needs to be visible
  }

  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show')
        observer.unobserve(entry.target) // Stop observing once the animation has run
      }
    })
  }, options)

  sections.forEach(section => {
    observer.observe(section)
  })
})
