const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

// Route for homepage
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Route for contact page
app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "contact.html"));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
