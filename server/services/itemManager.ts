import { passwords } from '../data';

const items = [];

export const updateItem = (item) => {
  items.push(item);
};

export const getItems = () => passwords.map((passwordItem) => {
  const updatedItem = items.find(({ id }) => id === passwordItem.id);

  return {
    ...(updatedItem || passwordItem),
  };
});
