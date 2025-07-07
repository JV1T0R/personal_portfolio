// Typed JS
var typed = new Typed("#auto-type", {
    strings: ["Análise de Sistemas", "Segurança da informação", "Desenvolvimento", "Kaizen (改善)"],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
    loopCount: Infinity,
});

// Tooltips Initializer
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// Swiper JS
const swiper = new Swiper("#mySwiper", {
    spaceBetween: 20,
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 3000, 
        disableOnInteraction: false 
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
})

// Animate on Scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
            observer.unobserve(entry.target)
        }
    })    
})

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el))