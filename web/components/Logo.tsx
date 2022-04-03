import React from 'react'
import food from '../utils/food-logo.svg'
import Image from 'next/image'

type Props = {
  height?:number;
  width?:number;
}

const Logo = ({height, width}:Props) => {
  return (
    <div className='flex flex-row items-center justify-center'>
      <Image src={food} alt="logo" height={height} width={width} /> 
    </div>
  )
}
export default Logo