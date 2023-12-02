import { Service, Utils, Audio } from '../imports.js'
import icons from '../icons.js'
import { getAudioTypeIcon } from '../utils.js'

class Indicator extends Service {
  static {
    Service.register(this, {
      'popup': ['double', 'string']
    })
  }

  _delay = 1500
  _count = 0

  popup(value, icon) {
    this.emit('popup', value, icon)
    this._count++
    Utils.timeout(this._delay, () => {
      this._count--

      if (this._count === 0)
        this.emit('popup', -1, icon)
    })
  }

  speaker() {
    this.popup(
      Audio.speaker.volume,
      getAudioTypeIcon(Audio.speaker.iconName)
    )
  }

  connect(event = 'popup', callback) {
    return super.connect(event, callback)
  }

  connectWidget(widget, callback) {
    Utils.connect(this, widget, callback, 'popup')
  }
}

export default new Indicator()
