import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';

import { setAddCart } from '../../redux/actions/cart';

function PizzaBlock({ id, name, price, imageUrl, types, sizes, cartItems }) {
  const dispatch = useDispatch();
  const [typeActive, setTypeActive] = React.useState(types[0]);
  const [sizeActive, setSizeActive] = React.useState(sizes[0]);

  const typeItems = ['тонкое', 'традиционное'];
  const sizeItems = [26, 30, 40];

  const onTypeClickActive = (index) => {
    setTypeActive(index);
  };

  const onSizeClickActive = (index) => {
    setSizeActive(index);
  };

  const onCartAddToPizza = () => {
    dispatch(
      setAddCart({
        id,
        name,
        price,
        imageUrl,
        types: typeItems[typeActive],
        sizes: sizeActive,
      }),
    );
  };

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {typeItems.map((item, index) => {
            return (
              <li
                key={item}
                onClick={() => onTypeClickActive(index)}
                className={classNames({
                  active: typeActive === index,
                  disabled: !types.includes(index),
                })}>
                {item}
              </li>
            );
          })}
        </ul>
        <ul>
          {sizeItems.map((size, index) => {
            return (
              <li
                key={size}
                onClick={() => onSizeClickActive(size)}
                className={classNames({
                  active: sizeActive === size,
                  disabled: !sizes.includes(size),
                })}>
                {size} см.
              </li>
            );
          })}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <div onClick={onCartAddToPizza} className="button button--outline button--add">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"></path>
          </svg>
          <span>Добавить</span>
          {cartItems && <i>{cartItems}</i>}
        </div>
      </div>
    </div>
  );
}

PizzaBlock.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  types: PropTypes.arrayOf(PropTypes.number).isRequired,
  sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default PizzaBlock;