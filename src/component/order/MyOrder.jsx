import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MDBDataTable } from 'mdbreact'
import Loading from '../layouts/Loading'
import MetaData from '../layouts/MetaData'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { myOrders, clearErrors } from '../../redux/action/OrderAction'

function MyOrder() {
    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error, orders } = useSelector(state => state.myOrders)
    // console.log(orders)
    useEffect(() => {
        dispatch(myOrders())
        // if (error) {
        //     alert.error(error)
        //     dispatch(clearErrors())
        // }
    }, [dispatch, alert])
    return (
        <>
            <h1>My order</h1>
        </>
    )
}

export default MyOrder