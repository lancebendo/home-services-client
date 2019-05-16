import strUtils from './strUtils';

describe('Utilities tests', () => {
  it('strUtils.strArrayContains test', () => {
    const test = ['apple', 'orange'];
    expect(strUtils.strArrayContains(test, 'apple')).toBe(true);
    expect(strUtils.strArrayContains(test, 'pear')).toBe(false);
  });

  it('strUtils.objectPropToArray test', () => {
    const test = [{ id: 1, name: 'apple' }, { id: 2, name: 'orange' }];
    const output = strUtils.objectPropToArray(test, 'name');
    expect(output[0] === 'apple').toBe(true);
    expect(output[0] === 'pear').toBe(false);
  });
});
