import { React, useState, useRef, useEffect } from 'react'
import styles from './AddOn.module.css'
import { useDispatch } from 'react-redux'
import * as actionTypes from '../../../store/actions'

const AddOn = (props) => {

    const dispatch = useDispatch();
    const [clickedStatus, setClickedStatus] = useState(false)
    const pRef = useRef(0)


    useEffect(() => {
        if (props.addOns !== null && typeof props.addOns !== 'undefined') {
            props.addOns.forEach(addOn => {
                if (addOn === props.name) {
                    // console.log(products)
                    setClickedStatus(true)
                    pRef.current.style.backgroundColor = "#FFBC0F"
                }
            })
        }
    })

    const changeStyles = () => {
        if (clickedStatus === false) {
            setClickedStatus(true)
            pRef.current.style.backgroundColor = "#FFBC0F"

            const data = {
                id: props.productId,
                addOns: [props.name],
                addOnPrice: parseInt(props.price),
                productPrice: parseInt(props.productPrice),
                quantity: 1,
                name: props.productName
            }
            dispatch({ type: actionTypes.ADD_ADDONS, value: data })
        }
        else {
            setClickedStatus(false)
            pRef.current.style.backgroundColor = "#ffffff"
            const data = {
                id: props.productId,
                addOns: [props.name],
                addOnPrice: parseInt(props.price),
                productPrice: parseInt(props.productPrice),
                quantity: 1,
                name: props.productName
            }
            dispatch({ type: actionTypes.REM_ADDONS, value: data })
        }

    }

    return (
        <div className={styles.parent}>
            <p>
                <img alt="veg"
                    src="https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/v1591261933/NewWebsiteResource2020/Assets/Img/Veg.svg" />  {props.name}</p>

            <div className={styles.prices}
                onClick={changeStyles}>
                <p ref={pRef}
                    className={styles.addOnPrice}>₹ {props.price}</p>
            </div>
        </div >
    )
}

export default AddOn;