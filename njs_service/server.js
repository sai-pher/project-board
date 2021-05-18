const express = require("express");
const db = require("./app/models");

const app = express();

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
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
})