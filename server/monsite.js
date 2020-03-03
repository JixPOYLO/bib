//'use strict';
import * as fs from 'fs' ;


let fileBoth = fs.readFileSync('example.json');
let listBoth = JSON.parse(fileBoth);
//console.log(listBoth);

let restoData = [];

listBoth.forEach(element => 
    {
        console.log(element.tel)

        restoData.push({name: element.name, address : element.address, tel : element.tel})
    }
)

restoData.forEach(i => 
    {
        console.log("hey")
        console.log(i.name+i.address+i.tel)
    }
)

export default restoData