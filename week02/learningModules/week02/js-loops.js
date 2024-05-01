// Definindo o objeto myInfo
const myInfo = {
    name: "Brother Pontes",
    photo: "images/photo.jpg",
    favoriteFoods: ["Barbecue", "Chicken Wings", "Pizza", "Chinese food", "Fish"],
    hobbies: ["Tripping", "Play guitar", "Camping"],
    placesLived: [
      {
        place: "Vitoria, ES, Brazil",
        length: "25 years",
      },
        
      { 
        place: "Serra, ES, Brazil",
        length: "12 years",
      },
      {
        place: "Belo Horizonte, MG, Brazil",
        length: "6 years",
      },
        
      {
        place: "Brasília, DF, Brazil",
        length: "2 years",
      },
      
      {
        place: "Salt Lake, UT",
        length: "3 year",
      },
      
      {
        place: "Lisbon, Portugal",
        length: "6 year",
      },
    ],
  };
  
  // Seleciona o elemento <ul> de alimentos favoritos pelo ID
  const ulElementFoods = document.getElementById("favorite-foods");
  // Itera sobre cada alimento favorito no array favoriteFoods
  myInfo.favoriteFoods.forEach(favoriteFood => {
      // Cria um elemento <li>
      const liElement = document.createElement("li");
      // Define o conteúdo de texto do elemento <li> como o alimento favorito atual
      liElement.textContent = favoriteFood;
      // Adiciona o elemento <li> como filho do elemento <ul> de alimentos favoritos
      ulElementFoods.appendChild(liElement);
  });
  
// Seleciona o elemento <dl> de hobbies pelo ID
const dlElementHobbies = document.getElementById("hobbies");

// Itera sobre cada hobby no array hobbies
myInfo.hobbies.forEach(hobby => {
    // Cria um elemento <dt> para o hobby
    const dtElement = document.createElement("dt");
    // Define o conteúdo de texto do elemento <dt> como o hobby atual
    dtElement.textContent = hobby;
    // Adiciona o elemento <dt> como filho do elemento <dl> de hobbies
    dlElementHobbies.appendChild(dtElement);
});

// Seleciona o elemento <li> de places-lived pelo ID
const liElementPlacesLived = document.getElementById("places-lived");

// Itera sobre cada local vivido no array placesLived
myInfo.placesLived.forEach(place => {
    // Cria um elemento <dt> para exibir o local vivido
    const pElement = document.createElement("dt");
    // Define o conteúdo de texto do elemento <dt> como o local e a duração
    pElement.textContent = `${place.place} - ${place.length}`;
    // Adiciona o elemento <dt> como filho do elemento <li> de places-lived
    liElementPlacesLived.appendChild(pElement);
});
