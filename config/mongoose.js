const mongoose = require('mongoose');
const port = process.env.MONGO_URI; 
// mongoose.connect(port);

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}

mongoose.connect(port ,connectionParams)
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    })

// const db = mongoose.connection;


// db.on('error', console.error.bind(console, 'Connection Error occur in DB'));


// db.once('open', ()=> {
//     console.log('Successfully connected to the DB');
// })

// module.exports = db;