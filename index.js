const electron = require('electron');

const {app , BrowserWindow} = electron ;

let mainWidow;
app.on('ready', ()=>{
    mainWidow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        }
    });
    mainWidow.loadURL(`file://${__dirname}/index.html`)
})