import NOTES from './notes'

export default (note) => NOTES.includes(note) && note.includes('#')
