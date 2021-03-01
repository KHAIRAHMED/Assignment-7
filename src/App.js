import { useEffect, useState } from 'react';
import playerList from './Data/data.json'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Player from './Component/Player/Player';
import Card from './Component/Player/Card/Card';

function App() {
  const [playerCard,setPlayerCard]=useState([])
  const handleAddPlayer =((player)=>{
    const newPlayer = [...playerCard,player]
    setPlayerCard(newPlayer)
  })

 const [playersData,setPlayers] =useState([])
 useEffect(()=>{
   setPlayers(playerList)

 },[])
  return (

  <div>
    <header>
      {<h1 style={{color:"white",background:"black",textAlign:"center",height:"60px"}}>Bangladesh Cricket Team</h1>}
    </header>
      <div className="main-container">
        <div className="player-container">
            {playersData.map((players)=><Player players={players} handleAddPlayer={handleAddPlayer} key={players.id}></Player>)}
        </div>
        <div className="cart-container">
            <Card card={playerCard}></Card>
        </div>
      </div>
  </div>
  );
}

export default App;
