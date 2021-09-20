const recipeContainer = document.querySelector("#recipes-container");
const getRandomBtn = document.querySelector("#getRandom");
const getAllRecipesBtn = document.querySelector("#GetAllRecipes");
const printSection = document.querySelector("#printbutton");
const printBtn = document.querySelector("#printBtn");

const baseURL = `http://localhost:4004/api/recipes`;

const recipeCallBack = ({ data: recipes }) => displayRecipes(recipes);
const errCallback = (err) => console.log(err);

const getAllRecipes = () =>
	axios.get(baseURL).then(recipeCallBack).catch(errCallback);

function getRandomRecipe() {
	recipeContainer.innerHTML = ``;
	recipes = [];
	axios
		.get(baseURL)
		.then((res) => {
			randomRecipe = res.data[Math.floor(Math.random() * res.data.length)];
			createRecipeCard(randomRecipe);
			createPrintButton();
		})
		.catch(errCallback);
}

function displayRecipes(arr) {
	recipeContainer.innerHTML = ``;
	for (let i = 0; i < arr.length; i++) {
		createRecipeCard(arr[i]);
	}
}

function createRecipeCard(recipe) {
	const recipeCard = document.createElement("div");
	recipeCard.classList.add("recipe-card");
	printSection.innerHTML = "";

	recipeCard.innerHTML = `<div id="textContent" style="background-image: url(${recipe.imageURL})"></div><div class="importedText"><h2 class="name">${recipe.name}</h2>
    <h3>here is what you will need</h3>
    <p class="ingredients">${recipe.ingredients}</p>
    <h3>lets get started</h3>
    <p class="instructions">${recipe.instructions}</p></div>`;

	recipeContainer.appendChild(recipeCard);
}

function createPrintButton() {
	printSection.innerHTML = "";
	const printButton = document.createElement("section");
	printButton.innerHTML = `<button id="printBtn" onclick="printInfo()">print recipe</button>`;

	printSection.appendChild(printButton);
}

function printInfo() {
	let openWindow = window.open("");
	openWindow.document.write(recipeContainer.innerHTML);
	openWindow.document.close();
	openWindow.focus();
	openWindow.print();
	openWindow.close();
	console.log(openWindow.document.write(recipeContainer.innerHTML));
}

// printBtn.addEventListener("click", printInfo);
getRandomBtn.addEventListener("click", getRandomRecipe);
getAllRecipesBtn.addEventListener("click", getAllRecipes);

getAllRecipes();
