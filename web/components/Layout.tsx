import React, { ReactNode } from 'react'
import Navbar  from './Navbar'

interface LayoutProps {
 children?: ReactNode
}

export const Layout = ({children}:LayoutProps) => {
  return (
    <div className="max-w-full flex flex-col p-0 m-0">
     <Navbar  />
     {children}
    </div>
  )
}
