import React from 'react'
import RestoCard from './RestoCard'
//import restoData from './example.json'
import restoData from './restosBoth.json'

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

        return (

            <div className="contacts">
              
                <p>Result : {filteredrestos.length} Restaurants</p>
                <p>Test tel {ttel} voila</p>
                <hr/>

                {filteredrestos}     


            
            </div>
                
         )
    }
    
    
}

  export default MainContent;