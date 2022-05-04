const app = express();

app.use(function (req, res, next) {
    console.log("Time:", Date.now());
    next();
});

app.use("/user/:id", function (req, res, next) {
    console.log("Request Type:", req.method);
    next();
});

app.get("/user/:id", function (req, res, next) {
    res.send("USER");
});

// const router = express.Router();

router.use(function (req, res, next) {
    console.log("Time:", Date.now());
    next();
});

router.use("/user/:id", function (req, res, next) {
    console.log("Request Type:", req.method);
    next();
});

router.get("/user/:id", function (req, res, next) {
    res.send("USER");
});

app.use("/", router);

const router = express.Router();

// predicate the router with a check and bail out when needed
router.use(function (req, res, next) {
    if (!req.headers["x-auth"]) return next("router");
    next();
});

router.get("/user/:id", function (req, res) {
    res.send("hello, user!");
});

// use the router and 401 anything falling through
app.use("/admin", router, function (req, res) {
    res.sendStatus(401);
});

//////////////////////////////////////////////////////

app.use(function (err, req, res, next) {
    console.error("Error found !");
    res.status(500).send("Something very wrong happened!");
});

app.post("/data", function (req, res, next) {
    try {
        console.log("This middleware handles the data route");
        // ...
    } catch (err) {
        next(err);
    }
});

////////////////////////

app.get(
    "/user/:id",
    function (req, res, next) {
        // if the user ID is 0, skip to the next route
        if (req.params.id === "0") next("route");
        // otherwise pass the control to
        // the next middleware function in this stack
        else next();
    },
    function (req, res, next) {
        // send a regular response
        res.send("regular");
    }
);

// handler for the /user/:id path, which sends a special response
app.get("/user/:id", function (req, res, next) {
    res.send("special");
});

/////////////////////////////////

function logOriginalUrl(req, res, next) {
    console.log("Request URL:", req.originalUrl);
    next();
}

function logMethod(req, res, next) {
    console.log("Request Type:", req.method);
    next();
}

const logStuff = [logOriginalUrl, logMethod];
app.get("/user/:id", logStuff, function (req, res, next) {
    res.send("User Info");
});
