import Indicator from '../../services/onScreenIndicator.js'
import icons from '../../icons.js'
import HoverableButton from '../../misc/HoverableButton.js'
import { Widget, Audio, App } from '../../imports.js'

const AudioIndicator = () => Widget.Icon({
  connections: [[Audio, icon => {
    if (!Audio.speaker)
      return;

    const { muted, low, medium, high, overamplified } = icons.audio.volume;
    if (Audio.speaker.is_muted)
      return icon.icon = muted;

    const cons = [[101, overamplified], [67, high], [34, medium], [1, low], [0, muted]];
    icon.icon = cons.find(([n]) => n <= Audio.speaker.volume * 100)?.[1] || '';
  }, 'speaker-changed']]
})

export default () => HoverableButton({
  className: 'bar_controlcenter_container',
  onClicked: () => App.toggleWindow('controlcenter'),
  onScrollUp: () => {
    Audio.speaker.volume += 0.02
    Indicator.speaker()
  },
  onScrollDown: () => {
    Audio.speaker.volume -= 0.02
    Indicator.speaker()
  },
  child: Widget.Box({
    className: 'bar_controlcenter',
    children: [
      AudioIndicator()
    ]
  }),
  connections: [[App, (btn, win, visible) => {
    btn.toggleClassName('active', win === 'controlcenter' && visible)
  }]]
})
