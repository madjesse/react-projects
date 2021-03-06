import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const getLocalStorage = () => {
    let list = localStorage.getItem("list");
    if (list) {
      return JSON.parse(list);
    } else {
      return []; 
    }
  }
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: ''
  });

  const handleSubmit = e => {
    e.preventDefault();
    if (!name) {
      // display warning alert
      showAlert(true, "danger", 'please enter a value');
    } else if (name && isEditing) {
      // handle edit
      setList(list.map(item => item.id === editID ? {...item, title: name} : item));
      setIsEditing(false);
      setEditID(null);
      setName('');
      showAlert(true, "success", "item edited");
    } else {
      // display added alert
      const newItem = {id: new Date().getTime().toString(), title: name};
      setList([...list, newItem]);
      showAlert(true, "success", "item added");
      setName('');
    }
  };

  const showAlert = (show=false, type="", msg="") => {
    setAlert({show, type, msg});
  };

  const removeAlert = () => {
    setAlert({show: false, msg: "", type: ""})
  };

  const clearItems = () => {
    setList([]);
    showAlert(true, "danger", "emptied list");
  }

  const deleteItem = id => {
    setList(list.filter(item => item.id !== id));
    showAlert(true, "danger", "item deleted");
  }

  const editItem = id => {
    const targetItem = list.find(item => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(targetItem.title);
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  return (
    <main className="section">
      <div className="section-center">
          {alert.show && <Alert {...alert} handleAlert={removeAlert} list={list} />}
          <form className="grocery-form" onSubmit={handleSubmit}>
            <h3>Grocery Bud</h3>
            <div className="form-control">
              <input type="text" className="grocery" placeholder="e.g. eggs" value={name} onChange={e => setName(e.target.value)} />
              <button type="submit" className="submit-btn">
                {isEditing ? 'edit' : 'submit'}
              </button>
            </div>
          </form>
          {/* item list */}
          {list.length > 0 && (
            <div className="grocery-container">
              <List items={list} deleteItem={deleteItem} editItem={editItem} />
              <button className="clear-btn" onClick={clearItems}>clear items</button>
          </div>
          )}
      </div>
    </main>
  );
}

export default App
