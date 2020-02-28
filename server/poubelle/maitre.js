
const axios = require('axios');
const cheerio = require('cheerio');
const querystring = require('querystring');


/**
 * 
 * Parse webpage restaurant
 * @param  {String} data - html response
 * @return {Object} restaurant
 */



async function makePostRequest() {


  const payload = { 'page':150 , 'request_id': '65d735289ed77565f95d90c43afe5398' };

  const options = {
    'url':'https://www.maitresrestaurateurs.fr/annuaire/ajax/loadresult',
    'method': 'POST',
    'headers': {'content-type': 'application/x-www-form-urlencoded'},
    'data': querystring.stringify(payload)
  };


  const response = await axios(options);

  const {data, status} = response;

  if (status >= 200 && status < 300 )
  {
    console.log( data);
    //return []; 
  }
  console.error(status);
  return null;

  
}

const data = makePostRequest();

const parse = data => {
  const $ = cheerio.load(data);
  const name = $('#zoneAnnuaire_layout > div.row.annuaire_result > div.col-md-9 > div.annuaire_result_list > div.annuaire_single.row-490 > div.single_desc > div.single_details > div > div:nth-child(3) > div').text();  

  return {name};
};

scrapeRestaurant = async url => {
  const response = await axios(url);
  const {data, status} = response;

  if (status >= 200 && status < 300) {
    return parse(data);
  }

  console.error(status);

  return null;
};

scrapeRestaurant(data);

