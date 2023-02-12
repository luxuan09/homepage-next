import { NavLink } from 'react-router-dom';

import styles from './inline-nav-bar.module.css';

const InlineNavBar = () => (
    <nav>
        <ul className={styles.inline}>
            <li className={styles.inline}><NavLink to='/'>Home</NavLink></li>
            <li className={styles.inline}><NavLink to='/papers'>Papers</NavLink></li>
            <li className={styles.inline}><NavLink to='/services'>Teaching & Service</NavLink></li>
            <li className={styles.inline}><NavLink to='/awards'>Awards</NavLink></li>
        </ul>
    </nav>
);

export default InlineNavBar;