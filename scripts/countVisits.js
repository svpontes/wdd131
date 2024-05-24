const visitsDisplay = document.querySelector(".visits");
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0){

    visitsDisplay.textContent = `This is your FIRST visit - WELCOME!`;
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);