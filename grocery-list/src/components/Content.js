import '../index.css';
import ItemList from './ItemList';

const Content = ({
  items,
  setItems,
  userInput,
  handleCheck,
  handleDelete,
  setTodoEditing,
  setEditingText,
  editingText,
  todoEditing,
  editTodo,
}) => {
  return (
    <main>
      {/* Text for empty grocery list */}
      {items.length === 0 && (
        <p className='no-groceries-text'>No Groceries in your list </p>
        )}


      <ItemList
        items={items}
        setItems={setItems}
        userInput={userInput}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        setTodoEditing={setTodoEditing}
        setEditingText={setEditingText}
        editingText={editingText}
        todoEditing={todoEditing}
        editTodo={editTodo}
      />
    </main>
  );
};

export default Content;
