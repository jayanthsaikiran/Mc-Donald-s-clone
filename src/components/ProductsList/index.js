import React from 'react'
import styles from './ProductsList.module.css'
import Product from '../Product'
import { useSelector } from 'react-redux'
import products from '../../store/data/Products.json'

const ProductsList = () => {
    const filterReceived = useSelector(state => state != null ? state.filter : null);

    return (
        <div className={styles.container}>
            {products.map(product => {
                if (filterReceived != null) {
                    if (product.tags.includes(filterReceived)) {
                        return (
                            <Product
                                key={product.id}
                                details={product} />
                        )
                    }
                    else {
                        return null;
                    }
                }
                return (
                    <Product
                        key={product.id}
                        details={product} />
                )
            })}
        </div>
    )
}

export default ProductsList;