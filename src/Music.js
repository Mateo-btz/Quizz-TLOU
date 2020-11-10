import React from 'react';
import bgVideo from './videos/loadingscreen.mp4';
import music from './music/theme.mp3';
import clickSoundEffect from './sounds/littleclick.mp3';


function Music() {
function Mute() {
    var audio = document.getElementById('music');
    audio.muted = !audio.muted;

  } 
  
 




        // <i class="fas fa-volume-mute" id="mute" isMuted={true} onClick={Mute}></i>
       

        //  <i className="fas fa-volume-up" id="mute" isMuted={false} onClick={Mute}></i>
        
    


    return (
        <>
        <video autoPlay loop poster="assets/videos/loadingscreen.jpg" id="bgvid" src={bgVideo}>
        </video>
      
        <audio controls loop autoPlay muted={true} src={music} id="music"></audio>
        <audio id="littleclick" src={clickSoundEffect} type="audio/mpeg"></audio>
        <i className="fas fa-volume-up" id="mute" onClick={Mute}></i>
        </>
        
    )
    
}


export default Music;