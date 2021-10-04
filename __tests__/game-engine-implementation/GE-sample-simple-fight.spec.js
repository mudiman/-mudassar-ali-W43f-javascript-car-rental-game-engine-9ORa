const { describe, test, expect } = global;
import GamePlay, { Config } from '../../src/game-engine-implementation/GamePlay';
import Hero from '../../src/game-engine-implementation/Hero';
import Enemy from '../../src/game-engine-implementation/Enemy';

describe('GE-sample-simple-fight', function () {

    test('If hero will take damage and defeat the enemy', () => {
        const hero = new Hero(2);
        const enemy = new Enemy(4);

        GamePlay.fight(hero, enemy);

        expect(hero.health).toBe(140);
        expect(enemy.health).toBe(0);
    })

});
