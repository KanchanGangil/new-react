import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

export default function Loading() {
    return (
        <>
            <Spinner animation="border" role="status" style={{ width: "100px", height: "100px", margin: "auto", display: "block" }}>
                <span className="visually-hidden"></span>
            </Spinner>
        </>
    )
}