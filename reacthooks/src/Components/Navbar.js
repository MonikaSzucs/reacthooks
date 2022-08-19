import React from 'react';

const Navbar = () => {
    return (
        <div>
            <ul>
                <li>
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='/UseStateCount'>UseStateCount</a>
                </li>
                <li>
                    <a href='/UseStatePrev'>UseStatePrev</a>
                </li>
                <li>
                    <a href='/UseStateAddSubtractCount'>UseStateAddSubtractCount</a>
                </li>
                <li>
                    <a href='/UseStateAddSubtractPrev'>UseStateAddSubtractPrev</a>
                </li>
                <li>
                    <a href='/UseStateAddSubtractPrevArray'>UseStateAddSubtractPrevArray</a>
                </li>
                <li>
                    <a href='/UseStateAddSubtractPrevObject'>UseStateAddSubtractPrevObject</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;