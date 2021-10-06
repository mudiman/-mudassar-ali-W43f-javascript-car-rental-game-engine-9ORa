const { describe, test, expect } = global;
import GamePlay, { Config } from '../../src/game-engine-implementation/GamePlay';
import Hero from '../../src/game-engine-implementation/Hero';
import Enemy from '../../src/game-engine-implementation/Enemy';
import Boss from '../../src/game-engine-implementation/Boss';

describe('GE-sample-simple-fight', function () {

    test('If hero will take damage and defeat the enemy', () => {
        const hero = new Hero(2);
        const enemy = new Enemy(4);
        
        GamePlay.fight(hero, enemy);
  
        expect(hero.health).toBe(140);
        expect(enemy.health).toBe(0);
        expect(enemy.isDead).toBe(true);
    })

    test('If hero will take damage and defeat the boss', () => {
        const hero = new Hero(2);
        const boss = new Boss(4);

        GamePlay.fight(hero, boss);
  
        expect(hero.health).toBe(0);
        expect(hero.isDead).toBe(true);
        expect(boss.health).toBe(420);
    })

    test('Multiple hero fight', () => {
        const hero = new Hero(2);
        const enemy = new Enemy(4);
        const enemy2 = new Enemy(4);
        
        GamePlay.fight(hero, enemy);
        GamePlay.fight(hero, enemy2);
  
        expect(hero.health).toBe(80);
        expect(hero.level).toBe(4);
        expect(enemy.health).toBe(0);
        expect(enemy2.health).toBe(0);
    })


});
