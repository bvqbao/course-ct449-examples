const fetch = require("node-fetch");

const url = "https://jsonplaceholder.typicode.com/users";

async function loadJson(url) {
	console.log("before fetch(url)");
    const response = await fetch(url);
	console.log("after fetch(url)");
    const json = await response.json();
    console.log(json);
}

loadJson(url);
console.log("after loadJson");
