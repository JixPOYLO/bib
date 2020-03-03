import React from 'react'
import RestoCard from './RestoCard'
//import restoData from './example.json'
import restoData from './restosBoth.json'
import styles from './mystyle.module.css'; 

class MainContent extends React.Component{

    constructor(){
        super();
        this.state = {

            restoComponents : restoData.map(resto => <RestoCard resto = {{name: resto.name, address : resto.address, tel : resto.tel } }/>),
            phone : "0296232542"
        }
    }
    
    //{this.state.restoComponents} 
    render(){

        let listrestos = this.state.restoComponents
        let filteredrestos = []
        let ttel = "u"
        listrestos.forEach(r => {

            
            if (r.tel !==  "0296232542")
            {
                ttel = r

                filteredrestos.push(r)                
            }
            if (ttel = "")
            {
                ttel="na"
            }
            
        });

        //<p>Test tel {ttel} voila</p> //supposed to be in the return() but it doesnt work for the moment so I let it in the comment


        return (

            <div >
              
                <h3>Result : {filteredrestos.length} Restaurants</h3>
                <hr/>

                {filteredrestos}     


            
            </div>
                
         )
    }
    
    
}

  export default MainContent;