import React from 'react'
import RestoCard from './RestoCard'
//import restoData from './example.json'
import restoData from './restosBoth.json'

class MainContent extends React.Component{

    constructor(){
        super();
        this.state = {

            restoComponents : restoData.map(resto => <RestoCard resto = {{name: resto.name, address : resto.address, tel : resto.tel } }/>)

        }
    }
    
   
    render(){
    return (

        <div className="contacts">

            {this.state.restoComponents}

            <RestoCard
                resto={{name:"Macdo", address:"6 rue Lassa", tel:"0127687890"}}
                
            />
            <RestoCard
                resto={{name:"KFC",address:"5 rue Moutero",tel:"0187843321"}}
                
            />

        </div>
            
    )
    }
    
    
}

  export default MainContent;