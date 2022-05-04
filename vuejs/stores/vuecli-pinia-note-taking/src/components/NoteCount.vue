<template>
    <div class="note-count">
        Note count: <strong>{{ noteCount }}</strong>
    </div>
</template>

<script>
import { mapState } from "pinia";
import { useNotesStore } from "../stores/notes";

export default {
    name: "NoteCount",
    computed: {
		...mapState(useNotesStore, {
			noteCount: "getNoteCount"
		})
    },
};
</script>