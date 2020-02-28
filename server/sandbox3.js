/* eslint-disable no-console, no-process-exit */
const pagesmichelin = require('./pagesmichelin');
const michelin = require('./michelin');
//const querystring = require('querystring');
const fs = require('fs');


var page = [];
async function sandbox(searchLink) {
  try {
    console.log(` browsing ${searchLink} source`);

    page = await pagesmichelin.scrapeRestaurant(searchLink)   
    //console.log(page);
    console.log('done');
    //process.exit(0);


  } catch (e) {
    console.error(e);
    process.exit(1);
  }

  return(page);
}


//const [,, searchLink] = process.argv;
async function start()
 {
 const result = [];
 for(let i = 1; i<16; i++)
    {
        var searchLink = 'https://guide.michelin.com/fr/fr/restaurants/bib-gourmand/page/'+i+'';
        result.push(await sandbox(searchLink));
        console.log("ici");


    }

console.log("result length :");
console.log(result.length);
const total=[];
//console.log("hey");
/*
for(let i=0; i<result.length;i++)
{
    console.log(i);
    console.log(result[i]);
}  
*/
  return result;
}

async function first()
{
var theR=[]; // = the Result
theR = await start();
const total = [];
console.log("theR");

for (let i = 0; i<theR.length;i++)
{
    total.push(theR[i]);
}

console.log("total :");
var ListBIB = []
for (let i = 0; i<total.length;i++)
{
    //console.log("page "+ i+1);
    for(let j=0; j<total[i].linkrestolist.length; j++)
    {
     if( total[i].linkrestolist[j] != 'https://guide.michelin.com/fr/fr/subscribe' && total[i].linkrestolist[j] != 'https://guide.michelin.comundefined' )
     {
         //console.log("");
         // console.log(total[i].linkrestolist[j]);
         var tab = await precisresto(total[i].linkrestolist[j]);
         console.log(tab[0] + tab[1]+tab[2]);
         ListBIB.push(JSON.stringify({ name: tab[0], address: tab[1], tel: tab[2]}, null, 2) );
     }
     
    }
}
fs.appendFileSync('restosBib.json', "[");
fs.appendFileSync('restosBib.json', ListBIB);
fs.appendFileSync('restosBib.json', "]");

}

first();


//michelin called 
async function precisresto (searchLink) {

  

  try {
    console.log(` browsing ${searchLink} source`);

    const restaurantinfo = await michelin.scrapeRestaurant(searchLink);
    if(restaurantinfo.hasOwnProperty('tel') == false )
     {
        restaurantinfo.tel = '0000000000';
     }
    console.log(restaurantinfo.tel);
    var tab = [restaurantinfo.name, restaurantinfo.address, restaurantinfo.tel];
    console.log(tab[2]);
    
    console.log('fait');
    return tab;
    //process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}