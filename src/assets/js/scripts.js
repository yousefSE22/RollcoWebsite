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

document.addEventListener('DOMContentLoaded', function () {
  const images = document.querySelectorAll('.gallery-item img')
  const lightbox = document.getElementById('lightbox')
  const lightboxImage = document.getElementById('lightbox-image')
  const closeBtn = document.querySelector('.close')
  const prevBtn = document.querySelector('.prev')
  const nextBtn = document.querySelector('.next')
  let currentIndex = 0

  // Open the lightbox when an image is clicked
  images.forEach((image, index) => {
    image.addEventListener('click', () => {
      lightbox.style.display = 'block'
      currentIndex = index
      showImage(currentIndex)
    })
  })

  // Function to display the image based on the current index
  /**
   *
   * @param index
   */
  function showImage (index) {
    lightboxImage.src = images[index].src
  }

  // Close the lightbox
  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none'
  })

  // Show previous image
  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length
    showImage(currentIndex)
  })

  // Show next image
  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length
    showImage(currentIndex)
  })

  // Close lightbox by clicking outside of the image
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none'
    }
  })
})
