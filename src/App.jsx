import Playlist from "./components/Playlist"
import Player from "./components/Player"
import PlayerPannel from "./layouts/Player/PlayerPannel"

function App() {
  return <>
  <div className="min-h-screen bg-indigo-400 pt-20 px-4">
    <div className="max-w-xl mx-auto">
      <Player/>
      <h1 className="text-violet-200 text-2xl tracking-widest">Playlist - Musique Classique</h1>
   <Playlist/>
    </div>
  </div>
  <PlayerPannel />
  </>
}

export default App
