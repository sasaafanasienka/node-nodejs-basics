import os from 'node:os'
import { Worker, isMainThread } from 'node:worker_threads';
import path from 'node:path';

const START_NUMBER = 10

const performCalculations = async () => {
    if (isMainThread) {
        const cores = os.cpus()
        const results = []

        cores.forEach((_, index) => {
            const worker = new Worker('./src/wt/worker.js', { workerData: index + START_NUMBER })
            
            worker.on('message', message => {
                results.push({
                    status: 'resolved',
                    data: message,
                })
            })
            
            worker.on('error', _ => {
                results.push({
                    status: 'error',
                    data: null,
                })
            })
            
            worker.on('exit', code => {
                if (code !== 0) {
                    results.push({
                        status: 'error',
                        data: null,
                    })
                }
                if (results.length === cores.length) {
                    console.log(results)
                }
            })
        })
    }
};

await performCalculations();