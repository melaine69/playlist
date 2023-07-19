import prevIcon from "../../assets/prev-icon.svg"
import {useSelector, useDispatch} from "react-redux"
import {previousSong} from "../../features/playlist"

export default function PreviousBtn() {
    const playlist = useSelector(state => state.playlist)
    const dispatch = useDispatch()

  function handleClick() {
    if(playlist.songs) {
        const previousIndex = playlist.songs.findIndex(song => song.id 
        === playlist.currentMusicID) - 1
        dispatch(previousSong(previousIndex))
    }
  }
    return (
        <button 
        onClick={handleClick}
        className="w-9 h-9 ml-4 bg-slate-400 rounded-full 
        flex justify-center items-center  hover:bg-slate-500">

            <img src={prevIcon} className="w-5 h-5" alt="previous button"/>

        </button>
    )
}