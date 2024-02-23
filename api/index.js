const express = require("express"); 
const cors = require('cors');
const userRoute = require("./routes/userRoute.js");
const residencyRoute = require("./routes/residencyRoute")
require('dotenv').config();
require('./helpers/init_mongodb');

const app = express();

// Enable CORS for all routes


const corsOptions = {
    origin: 'http://localhost:3000', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  };
  app.use(cors(corsOptions));

app.use(express.json());  
// Routes
app.use('/api/user', userRoute)
app.use('/api/residency',residencyRoute)

// Handling error 404 (if no matching route found)
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// Error handling middleware
app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.send({
        error: {
            status: err.status || 500,
            message: err.message
        }
    });
});

app.listen(process.env.PORT || 4000, function () {
    console.log("now listening for requests on: http://localhost:4000");
});