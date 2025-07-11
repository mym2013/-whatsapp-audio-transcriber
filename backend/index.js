const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const app = express();
const PORT = 3000;

const uploadDir = path.join(__dirname, '../uploads');
const convertedDir = path.join(__dirname, '../converted');
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);
if (!fs.existsSync(convertedDir)) fs.mkdirSync(convertedDir);

const storage = multer.diskStorage({
  destination: uploadDir,
  filename: (req, file, cb) => {
    cb(null, Date.now() + '.opus');
  }
});
const upload = multer({ storage });

app.post('/upload', upload.single('audio'), (req, res) => {
  const inputPath = req.file.path;
  const outputFilename = path.basename(inputPath, '.opus') + '.wav';
  const outputPath = path.join(convertedDir, outputFilename);

  const ffmpeg = spawn('ffmpeg', ['-i', inputPath, outputPath]);

  ffmpeg.stderr.on('data', (data) => {
    console.error(`FFmpeg error: ${data}`);
  });

  ffmpeg.on('close', (code) => {
    if (code === 0) {
      res.download(outputPath, outputFilename);
    } else {
      res.status(500).send('Error al convertir el archivo');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});

