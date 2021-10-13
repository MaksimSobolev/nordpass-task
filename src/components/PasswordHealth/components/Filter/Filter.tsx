import { FC } from 'react';
import { Routes } from '../../../../constants';
import { IItem } from '../../../../services/getUserItems';
import FilterTab from './components/FilterTab';

import './filter-style.scss';
import itemHasWeakPassword from '../../../../utils/itemHasWeakPassword';
import itemHasReusedPassword from '../../../../utils/itemHasReusedPassword';
import itemHasOldPassword from '../../../../utils/itemHasOldPassword';

interface IFilter {
  items: Array<IItem>;
}

// eslint-disable-next-line no-unused-vars
const countItems = (items: Array<IItem>, callback: (listItem: IItem) => boolean) => items.reduce((count, item) => (callback(item) ? count + 1 : count), 0);

const Filter: FC<IFilter> = ({ items }) => {
  const weakItemsCount = countItems(items, itemHasWeakPassword);
  const oldItemsCount = countItems(items, itemHasOldPassword);
  const reusedItemsCount = items.reduce(
    (count, item) => (itemHasReusedPassword(item, items) ? count + 1 : count),
    0,
  );

  return (
    <div className="filter">
      <FilterTab title="Weak" count={weakItemsCount} path={Routes.Weak} />
      <FilterTab title="Reused" count={reusedItemsCount} path={Routes.Reused} />
      <FilterTab title="Old" count={oldItemsCount} path={Routes.Old} />
    </div>
  );
};

export default Filter;
