//Requiring Modules
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3001;

//express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require("./routes"));

//establishing mongo connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://0.0.0.0:27017/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// This will execute mongo queries.
mongoose.set("debug", true);

app.listen(PORT, () => console.log(`Listening on port:${PORT}`));
