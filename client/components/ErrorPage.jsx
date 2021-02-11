import React from 'react'
import {Link} from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div>
      <h3>There seems to be an error...</h3>
      <Link to='/'>Take me back to the Main Dashboard</Link>
    </div>
  )
}

export default ErrorPage;