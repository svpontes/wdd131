// Seleciona o campo de entrada, o botão e a lista
const input = document.querySelector('#favchap');
const button = document.querySelector('#addChapterBtn');
const list = document.querySelector('#list');

// Obtém a lista de capítulos do armazenamento local ou usa um array vazio
let chapterArray = getChapterList() || [];

// Exibe cada capítulo na lista
chapterArray.forEach(chapter => {
    displayList(chapter);
});

// Adiciona um evento de clique ao botão
button.addEventListener('click', () => {
    addChapter();
});

// Função para adicionar um capítulo
function addChapter() {
    // Verifica se o campo de entrada não está vazio
    if (input.value.trim() !== '') {
        // Transforma a entrada em minúsculas para análise
        const newChapter = input.value.trim().toLowerCase();

        // Verifica se o capítulo já está na lista
        if (chapterArray.includes(newChapter)) {
            // Se o capítulo já existe, exibe uma mensagem ao usuário
            alert('This chapter has been added. Please choose another chapter.');
        } else {
            // Capitaliza a primeira letra do capítulo
            const capitalizedChapter = capitalize(input.value.trim());
            // Exibe o capítulo na lista
            displayList(capitalizedChapter);
            // Armazena o capítulo na array (em minúsculas para consistência)
            chapterArray.push(newChapter);
            // Atualiza o armazenamento local
            setChapterList();
            // Limpa o campo de entrada
            input.value = '';
            // Define o foco de volta no campo de entrada
            input.focus();
        }
    } else {
        // Se o campo de entrada estiver vazio, mantenha o foco nele
        input.focus();
    }
}

// Função para capitalizar a primeira letra de uma string
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Função para atualizar o armazenamento local
function setChapterList() {
    localStorage.setItem('favChapt', JSON.stringify(chapterArray));
}

// Função para obter a lista de capítulos do armazenamento local
function getChapterList() {
    return JSON.parse(localStorage.getItem('favChapt')) || [];
}

// Função para exibir um item na lista
function displayList(item) {
    // Cria um novo item de lista
    const li = document.createElement('li');
    // Adiciona o capítulo capitalizado ao item de lista
    li.textContent = item;
    // Cria um botão de exclusão
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '❌';
    // Adiciona um evento de clique ao botão de exclusão
    deleteBtn.addEventListener('click', () => {
        // Remove o item da lista
        list.removeChild(li);
        // Remove o capítulo da array
        chapterArray = chapterArray.filter(chap => chap !== item.toLowerCase());
        // Atualiza o armazenamento local
        setChapterList();
    });
    // Adiciona o botão de exclusão ao item de lista
    li.appendChild(deleteBtn);
    // Adiciona o item de lista à lista
    list.appendChild(li);
}
