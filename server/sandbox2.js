/* eslint-disable no-console, no-process-exit */
//const maitre = require('./maitre');

const test = require('./test');
const fs = require('fs');


async function sandbox2(page) {
  try {
    console.log(`jsuis a la page ` + page );

    const restaurant = await test.scrapeRestaurant(page);

    console.log(restaurant);
    //console.log('done ouioui');
    //process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

const [,, searchLink] = process.argv;

const nbdepages = 154;

async function first()
{
  for (let i = 0; i< nbdepages+1 ; i++)
  {
    await sandbox2(i);
  }
}

async function final()
{
  
    await first();
  
}

fs.appendFileSync('restosMaitre.json', "[");
final();
fs.appendFileSync('restosMaitre.json', "]");
