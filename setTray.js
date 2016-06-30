const {app, Menu, Tray} = require("electron")


function setTray(tray, mainWindow) {
  console.log(__dirname + "/resource/icon.png")
  // this is ok
  tray = new Tray(__dirname + "/resource/icon.png")
  // dev ok, release not ok 
  // tray = new Tray("resource/icon.png")
  // dev ok, release not ok 
  // tray = new Tray("./resource/icon.png")
  // not ok
  // tray = new Tray("/resource/icon.png")
  // not ok
  // tray = new Tray("../resource/icon.png")
  const contextMenu = Menu.buildFromTemplate([
    {
      label: "白天模式", 
      type: "radio", 
      checked: true,
      click() {
        mainWindow.webContents.send("day-mode")
      }
    },
    {
      label: "夜晚模式", 
      type: "radio",
      click() {
        mainWindow.webContents.send("night-mode")
      }
    }
  ])


  tray.setToolTip("This is cool")
  tray.setContextMenu(contextMenu)
  // const contextMenu = Menu.buildFromTemplate([])


  // tray.setContextMenu(contextMenu)

  // tray.on("click", function() {
  //   if (mainWindow.isFocused()) {

  //   } else {
  //     mainWindow.show()
  //   }
  // })


}

module.exports = setTray