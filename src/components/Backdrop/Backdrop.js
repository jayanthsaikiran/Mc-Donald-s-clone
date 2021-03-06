import React from 'react'
import styles from './Backdrop.module.css'

const backdrop = props => (
    props.show ? <div className={styles.Backdrop} style={{ backgroundColor: props.color }} onClick={props.clicked}></div> : null
)

export default backdrop