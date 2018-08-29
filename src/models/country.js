const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const Country = function(){
  this.counrty = [];

}

Country.prototype.getData = function(){
  const request = new Request('https://restcountries.eu/rest/v2/all');
  request.get((data) => {
    this.country = data
    PubSub.publish('Country:country-loaded', this.country);
    // console.log(data);
  })
}

Country.prototype.bindEvents = function(){

  PubSub.subscribe('SelectView:change', (evt) => {
    const selectedIndex = evt.detail;
    this.publishCountryDetail(selectedIndex);
  });
};

Country.prototype.publishCountryDetail = function(countryIndex){
  const selectedCountry = this.country[countryIndex];
  PubSub.publish('Country:selected-country-ready', selectedCountry)
};


module.exports = Country;
