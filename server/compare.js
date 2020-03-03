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
                var same = new Boolean(false);
                if (( elem.tel == "")   && (element.name.toUpperCase()==elem.name.toUpperCase()))
                {
                    //console.log("yeye")
                    //console.log(element.name.toUpperCase())
                    //console.log(elem.name.toUpperCase())
                    if (element.tel == "0000000000")
                    {
                        element.tel = elem.tel
                    }
                    same = Boolean(true)
                }
                if (elem.tel == element.tel)
                {
                  //console.log("ici"+same)  
                  same = Boolean(true)
                  //console.log("la"+same)  

                }    

                if (same == true )
                {
                  console.log(element.name + " possede les deux labels");
                  //console.log(element);
                  let tab = element.address.split(',');        
                         
                  listFinale.push(JSON.stringify({ name: element.name, address: tab, tel: element.tel}, null, 2) );
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
