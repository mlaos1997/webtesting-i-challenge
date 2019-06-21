const enhancer = require('./enhancer.js');
// test away!

describe('the enchancer', () => {

    describe('the repair function', () => {

        it('should return a new item', () => {
            const battleShield = {
                name: 'Battle Shield',
                durability: 70,
                enhancement: 14
            }
            const repairedShield = enhancer.repair(battleShield);
            expect(repairedShield).not.toBe(battleShield);
        });

        it('should restore durability to 100', () => {
            //arrange
            const battleSpear = {
                name: 'Battle Spear',
                durability: 40,
                enhancement: 10
            }
            //act
            const repairedSpear = enhancer.repair(battleSpear);
            expect(repairedSpear.durability).toBe(100);
            //assert
        })
    });

    describe('the success function', () => {
        it('should return a new item', () => {
            const battleAxe = {
                name: 'Battle Axe',
                durability: 50,
                enhancement: 16
            }
            const enhancedAxe = enhancer.succeed(battleAxe);

            expect(enhancedAxe).not.toBe(battleAxe);
        });

        it('should increase enhancement by 1 if the items enhancement is less than 20', () => {
            const battleSword = {
                name: 'Battle Sword',
                durability: 30,
                enhancement: 14
            };

            const enhancedSword = enhancer.succeed(battleSword);
            expect(enhancedSword.enhancement).toBe(battleSword.enhancement + 1);
        });

        it('if item enhancement level is 20, the enhancement level is not changed', () => {
            const battleDagger = {
                name: 'Battle Dagger',
                durability: 24,
                enhancement: 20
            }

            const enhancedDagger = enhancer.succeed(battleDagger);
            expect(enhancedDagger.enhancement).not.toBeGreaterThan(20);
        });
    });

    describe('the fail function', () => {
        it('should return a new item', () => {
            const battleHammer = {
                name: 'Battle Hammer',
                durability: 87,
                enhancement: 18
            }
            const failedHammer = enhancer.succeed(battleHammer);

            expect(failedHammer).not.toBe(battleHammer);
        });
    })
})