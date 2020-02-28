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
  const name = $('body > main > div.restaurant-details > div.container > div > div.col-xl-4.order-xl-8.col-lg-5.order-lg-7.restaurant-details__aside > div.restaurant-details__heading.d-lg-none > h2').text();
  /*const experience = $('#experience-section > ul > li:nth-child(2)').text();   
  */
  var address = $('body > main > div.restaurant-details > div.container > div > div.col-xl-4.order-xl-8.col-lg-5.order-lg-7.restaurant-details__aside > div.restaurant-details__heading.d-lg-none > ul > li:nth-child(1)').text();
  /*const price = $('body > main > div.restaurant-details > div.container > div > div.col-xl-4.order-xl-8.col-lg-5.order-lg-7.restaurant-details__aside > div.restaurant-details__heading.d-lg-none > ul > li.restaurant-details__heading-price').text();
  */
  if (address.includes('Offre') == true)
  {
    var address = $('body > main > div.restaurant-details > div.container > div > div.col-xl-4.order-xl-8.col-lg-5.order-lg-7.restaurant-details__aside > div.restaurant-details__heading.d-lg-none > ul > li:nth-child(2)').text();
  }
  var tel= $('body > main > div.restaurant-details > div.container > div > div.col-xl-8.col-lg-7 > section:nth-child(4) > div.row > div:nth-child(1) > div > div:nth-child(1) > div > div > a').attr("href");
  console.log(tel);

  if (typeof(tel) == 'undefined')
  {
    //console.log("HOLAAAAAAA");
    tel = $('body > main > div.restaurant-details > div.container > div > div.col-xl-8.col-lg-7 > section:nth-child(5) > div.row > div:nth-child(1) > div > div:nth-child(1) > div > div > a').attr("href");
  }
  if (typeof(tel) == 'undefined')
  {
    tel = '0000000000';
  }
  else{
   tel_tab = tel.split('+33 ');
   tel= 0+tel_tab[1].replace(/\s+/g, '');
  }
  

   
  return {name, address, tel };
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
