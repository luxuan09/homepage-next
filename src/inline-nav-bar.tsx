import { NavLink } from 'react-router-dom';

import './inline-nav-bar.css';

const InlineNavBar = () => (
    <nav>
        <ul className='inline'>
            <li className='inline'><NavLink to='/'>Home</NavLink></li>
            <li className='inline'><NavLink to='/papers'>Papers</NavLink></li>
            <li className='inline'><NavLink to='/services'>Teaching & Service</NavLink></li>
            <li className='inline'><NavLink to='/awards'>Awards</NavLink></li>
        </ul>
    </nav>
);

export default InlineNavBar;