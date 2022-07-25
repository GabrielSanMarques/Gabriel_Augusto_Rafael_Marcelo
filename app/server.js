const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./models");
db.sequelize.sync();

var corsOptions = {
    origin: ["http://localhost:8081"],
    credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);



app.get("/", (req, res) => {
    res.json({ message: 'Backend running!' });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT}.`); 
})