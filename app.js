const express = require('express');
const cors = require("cors");
const app = express();
const interviewRouter = require('./routes/interview');

app.use(cors({
    origin:"*",
    methods:"GET",
    credentials:true
}))

app.use('/', interviewRouter);

// run only on server 
if (process.env.NODE_ENV === 'production') {
    //express serve prod asset - main.js and main.css
    app.use(express.static('client/build'))
    //express serve index.html if doesnt understand route
    const path = require('path');
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('up and running'))
