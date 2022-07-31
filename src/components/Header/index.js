import React from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'

const header = () => {
    return (
        <div>
            <header className={styles.header}>
                <Link to="/" style={{ textDecoration: "none",color:"white" }}>
                    <h1 className={styles.logo}>McDonalds</h1>
                </Link>
                <ul className={styles.mainnav}>
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <li>Home</li>
                    </Link>
                    <Link to="/myOrders" style={{ textDecoration: "none" }}>
                        <li>My Orders</li>
                    </Link>
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <li>Contact Us</li>
                    </Link>
                </ul>
            </header>
        </div >
    );
}

export default header;
