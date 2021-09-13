const fs = require('fs');
const chalk = require('chalk')
const FILE_NAME = 'notes.json'

const getNotes = () => {
    try {
        return fetchNotes()
    } catch(e){
        if(e.toString().includes('no such file or directory')){
            saveNotes([])        
        }else{
            console.error(e)
        }
    }
};

const addNote = (title, body) => {
    let notes = getNotes();
    debugger
    const duplicatedNotes = notes.filter(note => note.title === title);
    if(duplicatedNotes.length === 0){
        notes.push({title, body})
        saveNotes(notes)
    }else{
        console.error(chalk.red.bold('this note already exists'))
    }
    
}

const removeNoteByTitle = (title)=> {
    let notes = getNotes();
    const startLength = notes.length;
    notes = notes.filter(note => 
        note.title !== title
    )
    const endLength = data.length;
    if(startLength === endLength){
        console.log(chalk.red('No note found'))
    }else{
        console.log(chalk.green('Note removed with title: ', title))
        saveNotes(notes)
    }
}

const readNoteByTitle = (title) => {
    const data = getNotes()
    const matchedNotes = data.filter(note => note.title === title)
    return matchedNotes
}

const saveNotes = (notes)=> {
    fs.writeFileSync(FILE_NAME, JSON.stringify(notes))
}

const fetchNotes= ()=> {
    fs.readFileSync(FILE_NAME)
}

module.exports = {getNotes, addNote, removeNoteByTitle, readNoteByTitle}