const { app, BrowserWindow } = require('electron');
const { exec } = require('child_process');
const path = require('path');

let mainWindow;

app.on('ready', () => {
  // Start the Spring Boot backend
  const backend = exec('java -jar backend/spring-backend-0.0.1-SNAPSHOT.jar');

  backend.stdout.on('data', console.log);
  backend.stderr.on('data', console.error);

  backend.on('close', (code) => {
    console.log(`Backend stopped with code ${code}`);
  });

  // Create the Electron window
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWindow.loadFile('index.html');
});
