<template>
    <div class="notes-section">
        <div class="columns">
            <div class="column has-text-centered">
                <strong>Notes</strong>
                <div v-for="(note, index) in notes"
					:key="index"
					class="notes">
                    {{ note }}
                </div>
            </div>
            <div class="column has-text-centered">
                <strong>Timestamp</strong>
                <div v-for="(timestamp, index) in timestamps"
					:key="index"
					class="timestamps">
                    {{ timestamp }}
                </div>
            </div>
        </div>
        <note-input></note-input>
    </div>
    <note-count></note-count>
</template>

<script>
import { mapState } from "pinia";
import { useNotesStore } from "./stores/notes";
import NoteInput from "./components/NoteInput.vue";
import NoteCount from "./components/NoteCount.vue";

export default {
    name: "App",
    components: {
        NoteInput,
		NoteCount
    },
    computed: {
		...mapState(useNotesStore, {
			notes: "getNotes",
			timestamps: "getTimestamps"
		})
    },
};
</script>

<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.5.3/css/bulma.css";
@import "./assets/styles.css";
</style>
