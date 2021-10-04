# Node.js Test Task

## Technical Information

In order to run tests, you need to install npm packages with `npm install` command. 

Sample tests are executed by running `npm test`. This will run tests for both tasks.

You can add your own tests into `__tests__` directory.

In order to execute tests for a single task, you can run:

`npm test car-rental-bug-fixing`

Or

`npm test game-engine-implementation`

## Task 1: Car Rental - Bug Fixing
In one of our projects, an application for Car Rental service, during testing we have identified three bugs and your task is to find them and fix them.

When fixing bugs you should localize your fixes to the methods where bugs are found meaning that you should not change other parts of the source code. 
There are automatic tests for this project which enables Technical Team Lead to quickly evaluate your solution. 

### Bug: CRS-001
Function `getCarFees` doesn't return the correct values for the value passed to it.

### Bug: CRS-002
Method `getTotalFees` from `Customer` class doesn't work as expected and doesn't return correct results.

### Bug: CRS-003
Method `getDetailedFees` from `Customer` class doesn't work as expected and doesn't return correct results.

## Task 2: Game Engine Implementation

### Description

You have been assigned to work on implementation of a new JavaScript game engine. Game engine classes already have predefines interfaces which must be kept as they are.
Your task is to finish implementation of this game engine according to the following requirements.

1. There are three types of Characters: Hero, Enemy and Boss.
2. Characters have the following common properties:
   * maxHealth - determines the maximum health character can have;
   * health - determines the current health of the character. Health can always be between 0 and maxHealth;
   * level - current level of the Character;
   * hitDamage - determines how much damage does a character cause when he hits another character;
   * isDead - boolean property telling if the character is dead or not. A character dies if his health reaches 0;
3. Beside common properties Hero character also has:
   * lifes - current number of lifes hero has. When hero dies, if there are still lifes available, hero is automatically revived with 70% of his maxHealth, isDead is back to false and one life is deducted from lifes count;
   * experience - current experience of a hero. Experience is gained by winning in fights with other characters. Experience is used to level up the character;
4. Some properties are calculated based on configuration values stored in predefined Config array:
   * maxHealth is calculated by multiplying character level with maxHealth from configuration array;
   * hitDamage is calculated by multiplying character level with hitDamage from configuration array;
5. When character of any type is initiated we need to properly set the initial values for his properties based on the level which is passed on during construction:
   * level is set to the value passed on to the constructor;
   * maxHealth is calculated based on level and configuration array as expalined above;
   * hitDamage is calculated based on level and configuration array as explained above;
   * health is set to maximum value;
   * isDead is set to false;
6. When hero is initiated, regardless of his level, he always starts with 2 lifes and 0 experience;
7. Inside GamePlay class there is a method called fight. This method executes a fight between two characters by following these rules:
   * Fight is executed only if one of the characters is Hero. Otherwise nothing happens.
   * During a fight, characters take turn in attacking the other character. firstCharacter starts the fight (i.e. takes the first turn);
   * Fight lasts as long as both characters are alive;
   * Winner of the fight is the character that is still alive after the fight;
8. When Hero wins in a fight against Boss he gets one extra life;
9. When Hero wins in a fight he gains experience points in the following way:
   * If his opponent was Enemy or Boss he gets the amount of experience points defined in configuration array (i.e. Config.enemy.experienceGiven and Config.boss.experienceGiven) multiplied by the level of the opponent;
   * If his opponent was another Hero he gets 50% of the current opponent's experience points;
10. When Hero collects enough experience points he can advance to the next level. The amount of experience points needed to advance to the next level is calculated as Config.hero.experienceToNextLevel multiplied by hero's current level.
11. When Hero advances to the next level, his maxHealth and hitDamage properties should be recalculated.

### Example

In this section we will describe an example of a fight between a Hero of level 2 and an Enemy level 4 using default configuration array.
Hero will start with the following values:

* health/maxHealth: 200/200
* hitDamage: 100
* lifes: 2
* experience: 0

Enemy will start with the following properties:

* health: 120
* hitDamage: 60

The fight (i.e. `GamePlay.fight(Hero, Enemy)`) would execute like this:

* Hero attacks first and causes damage of 100 to Enemy. Enemy's health is reduced by 100, so he is now at 20 health value;
* Then Enemy attacks Hero and causes damage of 60. Heros' health is now 140;
* Hero attacks again with damage 100. Enemy's health is now completely exhausted (-80) and Enemy dies. 
* Hero won the fight and got 4 x Config.enemy.experienceGiven = 200 experience points.

So Hero now has health at 140 and experience at 200. Since Hero is level 2 he needs 2 x Config.hero.experienceToNextLevel = 300 points to advance to next level, he remains at level 2.
