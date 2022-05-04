const express = require("express");
const stytch = require("stytch");
const app = express();
require("dotenv").config();

const client = new stytch.Client({
	project_id: process.env.STYTCH_PID,
	secret: process.env.STYTCH_SECRET,
	env:
		process.env.STYTCH_ENV === "test" ? stytch.envs.test : stytch.envs.live,
});

app.use(express.json());
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	next();
});

app.post("/loginorcreate", async (req, res) => {
	const { email } = req.body;

	try {
		const response = await client.magicLinks.email.loginOrCreate({ email });
		res.status(201).json({
			success: true,
			message: `${
				response.user_created ? "User Created. " : ""
			}Magic link sent to ${email}`,
		});
	} catch (err) {
		res.status(400).json({
			success: false,
			message: "Error creating/logging in user",
			err,
		});
	}
});

app.get("/auth", async (req, res) => {
	const { token } = req.query;

	try {
		const response = await client.magicLinks.authenticate(token, {
			session_duration_minutes: 5,
		});

		res.redirect(
			`http://localhost:3000/?session_token=${response.session_token}`
		);
	} catch (err) {
		res.status(400).json({
			success: false,
			message: "Error authenticating user",
			err,
		});
	}
});

app.post("/verify", async (req, res) => {
	const { session_token } = req.body;

	try {
		await client.sessions.authenticate({ session_token });

		res.status(201).json({
			success: true,
			message: "Session Verified",
		});
	} catch (err) {
		res.status(400).json({
			success: false,
			message: "Error verifying session",
			err,
		});
	}
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});
