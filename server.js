var PORT = process.env.PORT || 80;
let express = require('express');
let app = express();
let server = app.listen(PORT)
app.use(express.static('public'));

console.log("Socket server is running. localhost:" + PORT)
