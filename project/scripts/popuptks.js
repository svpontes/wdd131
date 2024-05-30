document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const modal = document.getElementById('thankYouPopUp');
    const closeButton = document.querySelector('.close-btn');
    const thankYouMessage = document.getElementById('thankYouMessage');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Recupera os valores dos campos do formulário
        const name = capitalizeFirstLetter(document.getElementById('name').value);
        const email = document.getElementById('email').value;
        const subject = document.querySelector('select[name="subject"]').value;

     // Cria a mensagem personalizada de agradecimento
     thankYouMessage.innerHTML = `
     Thank you, ${name}! <br>
     We have received your message regarding the product <br>T-shirt ${subject}. <br>
     We will get back to you at <br>${email}<br>as soon as possible.<br>Feel
     free to contact us any time at:<br>customerservice@studio-acores.com
 `;
        // Exibe o modal de agradecimento
        modal.classList.remove('hidden');
        modal.style.display = 'flex';
    });

    closeButton.addEventListener('click', function() {
        modal.classList.add('hidden');
        modal.style.display = 'none';
        form.reset(); // Limpa o formulário
        // Impede a exibição do popup novamente
        localStorage.setItem('popupShown', 'true');
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.classList.add('hidden');
            modal.style.display = 'none';
            form.reset(); // Limpa o formulário
            // Impede a exibição do popup novamente
            localStorage.setItem('popupShown', 'true');
        }
    });

    // Verifica se o popup já foi mostrado
    if (localStorage.getItem('popupShown') === 'true') {
        modal.classList.add('hidden');
        modal.style.display = 'none';
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }
});
