const defaultConfigs = require('../../defaults/config.js')

test('Get Defaults and make sure it is a non-empty object', () => {
  expect(defaultConfigs).not.toBe(null);
  expect(typeof(defaultConfigs)).toBe(typeof({}));
});

test('Get expected Defaults', () => {
  expect(defaultConfigs.colors).not.toBe(null);
});

