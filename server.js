const express = require('express')
  , app = express()
  , multer = require('multer')
  , path = require('path')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, `${file.fieldname} - ${Date.now}.${path.extname(file.originalname)}`);
  }
})

const upload = multer({ dest: 'uploads/' });

app.use(express.static('public'));

app.post('/file/upload', upload.single('file'), (req, res) => {
  res.send('<h2>Upload realizado com sucesso!</h2>')
});

app.listen(3000, () => console.log('App na porta 3000'));