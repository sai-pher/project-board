/**
 * Required External Modules
 */

import * as dotenv from "dotenv"
import express from "express";
import cors from "cors";
import helmet from "helmet";

const db = require("./app/models");

dotenv.config();

/**
 * App Variables
 */

const app = express();
const corsOptions = {
    origin: "https://saipher-project-board-ui.herokuapp.com"
};


/**
 *  App Configuration
 */

app.use(helmet())
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
    .catch((err: any) => {
        console.error("DB connection failed: ", err);
        process.exit();
    }
    );

require("./app/routes/project.routes")(app);


/**
 * Server Activation
 */

const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
})

server.setTimeout(50000);