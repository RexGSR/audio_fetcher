const express = require('express');
const app = express();
const rateLimit = require('express-rate-limit');

//accepting json
app.use(express.json())  

app.use(rateLimit({
    windowMs: 12 * 60 * 60 * 1000,
    max:5,
    message: JSON.stringify('You exceeded 100 request per 12 hour limit'),
    headers:true
}))

app.use( (req,res, next ) => {
    console.log(`request ip : ${req.ip}`)
    next()
})

//routes                 
const videoRoutes = require('./routes/videoRoutes')
app.use('/api/v1/videos', videoRoutes);


//setting server to listen on a specific port     
const PORT = process.env.PORT || 4000
app.listen(PORT, console.log(`server at http://localhost:${PORT}`))

