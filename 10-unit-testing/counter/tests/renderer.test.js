import CountingEngine from '../counting-engine.js';
import Renderer from '../renderer.js';

test('renderer draws correct value for counter', () => {
    let testRoot = document.createElement('div');
    let renderer = new Renderer(testRoot);

    let engine = new CountingEngine(5);
    renderer.render(engine);
    
    var resultingSpan = testRoot.querySelector("span#counter");
    expect(resultingSpan.innerText).toBe(5);
});
