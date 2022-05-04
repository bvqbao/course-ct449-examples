const { PI } = Math;

export const area = (r) => PI * r ** 2;
export const circumference = (r) => 2 * PI * r;

const obj = {
	r: 10,
	printInfo: function() {
		console.log(this.r, 
			area(this.r),
			circumference(this.r));
	}
}
export default obj;
