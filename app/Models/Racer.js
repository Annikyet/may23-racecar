export class Racer {
  constructor(name, emoji, number) {
    this.name = name
    this.emoji = emoji
    this.number = number
    this.distance = 0
  }

  move() {
    this.distance += (Math.floor(Math.random() * 3) + 1)
    if (this.distance > 95) {
      this.distance = 95
    }
  }
}