export default {
	data() {
		return {
			x: 0,
			y: 0,
		};
	},
	methods: {
		update(event) {
			this.x = event.pageX;
			this.y = event.pageY;
		},
	},

	mounted() {
		window.addEventListener("mousemove", this.update);
	},

	unmounted() {
		window.removeEventListener("mousemove", this.update);
	},
};
