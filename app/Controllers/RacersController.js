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
  document.getElementById(name + "-track").style.paddingLeft = distance + "%"
}

function _drawRacersScore() {
  for (const r in ProxyState.racers) {
    document.getElementById(ProxyState.racers[r].name + "-score").innerText = `${ProxyState.racers[r].name}: ${ProxyState.racers[r].wins}`
  }
}

function _raceWon(racerIdx) {
  clearInterval(_intervalId)
  _intervalId = undefined
  console.log(ProxyState.racers[racerIdx].name + " wins!")
  ProxyState.racers[racerIdx].wins++
  document.getElementById('winner').innerText = ProxyState.racers[racerIdx].name + " wins!"
  _drawRacersScore()
}

function _moveRacers() {
  for (const r in ProxyState.racers) {
    ProxyState.racers[r].move()
    _drawRacerMovement(ProxyState.racers[r].name, ProxyState.racers[r].distance)
    if (ProxyState.racers[r].distance >= 95) {
      _raceWon(r)
      break
    }
  }
}

export class RacersController {
  constructor() {
    _drawRace()
  }

  start() {
    _intervalId = setInterval(_moveRacers, 100)
    console.log("Race started!")
  }

  reset() {
    if (_intervalId) {
      clearInterval(_intervalId)
    }
    console.log("Race reset")
    document.getElementById('winner').innerText = ""
    for (const r in ProxyState.racers) {
      ProxyState.racers[r].distance = 0
      _drawRacerMovement(ProxyState.racers[r].name, 0)
    }
  }
}