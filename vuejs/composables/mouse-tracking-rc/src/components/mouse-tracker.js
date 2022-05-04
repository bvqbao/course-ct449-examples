export default {
	data() {
		return {
			x: 0,
			y: 0,
		};
	},
	methods: {
		update(e) {
			this.x = e.pageX;
			this.y = e.pageY;
		},
	},
	mounted() {
		window.addEventListener("mousemove", this.update);
	},
	unmounted() {
		window.removeEventListener("mousemove", this.update);
	},
	render() {
		return this.$slots.default({
			x: this.x,
			y: this.y,
		});
	},
};
