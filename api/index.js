const express = require("express");
const path = require("path");
const app = express();
const port = 80
/* STATIC */
app.use(express.static(path.resolve(__dirname, '../public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/",(req,res) =>{
  res.sendFile(path.resolve(__dirname, '../public/home.html'))
});

// Pastikan ini diletakkan di bawah semua route lainnya
app.use((req, res) => {
  res.status(404).sendFile(path.resolve(__dirname, '../public/404.html'));
});

/* SERVER */
app.listen(port, () => {
console.log(`Web Online port ${port}`)
});
