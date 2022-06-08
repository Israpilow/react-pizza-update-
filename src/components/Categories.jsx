import React from 'react';
import PropTypes from 'prop-types';

const Categories = React.memo(({ categoriesItem, onClickCategory }) => {
  const [categoriesActive, setCategoriesActive] = React.useState(null);

  const onCategiriesClickActive = (index) => {
    setCategoriesActive(index);
    onClickCategory(index);
  };

  return (
    <div className="categories">
      <ul>
        <li
          onClick={() => onCategiriesClickActive(null)}
          className={categoriesActive === null ? 'active' : ''}>
          Все
        </li>
        {categoriesItem.map((item, index) => {
          return (
            <li
              key={item}
              onClick={() => onCategiriesClickActive(index)}
              className={categoriesActive === index ? 'active' : ''}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
});

Categories.propTypes = {
  categoriesItem: PropTypes.array.isRequired,
  onClickCategory: PropTypes.func,
};

export default Categories;
