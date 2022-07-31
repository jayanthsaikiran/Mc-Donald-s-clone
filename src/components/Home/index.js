import React from 'react'
import styles from './Home.module.css'
import Filter from '../Filter'
import ProductsList from '../ProductsList'
import Cart from '../Cart'

const Home = () => {
    return (
        <div className={styles.mainbody}>
            <Filter />
            <ProductsList />
            <Cart />
        </div>
    )
}

export default Home;
