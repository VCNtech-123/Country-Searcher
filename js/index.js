
//DOM Buttons and Texts
const headerSection = document.querySelector('.header_section');
const countryNumber = document.getElementById('country_number');
const startingWord = document.getElementById('starting_word');
const searchAny = document.getElementById('search_any');
const filter = document.getElementById('filter');
const searchBar = document.getElementById('search_bar');
const searchButton = document.getElementById('search_button');
const allCountries = document.querySelector('.all_countries');
let searchMode = '';
let currentMatches = [];

//Update
const container = document.createElement('p');
  headerSection.appendChild(container);

  const letter = document.getElementById('letter')
  const foundCountry = document.getElementById('found_country');
  container.style.color = 'white';
  container.style.fontWeight = 'bold';
  container.style.fontFamily = 'sans-serif';
  container.style.textAlign = 'center';
  container.style.margin = '0px';
  container.style.fontSize = '20px';
  container.style.display = 'none';

  

//Functions
const countAllCountries = () => {
  countryNumber.textContent = 'Total number of countries: ' + countries.length; 
}

const showAllCountries = (country) => {
  for (let i = 0; i < country.length; i++) {
    showedCountry = document.createElement('p');
    showedCountry.textContent = country[i];
    showedCountry.style.backgroundImage = 'linear-gradient(rgba(81, 107, 235, 0.7), rgba(81, 107, 235, 0.7)), url(images/map_image.jpg)';
    showedCountry.style.backgroundPosition = 'center';
    showedCountry.style.backgroundPosition = 'cover';
    showedCountry.style.height = '120px';
    showedCountry.style.width = '120px';
    showedCountry.style.borderRadius = '10px';

    showedCountry.style.color = 'white';
    showedCountry.style.fontWeight = 'bold';
    showedCountry.style.fontFamily = 'sans-serif';
    showedCountry.style.textAlign = 'center';
    showedCountry.style.margin = '0px';
    showedCountry.style.fontSize = '20px';

    showedCountry.style.display = 'flex';
    showedCountry.style.justifyContent = 'center';
    showedCountry.style.alignItems = 'center';
    showedCountry.style.padding = '20px';

    allCountries.appendChild(showedCountry);
  }
}

//Event Listeners
//Search Buttons
startingWord.addEventListener('click', () => {
  searchMode = 'start';
  startingWord.style.backgroundColor = 'rgba(88, 28, 184)';
})

searchAny.addEventListener('click', () => {
  searchMode = 'any';
  searchAny.style.backgroundColor = 'rgba(88, 28, 184)';
})

searchAny.addEventListener('blur', () => {
  searchAny.style.backgroundColor = 'rgba(137, 91, 230)';
}) 

startingWord.addEventListener('blur', () => {
  searchMode = 'start';
  startingWord.style.backgroundColor = 'rgba(137, 91, 230)';
})

//Search Bar
searchBar.addEventListener('input', (e) => {
  allCountries.innerHTML = '';
  const search = e.target.value.toLowerCase();

  if (searchMode === 'start') {
    currentMatches = countries.filter(e => {
    return e.toLowerCase().startsWith(search)
    });
    startingWord.style.backgroundColor = 'rgba(88, 28, 184)';
  }
  else {
    currentMatches = countries.filter(e => {
    return e.toLowerCase().includes(search)
  })
    searchAny.style.backgroundColor = 'rgba(88, 28, 184)';
  }

  if (search.length > 0) {
    container.style.display = 'block';
  
    let modeText = searchMode === 'any' ? 'containing' : 'starting with';
    
    container.innerHTML = `Countries ${modeText} <span style="color:red">${search}</span> are <span style="color:lightgreen">${currentMatches.length}</span>`;
  } else {
    container.style.display = 'none'; // Hide it if search is empty
  }

  showAllCountries(currentMatches);

})

searchBar.addEventListener('click', () => {
  if (searchMode === 'any') {
    searchAny.style.backgroundColor = 'rgba(88, 28, 184)';
    startingWord.style.backgroundColor = 'rgba(137, 91, 230)';
  }
  else {
    startingWord.style.backgroundColor = 'rgba(88, 28, 184)'
    searchAny.style.backgroundColor = 'rgba(137, 91, 230)';
  }
})

searchBar.addEventListener('blur', () => {
    startingWord.style.backgroundColor = 'rgba(137, 91, 230)';
    searchAny.style.backgroundColor = 'rgba(137, 91, 230)';
})

//A-Z Button
  filter.addEventListener('click', () => {

    if (currentMatches.length === 0 && searchBar.value === "") {
      currentMatches = [...countries]; 
    }

    allCountries.innerHTML = ''; 
    currentMatches.reverse();
    showAllCountries(currentMatches);
    
    filter.style.backgroundColor = 'rgba(88, 28, 184)';
})

filter.addEventListener('blur', () => {
  filter.style.backgroundColor = 'rgba(137, 91, 230)';
})


//Implementation
countAllCountries();
showAllCountries(countries);
