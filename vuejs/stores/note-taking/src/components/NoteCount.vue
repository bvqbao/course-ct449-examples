<template>
	<div class="note-count">
		Note count: <strong>{{ noteCount }}</strong>
	</div>
</template>

<script>
import { mapState } from "pinia";
import { useNoteStore } from "@/stores/notes";

export default {
	name: "NoteCount",
	computed: {
		...mapState(useNoteStore, {
			noteCount: "getNoteCount",
		}),
	},
};
</script>
