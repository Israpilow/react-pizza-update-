import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setClearValue, setSearch } from '../../redux/actions/filters';

import styles from './Search.module.scss';

const SearchBlock = () => {
  const dispatch = useDispatch();
  const { search } = useSelector(({ filters }) => filters);

  const onChangeValue = (e) => {
    const targetValue = e.target.value;
    dispatch(setSearch(targetValue));

    // const newItems = items.filter((item) => {
    //   if (item.name.toLowerCase().includes(targetValue)) {
    //     return item;
    //   }
    //   return false;
    // });
  };

  const onClearValue = () => {
    dispatch(setClearValue());
  };

  return (
    <div className={styles.root}>
      <svg
        className={styles.icon}
        enableBackground="new 0 0 32 32"
        id="EditableLine"
        version="1.1"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="14"
          cy="14"
          fill="none"
          id="XMLID_42_"
          r="9"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <line
          fill="none"
          id="XMLID_44_"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          x1="27"
          x2="20.366"
          y1="27"
          y2="20.366"
        />
      </svg>
      <input
        className={styles.input}
        placeholder="Поиск пиццы..."
        onChange={(e) => onChangeValue(e)}
        value={search}
      />
      <svg
        className={styles.clearIcon}
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        onClick={onClearValue}>
        <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
      </svg>
    </div>
  );
};

export default SearchBlock;
