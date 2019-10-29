import React from 'react';
import './styles.css';

const Card=(props)=>{
    return <div className="col-3 card-component" onClick={props.onClick}><img src={props.image}></img></div>
}

export default Card;