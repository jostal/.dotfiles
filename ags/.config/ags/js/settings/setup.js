import App from 'resource:///com/github/Aylur/ags/app.js'
import { reloadScss, scssWatcher } from './scss.js'
import { globals } from './globals.js'

export function init() {
  globals()
  // scssWatcher()

  // App.connect('config-parsed', () => {
  //   reloadScss()
  // })
}
