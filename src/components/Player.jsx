import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fillDurationVariables, updateProgress } from "../features/progress";

export default function Player() {
  const dispatch = useDispatch()
    const playlist = useSelector(state => state.playlist) // permet d'extraire les données de playlist
    const audioRef = useRef() // pr cibler l'élement audio du DOM et stocker sa donnée

    
    useEffect(() => {
      if(playlist.songs && playlist.play) {
        audioRef.current.play()
      }
      else {
        audioRef.current.pause()
      }
    }, [playlist])

    function handleLoadedData(e) {
      if(playlist.songs) {
        dispatch(fillDurationVariables({
          currentTime: e.target.currentTime,
          totalDuration: e.target.duration,
        }))
      }
    }// quand la musique s'est chargée on injecte les données de départ

    function handleTimeUpdate(e) {
      dispatch(updateProgress(e.target.currentTime))
    }// qd la musique démarre, la progressBar démarre

    return (
        <audio 
          className="outline-none"
          id="audio-player"
          src={playlist.songs?.find(obj => obj.id === playlist.currentMusicID).url}
          // s'il y a une musique, on trouve l'url qui correspond et on l'intègre en tant que current music
          ref={audioRef}
          onLoadedData={handleLoadedData}
          onTimeUpdate={handleTimeUpdate}
        ></audio>
      )
}

// on créer un lecteur audio qui joue une chanson spécifique à partir d'une playlist. Elle utilise React Redux pour accéder aux données de la playlist depuis le store REDUX.
