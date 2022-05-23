import { ProxyState } from "../AppState.js";
import { Racer } from "../Models/Racer.js";

let _intervalId

function _drawRace() {
  let html = ``
  for (const r in ProxyState.racers) {
    html += ProxyState.racers[r].html
  }
  document.getElementById('racetrack').innerHTML = html
}

function _drawRacerMovement(name, distance) {
  document.getElementById(name).style.paddingLeft = `${distance}%`
}

function _moveRacers() {
  for (const r in ProxyState.racers) {
    ProxyState.racers[r].move()
    _drawRacerMovement(ProxyState.racers[r].name, ProxyState.racers[r].distance)
    if (ProxyState.racers[r].distance >= 95) {
      clearInterval(_intervalId)
      _intervalId = undefined
      console.log(ProxyState.racers[r].name + " wins!")
      document.getElementById('winner').innerText = ProxyState.racers[r].name + " wins!"
      break
    }
  }
  _drawRacerMovement()
}

export class RacersController {
  constructor() {
    _drawRace()
  }

  start() {
    _intervalId = setInterval(_moveRacers, 100)
  }

  reset() {
    if (_intervalId) {
      clearInterval(_intervalId)
    }
    document.getElementById('winner').innerText = ""
    for (const r in ProxyState.racers) {
      ProxyState.racers[r].distance = 0
      _drawRacerMovement(ProxyState.racers[r].name, 0)
    }
  }
}