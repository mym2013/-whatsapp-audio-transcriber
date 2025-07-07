🎯 Workflow Document: Converting and Transcribing WhatsApp Audio with FFmpeg and Whisper
Date Completed:
(add your date here)
________________________________________
✅ 1. Convert WhatsApp OPUS Audio to WAV
Tools Used:
•	FFmpeg (already installed on system)
Steps:
1.	Created a clean folder:
makefile
CopiarEditar
C:\Users\torre\OneDrive\Escritorio\wassap noice
2.	Placed input.opus in that folder.
3.	Created convert.js with this content:
javascript
CopiarEditar
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
4.	Ran the conversion command:
nginx
CopiarEditar
node convert.js
5.	Confirmed output.wav was created successfully.
________________________________________
✅ 2. Install Whisper Transcription Tool
Tools Used:
•	Python 3.13
•	pip
Steps:
1.	Installed Whisper:
nginx
CopiarEditar
pip install openai-whisper
2.	Confirmed all dependencies installed:
o	torch
o	tiktoken
o	numba
o	numpy
o	etc.
________________________________________
✅ 3. Transcribe the WAV Audio
Steps:
1.	In terminal, ran:
lua
CopiarEditar
whisper output.wav --language English
2.	Waited while Whisper:
o	Downloaded the model (~1.5 GB)
o	Processed the audio
3.	Verified:
o	Transcription printed in terminal
o	File output.txt created in the same folder
________________________________________
📂 Resulting Files
•	output.wav: Converted audio
•	output.txt: Transcript
________________________________________
✅ Notes:
•	If the audio is in Spanish or another language, use:
lua
CopiarEditar
whisper output.wav --language Spanish
•	You can change the model to a smaller one (faster) with:
css
CopiarEditar
--model tiny
________________________________________
🎁 Next Steps (Optional)
•	Summarize or translate the transcript
•	Build into larger automation
•	Use other audio files (WhatsApp or other formats)
________________________________________
✅ Done.

