import operate from '../logic/operate';

describe('testing the operate function', () => {
    test('testind addition ', () => {
        expect(operate(4, 13, '+')).toBe('17');
    });
    test('testing division', () => {
        expect(operate(16, 2, '÷')).toBe('8');
    });
    test('testig multiplication', () => {
        expect(operate(4, 7, 'x')).toBe('28');
    });
    test('testing modulo', () => {
        expect(operate(5, 3, '%')).toBe('2');
    });
});
