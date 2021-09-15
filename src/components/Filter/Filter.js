import React from 'react'
import styles from './Filter.module.css'
import { useDispatch } from 'react-redux'
import * as actionTypes from '../../store/actions';

const Filter = () => {
    const dispatch = useDispatch()

    return (
        <div className={styles.container} id="main">
            <div id="wrap" className={styles.wrap}>
                <aside className="span3" id="side-menu" role="navigation">
                    <ul className="list-group">
                        <button style={{ width: "200px" }}
                            type="button"
                            className="list-group-item list-group-item-action"
                            onClick={() => dispatch({ type: actionTypes.CHANGE_FILTER, value: 'All' })}>All
                            </button>
                        <button style={{ width: "200px" }}
                            type="button"
                            className="list-group-item list-group-item-action"
                            onClick={() => dispatch({ type: actionTypes.CHANGE_FILTER, value: 'New Launches' })}>
                            New Launches
                            </button>
                        <button style={{ width: "200px" }}
                            type="button"
                            className="list-group-item list-group-item-action"
                            onClick={() => dispatch({ type: actionTypes.CHANGE_FILTER, value: 'Trending' })}>Trending
                            </button>
                        <button style={{ width: "200px" }}
                            type="button"
                            className="list-group-item list-group-item-action"
                            onClick={() => dispatch({ type: actionTypes.CHANGE_FILTER, value: 'Deals' })}>Deals
                            </button>
                        {/* <button style={{ width: "200px" }}
                            type="button"
                            className="list-group-item list-group-item-action"
                            onClick={() => dispatch({ type: actionTypes.CHANGE_FILTER, value: 'Meals' })}>Meals
                            </button>
                        <button style={{ width: "200px" }}
                            type="button"
                            className="list-group-item list-group-item-action"
                            onClick={() => dispatch({ type: actionTypes.CHANGE_FILTER, value: 'Happy Meals' })}>Happy Meals
                            </button> */}
                        <button style={{ width: "200px" }}
                            type="button"
                            className="list-group-item list-group-item-action"
                            onClick={() => dispatch({ type: actionTypes.CHANGE_FILTER, value: 'Family Meals' })}>Family Meals
                            </button>
                        <button style={{ width: "200px" }}
                            type="button"
                            className="list-group-item list-group-item-action"
                            onClick={() => dispatch({ type: actionTypes.CHANGE_FILTER, value: 'Desserts' })}>Desserts
                            </button>
                        <button style={{ width: "200px" }}
                            type="button"
                            className="list-group-item list-group-item-action"
                            onClick={() => dispatch({ type: actionTypes.CHANGE_FILTER, value: 'Beverages' })}>Beverages
                            </button>
                    </ul>
                </aside>

            </div>
        </div>
    )
}


export default Filter;