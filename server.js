const express = require('express');
const app = express();

const userRoute = require('./routes/userController');
app.use('/user',userRoute);

// Start the server
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});














// // Set EJS as the view engine
// app.set('view engine', 'ejs');

// // Specify the directory where your EJS files are stored (optional, default is './views')
// app.set('views', './');

// // Define a route
// app.get('/', (req, res) => {
//     res.render("index",{text:"1234356"}); // No need to add .ejs; Express knows it's an EJS file
// });
