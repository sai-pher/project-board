/**
 * Required External Modules
 */

import * as dotenv from "dotenv"
import express from "express";
import cors from "cors";
import helmet from "helmet";
const { auth } = require("express-openid-connect");


dotenv.config();

/**
 * App Variables
 */

 const db = require("./app/models");

 const config = {
    authRequired: false,
    auth0Logout: true,
    secret: 'mWay4clAZH-w8N6gE1GOaANhQ8tJfq5Vct-sN5LtxSi-nNa58QPF5bBR2HVKBxrT',
    baseURL: 'https://saipher-project-board-server.herokuapp.com',
    clientID: 'sPecX4gTemuaYEi5fVaOrbg3BoTJBal4',
    issuerBaseURL: 'https://dev-zfjr6qzc.us.auth0.com'
  };

const app = express();
const corsOptions: cors.CorsOptions = {
    origin: ["https://saipher-project-board-ui.herokuapp.com"]
};


/**
 *  App Configuration
 */

app.use(auth(config));
app.use(helmet());
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