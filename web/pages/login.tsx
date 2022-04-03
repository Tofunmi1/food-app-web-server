import { withUrqlClient } from 'next-urql'
import React from 'react'
import Login from '../components/Login'
import { createUrqlClient } from '../urql/createUrqlClient'

interface LoginPageProps {}

const LoginPage = ({}:LoginPageProps) => {
  return (
    <div className='p-32 flex my-auto flex-col items-center justify-center'>
     <Login /> 
   </div> 
)
}

export default withUrqlClient(createUrqlClient)(LoginPage)