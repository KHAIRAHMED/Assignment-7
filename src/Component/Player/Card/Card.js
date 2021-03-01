import React from 'react';
import './Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDollarSign} from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';

const Card = (props) => {
   const {card} = props
   let playerDetails = 0;
   let total = 0
    for (let i = 0; i < card.length; i++) {
       const element = card[i];
       playerDetails = element ;
       total = total + element.salery;    
   }
    return (
        <div className="card">
            <div>
            <h3>Select Player: {card.length}</h3>
            </div>
            <div>    
                {card.map((name)=><h6>{name.name}-<FontAwesomeIcon icon={faDollarSign}/> {name.salery}</h6>)}
            </div>
            <div>
                <Button style={{width:"300px"}} variant="warning">Total -<FontAwesomeIcon icon={faDollarSign}/> {total}</Button>{' '}
            </div>
            
        </div>
    );
};

export default Card;