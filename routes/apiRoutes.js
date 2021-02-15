const notes = require("../db/db.json"); 
const { v4: uuidv4 } = require('uuid');
const fs =require("fs")
module.exports = function (app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------
    
    app.get("/api/notes", function (req, res) {
        
        const notesGet = fs.readFileSync('./db/db.json', 'utf8')
        res.json(JSON.parse(notesGet));
    });  
    
    app.delete("/api/notes/:id", function (req, res) {
        let id = req.params.id;

        const notesDel = JSON.parse(fs.readFileSync("./db/db.json", 'utf8'))
        const newDelArr = notesDel.filter((note) => note.id !== id)
        console.log(newDelArr);
        fs.writeFileSync("./db/db.json", JSON.stringify(newDelArr))
        res.json({ ok: true });
    });  
  
    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
    // (ex. User fills out a reservation request... this data is then sent to the server...
    // Then the server saves the data to the tableData array)
    // ---------------------------------------------------------------------------
  
    app.post("/api/notes", function(req, res) {
      // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
      // It will do this by sending out the value "true" have a table
      // req.body is available since we're using the body parsing middleware
        console.log("NOTE HERE", req.body)
        const newNote = {
            title: req.body.title,
            text: req.body.text,
            id: uuidv4()
        }

        const dbFile = JSON.parse(fs.readFileSync("./db/db.json", 'utf8'))
        dbFile.push(newNote);
        console.log(dbFile)
        fs.writeFileSync("./db/db.json", JSON.stringify(dbFile))
        res.json(newNote)


    });
  
    // ---------------------------------------------------------------------------
    // I added this below code so you could clear out the table while working with the functionality.
    // Don"t worry about it!
  
    app.post("/api/clear", function(req, res) {
      // Empty out the arrays of data
      tableData.length = 0;
      waitListData.length = 0;
  
      res.json({ ok: true });
    });
  };