import React, { useState } from 'react'
import styles from './ViewCart.module.css'
import { useSelector, useDispatch } from 'react-redux'
import ViewCartProduct from '../ViewCartProduct'
import * as actionTypes from '../../store/actions'
import AnimationModal from '../AnimationModal'
import Lottie from 'react-lottie'
import animationData from '../../assets/lotties/PaymentSuccess.json'
import { useHistory } from 'react-router-dom'

const ViewCart = () => {

    const history = useHistory();

    const [paymentStatus, setPaymentStatus] = useState(false);
    let totalPrice = 0;
    const dispatch = useDispatch();

    const cartDetails = useSelector(state => {
        let temp = []
        state.products.forEach(obj => {
            temp.push({
                name: obj.name,
                price: parseInt(obj.addOnPrice) + parseInt(obj.productPrice),
                productPrice: parseInt(obj.productPrice),
                addOnsPrice: parseInt(obj.addOnPrice),
                addOns: obj.addOns,
                quantity: obj.quantity,
                id: obj.id
            })
            totalPrice += (parseInt(obj.productPrice) * parseInt(obj.quantity)) + parseInt(obj.addOnPrice);
        })
        return temp;
    })

    const payment = () => {
        setPaymentStatus(true);
        dispatch({ type: actionTypes.UPD_PAY, value: true })
        dispatch({ type: actionTypes.UPD_ORD, value: [cartDetails] })
        redirectToOrders();
    }

    const removeAll = () => {
        dispatch({ type: actionTypes.REM_ALL })
    }

    // Lottie code
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const redirectToOrders = () => {
        setTimeout(() => {
            console.log('reached time out')
            history.push('/myOrders')
        }, 3000);
    }

    return (
        <div>
            <div className={styles.container}>
                <h4>Your Order Details</h4>
                <div >
                    <div className={styles.heading}>
                        <h5>Your order</h5>
                        <p onClick={removeAll}>Clear All </p>
                    </div>
                    {cartDetails.map(obj => (
                        <ViewCartProduct key={obj.id} obj={obj} />
                    ))}
                </div>
                {totalPrice !== 0 ? <h6>Total: ₹{totalPrice}</h6> : null}
            </div>
            {totalPrice !== 0 ?
                (<div className={styles.order}>
                    <p className={styles.placeOrder} onClick={payment}>Place Order</p>
                </div>) : null}

            <AnimationModal
                show={paymentStatus}
                modalClosed={() => setPaymentStatus(false)}
                color="#000" >
                <div className={styles.animation}>
                    <Lottie
                        options={defaultOptions}
                        height={400}
                        width={400}
                    />
                    <p><strong>Payment success</strong></p>
                </div>
            </AnimationModal>
        </div>
    )
}

export default ViewCart
