let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');

function showSlide(index) {
    items.forEach((item, i) => {
        item.classList.remove('active');
        item.style.display = 'none'; // Esconder todos os itens
        if (i === index) {
            item.classList.add('active');
            item.style.display = 'block'; // Mostrar o item atual
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % items.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showSlide(currentIndex);
}

// Inicializar o carrossel com a primeira imagem
showSlide(currentIndex);
