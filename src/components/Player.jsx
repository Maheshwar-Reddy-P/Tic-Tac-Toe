import { useState } from "react"

export default function Player({ initialName, symbol, isActive, onChangeName}) {
    const [ playerName, setPlayerName ] = useState(initialName);
    const [ isEditing, setIsEditing] = useState(false);
    
    function handleEditClick() {
        setIsEditing((editing => !editing));
        if (isEditing) {
            onChangeName(symbol,playerName);
        }
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    let playerNameElement = <span className="player-name">{playerName}</span>;
    let btnCaption = "Edit";

    if (isEditing) {
        playerNameElement = <input type="text" required value={playerName} onChange={handleChange}/>;
        btnCaption = "Save";
    }

    return (
        <li className={isActive ? "active" : undefined}>
            <span className="player">
              {playerNameElement}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{btnCaption}</button>
        </li>
    )
}