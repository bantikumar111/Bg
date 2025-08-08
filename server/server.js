import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectDB from './configs/mongodb.js';


//App config
const PORT = process.env.PORT || 5000;
const app = express();
await connectDB(); // Connect to MongoDB

//Initializing middlewares
app.use(express.json()); //store JSON data(chunk)
app.use(cors()); //allow to connect client and server

//Api routes
app.get('/', (req, res) => {
  res.send('API is running');
})

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});