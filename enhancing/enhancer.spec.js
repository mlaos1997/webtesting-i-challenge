const enhancer = require('./enhancer.js');
// test away!

describe('the enchancer', () => {

    describe('the repair function', () => {
        it('should restore durability to 100', () => {
            //arrange
            const longsword = {
                name: 'longsword',
                durability: 40,
                enhancement: 10
            }
            //act
            const result = enhancer.repair(longsword);
            expect(result.durability).toBe(100);
            //assert
        })
    });
})