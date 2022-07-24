var sides = ["Esquites", " Elote", " Nopales", " Arroz Mexicano", " Frijoles fritos", " Calabaza rostizada", " Chiles en vinagre", " Guacamole", " Papas fritas", " Consome"]
var mainDishes = ["Chiles en Nogada", " Tamales", " Chilaquiles", " Mole negro", " Tlayudas", " Tlacoyos", " Pozole", " Menudo", " Mollejas", " Enchiladas", " Torta ahogado", " Toastadas", " Sopes", " Barbacoa", " Tacos al Pastor"]
var desserts = ["Gelatina", " Arroz con leche", " Paleta", " Dulce de leche", " Flan", " Churros", " Concha", " Meringue", " Horchata", " Galletas"]

var side = sides[Math.floor(Math.random() * sides.length)]
var mainDish = mainDishes[Math.floor(Math.random() * mainDishes.length)]
var dessert = desserts[Math.floor(Math.random() * desserts.length)]

var cookPotImg = document.querySelector('.cook-pot') //cook pot image
var clearButton = document.querySelector('.clear') //clear button
var hiddenH3 = document.querySelector('.you-should') //you should make h3 header
var randomFood = document.querySelector('.random-food')

var letsCook = document.querySelector('.lets-cook') //lets cook button

var cookPotDiv = document.querySelector('.cook-pot-div')
var selections = document.querySelector('.selections')
var viewAllRecipe = document.querySelector('.view-all-recipe')

var sidesList = document.querySelector('.sides-list')
var mainList = document.querySelector('.main-list')
var dessertList = document.querySelector('.dessert-list')

var addBtn = document.querySelector('.add-recipe-btn')
var editBtn = document.querySelector('.edit-recipe-btn')
var deleteBtn = document.querySelector('.delete-recipe-btn')
var typeEdit = document.querySelector('.recipe-type')
var nameEdit = document.querySelector('.recipe-name')

letsCook.addEventListener('click', showRandomFood)
function showRandomFood() {
    var radioButtons = document.getElementsByName('selection')
    var selected = Array.from(radioButtons).find(radio => radio.checked)
    if (selected.value === "side") {
        randomFood.innerHTML = side
    } else if (selected.value === "mainDish") {
        randomFood.innerHTML = mainDish
    } else {
        randomFood.innerHTML = dessert
    }
    cookPotImg.classList.toggle('toggle2')
    clearButton.classList.toggle('toggle')
    hiddenH3.classList.toggle('toggle')
    randomFood.classList.toggle('toggle')
}

var allRecipe = document.querySelector('.all-recipe-btn')
allRecipe.addEventListener('click', showAllRecipe)
function showAllRecipe() {
    selections.classList.toggle('toggle3')
    cookPotDiv.classList.toggle('toggle3')
    viewAllRecipe.classList.toggle('toggle4')
    addBtn.classList.toggle('toggle4')
    editBtn.classList.toggle('toggle4')
    deleteBtn.classList.toggle('toggle4')
    typeEdit.classList.toggle('toggle4')
    nameEdit.classList.toggle('toggle4')
    sidesList.innerHTML = `Sides: ${sides}`
    mainList.innerHTML = `Main Dishes: ${mainDishes}`
    dessertList.innerHTML = `Desserts: ${desserts}`
}

addBtn.addEventListener('click', addNewRecipe)
function addNewRecipe() {
    if(typeEdit.value === 'sides' || 'Sides') {
        sides.push(nameEdit.value)
    }
    if(typeEdit.value === 'desserts' || 'Desserts') {
        desserts.push(nameEdit.value)
    }
    if(typeEdit.value === 'main dishes' || 'Main dishes') {
        mainDishes.push(nameEdit.value)
    }
}



// can take value from recipe and push to specified type
