import React from 'react';
//import ReactDOM from 'react-dom';

import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"



class App extends React.Component  {

    constructor(){
        super()
        this.state = {
            count:0
        }

        this.handleClick = this.handleClick.bind(this)
    }

    //i removed the 'function' keyword so below i ve to add 'this.'

    handleClick(){
        console.log("I was clicked !")
        this.setState(prevState => {
                return {
                    count: prevState.count + 1
                }
            })
    }
    render(){
        return (
            <div>
                <h1>{this.state.count}</h1>

                <Header/>
                <button onClick={this.handleClick}> Click me </button>
                <hr/>
                <MainContent/>
                <Footer/>
        
        
            </div>
        )
    }
    
}

  export default App;