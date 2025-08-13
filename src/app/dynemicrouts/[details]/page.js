import React from 'react'

function Details({params}) {
  return (
    <h1>
        Name: {params.details}
    </h1>
  )
}

export default Details