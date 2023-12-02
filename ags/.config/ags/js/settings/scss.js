import App from 'resource:///com/github/Aylur/ags/app.js'
import * as Utils from 'resource:///com/github/Aylur/ags/utils.js'

export function scssWatcher() {
  return Utils.subprocess(
    [
      'inotifywait',
      '--recursive',
      '--event', 'create,modify',
      '-m', globalThis.configDir + '/scss'
    ],
    reloadScss,
    () => print('missing dep for css hotreload: inotify-tools')
  )
}

export async function reloadScss() {
  try {
    const scss = globalThis.configDir + '/scss/style.scss'
    const css = globalThis.configDir + '/scss/style.css'
    Utils.execAsync(`sassc ${scss} ${css}`)
    App.resetCss()
    App.applyCss(css)
  } catch (err) {
    console.error(err)
  }
}
