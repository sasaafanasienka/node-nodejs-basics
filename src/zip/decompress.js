import {createReadStream, createWriteStream, read} from 'node:fs';
import path from 'node:path';
import {pipeline} from 'node:stream';
import { createGunzip } from 'node:zlib';

const decompress = async () => {
    const txtPath = path.join('src/zip/files/fileToCompress.txt');
    const zipPath = path.join('src/zip/files/archive.gz');

    const readStream = createReadStream(zipPath)

    // readStream.on('data', chunk => {
    //     console.log('Chunk:', chunk)
    // })
    const gunzip = createGunzip()

    gunzip.on('data', chunk => {
        console.log(chunk)
    })

    const writeStream = createWriteStream(zipPath)

    pipeline(readStream, gunzip, writeStream, (err) => {
        if (err) {
            console.error('Произошла ошибка:', err);
            process.exitCode = 1;
        }
    });
}

await decompress();