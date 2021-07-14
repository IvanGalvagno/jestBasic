import "reflect-metadata";
import validatePassword from './validatePassword';

test('returns false for empty password', () => {
     expect(validatePassword("")).toBe(false)
})

test('return false for password without numbers', () => {
  expect(validatePassword("acbdefghijkl")).toBe(false)
})

test('return false for password without letters', () => {
  expect(validatePassword("1234567890")).toBe(false)
}) 

test('return true for password with numbers letters and 8 or + characteres', () => {
  expect(validatePassword("123456acdef")).toBe(true)
})

test('return false for password with numbers and letter and has less than 8 characteres', () => {
  expect(validatePassword("a3")).toBe(false)
})

test('return true for password with numbers and letters and 8 or + characteres in Uppercase', () => {
  expect(validatePassword("ACBDE123456")).toBe(true);
})

test('return true for password with numbers and letters and 8 or + characteres in Uppercase and Lowercase', () => {
    expect(validatePassword("AbcyDE123456")).toBe(true);
  })


