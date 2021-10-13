import itemHasOldPassword from '../itemHasOldPassword';
import {IItem} from '../../services/getUserItems';

describe('should return true if password is old', () => {
  test.each([
    [
      true,
      {
        createdAt: new Date('2020-05-30')
      }
    ],
    [
      false,
      {
        createdAt: new Date().toISOString
      }
    ],
    [
      true,
      {
        createdAt: new Date('2021-03-29')
      }
    ],
    [
      false,
      {
        createdAt: new Date(new Date().setHours(new Date().getHours() - 15)).toISOString()
      }
    ]
  ])('should return %s', (expectedResult, item) => {
    expect(itemHasOldPassword(item as IItem)).toBe(expectedResult);
  });
});
