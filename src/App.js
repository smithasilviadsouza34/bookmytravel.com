import Header from './Header.js';
import Content from './Content.js';
import Footer from './Footer.js';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState([
    {
        id: 1,
        checked: true,
        item: "Travel"
    },
    {
        id: 2,
        checked: true,
        item: "Learn Swimming"
    },
    {
        id: 3,
        checked: true,
        item: "Pray EveryDay"
    }
  ]);
  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? {...item,
    checked: !item.checked }:item);
    setItems(listItems);
    localStorage.setItem('covetList',JSON.stringify(listItems));
  }

  const handleDelete = (id) =>{
    const listItems = items.filter((item)=>item.id !== id);
    setItems(listItems);
        localStorage.setItem('covetList',JSON.stringify(listItems));
  }
  return (
    <div className="App">
     <Header title="Covet" />
     <Content items={items}
     handleCheck={handleCheck}
     handleDelete={handleDelete} />
     <Footer length={items.length}></Footer>
    </div>
  );
}

export default App;
