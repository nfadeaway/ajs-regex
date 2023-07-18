import Validator from '../validator';

test.each([
  ['aaZ1e-_q1234qweqw123wewasd', false],
  ['-qwesasdqwe', false],
  ['User01', false],
  ['1User', false],
  ['Super01User', true],
  ['Super123U123ser', true],
  ['Super123U1234ser', false],
])('тест валидации логина %o', (username, expected) => {
  const validator = new Validator(username);
  const checkUsername = validator.validateUsername();
  expect(checkUsername).toBe(expected);
});
