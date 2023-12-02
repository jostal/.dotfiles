import { Audio } from "../imports.js"

export async function globals() {
  try {
    globalThis.configDir = '/home/jostal/.dotfiles/ags/.config/ags'
    globalThis.audio = Audio
  } catch (e) {
    console.error(e)
  }
}
