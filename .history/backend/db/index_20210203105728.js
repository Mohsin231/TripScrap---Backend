const express = require('express'); 
const app = express(); 

const cors = require("cors")

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())



// routers needed for models/controllers




app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
  console.log(`✅ PORT: ${app.get('port')} 🌟`);
});