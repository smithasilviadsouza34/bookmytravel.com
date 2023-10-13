import React from 'react';
import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';


const Content = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            checked: true,
            item: "Travel"
        },
        {
            id: 2,
            checked: true,
            item: "Learn Swimming",
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
        localStorage.setItem('petfoodlist',JSON.stringify(listItems));
    }
const handleDelete = (id) =>{
    const listItems = items.filter((item)=>item.id !== id);
    setItems(listItems);
        localStorage.setItem('petfoodlist',JSON.stringify(listItems));

}

    return (
        <main>
            {items.length?(
            <ul>
                {items.map((item) => (
                    <li className="item" key={item.id}>
                        <input type="checkbox"
                            checked={item.checked}
                            
                            onChange={() => handleCheck(item.id)}
                        />
                        <label 
                        onDoubleClick={()=>handleCheck(item.id)}
                        style={(item.checked)?{textDecoration:'line-through'}:null}
                        >{item.item}</label>

                        <FaTrashAlt role="button"
                          onClick={()=>{handleDelete(item.id)}}
                          tabIndex="0"></FaTrashAlt>
                    </li>
                ))}
            </ul>
            ):(<p style={{marginTop:'2rem'}}>
                your list is empty</p>
)}
        </main>
    )
}

export default Content