const fs = require('fs');
const { string } = require('yargs');
const yargs = require('yargs')
const notes = require('./notes')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }

    },
    handler: (argv)=> notes.addNote(argv.title, argv.body)
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Title of removed note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv)=> notes.removeNoteByTitle(argv.title)
})

yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: () => console.log(notes.getNotes())
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Title of note to read',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => console.log(notes.readNoteByTitle(argv.title))
})

yargs.parse()