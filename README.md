# Notetaker


This application allows the users to create, save, and delete notes. The application has a front-end user interface and the application uses express.js in the backend to save and retrieve note data from a JSON file. The application has following HTML routes:

    * GET `/notes` - returns the `notes.html` file.
    * GET `*` - return the `index.html` file

  * The application has following API routes:

    * GET `/api/notes` - Reads the `db.json` file and return all saved notes as JSON.
    * POST `/api/notes` - Receives  new note data and saves it to  the `db.json` file, and then return the new note to the client.
    * DELETE `/api/notes/:id` - Receives note id as a query parameter, which is then used to retrieve and delete the spefici note 

The application has db.json file that is used to save and retrieve notes data. 
## Application Features


The user accesses the application deployed on Heroku. The application has following features:
* The user begins by clicking on the "Get Started" button to begin adding a new note. 
* Once on the notes pave the user can add the note title and text and click on the save button
* The user can click on any of the existing notes to retrieve the nformation
* The user can click the delete icon next to the note to delete a specific note. 
## Mock-up


## Application URL

* The URL of the deployed application in Heroku [Code_Quiz]( https://asheth22.github.io/Calendar_App/)

