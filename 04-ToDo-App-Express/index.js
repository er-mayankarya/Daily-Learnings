const express = require('express');
const app = express();

app.use(express.json());

const todos = [];

// Add Todo
app.post('/add' , (req, res) => {
    
});

// Update ToDO
app.put('/update' , (req, res) => {    

});

// Read ToDo
app.get('/read' , (req, res) => {

});

// Delete ToDo
app.delete('/delete' , (req , res) => {

});

app.listen(3000);