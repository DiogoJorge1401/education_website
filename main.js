// change navbar styles on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 60)
})

const faqs = document.querySelectorAll('article.faq')
faqs.forEach((faq, faqIdx) => {
    faq.addEventListener('click', function() {
        faq.classList.toggle('open')

        const icon = faq.querySelector('.faq__icon i')

        if (icon.className === 'uil uil-minus')
            icon.className = 'uil uil-plus'
        else
            icon.className = 'uil uil-minus'

        faqs.forEach((el, idx) => {
            if (faqIdx === idx) return

            el.classList.remove('open')

            const icon = el.querySelector('.faq__icon i')

            icon.className = 'uil uil-plus'
        })
    })
})


// Toggle navbar
const menu = document.querySelector('.nav__menu'),
    menuBtn = document.querySelector('#open-menu-btn'),
    closeBtn = document.querySelector('#close-menu-btn')

menuBtn.addEventListener('click', () => {
    menu.style.display = 'flex'
    closeBtn.style.display = 'inline-block'
    menuBtn.style.display = 'none'
})
closeBtn.addEventListener('click', () => {
    menu.style.display = 'none'
    closeBtn.style.display = 'none'
    menuBtn.style.display = 'inline-block'
})