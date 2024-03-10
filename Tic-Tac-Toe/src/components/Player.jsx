import { useState } from "react"

export default function Player({ initialName, symbol, isActive }) {
   const [playerName, setPlayerName] = useState(initialName);
   const [isEditing, setIsEditing] = useState(false);
   
   function handleEditClick() {
      setIsEditing((editing)=> !editing);
   }
   
   function handleChange(event) {
      setPlayerName(event.target .value)
   }

   let editablePlayerName = isEditing ?
      <input type="text" value={playerName} onChange={handleChange}
         required /> :
      <span className="player-symbol">{playerName}</span>

   return (
      <li className={isActive ? 'active': undefined}>
         <span className="player"></span>
            {editablePlayerName}  
          <span className="player-symbol">{symbol}
         </span>
         <button onClick={handleEditClick}>
            {isEditing ? 'save' : 'Edit'}
         </button>
      </li>
   )
}