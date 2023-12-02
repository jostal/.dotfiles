import icons from './icons.js'
import Gdk from 'gi://Gdk'

export function range(length, start = 1) {
  return Array.from({ length }, (_, i) => i + start)
}

export function forMonitors(widget) {
  const n = Gdk.Display.get_default().get_n_monitors()
  return range(n, 0).map(widget)
}

export function getAudioTypeIcon(icon) {
  const substitutes = [
    ['audio-headset-bluetooth', icons.audio.type.headset],
    ['audio-card-analog-usb', icons.audio.type.speaker],
    ['audio-card-analog-pci', icons.audio.type.card]
  ]

  for (const [from, to] of substitutes) {
    if (from === icon)
      return to
  }

  return icon
}
