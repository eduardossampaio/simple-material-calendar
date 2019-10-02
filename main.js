var moment = require('moment');
const {
    menubar
} = require('menubar');
const rootPath = require('electron-root-path').rootPath;

const mb = menubar({
    preloadWindow: true,
    webPreferences: {
        nodeIntegration: true,
    },
    browserWindow: {
        width: 320,
        height: 380
    },
    index: 'file:///' + rootPath + '/app/src/calendar/calendar.html'
});

mb.on('ready', () => {
    mb.window.setResizable(false);
    console.log('app is ready');
});