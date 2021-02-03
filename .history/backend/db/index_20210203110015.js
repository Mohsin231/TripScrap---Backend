const express = require('express'); 
const app = express(); 

const cors = require("cors")

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())


// Use middleware to parse the data in the HTTP request body and add
// a property of body to the request object containing a POJO with with data.
// routers needed for models/controllers

app.get("/", (req,res) => {
    res.send("worki")
})


app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
  console.log(`✅ PORT: ${app.get('port')} 🌟`);
});