import { Racer } from "./Models/Racer.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Racer').Racer[]} */
  racers = [
    new Racer('Salem', '🐈‍⬛', 13),
    new Racer('Annika', '🧙🏻‍♀️', 13),
    new Racer('Batsy', '🦇', 13),
    new Racer('Jack', '🎃', 13)
  ]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
