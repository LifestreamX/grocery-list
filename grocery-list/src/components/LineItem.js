import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';
import { AiFillPlusCircle } from 'react-icons/ai';

const LineItem = ({
  item,
  items,
  setItems,
  handleCheck,
  handleDelete,
  setTodoEditing,
  setEditingText,
  editingText,
  todoEditing,
  editTodo,
}) => {
  return (
    <li className='item'>
      <input
        type='checkbox'
        onChange={() => handleCheck(item.id)}
        checked={item.checked}
      />
      <label
        style={item.checked ? { textDecoration: 'line-through' } : null}
        onDoubleClick={() => handleCheck(item.id)}
      >
        {item.item}
      </label>
      {/* The Edit Button */}
      {todoEditing === item.id ? (
        <div className='edit-container'>
          <AiFillPlusCircle
            className='save-button'
            onClick={() => editTodo(item.id)}
          />
          <input
            className='edit-input'
            type='text'
            onChange={(e) => setEditingText(e.target.value)}
            value={editingText}
          />
        </div>
      ) : (
        null
      )}

      <AiFillEdit
        className='edit-icon'
        onClick={() => setTodoEditing(item.id)}
      />
      {/* Delete Button  */}
      <FaTrashAlt
        onClick={() => handleDelete(item.id)}
        role='button'
        tabIndex='0'
        aria-label={`Delete ${item.item}`}
      />
    </li>
  );
};

export default LineItem;
