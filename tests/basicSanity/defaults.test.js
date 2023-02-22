const defaultConfigs = require('../../defaults/config.js')

test('Get Defaults and make sure it is a non-empty object', () => {
  expect(defaultConfigs).toBe({});
});