import NOTES from './notes'

function getNotesBetween(startNote, endNote) {
  const startingIndex = NOTES.indexOf(startNote)
  const endingIndex = NOTES.indexOf(endNote)
  return NOTES.slice(startingIndex, endingIndex + 1)
}

export default getNotesBetween
