import React from 'react'

const Minus = (props) => {
    const {countDown} = props

    return (
        <div>
            <button onClick = {countDown}>Subtract One</button>
        </div>
    )
}

export default Minus