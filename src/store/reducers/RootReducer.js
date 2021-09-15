import * as actionTypes from '../actions'

const initialState = {
    pastOrder: {},
    orders: [], // [ [{id:1,addOns:['cheese'],price: 78..}] ]
    payment: null,
    filter: null,
    products: []
    // products: [ {id: 1, addOns: ['cheese','onion'], name: 'name',price:'price'}]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_FILTER:
            return {
                ...state,
                filter: action.value
            }

        case actionTypes.ADD_ADDONS:

            let updData = [];
            let check = true;

            state.products.forEach(obj => {
                if (obj.id === action.value.id) {
                    check = false;
                    updData.push({
                        id: obj.id,
                        addOns: obj.addOns.concat(action.value.addOns),
                        addOnPrice: parseInt(obj.addOnPrice) + parseInt(action.value.addOnPrice),
                        quantity: obj.quantity,
                        name: obj.name,
                        productPrice: parseInt(obj.productPrice)
                    })
                }
                else {
                    let data = {
                        id: obj.id,
                        addOns: obj.addOns,
                        addOnPrice: parseInt(obj.addOnPrice),
                        quantity: obj.quantity,
                        name: obj.name,
                        productPrice: obj.productPrice
                    }
                    updData.push(data)
                }
            })

            if (updData.length === 0 || check) {
                const updprod = state.products.concat(action.value)
                // console.log({ ...state, products: updprod })
                return {
                    ...state,
                    products: updprod
                }
            }
            else {
                // console.log({ ...state, products: updData })
                return {
                    ...state,
                    products: updData
                }
            }

        case actionTypes.REM_ADDONS:
            let upd = []
            let temp = []
            let addOnPrice = 0;

            state.products.forEach(obj => {
                if (obj.id === action.value.id) {
                    addOnPrice = parseInt(obj.addOnPrice);
                    // console.log(obj.addOn);
                    temp = obj.addOns.filter(item => item !== action.value.addOns[0])
                }
                else {
                    upd.push(obj)
                }
            })
            upd.push({
                id: action.value.id,
                addOns: temp,
                addOnPrice: parseInt(addOnPrice) - parseInt(action.value.addOnPrice),
                name: action.value.name,
                productPrice: action.value.productPrice,
                quantity: action.value.quantity
            })
            console.log({ ...state, products: upd })
            return {
                ...state,
                products: upd
            }

        case actionTypes.ADD_QUANT:
            let tempProducts = []

            state.products.forEach(obj => {
                if (obj.id === action.value) {
                    tempProducts.push({
                        id: obj.id,
                        name: obj.name,
                        addOns: obj.addOns,
                        addOnPrice: parseInt(obj.addOnPrice),
                        productPrice: obj.productPrice,
                        quantity: obj.quantity + 1
                    })
                }
                else {
                    tempProducts.push(obj)
                }
            })

            console.log({ ...state, products: tempProducts })
            return {
                ...state,
                products: tempProducts
            }

        case actionTypes.REM_QUANT:
            let quantTempProducts = []

            state.products.forEach(obj => {
                if (obj.id === action.value) {
                    quantTempProducts.push({
                        id: obj.id,
                        name: obj.name,
                        addOns: obj.addOns,
                        addOnPrice: parseInt(obj.addOnPrice),
                        productPrice: obj.productPrice,
                        quantity: obj.quantity - 1
                    })
                }
                else {
                    quantTempProducts.push(obj)
                }
            })

            // console.log({ ...state, products: quantTempProducts })
            return {
                ...state,
                products: quantTempProducts
            }

        case actionTypes.REM_ITEM:
            let modified = state.products.filter(obj => obj.id !== action.value)
            return {
                ...state,
                products: modified
            }

        case actionTypes.REM_ALL:
            return {
                ...state,
                products: []
            }

        case actionTypes.UPD_PAY:
            return {
                ...state,
                payment: action.value
            }

        case actionTypes.UPD_ORD:
            const tempData = state.orders;
            tempData.push(action.value)
            // console.log(typeof action.value)
            // console.log({ ...state, orders: tempData })
            return {
                ...state,
                orders: tempData,
                pastOrder: state.products,
                products: []
            }

        default: return state;
    }
}

export default reducer;