import React, { useEffect, useState } from 'react'
import styles from './MyOrders.module.css'
import { useSelector } from 'react-redux'
import Order from './Order'

const MyOrders = () => {

    const orders = useSelector(state => state.orders)
    const [ordersData, setOrdersData] = useState([])

    useEffect(() => {
        // console.log(orders)
        orders.forEach(ordersin => {
            ordersin.forEach(order => {
                let temp = { data: [] }
                order.forEach(obj => {
                    temp.data.push({
                        name: obj.name,
                        quantity: obj.quantity,
                        addOnsPrice: obj.addOnsPrice,
                        productPrice: obj.productPrice
                    })
                })
                setOrdersData(arr => [...arr, temp])
            })
        })
    }, [orders])

    return (
        <div className={styles.container}>
            {/* {console.log(ordersData)} */}
            <h5 style={{ marginBottom: "20px" }}>My Orders</h5>
            <div className={styles.grid}>
                {ordersData.map((order,index) =>
                    <Order key={index} order={order} />
                )}
            </div>
        </div>
    )
}

export default MyOrders
