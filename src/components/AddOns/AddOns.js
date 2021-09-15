import React from 'react'
import styles from './AddOns.module.css'
import AddOn from './AddOn/AddOn'
import { useSelector } from 'react-redux'
import products from '../../store/data/Products'
const AddOns = (props) => {

    let productPrice = 0;
    products.forEach(product => {
        if (product.id === props.id)
            productPrice = product.price
    })
    
    const addOnsPrice = useSelector(state => {
        let price = 0;
        state.products.forEach(obj => {
            // console.log(obj.id, props.id)
            if (obj.id === props.id) {
                price = obj.addOnPrice;
            }
        })
        return price;
    })

    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <p><strong>Add on's for {props.name}</strong></p>
            </div>
            <br />
            <AddOn name="Cheese"
                addOns={props.addOns}
                price="45"
                productId={props.id}
                productName={props.name}
                productPrice={productPrice} />
            <AddOn name="Onion"
                addOns={props.addOns}
                price="10"
                productId={props.id}
                productName={props.name}
                productPrice={productPrice} />
            <AddOn name="Veg Sauce"
                addOns={props.addOns}
                price="20"
                productId={props.id}
                productName={props.name}
                productPrice={productPrice} />
            <AddOn name="Mushroom"
                addOns={props.addOns}
                price="30"
                productId={props.id}
                productName={props.name}
                productPrice={productPrice} />

            <div className={styles.customFooter}>
                {/* <div className={styles.price}>
                    Total price: ₹ {props.price}
    </div> */}
                <div className={styles.cart}
                >Total Price: ₹{parseInt(productPrice) + parseInt(addOnsPrice)} </div>
            </div>
        </div>
    )
}

export default AddOns