//Adicione efeitos de interação com cartas

document.querySelectorAll('.card').forEach(card => {
card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-5px)';
});

card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
});
});

//Adicione rolagem suave para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
