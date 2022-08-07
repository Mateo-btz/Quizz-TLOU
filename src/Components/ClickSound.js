import React from 'react';
import clickSound from '../Assets/sounds/littleclick.mp3';


function playAudio() {
    return (
        <div>
            <audio autoPlay src={clickSound} id="music"></audio>
        </div>
        
    )
}

export default playAudio;