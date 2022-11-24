import React, { useState } from 'react';
import './Nav.css';
import { Button } from 'antd';
import ModalForCard from '../Modal/ModalForCard';


const Nav = () => {
    const [open, setOpen] = useState(false);
    const showModal = () => {
        setOpen(true);
    };
    const togglingOpen = () => {
        setOpen(false);
    }
    return (
        <nav className='Nav'>
            <div className="logo">
                <svg height="20" fill='#3a77ff' viewBox="0 0 36.289 20.768" alt="Olx logo" className="_063feb70">
                    <path d="M18.9 20.77V0h4.93v20.77zM0 10.39a8.56 8.56 0 1 1 8.56 8.56A8.56 8.56 0 0 1 0 10.4zm5.97-.01a2.6 2.6 0 1 0 2.6-2.6 2.6 2.6 0 0 0-2.6 2.6zm27 5.2l-1.88-1.87-1.87 1.88H25.9V12.3l1.9-1.9-1.9-1.89V5.18h3.27l1.92 1.92 1.93-1.92h3.27v3.33l-1.9 1.9 1.9 1.9v3.27z">
                    </path>
                </svg>
            </div>
            <div className="addCardBtn">
                <Button size='medium' type="primary" onClick={showModal}>Add Card</Button>
            </div>
            <ModalForCard opened={open} togglingOpen={togglingOpen} />
        </nav>
    )
}

export default Nav;