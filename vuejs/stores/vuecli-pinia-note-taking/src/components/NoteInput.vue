<template>
    <input
        placeholder="Enter a note"
        v-model="input"
        @keyup.enter="monitorEnterKey"
        class="input is-small"
        type="text"
    />
</template>

<script>
import { mapActions } from "pinia";
import { useNotesStore } from "../stores/notes";

export default {
    name: "NoteInput",
    data() {
        return {
            input: "",
        };
    },
    methods: {
		...mapActions(useNotesStore, ["addNote", "addTimestamp"]),
        monitorEnterKey() {
			this.addNote(this.input);
			this.addTimestamp(new Date().toLocaleString());
            this.input = "";
        },
    },
};
</script>
