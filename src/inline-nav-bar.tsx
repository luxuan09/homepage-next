import { NavLink } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import './inline-nav-bar.css';

type InlineNavBarProps = {
    className: string;
};

const InlineNavBar = ({ className }: InlineNavBarProps) => {
    const [openDrawer, toggleDrawer] = useState(false);
    const drawerRef = useRef<HTMLUListElement>(null)

    useEffect(() => {
        const closeDrawer = (event: MouseEvent) => {
            if (drawerRef.current && drawerRef.current.contains(event.target as Element)) {
                return;
            }

            toggleDrawer(false);
        };

        document.addEventListener('mousedown', closeDrawer);
        return () => document.removeEventListener('mousedown', closeDrawer);
    });

    return (
        <div className={`container ${className}`}>
            <IconButton className='burger' onClick={() => toggleDrawer(true)}>
                <MenuIcon />
            </IconButton>
            <nav>
                <ul className={`inline ${openDrawer ? 'active' : ''}`} ref={drawerRef}>
                    <li className='inline'><NavLink to='/' onClick={() => toggleDrawer(false)}>Home</NavLink></li>
                    <li className='inline'><NavLink to='/papers' onClick={() => toggleDrawer(false)}>Publications</NavLink></li>
                    <li className='inline'><NavLink to='/services' onClick={() => toggleDrawer(false)}>Teaching & Service</NavLink></li>
                    <li className='inline'><NavLink to='/awards' onClick={() => toggleDrawer(false)}>Awards</NavLink></li>
                </ul>
            </nav>
        </div>
    )
};

export default InlineNavBar;