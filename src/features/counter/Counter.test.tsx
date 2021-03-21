import { increment } from './counterSlice';
import reducer from './counterSlice';

describe('counterSlice reducer', () => {

    it ('should return the initial state', () => {
        expect(reducer(undefined, {type: {}})).toEqual({ value: 0 });
    })

    it('should handle increment action', () => {
        function stateBefore() {
            return { value: 0 }
        }
        const actual = reducer(stateBefore(), increment);
        expect(actual).toEqual({ value: 1 });
    });
});
