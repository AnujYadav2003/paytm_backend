// const express = require("express");
// const mainRouter = require("./routes/index");

// const cors = require("cors");
// const bodyparser = require('body-parser');

// const app = express();

// app.use(cors());
// app.use(bodyparser.json());


// app.use("/api/v1", mainRouter);


// app.listen(3000, () => {
//     console.log("App is Working fine on 3000");
// });

const express = require("express");
const mainRouter = require('./routes/index');

const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json()); 


app.use("/api/v1", mainRouter);



app.listen(3000, () => {
    console.log("listening on port 3000");
});