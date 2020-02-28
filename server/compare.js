'use strict';

const fs = require('fs');
let fileBib = fs.readFileSync('restosBib.json');
let fileMaitre = fs.readFileSync('restosMaitre.json');


let listBib = JSON.parse(fileBib);
//console.log(listBib);

let listMaitre = JSON.parse(fileMaitre);
//console.log(listMaitre);

var listFinale = []
listBib.forEach(element => 
    {
       

        listMaitre.forEach(elem => 
            {
                if (elem.tel == element.tel)
                {
                  console.log(element.name + " possede les deux labels");
                  console.log(element);
                  listFinale.push(JSON.stringify({ name: element.name, address: element.address, tel: element.tel}, null, 2) );
                }
            })
        
    });



listFinale.forEach(i =>
    {
        console.log(i);
        
    });
console.log("finaleee " + listFinale.length);
fs.appendFileSync('restosBoth.json', "[");
fs.appendFileSync('restosBoth.json', listFinale);
fs.appendFileSync('restosBoth.json', "]");






/*listFinal.forEach(i =>
    {
        console.log(i);
    
}); 

function tri(elem)
{
    
    //var list = [];
    listMaitre.forEach(element => 
    {
        if (elem.tel == element.tel)
        {
          //list.push(element);
          console.log(element.name + "possede les deux labels");
          console.log(element);
         // return element;
        }

        else
        {
            element.tel = "0";
            return element;
        }


    }) ;
 
      
}*/
