const axios = require('axios');
const cheerio = require('cheerio');



/**
 * 
 * Parse webpage restaurant
 * @param  {String} data - html response
 * @return {Object} restaurant
 */
const parse = data => {
  const $ = cheerio.load(data);
  var linkrestolist =[];
  
  for (let i=1; i<22; i++)
  {
    var linkresto = $('body > main > section.section-main.search-results.search-listing-result > div > div > div.row.restaurant__list-row.js-toggle-result.js-geolocation > div:nth-child('+i+') > div > a').attr("href");
    //console.log(name);
    linkrestolist.push("https://guide.michelin.com" + linkresto);
  }
  return {linkrestolist};
};




/**
 * Scrape a given restaurant url
 * @param  {String}  url 
 * @return {Object} restaurant
 */


module.exports.scrapeRestaurant = async url => {
  const response = await axios(url);
  const {data, status} = response;

  if (status >= 200 && status < 300) {
    return parse(data);
  }

  console.error(status);

  return null;
};



/**
 * Get all France located Bib Gourmand restaurants
 * @return {Array} restaurants
 */

 
module.exports.get = () => {
  return [];
};
