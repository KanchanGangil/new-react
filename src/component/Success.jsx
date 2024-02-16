import React from 'react'
import { Link } from 'react-router-dom'

function Success() {
    return (
        <>
            <h1>Ordered Successfully Complete</h1>
            <Link to="/">Shopping Continue</Link>
        </>
    )
}

export default Success