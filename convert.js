const { spawn } = require('child_process');

const inputFile = 'input.opus';
const outputFile = 'output.wav';

const ffmpeg = spawn('ffmpeg', [
  '-i', inputFile,
  outputFile
]);

ffmpeg.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ffmpeg.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ffmpeg.on('close', (code) => {
  if (code === 0) {
    console.log(`Conversion complete! File saved as ${outputFile}`);
  } else {
    console.error(`FFmpeg exited with code ${code}`);
  }
});
