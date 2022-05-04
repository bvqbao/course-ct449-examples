const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

app.post("/api/login", (req, res) => {
	const { username } = req.body;

	const user = {
		username,
		role: "admin",
	};

	const token = jwt.sign(user, "secret");
	res.json({ token });
});

app.get("/api/test", (req, res) => {
	const token = req.headers.authorization.split(" ")[1];
	const user = jwt.verify(token, "secret");
	res.json({ user });
});

app.listen(3000, () => {
	console.log("Server started on port 3000");
});
