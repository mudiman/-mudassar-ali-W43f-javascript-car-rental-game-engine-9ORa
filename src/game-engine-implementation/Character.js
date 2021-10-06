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
    }

    takeAHit(damage) {
    }

    die() {
    }
}