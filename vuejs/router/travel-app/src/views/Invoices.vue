<script>
export default {
	beforeRouteLeave (to, from) {
		const answer = window.confirm(
			"Are you sure you want to leave?"
		);
		if (!answer) return false;
	}
}
</script>

<template>
	<div>
		<h1>Invoices</h1>
	</div>
</template>