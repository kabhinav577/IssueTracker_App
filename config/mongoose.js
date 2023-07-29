const mongoose = require('mongoose');
const port = process.env.MONGO_URI || 'mongodb://localhost/IssueTracker'; 
mongoose.connect(port);

const db = mongoose.connection;


db.on('error', console.error.bind(console, 'Connection Error occur in DB'));


db.once('open', ()=> {
    console.log('Successfully connected to the DB');
})

module.exports = db;