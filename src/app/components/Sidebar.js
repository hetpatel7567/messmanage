import React from 'react';
import styles from './Sidebar.module.css';

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <button className={styles.sidebarButton}>Button 1</button>
            <hr className={styles.hr} />
            <button className={styles.sidebarButton}>Button 2</button>
            <hr className={styles.hr} />
            <button className={styles.sidebarButton}>Button 3</button>
        </div>
    );
};

export default Sidebar;