
const Country = require('./models/country.js');
const SelectView = require('./views/select_view.js');
const CountryView = require('./views/country_view.js');


document.addEventListener('DOMContentLoaded', () => {
  // console.log('JavaScript Loaded');
  const country = new Country();
  country.getData();

  const selectElement = document.querySelector('#countries');
  const countriesDropdown = new SelectView(selectElement);
  countriesDropdown.bindEvents();

  const infoDiv = document.querySelector('#country')
  const counrtyInfoDisplay = new CountryView(infoDiv);
  counrtyInfoDisplay.bindEvents();


  country.bindEvents();

});
