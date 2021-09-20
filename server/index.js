const express = require("express");
const cors = require("cors");
const ctrl = require("./controller/ctrl");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/recipes", ctrl.getRecipe);
// app.delete("/api/recipes/:id", ctrl.deleteHouse);
// app.post("/api/recipes", ctrl.createHouse);
// app.put("/api/recipes/:id", ctrl.updateHouse);

SERVER_PORT = 4004;

app.listen(SERVER_PORT, () =>
	console.log(`Server listening on port ${SERVER_PORT}`)
);
