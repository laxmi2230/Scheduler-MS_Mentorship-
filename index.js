const express = require('express');
const connectDB = require('./DB/Connection');
var cors = require('cors')



const app = express();

app.use(cors());


connectDB();
app.use(express.json({ extended: false}));
//app.use(express.json({ extended: false})); 
app.use('/api/usermodel', require('./Api/User'));
app.use('/api/usermodel1', require('./Api/User1'));
app.use('/api/usermodel2', require('./Api/User2'));
//app.use('/api/usermodel2/seats', require('./Api/User2'));
//app.use(express.json({ limit: '50mb'}));
//app.use(express.urlencoded({ limit: '50mb', extended: true }));
const port = process.env.PORT || 3001; 
app.listen(port, () => {
  console.log(`app is running on ${port}`);
});