import { withUrqlClient } from 'next-urql'
import React from 'react'
import Register from '../components/Register'
import { createUrqlClient } from '../urql/createUrqlClient'

interface RegisterPageProps {}

const RegisterPage = ({}:RegisterPageProps) => {
  return (
    <div className='p-32 flex flex-col items-center justify-center'>
     <Register />
    </div>
  )
}

export default withUrqlClient(createUrqlClient)(RegisterPage)