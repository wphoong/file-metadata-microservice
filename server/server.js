const express = require('express');
const bodyParser = require('body-parser');
const multer  = require('multer');
const upload = multer();
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("view engine", "ejs");


app.get("/", (req, res) => {
  res.render('index.html.ejs');
}); 

app.post("/uploads", upload.single('file'), (req,res,next) => {
  console.log(req.file.size);
  console.log("Successfully uploaded!");

  const file = req.file;
  
  const fileData = {
    filename: file.originalname,
    filesize: file.size
  };

  res.json(fileData);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("listening on port 3000");
});
