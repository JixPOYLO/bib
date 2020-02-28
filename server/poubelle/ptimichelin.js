
const axios = require('axios');
const cheerio = require('cheerio');

const parse = data => {
  const $ = cheerio.load(data);
  const name = $('#zoneAnnuaire_layout > div.row.annuaire_result > div.col-md-9 > div.annuaire_result_list > div.annuaire_single.row-490 > div.single_desc > div.single_details > div > div:nth-child(3) > div').text();  

  return {name};
};