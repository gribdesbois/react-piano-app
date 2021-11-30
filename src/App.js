import React, { useEffect } from 'react'
import './App.css'
import AudioPLayer from './AudioPlayer'
import Piano from './Piano'

function App() {
  const audioPlayer = AudioPLayer()

  useEffect(() => {
    audioPlayer.setInstrument('acoustic_grand_piano')
  }, [])

  const handleClick = () => {
    audioPlayer.playNote('C4')
  }

  return (
    <div className="App">
      <Piano />
    </div>
  )
}

export default App
