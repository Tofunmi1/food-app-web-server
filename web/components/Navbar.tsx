import { withUrqlClient } from 'next-urql'
import NextLink from 'next/link'
import React from 'react'
import { useLogoutMutation, useMeQuery } from '../src/generated/graphql'
import { createUrqlClient } from '../urql/createUrqlClient'
import Logo from './Logo'

interface NavbarProps {}

const Navbar:React.FC = ({}:NavbarProps) => {
  // const [{fetching:logoutFetching },logout] = useLogoutMutation()
  // const [{data, fetching}] = useMeQuery()
  // let body = null

  // //data is Loading
  // if (fetching){
  //   //user not logged in
  // }else if (!data?.me){
  //   //user is logged in
  //   body = (
  //     <>
  //      <NextLink href="/login">
  //        <li className='font-Fredoka text-xl cursor-pointer'>Login</li>
  //       </NextLink>       
  //        <NextLink href="/register">
  //        <li className='font-Fredoka text-xl cursor-pointer'>Register</li>
  //       </NextLink>      
  //     </>
  //   )
  // } else {
  //   body = (
  //     <div>
  //    Hi {data.me.username}
  //     <li className='font-Fredoka text-xl cursor-pointer'onClick={()=>{
  //       logout()
  //     }}>Logout</li>
  //     </div>
  //   )
  // }
  return (
    <div className="w-full bg-white h-16 flex flex-row top-0 p-2 fixed z-50">
      <div className='p-1 ml-16'>
          <Logo height={50} width={150}/>
      </div>
      <div className='p-2 m-2 ml-[60rem]' >
        <ul className='space-x-7 flex flex-row'>
          <NextLink href="/">
          <li className='font-Fredoka text-xl cursor-pointer'>Home</li>
          </NextLink>
           <NextLink href="/menu">
          <li className='font-Fredoka text-xl cursor-pointer'>Menu</li>
          </NextLink>
          <NextLink href="/">
          <li className='font-Fredoka text-xl cursor-pointer'>About</li>
          </NextLink>
            {/* {body} */}
          </ul>
      </div>
      <div className='p-1 m-1 ml-6 space-x-reverse cursor-pointer'>
        <div className='w-5 h-5 rounded-[100px] bg-orange-400 relative z-10 top-1 text-white text-center'>12</div>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      </div>
    </div>
  )
}

export default withUrqlClient(createUrqlClient)(Navbar)