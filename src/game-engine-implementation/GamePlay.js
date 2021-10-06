import Hero from "./Hero";
import Enemy from "./Enemy";
import Boss from "./Boss";

export const Config = {
  hero: {
    maxHealth: 100,
    hitDamage: 50,
    experienceToNextLevel: 150,
  },
  enemy: {
    maxHealth: 30,
    hitDamage: 15,
    experienceGiven: 50,
  },
  boss: {
    maxHealth: 130,
    hitDamage: 70,
    experienceGiven: 100,
  },
};

export default class GamePlay {
  static fight(firstCharacter, secondCharacter) {
    if (
      !(
        firstCharacter instanceof Hero ||
        (secondCharacter instanceof Hero &&
          !(firstCharacter instanceof Hero && secondCharacter instanceof Hero))
      )
    ) {
      return;
    }

    while (firstCharacter.health >= 0 && secondCharacter.health >= 0) {
      firstCharacter.attack(secondCharacter);
      if (secondCharacter.health < 0) {
        break;
      }
      firstCharacter.takeAHit(secondCharacter.hitDamage);
    }
    const [winner, loser] = firstCharacter.health > 0 ? [firstCharacter , secondCharacter] : [secondCharacter , firstCharacter ];
    loser.die();
    
    if (winner instanceof Hero) {
      const exp =
        loser instanceof Enemy
          ? Config.enemy.experienceGiven
          : loser instanceof Boss
          ? Config.enemy.experienceGiven
          : 0;
      winner.gainExperience(exp);
      if (winner.experience >= Config.hero.experienceToNextLevel) {
        winner.level += 1;
        winner.experience -= Config.hero.experienceToNextLevel;
      }
    }
  }
}
