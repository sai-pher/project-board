const express = require("express");
var cors = require('cors')
const db = require("./app/models");

const app = express();

const corsOptions = {
    origin: "http://localhost:4200"
  };

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

db.mongoose.connect(
    db.url,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("DB connection successful"))
    .catch(err => {
        console.error("DB connection failed: ", err);
        process.exit();
    }
    );

require("./app/routes/project.routes")(app);


const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
})

server.setTimeout(50000);