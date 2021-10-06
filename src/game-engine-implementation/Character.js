export default class Character {
  health;
  level;
  hitDamage;
  maxHealth;
  isDead;

  constructor(level) {
    this.level = level;
    this.isDead = false;
  }

  attack(character) {
    character.health -= this.hitDamage;
  }

  takeAHit(damage) {
    this.health -= damage;
  }

  die() {
    this.isDead = true;
    this.health = 0;
  }
}
