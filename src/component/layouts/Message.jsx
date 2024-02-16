import React from 'react'
import Alert from 'react-bootstrap/Alert';

export default function Message({variant,children}) {
  return (
    <>
    <Alert variant={variant}>
          {children}
        </Alert>
    </>
  )
}