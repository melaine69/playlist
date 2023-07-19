import {useSelector} from "react-redux"
import formatValue from "../../utils/formatValue"

export default function Progress() {
const progressData = useSelector(state => state.progress)

function handleProgressClick(e){
    const player = document.getElementById("audio-player") // cible l'élement présent dans Player
    const rect = e.target.getBoundingClientRect() // permet de donner les valeurs de la position et dimensions de l'élément
    const width = rect.width
    const x = e.clientX - rect.left
    player.currentTime = (x / width) * progressData.totalDuration
}// pour que quand je click sur la progressBar, le chemin déjà parcouru est surligné


    return (
        <div className="max-w-[800px] mx-auto">
            <div 
            onClick={handleProgressClick}
            className="bg-slate-900 h-2 rounded cursor-pointer overflow-hidden">
            <div 
            style={{transform: `scaleX(${progressData.current / progressData.totalDuration})`}} 
            className="bg-indigo-400 origin-left h-full
             pointer-events-none"></div>
            </div>
            <div className="flex justify-between">
                <span>{formatValue(progressData.current)}</span>
                <span>{formatValue(progressData.totalDuration)}</span>
            </div>
        </div>
    )
}