 const express = require("express")

 const app = express();

const notes = require("./data/notes");

 const dotenv = require('dotenv')
 app.get('/', (req,res) => {
    res.send("God is working !")
    
 })

   dotenv.config();
 app.get('/api/notes', (req,res) => {
    res.json(notes)
    
 })

 app.get('/api/notes/:id', (req, res) => {
    const note = notes.find((n) => n._id === req.param.id);
   
  res.json(note);
    
    
 })

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`note server is running on ${PORT}`));