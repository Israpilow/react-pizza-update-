import React from 'react';

type CategoriesProps = {
  categoriesItem: string[];
  onClickCategory: (index: number) => void;
};

const Categories: React.FC<CategoriesProps> = React.memo(({ categoriesItem, onClickCategory }) => {
  const [categoriesActive, setCategoriesActive] = React.useState(null);

  const onCategiriesClickActive = (index: any) => {
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

export default Categories;
