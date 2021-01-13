const express = require("express");

const app = express();

const PORT = 8080;

// To add a route, just to the following:
// app.get() takes 2 arguments, the path, and a callback(req, res)
app.get("/", (req, res) => {

});

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost${PORT}`);
})