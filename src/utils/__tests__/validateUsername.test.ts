import {MAX_USERNAME_LENGTH, USERNAME_VALIDATION_MESSAGES} from '../../components/Login/constants';
import {validateUsername} from '../validateUsername';

describe('should return correct username validation message', () => {
  test.each([
    [USERNAME_VALIDATION_MESSAGES.EMPTY, ''],
    [USERNAME_VALIDATION_MESSAGES.EMPTY, null],
    [USERNAME_VALIDATION_MESSAGES.EMPTY, undefined],
    [USERNAME_VALIDATION_MESSAGES.INVALID, 'user1!'],
    [USERNAME_VALIDATION_MESSAGES.INVALID, 'user-'],
    [USERNAME_VALIDATION_MESSAGES.SHORT, 'us'],
    [USERNAME_VALIDATION_MESSAGES.LONG, 'u'.repeat(MAX_USERNAME_LENGTH + 1)],
    ['', 'username']
  ])('should return %s', (expectedMessage, username) => {
    expect(validateUsername(username as string)).toBe(expectedMessage);
  });
});
