import React from 'react';
import '../css/Order.css';

const Order = ({ order, onSendOrder, table, onAddIngredient, onSubtractIngredient }) => {
  const handleSubtract = (index) => {
    if (order[index].quantity > 1) {
      onSubtractIngredient(index);
    } else {
      // Remove the item if quantity is 1 and subtract is clicked
      onSubtractIngredient(index, true);
    }
  };

  return (
    <div className="order">
      <h2>Order for Table {table ? table.number : 'None'}</h2>
      {order.length === 0 ? (
        <p>No items in the order</p>
      ) : (
        <ul>
          {order.map((item, index) => (
            <li key={index} className="order-item">
              <span className="item-name">{item.name}</span>
              <button
                className="subtract-button"
                onClick={() => handleSubtract(index)}
                disabled={item.quantity === 0}
              >
                -
              </button>
              <span className="item-quantity">{item.quantity}</span>
              <button
                className="add-button"
                onClick={() => onAddIngredient(index)}
              >
                +
              </button>
              <span className="item-price">${(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>
      )}
      <button
        className="send-order-button"
        onClick={onSendOrder}
        disabled={!table || order.length === 0}
      >
        Send Order
      </button>
    </div>
  );
};

export default Order;
