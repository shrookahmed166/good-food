AOS.init({ duration: 1000, once: true });


window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

function scrollToMenu() {
    document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
}


const buttons = document.querySelectorAll('.btn-small');
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.innerText = "Added ✓";
        setTimeout(() => { btn.innerText = "Add to Cart"; }, 1500);
    });
});