import React, { useState, useEffect, useRef } from "react";
import { currencies } from "./Data";

const Navbar = ({ currency, onCurrencyChange }) => {
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
    }, [listopen]);

    const handleOptionClick = (curr) => {
        onCurrencyChange(curr);
        setListopen(!listopen);
    };

    return (
        <>
        <header>
            <nav>
                <ul>
        <div ref={menuRef} className="dropdown">
            <li>
                <button className="dropbtn" onClick={() => Dropdown()}>
                    {currency.name}
                </button>
            </li>
        </div>
        <div
            className="dropdown-content"
            id="myDropdown"
            // style={{ display: listopen === false ? "none" : "block" }}
        >
                {currencies.map((curr) => (
                    <select onClick={() => handleOptionClick(curr)} key={curr.name}>
                        {curr.name}
                    </select>
                ))}
            </div>
                </ul>
            </nav>
        </header>
        </>
    );
};

export default Navbar;