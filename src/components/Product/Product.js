import React, { useState } from 'react'
import styles from './Product.module.css'
import Modal from '../Modal/Modal'
import ExpandPhoto from '../ExpandPhoto/ExpandPhoto'
import AddOns from '../AddOns/AddOns'
import CartQuantity from '../CartQuantity/CartQuantity'
import { useSelector } from 'react-redux'

const Product = (props) => {

    const check = useSelector(state => {
        let length = false;
        state.products.forEach(obj => {
            if (obj.id === props.details.id) {
                length = true;
            }
        })
        return length;
    });

    const [clicked, setClicked] = useState({ add: false, image: false });

    const closeModal = () => {
        setClicked({ add: false, image: false })
    }

    const openImageModal = () => {
        setClicked({ add: false, image: true })
    }

    const openAddModal = () => {
        setClicked({ add: true, image: false })
    }

    return (
        <div className={styles.container}>
            <Modal
                show={clicked.image}
                modalClosed={closeModal}
                color="#fff">
                <ExpandPhoto
                    closeHandler={closeModal}
                    path={props.details.image} />
            </Modal>
            <Modal
                show={clicked.add}
                modalClosed={closeModal}
                color="#000">
                <AddOns
                    id={props.details.id}
                    closeHandler={closeModal}
                    price={props.details.price}
                    name={props.details.name} />
            </Modal>
            <div className={styles.image}>
                <img alt="burger"
                    src={"/images/" + props.details.image}
                    height="100" width="100"
                    onClick={openImageModal} />
            </div>
            <div className={styles.details}>
                <p><strong>{props.details.name}</strong></p>
                <p style={{ paddingTop: "10px" }}>{props.details.descr}</p>
            </div>

            <div className={styles.order}>
                <p><strong>₹{props.details.price}</strong></p>
                {check ? <CartQuantity id={props.details.id} /> : (<div><div style={{ marginTop: "10px" }} className={styles.add} onClick={openAddModal}>Add</div>
                    <p style={{ fontSize: '8px', marginTop: '3px' }}>Customizable</p></div>)}
            </div>
        </div>

    )
}

export default Product;