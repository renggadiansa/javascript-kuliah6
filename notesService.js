const { nanoid } = require("nanoid");

class notesServices {
    constructor() {
        this._notes = [];
    }
    addNote({ title }) {
        const id = nanoid(16);
        const newNote = {
            id, title,
        };

        this._notes.push(newNote);
        const isSuccess = this._notes.filter((note) => note.id === id).length > 0;
        if (!isSuccess) {
            throw new Error("Catatan gagal ditambahkan");
        }
        return id;
    }

    getNotes() {
        return this._notes;
    }

    getNoteById(id) {
        const note = this._notes.filter((n) => n.id === id)[0];
        if (!note) {
            throw new Error("Catatan tidak ditemukan");
        }
        return note;
    }

    editNoteById(id) {
        const index = this._notes.findIndex((note) => note.id === id);
        if (index === -1) {
            throw new Error("Gagal memperbarui catatan. Id tidak ditemukan");
        }
        this._notes[index] = {
            title,
        }
    }

    deleteNoteById(id) {
        const index = this._notes.findIndex((note) => note.id === id);
        if (index === -1) {
            throw new Error("Catatan gagal dihapus. Id tidak ditemukan");
        }
        this._notes.splice(index, 1);
    }
}

module.exports = notesServices;