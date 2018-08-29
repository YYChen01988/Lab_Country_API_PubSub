const PubSub = require('../helpers/pub_sub.js');

const CountryView = function(container){
  this.container = container;
};



CountryView.prototype.bindEvents = function () {
  PubSub.subscribe('Country:country-loaded', (evt) => {
    this.render(evt.detail);
  });
}



CountryView.prototype.bindEvents = function(){
  PubSub.subscribe('Country:selected-country-ready', (evt) => {
    const country = evt.detail;
    this.render(country);
  });
};

CountryView.prototype.createImage = function(country){
  image = document.createElement('img');
  image.src = country.flag
  image.width = 400;
  image.height = 300;
  return image

}

CountryView.prototype.render = function(country){
  const countryName = document.createElement('p');
  this.container.innerHTML = '';

  countryName.textContent = ` Country: ${country.name}`;
  this.container.appendChild(countryName);

  countryRegion = document.createElement('p');
  countryRegion.textContent = `Region: '${country.region}'`;
  this.container.appendChild(countryRegion);

  const image = this.createImage(country);
  this.container.appendChild(image);
};

module.exports = CountryView;
