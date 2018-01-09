'use strict'
// Electron
const electron = require('electron')
// App
const app = electron.app
// MenuBar
const Tray = electron.Tray
// ContextMenu
const Menu = electron.Menu

// Windows
const BrowserWindow = electron.BrowserWindow
let mainWindow

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// Electronの初期化完了後に実行
app.on('ready', function () {
  // メイン画面の表示。ウィンドウの幅、高さを指定できる
  mainWindow = new BrowserWindow({
    'width': 165,
    'height': 23,
    'transparent': true,
    'frame': false,
    'alwaysOnTop': true
  })
  // 位置調整
  mainWindow.setPosition(1522, -2)
  // HTML読み込み
  mainWindow.loadURL(`file://${__dirname}/index.html`)
  // クリックさせない
  mainWindow.setIgnoreMouseEvents(true)
  // メニューバー設定
  setMenuBarIcon()
  // Dockのアイコンを隠す
  app.dock.hide()

  // *********************************
  // ウィンドウが閉じられたらアプリも終了
  // *********************************
  mainWindow.on('closed', function () {
    mainWindow = null
  })
})

// メニューバーの追加
function setMenuBarIcon () {
  // メニューバー
  const appIcon = new Tray(`${__dirname}/img/clock.png`)
  // コンテキストメニュー追加
  var contextMenu = Menu.buildFromTemplate([
    {label: '終了', accelerator: 'Command+Q', click: function () { app.quit() }},
    {label: 'Dockから隠す', accelerator: 'Command+H', click: function () { app.dock.hide() }},
    {label: 'Dockに表示する', accelerator: 'Command+D', click: function () { app.dock.show() }}
  ])
  appIcon.setContextMenu(contextMenu)
  // アイコンにマウスオーバーした時の説明
  appIcon.setToolTip('Hello, I am clock.')
}
