import React, { useState } from 'react';
import '../css/TableSelector.css';

const TableSelector = ({ tables, onSelectTable }) => {
  const [selectedTableId, setSelectedTableId] = useState(null);

  const handleSelectTable = (table) => {
    setSelectedTableId(table.id);
    onSelectTable(table);
  };

  return (
    <div className="table-selector">
      <h2>Select Table</h2>
      <ul>
        {tables.map((table) => (
          <li key={table.id}>
            <button
              className={table.id === selectedTableId ? 'selected' : ''}
              onClick={() => handleSelectTable(table)}
            >
              Table {table.number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableSelector;
