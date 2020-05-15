import { greeter, dissmiser } from '../index';
test('tets greeter', () => {
  expect(greeter('ale')).toBe('Hello ale');
});
test('tets dissmiser', () => {
  expect(dissmiser()).toBe('Bye ale');
});
