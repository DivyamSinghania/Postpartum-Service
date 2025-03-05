const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, "public")));

// Routes to serve different webpages
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "a.html"));
});

app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "a2.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "login3.html"));
});

app.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "signup.html"));
});

app.get("/physical-therapy", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "physical-therapy.html"));
  });

app.get("/postpartum-support", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "postpartumsupport.html"));
  });
app.get("/nutrition", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "nutrition-advice.html"));
  });

app.get("/newborn", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "newborn.html"));
  });
// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
