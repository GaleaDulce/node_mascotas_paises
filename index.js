const express = require("express");
const dotenv = require("dotenv");

const cors = require("cors");


const mascotasRouter = require("./src/api/routes/mascotas.routes");
const paisesRouter = require("./src/api/routes/paises.routes");

const {connect}= require("./src/utils/database")

dotenv.config()

const server = express();


server.use(express.json());
server.use(express.urlencoded({ extended: true }));


connect();


server.use((req, res, next) => {
    res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });


server.use(cors({
    origin: "*",
    credentials: true
}))


server.use("/mascotas", mascotasRouter)
server.use("/paises", paisesRouter);

const PORT = process.env.PORT || 5000;


server.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})