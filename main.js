const { menubar } = require('menubar');
const rootPath = require('electron-root-path').rootPath;

const mb = menubar({
  preloadWindow: true,
  webPreferences : {
    nodeIntegration: true,
  },
  browserWindow: {
    width: 320,
    height: 380
  },
  index:'file:///' +rootPath + '/app/src/calendar/calendar.html'
});

mb.on('ready', () => {
  console.log('app is ready');
  // console.log(mb.window);
  // mb.window.webContents.openDevTools()
  // your app code here
});