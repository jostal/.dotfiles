import Topbar from './topbar/Topbar.js'
import Calendar from './calendar/Calendar.js'
import { forMonitors } from './utils.js'
import { init } from './settings/setup.js'
import { exec } from 'resource:///com/github/Aylur/ags/utils.js'

init()

const windows = () => [
  forMonitors(Topbar),
  Calendar(),
]

const scss = globalThis.configDir + '/scss/style.scss'
const css = globalThis.configDir + '/scss/style.css'

exec(`sassc ${scss} ${css}`)

export default {
  windows: windows().flat(),
  maxStreamVolume: 1,
  cacheNotificationActions: true,
  style: css,
}
