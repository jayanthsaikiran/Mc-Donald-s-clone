import React, { useRef, useState, } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './CartQuantity.module.css'
import * as actionTypes from '../../store/actions'

const CartQuantity = (props) => {

    let initialCount = 1;

    useSelector(state => {
        state.products.forEach(obj => {
            if (obj.id === props.id) {
                initialCount = obj.quantity;
            }
        })
    })


    const [count, setCount] = useState(initialCount)
    const dispatch = useDispatch()
    const divRef = useRef(0)

    const minus = () => {
        if (count > 1) {
            setCount(count - 1)
            dispatch({ type: actionTypes.REM_QUANT, value: props.id })
        }
        else if (count === 1) {
            dispatch({ type: actionTypes.REM_ITEM, value: props.id })
        }
    }

    const plus = () => {
        if (count < 5) {
            setCount(count + 1);
            dispatch({ type: actionTypes.ADD_QUANT, value: props.id })
        }
    }

    return (
        <div ref={divRef} className={styles.cartQuantity}>
            <span onClick={minus} className={styles.minus}>-</span>
            <span ref={divRef} className={styles.quantity}>{count}</span>
            <span onClick={plus} className={styles.plus}>+</span>
        </div>
    )
}

export default CartQuantity
