
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
  const name = $(' #zoneAnnuaire_layout > div.row.annuaire_result > div.col-md-9 > div.annuaire_result_list > div.annuaire_single.row-152 > div.single_desc > div.single_libel > a').text();
  const address = $('#zoneAnnuaire_layout > div.row.annuaire_result > div.col-md-9 > div.annuaire_result_list > div.annuaire_single.row-860 > div.single_desc > div.single_details > div > div:nth-child(2) > div').text();
  const tel = $('#zoneAnnuaire_layout > div.row.annuaire_result > div.col-md-9 > div.annuaire_result_list > div.annuaire_single.row-152 > div.single_desc > div.single_details > div > div:nth-child(3) > div').text();
  return {name, address, tel};
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