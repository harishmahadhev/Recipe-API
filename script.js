const row = document.querySelector('.row')
let callAPI = async () => {
    try {
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=c`);
        result = await response.json();
        console.log(result.meals)
        getData(result.meals);
    }
    catch (err) {
        alert(err);
    }
}
callAPI();

function getData(meals) {
    meals.forEach(element => {
        const elements = document.createElement('div');
        elements.className = "col-6 col-md-4";
        elements.innerHTML = `<div class="card m-3 shadow-sm p-3 mb-5 bg-white rounded border border-light" style="width: 18rem;">
  <img src='${element.strMealThumb}' class="card-img-top" alt="...">
  <div class="card-body">
    <h6 class="card-title">${element.strMeal}</h6>
    <p class="card-text instructions text-secondary">${element.strInstructions}</p>
    <a href=${element.strYoutube} target="_blank" class="btn btn-primary">View Recipe</a>
  </div>
</div>`
        row.append(elements);
    });
}
function loader(elem) {
    if (elem === 1) {
        const loader = document.createElement('div');
        loader.className = "spinner-border"
        loader.setAttribute('role', "status");
        loader.innerHTML = `<span class="sr-only">Loading...</span>`
        row.append(loader);
    }
}