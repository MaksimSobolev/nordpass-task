import { FC } from 'react';
import { IItem } from '../../../../services/getUserItems';
import ItemIcon from './components/ItemIcon';
import './list-style.scss';
import UpdateModal from './UpdateModal';

interface IList {
  items: Array<IItem>;
}

const List: FC<IList> = ({ items }) => (
  <ul className="list">
    {items.map((item, index) => (
      <li key={index} className="item">
        <ItemIcon title={item.title} />
        <div>
          <div className="title">{item.title}</div>
          <div className="description">{item.description}</div>
        </div>
        <UpdateModal item={item} />
      </li>
    ))}
  </ul>
);

export default List;
