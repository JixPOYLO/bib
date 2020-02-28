import React from 'react';


class RestoCard extends React.Component{
    render(){
        return (
            <div className="resto-card">
                <h3>{this.props.resto.name}</h3>
                <p>address : {this.props.resto.address}</p>
                <p>tel : {this.props.resto.tel}</p>
                <hr/>
            </div>
        )
    }
}
export default RestoCard;