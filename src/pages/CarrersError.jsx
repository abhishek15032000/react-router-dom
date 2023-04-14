
import React from 'react'
import {Link,useRouteError} from 'react-router-dom';
function CarrersError() {
  const error=useRouteError(); // we will get the error messge being thrown from the loader of carrer details page.
  return (
    <div>
         <h2>Error</h2>
         <p>{error.message}</p>
         <Link to="/">Go Back to Homepage</Link>
    </div>
  )
}

export default CarrersError