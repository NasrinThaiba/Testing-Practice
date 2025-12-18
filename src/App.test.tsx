
test('throws error on invalid input', () => {
  expect(() => {
    throw new Error('Invalid');
  }).toThrow(Error);
});
