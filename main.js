// http://qiita.com/Quramy/items/a4be32769366cfe55778
// http://electron.atom.io/docs/
// quick start, menu



const {app, BrowserWindow, Menu, ipcMain} = require("electron")

global.shareObj = {
  alarm_counter: null,
  translation: null
}

let mainWindow = null
let tray = null
function createWindow() {
  
  mainWindow = new BrowserWindow({
    // width: 370,
    // height: 114,
    width: 360, // 450 * 0.8,
    height: 155, // 194 * 0.8,
    x: 100000,
    y: 100,
    // frame: false,
    // 还是觉得有个关闭交互好一点。
    titleBarStyle: "hidden",
    useContentSize: true,
    alwaysOnTop: true,
    resizable: false,
    show: false
  });

  mainWindow.loadURL('file://'+ __dirname +'/app/index.html');

  global.shareObj.translation = require("./translation.js")(app.getLocale())

  // create menu
  require("./createMenu.js")()

  // 设置托盘图标
  require("./setTray.js")(tray, mainWindow);

  //open the devtools
  // mainWindow.webContents.openDevTools();

  ipcMain.on("toggle-setting-window", function() {
    require("./toggleSetting.js")(mainWindow)
  })

  mainWindow.once("ready-to-show", function() {
    mainWindow.show()
  })
  mainWindow.on('closed', () => {
    mainWindow = null;
  });

}

// On macOS it's common to re-create a window in the app when the
// dock icon is clicked and there are no other windows open.app.on("activate")

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});

app.on('window-all-closed', () => {
  // macOS will not quit window
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('ready', createWindow);






