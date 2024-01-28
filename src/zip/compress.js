import {createReadStream, createWriteStream} from 'node:fs';
import path from 'node:path';
import { pipeline } from 'node:stream';
import { createGzip } from 'node:zlib';

const compress = async () => {
    const txtPath = path.join('src/zip/files/fileToCompress.txt');
    const zipPath = path.join('src/zip/files/archive.gz');

    const readStream = createReadStream(txtPath)
    const gzip = createGzip()
    const writeStream = createWriteStream(zipPath)

    readStream.on('data', (data) => {
        console.log('read', data)
        return String(data)
    })

    gzip.on('data', chunk => {
        console.log('zip', chunk)
        // return chunk
    })

    await pipeline(readStream, gzip, writeStream, (err) => {
        if (err) {
            console.error('Произошла ошибка:', err);
            process.exitCode = 1;
        }
    })
};

await compress();