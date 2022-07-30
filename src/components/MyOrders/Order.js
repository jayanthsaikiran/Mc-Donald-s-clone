import React from 'react'
import styles from './Order.module.css'

const Order = (props) => {
    const siteURL = "https://jayanthsaikiran.github.io/Mc-Donald-s-clone/"
    let sumTotal = 0;
    return (
        <div className={styles.container}>
            <div className={styles.header} >
                <p className={styles.estimated}><strong>Estimated delivery by Dec 18</strong></p>
                <p className={styles.shipment}>Shipped on Dec 10</p>
            </div>
            <hr style={{ margin: "0px 15px 10px 15px" }} />
            <div className={styles.itemContainer}>
                <img alt="order" src={siteURL+"/images/fries_m.png"} width="100px" height="30px" />
                <div className={styles.items}>
                    <p><strong>Your custom order</strong></p>
                    <ul>
                        {/* {console.log(props.order.data)} */}
                        {props.order.data.map(obj => {
                            const total = (obj.productPrice * obj.quantity) + obj.addOnsPrice;
                            sumTotal += total;
                            return (
                                <li>{obj.name}   {total}
                                </li>)
                        })
                        }
                    </ul>
                </div>
            </div>
            <div className={styles.total}>
                <p>Total</p>
                <p>₹{sumTotal}</p>
            </div>
            <div className={styles.total}>
                <p>Payment method</p>
                <p>Phone Pe</p>
            </div>
            <hr style={{ margin: "15px 0px 0px 0px", border: "2px solid #EEEEEE" }} />
            <div className={styles.track}>
                Track shipment in Bluedart
            </div>
        </div>
    )
}

export default Order
