import { useState } from 'react';  

const State05 = () => {  
  const [name, setName] = useState(''); 
  const [searchQuery, setSearchQuery] = useState('');  
  const [data, setData] = useState([]);  

  // state for edit and create statement  
  const [editMode, setEditMode] = useState(false);  
  const [itemToEdit, setItemToEdit] = useState(null); // to hold the item being edited  

  const handleInput = (e) => {  
    setName(e.target.value);  
  };  

  const handleClick = () => {  
    if (name) {  
      if (editMode) {  
        handleUpdate(itemToEdit);  
      } else {  
        const newItem = { id: Date.now(), name };
        setData([...data, newItem]);  
      }  

      console.log(data);
      setName('');  
      setEditMode(false);  
      setItemToEdit(null);  
    }  
  };  

  const handleDelete = (itemId) => {  
    setData(data.filter(item => item.id !== itemId));  
  };  

  const handleSearch = (e) => {  
    setSearchQuery(e.target.value.toLowerCase());  
  };  

  const filteredData = data.filter(item =>  
    item.name.toLowerCase().replace(/\s+/g, '').includes(searchQuery.replace(/\s+/g, ''))  
  );  

  // Edit  
  const handleEdit = (item) => {  
    setName(item.name);  
    setEditMode(true); 
    setItemToEdit(item.id);  
  };  

  // Update  
  const handleUpdate = (itemToUpdateId) => {  
    setData(data.map(item => (item.id === itemToUpdateId ? { ...item, name } : item)));  
    setName('');  
    setEditMode(false);  
    setItemToEdit(null);
  };  

  return (  
    <div className='w-50 mx-auto'>  
      <div>  
        <input  
          type="text"  
          value={name}  
          onChange={handleInput}  
          placeholder='Enter name'  
          className='form-control mb-3'  
        />  
        <button className='btn btn-primary mb-5' onClick={handleClick}>  
          {editMode ? 'Update' : 'Create'}  
        </button>  
      </div>  

      <div>  
        <input  
          type="text"  
          value={searchQuery}  
          onChange={handleSearch}  
          placeholder='Search by name'  
          className='form-control mb-3'  
        />  
      </div>  

      <div>  
        <div>  
          <h1>Show User</h1>  
        </div>  
        {filteredData.map((item) => (  
          <div key={item.id} className='d-flex justify-content-between align-items-center my-3 p-3 border-bottom'>  
            <h6>{item.name}</h6>  
            <div>  
              <button className='btn btn-info ms-2' onClick={() => handleEdit(item)}>Edit</button>  
              <button className='btn btn-danger ms-2' onClick={() => handleDelete(item.id)}>Delete</button>  
            </div>  
          </div>  
        ))}  
      </div>  
    </div>  
  );  
};  

export default State05;