<template>
	<input
		placeholder="Enter a note"
		v-model="input"
		class="input is-small"
		type="text"
		@keydown.enter="handleEnterKey"
	/>
</template>

<script>
import { mapActions } from "pinia";
import { useNoteStore } from "@/stores/notes";

export default {
	name: "NoteInput",
	data() {
		return {
			input: "",
		};
	},
	methods: {
		...mapActions(useNoteStore, ["addNote", "addTimestamp"]),

		handleEnterKey() {
			this.addNote(this.input);
			this.addTimestamp(new Date().toLocaleString());
			this.input = "";
		},
	},
};
</script>
