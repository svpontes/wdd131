document.addEventListener("DOMContentLoaded", function() {
    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');
    const contactButton = document.querySelector('#contact');

    if (hamButton && navigation) {
        hamButton.addEventListener('click', () => {
            navigation.classList.toggle('open');
            hamButton.classList.toggle('open');
        });

        // Função para ajustar visibilidade do botão "Contact Us" e itens do menu
        const adjustContactButtonVisibility = () => {
            if (window.innerWidth < 768) {
                hamButton.style.display = 'block';
                if (contactButton) {
                    contactButton.style.display = 'none';
                }
                const contactItem = document.querySelector('.navigation li.contact');
                if (!contactItem) {
                    const li = document.createElement('li');
                    li.classList.add('contact');
                    const a = document.createElement('a');
                    a.setAttribute('href', './contactus.html');
                    a.textContent = 'Contact us';
                    li.appendChild(a);
                    navigation.appendChild(li);
                }
            } else {
                hamButton.style.display = 'none';
                if (contactButton) {
                    contactButton.style.display = 'block';
                }
                const contactItem = document.querySelector('.navigation li.contact');
                if (contactItem) {
                    contactItem.remove();
                }
            }
        };

        // Ajusta visibilidade inicial ao carregar a página
        adjustContactButtonVisibility();

        // Adiciona um ouvinte de evento para redimensionamento da janela
        window.addEventListener('resize', adjustContactButtonVisibility);
    }
});
