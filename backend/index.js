if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const express = require("express");
const app = express();
const mongoose = require ("mongoose");

const cors = require ("cors");
app.use(cors());

const Note = require ("./models/Note");

mongoose.connect("mongodb://localhost");

app.use(express.json());

app.get("/getNotes", async (req, res) => {
    console.log("'/getNotes (GET request made)")
    
    let notes = await Note.find({}, (err,result) => {
        if (err) {
            res.json (err)
        } else {
            res.json(result)
        }
    }).clone()
})

app.get("/note/:id", async (req,res) => {

    let note = await Note.findById(req.params.id, (err,result) => {
        if (err) {
            console.log(err)
            res.json (err)
        } else {
            console.log("---")
            console.log(result)
            console.log("---")
            res.json(result)
        }
    }).clone()

    console.log("/notes/:id (GET) request made for ")
    console.log(req.params.id)
})

app.delete("/delete/:id", async (req,res) => {
    console.log("/delete (DELETE) request made")

    await Note.findByIdAndRemove(req.params.id, (err,result) => {
        if (err) {
            console.log(err)
            res.json (err)
        } else {
            res.json (result)
        }
    }).clone()
})

app.post ("/postNote", async (req,res) => {
    console.log("'/postNote (POST request made)")
    console.log(req.body)
    const note = {
        body: req.body.body,
        head: req.body.head
    };
    const newNote = new Note (note);
    await newNote.save((err,result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(newNote)
        }
    });
}) 

app.put ("/putNote", async (req,res) => {
    console.log("'/putNote (put request made)")
    console.log(req.body)

    var newNote = await Note.findById(req.body.id)

    newNote.head = req.body.head
    newNote.body = req.body.body

    await newNote.save((err,result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(newNote)
        }
    });
}) 

app.listen(3001, () => {
    console.log("server running on 3001");
})