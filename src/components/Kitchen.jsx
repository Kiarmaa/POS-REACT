import React from 'react';
import '../css/Kitchen.css';

const Kitchen = ({ orders, onUpdateOrderStatus, onDeleteOrder }) => {
  return (
    <div className="kitchen">
      <h2>Kitchen Orders</h2>
      <div className="tickets">
        {orders.map((order, index) => (
          <div key={index} className="ticket"><button
          className="delete-order-button"
          onClick={() => onDeleteOrder(index)}
        >
          X
        </button>
            <h3>Table {order.table.number}</h3>
            
            <div className="order-status">
              <span>Status: {order.status}</span>
              {order.status === 'waiting' && (
                <button
                  className="status-button"
                  onClick={() => onUpdateOrderStatus(index, 'ready')}
                >
                  Mark as Ready
                </button>
              )}
              {order.status === 'ready' && (
                <button
                  className="status-button"
                  onClick={() => onUpdateOrderStatus(index, 'picked')}
                >
                  Mark as Picked Up
                </button>
              )}
            </div>
            <ul>
              {order.items.map(item => (
                <li key={item.id} className="ticket-item">
                  <span className="item-name">{item.name}</span>
                  <span className="item-price">${item.price.toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <div className="ticket-footer">
              <span className="ticket-total">
                Total: ${order.items.reduce((total, item) => total + item.price, 0).toFixed(2)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kitchen;
