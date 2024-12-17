const notes = JSON.parse(localStorage.getItem('notes')) || [];

document.getElementById('addNoteBtn').addEventListener('click', addNote);

function addNote() {
    const title = document.getElementById('noteTitle').value.trim();
    const content = document.getElementById('noteContent').value.trim();

    if (title && content) {
        notes.push({ title, content });
        saveNotes();
        renderNotes();
        document.getElementById('noteTitle').value = '';
        document.getElementById('noteContent').value = '';
    }
}

function deleteNote(index) {
    notes.splice(index, 1);
    saveNotes();
    renderNotes();
}

function saveNotes() {
    localStorage.setItem('notes', JSON.stringify(notes));
}

function renderNotes() {
    const container = document.getElementById('notesContainer');
    container.innerHTML = '';
    notes.forEach((note, index) => {
        const noteDiv = document.createElement('div');
        noteDiv.classList.add('note');
        noteDiv.innerHTML = `
            <h3>${note.title}</h3>
            <p>${note.content}</p>
            <button onclick="deleteNote(${index})">Delete</button>
        `;
        container.appendChild(noteDiv);
    });
}

renderNotes();
