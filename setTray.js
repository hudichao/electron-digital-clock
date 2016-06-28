const {app, Menu, Tray} = require("electron")


function setTray(mainWindow) {
  let tray = null
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



  tray.setToolTip("This is cool")

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