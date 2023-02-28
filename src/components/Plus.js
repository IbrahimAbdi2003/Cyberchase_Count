import React from 'react'

const Plus = (props) => {
  const {countUp} = props

  return (
    <div>
      <button onClick = {countUp}>Add One</button>
    </div>
  )
}

export default Plus