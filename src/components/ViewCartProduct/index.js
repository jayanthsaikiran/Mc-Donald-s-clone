import React, { useState } from 'react'
import styles from './ViewCartProduct.module.css'
import Modal from '../Modal'
import AddOns from '../AddOns'
import CartQuantity from '../CartQuantity'

const ViewCartProduct = (props) => {

    const [customize, setCustomize] = useState(false)

    const orderStyle = {
        marginLeft: "15px",
        color: "blue",
        fontSize: "10px",
        cursor: "pointer"
    }

    return (
        <div >
            <div className={styles.order}>
                <span style={{ width: "200px" }}>
                    <img alt="veg"
                        src="https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/v1591261933/NewWebsiteResource2020/Assets/Img/Veg.svg" />   {props.obj.name}
                </span>
                <CartQuantity id={props.obj.id} />
                <span>₹{(parseInt(props.obj.productPrice)*parseInt(props.obj.quantity))+parseInt(props.obj.addOnsPrice) }</span>
                <Modal
                    show={customize}
                    modalClosed={() => setCustomize(false)}
                    color="#000">
                    <AddOns
                        id={props.obj.id}
                        addOns={props.obj.addOns}
                        closeHandler={() => setCustomize(false)}
                        price={props.obj.price}
                        name={props.obj.name} />
                </Modal>
            </div>
            <p style={orderStyle} onClick={() => setCustomize(true)}>Customize</p>
        </div>
    )
}

export default ViewCartProduct
