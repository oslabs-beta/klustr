const express = require("express");
const path = require("path");

const PORT = 3000;

const app = express();

app.use(express.json());

if (process.env.NODE_ENV === "production") {
  // statically serve everything in the build folder on the route '/build'
  app.use("/dist", express.static(path.join(__dirname, "../dist")));
  // serve index.html on the route '/'
  app.get("/", (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, "../index.html"));
  });
}

app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
}); //listens on port 3000 -> http://localhost:3000/
