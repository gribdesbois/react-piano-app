import SoundFontPlayer from 'soundfont-player'
import AudioContext from './AudioContext'

const NullSoundFontPlayerNoteAudio = {
  stop() {}
}

const NullSoundFontPlayer = {
  play() {
    return NullSoundFontPlayerNoteAudio
  }
}

const AudioPlayer = () => {
  // Audio context
  const audiocontext = AudioContext && new AudioContext()

  //soundplayer
  let soundPlayer = NullSoundFontPlayer
  //setInstrument
  const Player = {
    setInstrument(intrumentName) {
      SoundFontPlayer.instrument(audiocontext, intrumentName)
        .then(soundFontPlayer => {
          soundPlayer = soundFontPlayer
        })
        .catch(error => {
          soundPlayer = NullSoundFontPlayer
        })
    },
    playNote(note) {
      soundPlayer.play(note)
    }
  }
  return Player
}
export default AudioPlayer