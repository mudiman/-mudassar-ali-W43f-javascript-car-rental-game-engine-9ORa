import Character from "./Character";
import { Config } from "./GamePlay";

export default class Boss extends Character {
  constructor(level) {
    super(level);
    this.maxHealth = level * Config.boss.maxHealth;
    this.hitDamage = level * Config.boss.hitDamage;
    this.health = this.maxHealth;
  }
}
