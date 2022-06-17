import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetPizzas } from '../redux/actions/pizzas';
import { setCategory } from '../redux/actions/filters';

import Categories from '../components/Categories';
import SortPopup from '../components/SortPopup';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import Pagination from '../components/Pagination';
import LoadingBlock from '../components/PizzaBlock/LoadingBlock';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const categoriesItem: string[] = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  const pizzasItems = useSelector(({ pizzas }: any) => pizzas.items);
  const { isLoaded } = useSelector(({ pizzas }: any) => pizzas);
  const cartItems = useSelector(({ cart }: any) => cart.items);
  const { category, sortBy, pagination, search }: any = useSelector(({ filters }: any) => filters);

  React.useEffect(() => {
    dispatch(
      // @ts-ignore
      fetPizzas(category, sortBy, pagination, search),
    );
  }, [category, sortBy, pagination, search]);

  const onClickCategory = React.useCallback((index: number) => {
    dispatch(setCategory(index));
  }, []);

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories categoriesItem={categoriesItem} onClickCategory={onClickCategory} />
          <SortPopup />
        </div>
        <h2 className="content__title">
          {category === null ? `Все пиццы` : `${categoriesItem[category]}`}
        </h2>
        <div className="content__items">
          {isLoaded
            ? pizzasItems.map((item: any) => {
                return (
                  <PizzaBlock
                    {...item}
                    key={item.id}
                    cartItems={cartItems[item.id] && cartItems[item.id].items.length}
                  />
                );
              })
            : Array(10)
                .fill(0)
                .map((item, index) => <LoadingBlock key={`${item.id}_${index}`} />)}
        </div>
        {category === null ? <Pagination /> : ''}
      </div>
    </div>
  );
};

export default Home;
