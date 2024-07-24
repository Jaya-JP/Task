import React, { useState, useContext } from 'react';
import { Context } from '../../context/Context';

const ContextTask = () => {
  const [newItem, setNewItem] = useState('');
  const { items, addItem, removeItem } = useContext(Context);

  const AddItem = () => {
    if (newItem.trim() !== '') {
      addItem({ id: Date.now(), name: newItem });
      setNewItem('');
    } else {
      alert('Item empty enter value'); 
    }
  };

  return (
    <div>
      <h1>Items</h1>
      <input type="text" value={newItem} onChange={(e) => setNewItem(e.target.value)} 
            placeholder="Add new item" />
      <button onClick={AddItem}>Add Item</button>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name} 
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContextTask;
