import { Transform } from 'node:stream'

const transform = async () => {
    const outer = process.stdout
    const inner = process.stdin

    class Transformer extends Transform {
        _transform = (chunk, encoding, callback) => {
            try {
                const resultString = `${chunk.toString().trim().split('').reverse().join('')}`;
                callback(null, resultString);
            } catch (err) {
                callback(err);
            }
        }
    }

    const transformer = new Transformer() 
    
    inner.pipe(transformer).pipe(outer)
};

await transform();