import React, { useRef } from 'react';

//TASK INPUT AND ADD BUTTON
const AddItem = ({ handleInputChange, handleInputSubmit, userInput }) => {
  const itemRef = useRef();

  return (
    <div>
      <form className='add-button-container' onSubmit={handleInputSubmit}>
        <input
          type='text'
          ref={itemRef}
          className='add-input'
          value={userInput}
          handleInputSubmit={handleInputSubmit}
          onChange={handleInputChange}
          placeholder='Add Item...'
          required
          autoFocus
        />
        <button
          type='submit'
          className='add-button'
          onClick={() => itemRef.current.focus()}
        >
          <span>Add</span>
        </button>
      </form>
    </div>
  );
};

export default AddItem;
