import { Widget } from "../imports.js";
import DateColumn from './widgets/DateColumn.js'
import PopupWindow from "../misc/PopupWindow.js";

export default () => PopupWindow({
  name: 'calendar',
  layout: 'top',
  anchor: ['top', 'right'],
  content: Widget.Box({
    className: 'calendarContainer',
    expand: true,
    children: [
      DateColumn()
    ]
  })
})

// export default monitor => Widget.Window({
//   name: 'dashboard',
//   anchor: ['top'],
//   layer: 'top',
//   monitor,
//   child: Widget.Box({
//     className: 'dashboard',
//     children: [
//       DateColumn()
//     ]
//   })
// })
