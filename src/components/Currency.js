import React, { useContext, useRef, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import {currencies} from './Data';
import './Currency.css';

const Currency = ({currency, onCurrencyChange}) => {
//   const [ currency, setCurrency ] = useState(currencies[0]);
//   const { dispatch, } = useContext(AppContext);
  
//   const updateCurrency = (event) => {
//     dispatch({
//           type: 'CHG_CURRENCY',
//           payload: event.target.value,
//         });
//     setCurrency(event.target.value);
//     return;
//   };

//   return (
//     <div className='alert alert-secondary'>  
//     <span>
//       <select 
//         style={{
//           backgroundColor:'#90EE90',
//           }}
//         id='currency'
//         onChange={(event)=>updateCurrency(event)}>
//           <option>Currency (£ Pound)</option>
//           <option value='$'>$ Dollar</option>
//           <option value='£'>£ Pound</option>
//           <option value='€'>€ Euro</option>
//           <option value='₹'>₹ Rupee</option>
//       </select>   
//       </span>
//     </div>
//   );
// };

const [listopen, setListopen] = useState(false);
const Dropdown = () => {
    setListopen(!listopen);
};

let menuRef = useRef();
useEffect(() => {
    if (listopen) {
        document.addEventListener("mousedown", (event) => {
            if (!menuRef.current.contains(event.target)) {
                setListopen(false);
            }
        });
    }
});

const handleOptionClick = (curr) => {
    onCurrencyChange(curr);
    setListopen(!listopen);
};

return (
    <>
    <div ref={menuRef} className="dropdown">
        
            <button className="dropbtn" onClick={() => Dropdown()}>
              Currency:{currency.name}
            </button>
        
    </div>
    <div
        className="dropdown-content"
        id="myDropdown"
        style={{ display: listopen === false ? "block" : "none" }}
    >
            {currencies.map((curr) => (
                <option onClick={() => handleOptionClick(curr)} key={curr.name}>
                    {curr.name}
                </option>
            ))}
        </div>
    </>
);
};

export default Currency;