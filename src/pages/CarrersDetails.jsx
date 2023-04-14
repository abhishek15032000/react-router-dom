import React from 'react'
import {useParams} from 'react-router-dom';
function CarrersDetails() {
  const {id}=useParams()
  return (
    <div>CarrersDetails
        {id}
    </div>
  )
}

export default CarrersDetails