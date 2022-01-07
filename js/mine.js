allGeneral = [];
let generalReq = new XMLHttpRequest();
generalReq.open(
  "GET",
  "https://newsapi.org/v2/top-headlines?country=eg&category=general&apiKey=6fff869649a341c7935d43f071a2a5d6"
);
generalReq.send();
console.log(generalReq.readyState);
generalReq.addEventListener("readystatechange", () => {
  if (generalReq.readyState === 4) {
    allGeneral = JSON.parse(generalReq.response).articles;
    renderGeneral();
  }
});
function renderGeneral() {
  let container = ``;
  let rowContainer;

  for (let i = 0; i < allGeneral.length; i++) {
    container += `
    <div class="col-md-3">
    <a href="${allGeneral[i].url}" class="text-decoration-none">   
     <h3 class="mb-3 text-primary">


    ${allGeneral[i].title}
    </h3>
    </a>
    <a href="${allGeneral[i].url}" class="text-decoration-none">    
    <img src=${allGeneral[i].urlToImage} class="img-fluid mb-3">
    </a>
    <p class="text-dark">
    ${allGeneral[i].description}
    </p>
    </div>
    `;
  }
  rowContainer = `<div class="row">
  ${container}</div>`;
  document.querySelector("#pills-general").innerHTML = rowContainer;
  console.log(rowContainer);
}
//=======================================sports====================
allSports = [];
let sportsReq = new XMLHttpRequest();
sportsReq.open(
  "GET",
  "https://newsapi.org/v2/top-headlines?country=eg&category=sports&apiKey=6fff869649a341c7935d43f071a2a5d6"
);
sportsReq.send();
console.log(sportsReq.readyState);
sportsReq.addEventListener("readystatechange", () => {
  if (sportsReq.readyState === 4) {
    allSports = JSON.parse(sportsReq.response).articles;
    renderSports();
  }
});
function renderSports() {
  let container = ``;
  let rowContainer = `<div class="row">
  ${container}</div>`;

  for (let i = 0; i < allSports.length; i++) {
    container += `<div class="col-md-3">
    <a href="${allSports[i].url}" class="text-decoration-none">   
     <h3 class="mb-3 text-primary">


    ${allSports[i].title}
    </h3>
    </a>
    <a href="${allSports[i].url}" class="text-decoration-none">    
    <img src=${allSports[i].urlToImage} class="img-fluid mb-3">
    </a>
    <p class="text-dark">
    ${allSports[i].description}
    </p>
    </div>`;
  }
  rowContainer = `<div class="row">
  ${container}</div>`;
  document.querySelector("#pills-sports").innerHTML = rowContainer;
}
//===========business====================
allBusiness = [];
let businessReq = new XMLHttpRequest();
businessReq.open(
  "GET",
  "https://newsapi.org/v2/top-headlines?country=eg&category=business&apiKey=6fff869649a341c7935d43f071a2a5d6"
);
businessReq.send();
console.log(businessReq.readyState);
businessReq.addEventListener("readystatechange", () => {
  if (businessReq.readyState === 4) {
    allBusiness = JSON.parse(businessReq.response).articles;
    renderBusiness();
  }
});
function renderBusiness() {
  let container = ``;
  let rowContainer = `<div class="row">
  ${container}</div>`;

  for (let i = 0; i < allBusiness.length; i++) {
    container += `<div class="col-md-3">
    <a href="${allBusiness[i].url}" class="text-decoration-none">   
     <h3 class="mb-3 text-primary">


    ${allBusiness[i].title}
    </h3>
    </a>
    <a href="${allBusiness[i].url}" class="text-decoration-none">    
    <img src=${allBusiness[i].urlToImage} class="img-fluid mb-3">
    </a>
    <p class="text-dark">
    ${allBusiness[i].description}
    </p>
    </div>`;
  }
  rowContainer = `<div class="row">
  ${container}</div>`;
  document.querySelector("#pills-business").innerHTML = rowContainer;
}
//============= Entertainment ===========
allEntertainment = [];
let entertainmentReq = new XMLHttpRequest();
entertainmentReq.open(
  "GET",
  "https://newsapi.org/v2/top-headlines?country=eg&category=entertainment&apiKey=6fff869649a341c7935d43f071a2a5d6"
);
entertainmentReq.send();
console.log(entertainmentReq.readyState);
entertainmentReq.addEventListener("readystatechange", () => {
  if (entertainmentReq.readyState === 4) {
    allEntertainment = JSON.parse(entertainmentReq.response).articles;
    renderEntertainment();
  }
});
function renderEntertainment() {
  let container = ``;
  let rowContainer = `<div class="row">
  ${container}</div>`;

  for (let i = 0; i < allEntertainment.length; i++) {
    container += `<div class="col-md-3">
    <a href="${allEntertainment[i].url}" class="text-decoration-none">   
     <h3 class="mb-3 text-primary">


    ${allEntertainment[i].title}
    </h3>
    </a>
    <a href="${allEntertainment[i].url}" class="text-decoration-none">    
    <img src=${allEntertainment[i].urlToImage} class="img-fluid mb-3">
    </a>
    <p class="text-dark">
    ${allEntertainment[i].description}
    </p>
    </div>`;
  }
  rowContainer = `<div class="row">
  ${container}</div>`;
  document.querySelector("#pills-entertainment").innerHTML = rowContainer;
}
// ========== Health ==========
allHealth = [];
let healthReq = new XMLHttpRequest();
healthReq.open(
  "GET",
  "https://newsapi.org/v2/top-headlines?country=eg&category=health&apiKey=6fff869649a341c7935d43f071a2a5d6"
);
healthReq.send();
console.log(healthReq.readyState);
healthReq.addEventListener("readystatechange", () => {
  if (healthReq.readyState === 4) {
    allHealth = JSON.parse(healthReq.response).articles;
    renderHealth();
  }
});
function renderHealth() {
  let container = ``;
  let rowContainer = `<div class="row">
  ${container}</div>`;

  for (let i = 0; i < allHealth.length; i++) {
    container += `<div class="col-md-3">
    <a href="${allHealth[i].url}" class="text-decoration-none">   
     <h3 class="mb-3 text-primary">


    ${allHealth[i].title}
    </h3>
    </a>
    <a href="${allHealth[i].url}" class="text-decoration-none">    
    <img src=${allHealth[i].urlToImage} class="img-fluid mb-3">
    </a>
    <p class="text-dark">
    ${allHealth[i].description}
    </p>
    </div>`;
  }
  rowContainer = `<div class="row">
  ${container}</div>`;
  document.querySelector("#pills-health").innerHTML = rowContainer;
}
// ============ science =========
allScience = [];
let scienceReq = new XMLHttpRequest();
scienceReq.open(
  "GET",
  "https://newsapi.org/v2/top-headlines?country=eg&category=science&apiKey=6fff869649a341c7935d43f071a2a5d6"
);
scienceReq.send();
console.log(scienceReq.readyState);
scienceReq.addEventListener("readystatechange", () => {
  if (scienceReq.readyState === 4) {
    allScience = JSON.parse(scienceReq.response).articles;
    renderscience();
  }
});
function renderscience() {
  let container = ``;
  let rowContainer = `<div class="row">
  ${container}</div>`;

  for (let i = 0; i < allScience.length; i++) {
    container += `<div class="col-md-3">
    <a href="${allScience[i].url}" class="text-decoration-none">   
     <h3 class="mb-3 text-primary">


    ${allScience[i].title}
    </h3>
    </a>
    <a href="${allScience[i].url}" class="text-decoration-none">    
    <img src=${allScience[i].urlToImage} class="img-fluid mb-3">
    </a>
    <p class="text-dark">
    ${allScience[i].description}
    </p>
    </div>`;
  }
  rowContainer = `<div class="row">
  ${container}</div>`;
  document.querySelector("#pills-science").innerHTML = rowContainer;
}
// ================== technology ===========
allTechnology = [];
let technologyReq = new XMLHttpRequest();
technologyReq.open(
  "GET",
  "https://newsapi.org/v2/top-headlines?country=eg&category=technology&apiKey=6fff869649a341c7935d43f071a2a5d6"
);
technologyReq.send();
console.log(technologyReq.readyState);
technologyReq.addEventListener("readystatechange", () => {
  if (technologyReq.readyState === 4) {
    allTechnology = JSON.parse(technologyReq.response).articles;
    rendertechnology();
  }
});
function rendertechnology() {
  let container = ``;
  let rowContainer = `<div class="row">
  ${container}</div>`;

  for (let i = 0; i < allTechnology.length; i++) {
    container += `<div class="col-md-3">
    <a href="${allTechnology[i].url}" class="text-decoration-none">   
     <h3 class="mb-3 text-primary">


    ${allTechnology[i].title}
    </h3>
    </a>
    <a href="${allTechnology[i].url}" class="text-decoration-none">    
    <img src=${allTechnology[i].urlToImage} class="img-fluid mb-3">
    </a>
    <p class="text-dark">
    ${allTechnology[i].description}
    </p>
    </div>`;
  }
  rowContainer = `<div class="row">
  ${container}</div>`;
  document.querySelector("#pills-technology").innerHTML = rowContainer;
}
