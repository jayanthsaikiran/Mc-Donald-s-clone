import React from 'react'
import styles from './Home.module.css'
import Filter from '../Filter/Filter'
import ProductsList from '../ProductsList/ProductsList'
import Cart from '../Cart/cart'

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
