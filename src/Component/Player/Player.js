import React from 'react';
import Button from 'react-bootstrap/Button';
import "./Player.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faPhone,faDollarSign,faCheckSquare} from '@fortawesome/free-solid-svg-icons'


const Player = (props) => {
    const {players,handleAddPlayer}= props
    const {img,name,email,phone,salery} = players
    
    return (
       <div className="player">
            <div className="player-img">
                <img style={{height:"200px",width:"200px"}} src={img} alt=""/>
            </div>
           <div className="player-details">
                <h4>Name : {name}</h4>
                <p> <FontAwesomeIcon icon={faPhone}/> {phone}</p>
                <p><FontAwesomeIcon icon={faDollarSign}/> {salery}</p>
                <p><FontAwesomeIcon icon={faEnvelope}/> {email}</p>
                <Button variant="danger" onClick={(()=>handleAddPlayer(players))}><FontAwesomeIcon icon={faCheckSquare}/> Select Player</Button>{' '}
                
            </div>
       </div>
    );
};

export default Player;