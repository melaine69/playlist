import playIcon from "../../assets/play-icon.svg"
import pauseIcon from "../../assets/pause-icon.svg"
import { useDispatch, useSelector } from "react-redux"
import { togglePlay } from "../../features/playlist"

export default function TogglePlayBtn() {
    const playlist = useSelector(state => state.playlist)
    const dispatch = useDispatch()

    return (
        <button 
        onClick={() => dispatch(togglePlay())}
        className="bg-slate-50 w-14 h-14 shadow-md rounded-full 
        flex items-center justify-center outline-none hover:bg-violet-200 ml-4">
            <img className="w-20 h-20 scale-75 hover:scale-100" src={playlist.play ? pauseIcon : playIcon} alt="play button"/>
        </button>
    )
}