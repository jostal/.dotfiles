import { Widget } from "../../imports.js";
import Clock from "../../topbar/widgets/Clock.js";

export default () => Widget.Box({
  vertical: true,
  className: 'datemenu vertical',
  expand: true,
  children: [
    Widget.Box({
      className: 'clockBox',
      vertical: true,
      children: [
        Clock({ format: '%H:%M' }),
      ]
    }),
    Widget.Box({
      className: 'calendar',
      expand: true,
      children: [
        Widget.Calendar({
          expand: true,
        })
      ]
    })
  ]
})
