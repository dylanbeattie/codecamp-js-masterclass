import CountingEngine from '../counting-engine.js';

describe('Counting engine initialises', () => {
    const cases = [0,1,5,99,12345678];
    test.each(cases)('when initialValue is %p', value => {
        let engine = new CountingEngine(value);
        expect(engine.count).toBe(value);  
    });
});

test("Counting engine increments", () => {
    let engine = new CountingEngine(5);
    engine.increment();
    expect(engine.count).toBe(6);
});