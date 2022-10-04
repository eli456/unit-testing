import { greet } from './greet';

describe('greet test suite', ()=> {
    it('should include the name in the message',() =>{
        expect(greet('eli456')).toBe('Welcome eli456');
    })
});