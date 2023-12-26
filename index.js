const [prevButton, nextButton, charList] = [
  document.querySelector(".prevBtn"),
  document.querySelector(".nextBtn"),
  document.querySelector("ul"),
];

let currentPage = 1;

async function fetchData(page) {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${page}`
    );
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function displayCharacterNames(characters) {
  charList.innerHTML = "";
  characters.forEach(({ name }) => {
    const listItem = document.createElement("li");
    listItem.textContent = name;
    charList.appendChild(listItem);
  });
}

async function updateCharacters(page) {
  const data = await fetchData(page);
  displayCharacterNames(data.results);
}

prevButton.addEventListener(
  "click",
  () => currentPage > 1 && updateCharacters(--currentPage)
);
nextButton.addEventListener("click", () => updateCharacters(++currentPage));
