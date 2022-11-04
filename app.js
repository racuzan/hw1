const characterList = document.getElementById("character-list");
const searchBar = document.getElementById("search-bar");
let characters = [];

searchBar.addEventListener("input", () => {
  const searchKey = searchBar.value.trim().toLowerCase();

  const matchedCharacters = characters.filter((character) => {
    return (
      character.name.trim().toLowerCase().includes(searchKey) ||
      character.house.trim().toLowerCase().includes(searchKey) ||
      character.patronus.trim().toLowerCase().includes(searchKey)
    );
  });
  console.log(matchedCharacters);
  displayCharacters(matchedCharacters);
});

const loadCharacters = async () => {
  try {
    const res = await fetch("https://hp-api.herokuapp.com/api/characters");
    characters = await res.json();
    characters = characters.filter((character) => {
      return character.image != "";
    });
    displayCharacters(characters);
  } catch (error) {
    console.log(error);
  }
};

function displayCharacters(characters) {
  characterList.innerHTML = "";

  characters.forEach((character) => {
    let listItem = document.createElement("li");
    listItem.classList.add("character");

    let name = document.createElement("h2");
    name.classList.add("name");
    name.innerText = `Name: ${character.name}`;

    let house = document.createElement("p");
    house.classList.add("house");
    house.innerText = `House: ${character.house}`;

    let patronus = document.createElement("p");
    patronus.classList.add("patronus");
    patronus.innerText = `Patronus: ${character.patronus}`;


    let gender = document.createElement("p");
    gender.classList.add("gender");
    gender.innerText = `gender: ${character.gender}`;

    let image = document.createElement("img");
    image.classList.add("image");
    image.setAttribute("src", character.image);

    let dateOfBirth = document.createElement("p");
    dateOfBirth.classList.add("dateOfBirth");
    dateOfBirth.innerText = `dateOfBirth: ${character.dateOfBirth}`;


    let eyeColour = document.createElement("p");
    eyeColour.classList.add("eyeColour");
    eyeColour.innerText = `eyeColour: ${character.eyeColour}`;


    let hairColour = document.createElement("p");
    hairColour.classList.add("hairColour");
    hairColour.innerText = `hairColour: ${character.hairColour}`;

    let alive = document.createElement("p");
    alive.classList.add("alive");
    alive.innerText = `alive: ${character.alive}`;


    

    listItem.append(name);
    listItem.append(house);
    listItem.append(patronus);
    listItem.append(gender);
    listItem.append(image);
    
    listItem.append(dateOfBirth);
    listItem.append(eyeColour);
    listItem.append(hairColour);
    listItem.append(alive);
    

    characterList.append(listItem);
  });
}

loadCharacters();
