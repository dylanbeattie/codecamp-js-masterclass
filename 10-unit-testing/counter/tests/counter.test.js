'use strict';

import MyCounterElement from '../counter';

describe('Counter handles keyboard events ', () => { 

    test('UpArrow increments engine', () => {
        let counter = new MyCounterElement();
        counter.connectedCallback();

        counter.engine.increment = jest.fn();

        let fakeKeydownEvent = { code: 'ArrowUp' };
        counter.handleKeydown(fakeKeydownEvent);

        expect(counter.engine.increment).toHaveBeenCalledTimes(1);


    });
});
