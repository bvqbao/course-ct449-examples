<script>
import vm from "@/main";

export default {
	data() {
		return {
			email: "",
			submitting: false,
		};
	},
	methods: {
		async loginOrCreate() {
			this.submitting = true;

			if (!this.email) return alert("Please enter an email address");

			const response = await fetch(
				"http://localhost:5000/loginorcreate",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						email: this.email,
					}),
				}
			).then((res) => res.json());

			if (response.success) {
				vm.$toast.success(response.message);
			} else {
				vm.$toast.error(response.message);
			}

			this.submitting = false;
		},
	},
};
</script>

<template>
	<main
		class="min-h-screen login bg-gradient-to-br from-green-500 to-cyan-400"
	>
		<section class="container px-4 pt-16 pb-4 mx-auto">
			<h1 class="mb-8 text-4xl font-black text-center uppercase">
				Password-less Login
			</h1>

			<form
				@submit.prevent="loginOrCreate"
				class="max-w-md p-4 mx-auto bg-gray-700 rounded"
			>
				<label class="block mb-2">
					<span class="block mb-2 text-gray-400"
						>Enter your email address</span
					>
					<input
						type="email"
						placeholder="e.g. baobui@gmail.com"
						v-model="email"
						:disabled="submitting"
						class="block w-full px-4 py-2 bg-gray-800 rounded disabled:opacity-50"
					/>
				</label>

				<div class="flex items-center justify-end">
					<input
						type="submit"
						value="Login"
						:disabled="submitting"
						class="inline-block px-4 py-2 text-lg font-bold text-gray-800 uppercase rounded cursor-pointer bg-emerald-400 disabled:opacity-50"
					/>
				</div>
			</form>
		</section>
	</main>
</template>
