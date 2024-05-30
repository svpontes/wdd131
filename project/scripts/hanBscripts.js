document.addEventListener("DOMContentLoaded", function() {
    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');
    const contactButton = document.querySelector('#contact');

    hamButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');
    });

    // Adiciona um ouvinte de evento para redimensionamento da janela
    window.addEventListener('resize', () => {
        if (window.innerWidth < 768) {
            hamButton.style.display = 'block';
            // Verifica se o botão "Contact Us" está visível
            if (contactButton.style.display !== 'none') {
                // Oculta o botão "Contact Us"
                contactButton.style.display = 'none';
                // Verifica se o item "Contact Us" já foi adicionado ao menu de navegação
                const contactItem = document.querySelector('.navigation li.contact');
                if (!contactItem) {
                    // Cria um novo elemento li
                    const li = document.createElement('li');
                    li.classList.add('contact');
                    // Cria um novo elemento a
                    const a = document.createElement('a');
                    a.setAttribute('href', './contactus.html');
                    a.textContent = 'Contact us';
                    // Adiciona o elemento a ao elemento li
                    li.appendChild(a);
                    // Adiciona o elemento li à navegação
                    navigation.appendChild(li);
                }
            }
        } else {
            hamButton.style.display = 'none';
            // Verifica se o botão "Contact Us" está oculto
            if (contactButton.style.display === 'none') {
                // Mostra o botão "Contact Us"
                contactButton.style.display = 'block';
                // Verifica se o item "Contact Us" está presente no menu de navegação
                const contactItem = document.querySelector('.navigation li.contact');
                if (contactItem) {
                    // Remove o item "Contact Us" do menu de navegação
                    contactItem.remove();
                }
            }
        }
    });
});
