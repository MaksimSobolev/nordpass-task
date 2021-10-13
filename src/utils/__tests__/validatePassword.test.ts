import {MIN_PASSWORD_LENGTH, PASSWORD_VALIDATION_MESSAGES} from '../../components/Login/constants';
import {validatePassword} from '../validatePassword';

describe('should return correct password validation message', () => {
  test.each([
    [PASSWORD_VALIDATION_MESSAGES.EMPTY, ''],
    [PASSWORD_VALIDATION_MESSAGES.EMPTY, null],
    [PASSWORD_VALIDATION_MESSAGES.EMPTY, undefined],
    [PASSWORD_VALIDATION_MESSAGES.SHORT, 'p'.repeat(MIN_PASSWORD_LENGTH - 1)],
    ['', 'p'.repeat(MIN_PASSWORD_LENGTH)]
  ])('should return %s', (expectedMessage, password) => {
    expect(validatePassword(password as string)).toBe(expectedMessage);
  });
});
