import SystemIndicators from './widgets/SystemIndicators.js'
import { App, Widget } from '../imports.js'
import CalendarButton from './widgets/CalendarButton.js'
// INSPO: https://github.com/PoSayDone/.dotfiles_wayland/blob/main/README.md

const Left = () => Widget.Box({
  className: 'bar_left',
  orientation: 'horizontal',
  hpack: 'start',
  hexpand: 'true',
  children: []
})

const Center = () => Widget.Box({
  className: 'bar_center',
  children: []
})

const SystemBar = () => Widget.Box({
  className: 'barSystem',
  orientation: 'horizontal',
  hpack: 'end',
  children: [
    SystemIndicators(),
  ]
})

const DashboardBar = () => Widget.Box({
  className: 'barDashboard',
  orientation: 'horizontal',
  hpack: 'end',
  children: [
    CalendarButton(),
    // notifications
  ]
})

export default monitor => Widget.Window({
  name: `bar${monitor}`,
  anchor: ['top', 'left', 'right'],
  exclusivity: 'exclusive',
  monitor,
  hexpand: true,
  layer: 'top',
  child: Widget.Box({
    className: 'bar',
    children: [
      Left(),
      Center(),
      SystemBar(),
      DashboardBar(),
    ]
  })
})
