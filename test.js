import fs from 'fs';
import ytdl from 'ytdl-core';

const videoUrl = 'https://youtu.be/8ex38L8xtNI?si=FP3umiF1mx8WoAWv'; // Replace with the actual video URL

const outputFile = 'output.mp3'; // Replace with your desired output file name

// Download the video with audio and save it to a file
const writeStream = fs.createWriteStream(outputFile);

ytdl(videoUrl, { filter: 'audioonly' })
  .pipe(writeStream)
  .on('finish', () => console.log('Download complete'))
  .on('error', error => console.error('Error:', error));
