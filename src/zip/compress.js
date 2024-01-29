import { createReadStream, createWriteStream } from 'node:fs';
import path from 'node:path';
import { createGzip } from 'node:zlib';
// import { promisify } from 'node:util';
import { pipeline } from 'node:stream'

// const pipe = promisify(pipeline);

const compress = () => {
    const txtPath = path.join('src/zip/files/fileToCompress.txt');
    const zipPath = path.join('src/zip/files/archive.gz');

    const gzip = createGzip();
    const source = createReadStream(txtPath);
    const destination = createWriteStream(zipPath);

    pipeline(source, gzip, destination, (err) => {
      if (err) {
        console.error('An error occurred:', err);
        process.exitCode = 1;
      }
    });
};

compress();
