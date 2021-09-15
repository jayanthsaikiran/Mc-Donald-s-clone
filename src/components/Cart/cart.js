import React from 'react'
import styles from './cart.module.css'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Cart = () => {

    let totalPrice = 0;
    const count = useSelector(state => state.products.length)
    const cartDetails = useSelector(state => {
        let temp = []
        state.products.forEach(obj => {
            temp.push({
                name: obj.name,
                price: parseInt(obj.addOnPrice) + parseInt(obj.productPrice),
                id: obj.id,
                addOns: obj.addOns
            })
            totalPrice += (parseInt(obj.productPrice) * parseInt(obj.quantity)) + parseInt(obj.addOnPrice);
        })
        return temp;
    })

    return (
        <div className={styles.cart}>
            <div style={{ background: '#F9F9F9' }} className={styles.orderSummary}>
                <h4>Your order summary</h4>
                <p>{count} items</p>
                <div className={styles.parent}>
                    {cartDetails.map(obj => (
                        <div key={obj.id}>
                            <span>
                                <img alt="veg"
                                    src="https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/v1591261933/NewWebsiteResource2020/Assets/Img/Veg.svg" />  {obj.name}</span>
                            <span>{obj.price}</span>
                            {obj.addOns.map(addOn => {
                                return (
                                    <div key={addOn.length}>
                                        <p style={{
                                            fontSize: "8px",
                                            margin: "0px",
                                            padding: "0px"
                                        }}>{addOn}</p>
                                    </div>)
                            })}

                        </div>
                    ))}
                </div >
            </div>

            <div className={styles.bottom}>
                {/* <p className={styles.price}><strong>Total</strong></p> */}
                <div className={styles.price}>Total: ₹{totalPrice}</div>
                <Link to="/cart" className={styles.link} style={{ textDecoration: "none" }} >
                    <div className={styles.viewCart}>View Cart</div>
                </Link>
            </div>
        </div>
    )
}

export default Cart;