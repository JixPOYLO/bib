/* eslint-disable no-console, no-process-exit */
const maitre = require('./maitre');

async function sandbox2 (searchLink = 'https://www.maitresrestaurateurs.fr/annuaire/recherche') {
  try {
    console.log(`🕵️‍♀️  browsing ${searchLink} source`);

    const restaurant = await maitre.scrapeRestaurant(searchLink);

    console.log(restaurant);
    console.log('done for maitre');
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

const [,, searchLink] = process.argv;

sandbox2(searchLink);