import { App } from '../../imports.js'
import PanelButton from '../../misc/PanelButton.js'
import Clock from './Clock.js'

export default ({
  format = '%H:%M',
  interval = 1000,
  ...props
} = {}) => PanelButton({
  cursor: 'pointer',
  onClicked: () => App.toggleWindow('calendar'),
  className: 'btn clockBtn',
  content: Clock({ format }),
  ...props,
})
