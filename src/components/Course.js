import React from 'react'

function Course({data}) {
  return (
    <div>
        <p>{data.id} - {data.name}</p>
    </div>
  )
}

export default Course