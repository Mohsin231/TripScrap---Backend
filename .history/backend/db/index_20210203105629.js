const express = require('express'); 
const app = express(); 

const cors = require("cors")

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors)



// routers needed for models/controllers
