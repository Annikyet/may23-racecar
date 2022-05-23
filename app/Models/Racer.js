export class Racer {
  constructor(name, emoji, number) {
    this.name = name
    this.emoji = emoji
    this.number = number
    this.distance = 0
    this.wins = 0
  }

  move() {
    this.distance += (Math.floor(Math.random() * 3) + 1)
    if (this.distance > 95) {
      this.distance = 95
    }
    // console.log(this.name + ': ' + this.distance)
  }

  get html() {
    return `<div class="bg-dark my-2" style="padding-left: 0%" id="${this.name}-track">${this.emoji}</div>
    <div id="${this.name}-score">${this.name}: 0</div>`
  }
}