import express from 'express';
import { WebMidi } from 'webmidi';

const midi = WebMidi();
const app = express();
const port= 8080;

app.get("/",(req, res) => {
    res.render("index.ejs");
});

app.listen(8080, () => {
    console.log(`Server is up and running on port ${port}`);
});
  


