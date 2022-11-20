import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import './index.css';
import AddItem from './components/AddItem';
import SearchItem from './components/SearchItem';
import DarkMode from './components/DarkMode';

function App() {
  const [items, setItems] = useState([]);
  const [filteredGroceries, setFilteredGroceries] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  // Edit item useState
  const [todoEditing, setTodoEditing] = useState(null);
  const [editingText, setEditingText] = useState('');

  // Setting the state and targeting the user input field
  const [userInput, setUserInput] = useState('');

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  // Adding item to grocery list
  const handleInputSubmit = (e) => {
    e.preventDefault();
    if (userInput.length > 0) {
      let copy = [...items];
      copy = [
        ...items,
        {
          id: nanoid(),
          checked: false,
          item: userInput.replace(/^\s+|\s+$/g, ''),
        },
      ];
      setItems(copy);
      setUserInput('');
    }
  };

  // Checking off tasks
  const handleCheck = (id) => {
    let listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
  };

  // Deleting grocery list
  const handleDelete = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  // Grabbing Item state from local storage on page load
  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem('grocerylist'));

    if (savedItems) {
      setItems(savedItems);
    }
  }, []);

  // Setting up state to local storage
  useEffect(() => {
    localStorage.setItem('grocerylist', JSON.stringify(items));
  }, [items]);

  // Theme toggler
  const toggleDarkMode = () => {
    setDarkMode(darkMode ? false : true);
  };

  // Edit todo
  const editTodo = (id) => {
    const updatedItem = [...items].map((item) => {
      if (item.id === id) {
        item.item = editingText;
      }
      return item;
    });
    setItems(updatedItem);
    setTodoEditing(null);
    setEditingText('');
  };

  return (
    <div className='App' data-theme={darkMode ? 'dark' : 'light'}>
      <DarkMode
        setDarkMode={setDarkMode}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <Header title='Grocery List ' />
      <AddItem
        handleInputChange={handleInputChange}
        handleInputSubmit={handleInputSubmit}
        userInput={userInput}
      />
      <SearchItem
        filteredGroceries={filteredGroceries}
        setFilteredGroceries={setFilteredGroceries}
      />
      <Content
        // Line of code below filtered list
        items={items.filter((item) =>
          item.item.toLowerCase().includes(filteredGroceries.toLowerCase())
        )}
        setItems={setItems}
        userInput={userInput}
        setUserInput={setUserInput}
        handleInputChange={handleInputChange}
        handleInputSubmit={handleInputSubmit}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        setTodoEditing={setTodoEditing}
        setEditingText={setEditingText}
        editingText={editingText}
        todoEditing={todoEditing}
        editTodo={editTodo}
        filteredGroceries={filteredGroceries}
      />
      <Footer items={items} />
    </div>
  );
}

export default App;
