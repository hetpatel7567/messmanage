import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChartBar, faTasks ,faDashboard } from '@fortawesome/free-solid-svg-icons';
import styles from './Sidebar.module.css';

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.logo}>MessManage</div>
            <div className={styles.cbuttons}>
                <button className={styles.dashboardButton}>
                    <FontAwesomeIcon icon={faDashboard} className={styles.icon} />Dashboard
                </button>
                <hr className={styles.hr} />
            </div>


            <div className={styles.cbuttons}>
            <button className={styles.sidebarButton}>
                <FontAwesomeIcon icon={faChartBar} className={styles.icon} /> Button 2
            </button>
            <button className={styles.sidebarButton}>
                <FontAwesomeIcon icon={faTasks} className={styles.icon} /> Button 3
            </button>
            <button className={styles.sidebarButton}>
                <FontAwesomeIcon icon={faTasks} className={styles.icon} /> Button 3
            </button>
            <button className={styles.sidebarButton}>
                <FontAwesomeIcon icon={faTasks} className={styles.icon} /> Button 3
            </button>
            <button className={styles.sidebarButton}>
                <FontAwesomeIcon icon={faTasks} className={styles.icon} /> Button 3
            </button>
            
            </div>
        </div>
    );
};

export default Sidebar;