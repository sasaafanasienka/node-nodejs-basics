import {spawn} from 'node:child_process'

const spawnChildProcess = async (args) => {
  const childProcess = spawn('node', ['./src/cp/files/script.js', ...args], {
    stdio: ['pipe', 'pipe', 'inherit', 'ipc'], // Set up IPC channel
  });
    
      // Pipe stdin and stdout
  process.stdin.pipe(childProcess.stdin);
  childProcess.stdout.pipe(process.stdout);

  // Listen for messages from the child process
  childProcess.on('message', (message) => {
    console.log(`Child process sent message: ${message}`);
  });

  // Listen for errors
  childProcess.on('error', (error) => {
    console.error(`Error in child process: ${error.message}`);
  });

  // Listen for the exit event
  childProcess.on('exit', (code, signal) => {
    console.log(`Child process exited with code ${code} and signal ${signal}`);
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess([1,2,3]);
