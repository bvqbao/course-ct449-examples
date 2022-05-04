import { defineStore } from "pinia";

const state = () => {
	return {
		notes: [],
		timestamps: [],
	};
};

const actions = {
	addNote(note) {
		this.notes.push(note);
	},
	addTimestamp(timestamp) {
		this.timestamps.push(timestamp);
	},
};

const getters = {
	getNoteCount: (state) => state.notes.length,
};

export const useNoteStore = defineStore("myNote", {
	state,
	actions,
	getters,
});
