import {spawn} from 'node:child_process'

const spawnChildProcess = async (args) => {
  const childProcess = spawn('node', ['./src/cp/files/script.js', ...args], {
    stdio: ['pipe', 'pipe', 'inherit', 'ipc'],
  });
    
  process.stdin.pipe(childProcess.stdin);
  childProcess.stdout.pipe(process.stdout);

  childProcess.on('error', (error) => {
    console.error(`Error in child process: ${error.message}`);
  });

  childProcess.on('exit', (code, signal) => {
    console.log(`Child process exited with code ${code} and signal ${signal}`);
  });
};

spawnChildProcess([1,2,3]);
