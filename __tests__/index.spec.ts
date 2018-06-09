import { dummy } from '../dist';

describe('index function dummy', () => {
    test('It returns 10', () => {
        expect(dummy(true)).toEqual(10);
    });
});
