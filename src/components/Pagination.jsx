import React from 'react';
import { useDispatch } from 'react-redux';

import { setPagination } from '../redux/actions/filters';

const Pagination = () => {
  const dispatch = useDispatch();

  const pagItem = [
    { num: 1, page: 1, limit: 8 },
    { num: 2, page: 2, limit: 3 },
    { num: 3, page: 3, limit: 3 },
  ];

  const itemPag = Object.values(pagItem[0]);

  const [pagActive, setPagActive] = React.useState(itemPag[0]);

  const onClickPagActive = (item) => {
    setPagActive(item.num);
    dispatch(setPagination(item));
  };

  return (
    <ul className="Pagination_root">
      {pagItem.map((item, index) => {
        return (
          <li
            key={index}
            className={pagActive === index + 1 ? 'selected' : ''}
            onClick={() => onClickPagActive(item)}>
            {item.num}
          </li>
        );
      })}
    </ul>
  );
};

export default Pagination;
