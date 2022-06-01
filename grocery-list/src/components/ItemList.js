import React from 'react';
import '../index.css';
import LineItem from './LineItem';

const ItemList = ({
  items,
  setItems,
  setTodoEditing,
  handleCheck,
  handleDelete,
  setEditingText,
  editingText,
  todoEditing,
  editTodo,
}) => {
  return (
    <ul>
      {[
        items.map((item) => (
          <LineItem
            key={item.id}
            item={item}
            items={items}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
            setTodoEditing={setTodoEditing}
            setEditingText={setEditingText}
            editingText={editingText}
            todoEditing={todoEditing}
            setItems={setItems}
            editTodo={editTodo}
          />
        )),
      ]}
    </ul>
  );
};

export default ItemList;
