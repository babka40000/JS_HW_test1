import getHealth from '../src/app';

test('check hero health', () => {
  expect(getHealth({ name: 'Маг', health: 90 })).toBe('healthy');
  expect(getHealth({ name: 'Маг', health: 40 })).toBe('wounded');
  expect(getHealth({ name: 'Маг', health: 10 })).toBe('critical');
});
