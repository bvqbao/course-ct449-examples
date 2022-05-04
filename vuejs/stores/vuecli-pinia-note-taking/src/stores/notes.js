import { defineStore } from "pinia"

const state = () => {
	return {
		notes: [],
		timestamps: [],
	}
};

const actions = {
    addNote(payload) {
        this.notes.push(payload);
    },
    addTimestamp(payload) {
        this.timestamps.push(payload);
    },
};

const getters = {
    getNotes: (state) => state.notes,
    getTimestamps: (state) => state.timestamps,
    getNoteCount: (state) => state.notes.length,
};

export const useNotesStore = defineStore("notes", {
    state,
	actions,
	getters
});
