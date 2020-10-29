import live from '../src/index.js';

test('above 50', () => {
  const liv = live({ name: 'vasiliy', health: 50 });
  const expected = 'healthy';
  expect(liv).toBe(expected);
});

test('less 50', () => {
  const liv = live({ name: 'vasiliy', health: 40 });
  const expected = 'wounded';
  expect(liv).toBe(expected);
});

test('less 15', () => {
  const liv = live({ name: 'vasiliy', health: 10 });
  const expected = 'critical';
  expect(liv).toBe(expected);
});
