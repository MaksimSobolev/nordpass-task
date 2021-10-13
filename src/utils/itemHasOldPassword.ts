import { IItem } from '../services/getUserItems';

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

const itemHasOldPassword = (item: IItem): boolean => {
  const { createdAt } = item;
  const passwordTime = new Date(createdAt).getTime();
  const timestamp = new Date().getTime() - 30 * DAY;

  return passwordTime < timestamp;
};

export default itemHasOldPassword;
