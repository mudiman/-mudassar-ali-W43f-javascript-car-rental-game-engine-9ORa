import Character from "./Character";
import { Config } from "./GamePlay";

export default class Hero extends Character {
  experience;
  lifes;

  constructor(level) {
    super(level);
    this.maxHealth = level * Config.hero.maxHealth;
    this.hitDamage = level * Config.hero.hitDamage;
    this.health = this.maxHealth;
    this.lifes = 2;
    this.experience = 0;
  }

  gainExperience(enemyExp) {
    this.experience += enemyExp;
  }
}
