import { Pow } from './Pow';

describe( 'getCurrencies', () => {
    it('Should return 1 if n = 0', () => {
        const result = Pow(0, 0);
        expect(result).toBe(1);
    })

    it('Should return 0 if n is negative', () => {
        const result = Pow(1, -1);
        expect(result).toBe(0);
    })

    it('Should return 8 if x=2, n=3', () => {
        const result = Pow(2, 3);
        expect(result).toBe(8);
    })

    it('Should return 9 if x=3, n=2', () => {
        const result = Pow(3, 2);
        expect(result).toBe(9);
    })
})
 