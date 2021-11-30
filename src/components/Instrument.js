import React, { Fragment, useEffect, useState } from 'react'
import InstrumentAudio from './InstrumentAudio'
import getNotesBetween from './getNotesBetween'
import isAccidentalNote from './isAccidentalNote'
import { getKeyboardShortcutsForNote } from './getkeyboardShortcutsForNote'

const isRegularKey = (event) => !event.ctrlKey && !event.metaKey && !event.shiftKey;

function Instrument({
  instrumentName, startNote, endNote, renderPianoKey, keyboardMap,
}) {
  const notes = getNotesBetween(startNote, endNote)

  const [state, setState] = useState({
    notesPlaying: [],
  })

  const onPlayNoteStart = (note) => {
    setState({ ...state, notesPlaying: [...state.notesPlaying, note] })
  }

  const onPlayNoteEnd = (note) => {
    setState({
      ...state,
      notesPlaying: state.notesPlaying.filter(
        (notePlaying) => notePlaying !== note,
      ),
    })
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)
  }, [])

  const getNoteFromKeyboardKey = (keyboardKey) => keyboardMap[keyboardKey.toUpperCase()]

  const handleKeyDown = ($event) => {
    if (isRegularKey($event) && !$event.repeat) {
      const note = getNoteFromKeyboardKey($event.key)
      if (note) {
        setState({
          ...state,
          notesPlaying: [...state.notesPlaying, note],
        })
      }
    }
  }

  const handleKeyUp = ($event) => {
    if (isRegularKey($event) && !$event.repeat) {
      const note = getNoteFromKeyboardKey($event.key)
      if (note) {
        setState({
          ...state,
          notesPlaying: state.notesPlaying.filter(
            (notePlaying) => notePlaying !== note,
          ),
        })
      }
    }
  }

  return (
    <>
      {
        notes.map((note) => (
          <Fragment key={note}>
            {
              renderPianoKey({
                note,
                isAccidentalNote: isAccidentalNote(note),
                isNotePlaying: state.notesPlaying.includes(note),
                startPlayingNote: () => onPlayNoteStart(note),
                stopPlayingNote: () => onPlayNoteEnd(note),
                keyboardShortcut: getKeyboardShortcutsForNote(keyboardMap, note),
              })
            }
          </Fragment>
        ))
      }
      <InstrumentAudio
        instrumentName={instrumentName}
        notes={state.notesPlaying}
      />
    </>
  )
}

export default Instrument
