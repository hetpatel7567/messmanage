import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import styles from './Dashboard.module.css';

const Dashboard = () => {
    return (
        <div className={styles.container}>
            <Sidebar />
            <div className={styles.content}>
                <header>
                    <h1>Dashboard</h1>
                </header>
                <main>
                    <section>
                        <h2>Welcome to the Dashboard</h2>
                        <p>This is your home page where you can manage your activities.</p>
                    </section>
                    <section>
                        <h2>Statistics</h2>
                        
                    </section>
                    <section>
                        <h2>Recent Activities</h2>
                        <p>Here you can see your recent activities.</p>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
