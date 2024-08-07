  // src/App.js
  import React, { useState } from 'react';
  import './App.css';
  import Menu from './components/Menu';
  import Order from './components/Order';
  import Kitchen from './components/Kitchen';
  import TableSelector from './components/TableSelector';

  const initialMenuItems = [
    // Pizzas
    { id: 1, name: 'Margherita Pizza', price: 12, category: 'Pizzas' },
    { id: 2, name: 'Pepperoni Pizza', price: 14, category: 'Pizzas' },
    { id: 3, name: 'BBQ Chicken Pizza', price: 16, category: 'Pizzas' },
    { id: 4, name: 'Vegetarian Pizza', price: 15, category: 'Pizzas' },
    { id: 5, name: 'Hawaiian Pizza', price: 14, category: 'Pizzas' },
    { id: 6, name: 'Seafood Pizza', price: 18, category: 'Pizzas' },
    { id: 7, name: 'Buffalo Chicken Pizza', price: 17, category: 'Pizzas' },
    { id: 8, name: 'Four Cheese Pizza', price: 16, category: 'Pizzas' },

    // Pastas
    { id: 9, name: 'Spaghetti Carbonara', price: 13, category: 'Pastas' },
    { id: 10, name: 'Fettuccine Alfredo', price: 14, category: 'Pastas' },
    { id: 11, name: 'Lasagna', price: 16, category: 'Pastas' },
    { id: 12, name: 'Penne Arrabbiata', price: 12, category: 'Pastas' },
    { id: 13, name: 'Pesto Pasta', price: 14, category: 'Pastas' },
    { id: 14, name: 'Baked Ziti', price: 15, category: 'Pastas' },
    { id: 15, name: 'Macaroni and Cheese', price: 12, category: 'Pastas' },
    { id: 16, name: 'Seafood Linguine', price: 18, category: 'Pastas' },

    // Burgers
    { id: 17, name: 'Cheeseburger', price: 11, category: 'Burgers' },
    { id: 18, name: 'Bacon Burger', price: 12, category: 'Burgers' },
    { id: 19, name: 'Veggie Burger', price: 11, category: 'Burgers' },
    { id: 20, name: 'BBQ Burger', price: 13, category: 'Burgers' },
    { id: 21, name: 'Mushroom Swiss Burger', price: 12, category: 'Burgers' },
    { id: 22, name: 'Spicy Jalapeño Burger', price: 12, category: 'Burgers' },
    { id: 23, name: 'Classic Burger', price: 10, category: 'Burgers' },
    { id: 24, name: 'Double Cheeseburger', price: 14, category: 'Burgers' },

    // Salads
    { id: 25, name: 'Caesar Salad', price: 9, category: 'Salads' },
    { id: 26, name: 'Greek Salad', price: 10, category: 'Salads' },
    { id: 27, name: 'Cobb Salad', price: 12, category: 'Salads' },
    { id: 28, name: 'Caprese Salad', price: 11, category: 'Salads' },
    { id: 29, name: 'House Salad', price: 8, category: 'Salads' },
    { id: 30, name: 'Quinoa Salad', price: 12, category: 'Salads' },
    { id: 31, name: 'Spinach Salad', price: 10, category: 'Salads' },
    { id: 32, name: 'Mediterranean Salad', price: 11, category: 'Salads' },

    // Appetizers
    { id: 33, name: 'Mozzarella Sticks', price: 8, category: 'Appetizers' },
    { id: 34, name: 'Chicken Wings', price: 10, category: 'Appetizers' },
    { id: 35, name: 'Garlic Bread', price: 6, category: 'Appetizers' },
    { id: 36, name: 'Bruschetta', price: 9, category: 'Appetizers' },
    { id: 37, name: 'Stuffed Mushrooms', price: 10, category: 'Appetizers' },
    { id: 38, name: 'Onion Rings', price: 7, category: 'Appetizers' },
    { id: 39, name: 'Queso Dip', price: 8, category: 'Appetizers' },
    { id: 40, name: 'Spring Rolls', price: 9, category: 'Appetizers' },

    // Desserts
    { id: 41, name: 'Cheesecake', price: 7, category: 'Desserts' },
    { id: 42, name: 'Chocolate Cake', price: 6, category: 'Desserts' },
    { id: 43, name: 'Tiramisu', price: 8, category: 'Desserts' },
    { id: 44, name: 'Apple Pie', price: 5, category: 'Desserts' },
    { id: 45, name: 'Brownies', price: 6, category: 'Desserts' },
    { id: 46, name: 'Ice Cream Sundae', price: 5, category: 'Desserts' },
    { id: 47, name: 'Panna Cotta', price: 7, category: 'Desserts' },
    { id: 48, name: 'Lemon Tart', price: 6, category: 'Desserts' },

    // Drinks
    { id: 49, name: 'Coca-Cola', price: 2, category: 'Drinks' },
    { id: 50, name: 'Pepsi', price: 2, category: 'Drinks' },
    { id: 51, name: 'Lemonade', price: 3, category: 'Drinks' },
    { id: 52, name: 'Iced Tea', price: 3, category: 'Drinks' },
    { id: 53, name: 'Coffee', price: 2, category: 'Drinks' },
    { id: 54, name: 'Hot Chocolate', price: 3, category: 'Drinks' },
    { id: 55, name: 'Orange Juice', price: 3, category: 'Drinks' },
    { id: 56, name: 'Milkshake', price: 4, category: 'Drinks' },

    // Sandwiches
    { id: 57, name: 'Club Sandwich', price: 10, category: 'Sandwiches' },
    { id: 58, name: 'Grilled Cheese', price: 8, category: 'Sandwiches' },
    { id: 59, name: 'BLT', price: 9, category: 'Sandwiches' },
    { id: 60, name: 'Philly Cheesesteak', price: 12, category: 'Sandwiches' },
    { id: 61, name: 'Reuben', price: 11, category: 'Sandwiches' },
    { id: 62, name: 'Turkey Melt', price: 10, category: 'Sandwiches' },
    { id: 63, name: 'Pulled Pork', price: 12, category: 'Sandwiches' },
    { id: 64, name: 'Panini', price: 11, category: 'Sandwiches' },

    // Soups
    { id: 65, name: 'Tomato Soup', price: 6, category: 'Soups' },
    { id: 66, name: 'Chicken Noodle Soup', price: 7, category: 'Soups' },
    { id: 67, name: 'Minestrone', price: 7, category: 'Soups' },
    { id: 68, name: 'Clam Chowder', price: 8, category: 'Soups' },
    { id: 69, name: 'French Onion Soup', price: 8, category: 'Soups' },
    { id: 70, name: 'Lentil Soup', price: 7, category: 'Soups' },
    { id: 71, name: 'Beef Barley Soup', price: 8, category: 'Soups' },
    { id: 72, name: 'Butternut Squash Soup', price: 7, category: 'Soups' },
  ];

  const initialTables = [
    { id: 1, number: 1 },
    { id: 2, number: 2 },
    { id: 3, number: 3 },
    { id: 4, number: 4 },
    { id: 5, number: 5 },
    { id: 6, number: 6 },
    { id: 7, number: 7 },
    { id: 8, number: 8 },
    { id: 9, number: 9 },
    { id: 10, number: 10 },
    { id: 11, number: 11 },
    { id: 12, number: 12 },
    { id: 13, number: 13 },
    { id: 14, number: 14 },
    { id: 15, number: 15 },
    { id: 16, number: 16 },
    { id: 17, number: 17 },
    { id: 18, number: 18 },
    { id: 19, number: 19 },
    { id: 20, number: 20 },
    { id: 21, number: 21 },
    { id: 22, number: 22 }
  ];

  const App = () => {
    const [order, setOrder] = useState([]);
    const [kitchenOrders, setKitchenOrders] = useState([]);
    const [selectedTable, setSelectedTable] = useState(null);
  
    const handleAddToOrder = (item) => {
      if (selectedTable) {
        const existingItemIndex = order.findIndex(orderItem => orderItem.id === item.id);
        if (existingItemIndex !== -1) {
          // If item already exists in order, increase its quantity
          const updatedOrder = [...order];
          updatedOrder[existingItemIndex].quantity += 1;
          setOrder(updatedOrder);
        } else {
          // Add new item to order with quantity 1
          setOrder([...order, { ...item, quantity: 1 }]);
        }
      }
    };
  
    const handleAddIngredient = (index) => {
      const updatedOrder = [...order];
      updatedOrder[index].quantity += 1;
      setOrder(updatedOrder);
    };
  
    const handleSubtractIngredient = (index, remove = false) => {
      const updatedOrder = [...order];
      if (remove) {
        updatedOrder.splice(index, 1);
      } else if (updatedOrder[index].quantity > 1) {
        updatedOrder[index].quantity -= 1;
      }
      setOrder(updatedOrder);
    };
    
  
    const handleSendOrder = () => {
      if (selectedTable) {
        setKitchenOrders([
          ...kitchenOrders,
          { table: selectedTable, items: order, status: 'waiting' }
        ]);
        setOrder([]);
        setSelectedTable(null);
      }
    };
  
    const handleSelectTable = (table) => {
      setSelectedTable(table);
      setOrder([]);
    };
  
    const handleUpdateOrderStatus = (index, status) => {
      setKitchenOrders(kitchenOrders.map((order, i) =>
        i === index ? { ...order, status } : order
      ));
    };
  
    const handleDeleteOrder = (index) => {
      setKitchenOrders(kitchenOrders.filter((_, i) => i !== index));
    };
  
    return (
      <div className="container">
        <header className="header">
          <h1>Restaurant POS</h1>
        </header>
        <div className="left-section">
          <div className="menu">
            <Menu items={initialMenuItems} onAddToOrder={handleAddToOrder} />
          </div>
          <div className="tables">
            <TableSelector tables={initialTables} onSelectTable={handleSelectTable} />
          </div>
        </div>
        <div className="right-section">
          <Order
            order={order}
            onSendOrder={handleSendOrder}
            table={selectedTable}
            onAddIngredient={handleAddIngredient}
            onSubtractIngredient={handleSubtractIngredient}
          />
        </div>
        <div className="kitchen">
          <Kitchen
            orders={kitchenOrders}
            onUpdateOrderStatus={handleUpdateOrderStatus}
            onDeleteOrder={handleDeleteOrder}
          />
        </div>
      </div>
    );
  };
  
  export default App;
