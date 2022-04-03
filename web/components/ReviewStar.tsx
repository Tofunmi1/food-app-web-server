import React from 'react'

interface ReviewStarProps {
  reviewStarNumber:number;  
}

export const ReviewStar = ({reviewStarNumber}:ReviewStarProps) => {

 return(
    <div className='flex flex-row'>
    <svg width="24" height="24" fill={
     reviewStarNumber == 1 || 2 || 3 || 4 || 5 ? 'orange':'none'      
    } aria-hidden="true" className="mr-1 stroke-orange-500 ">
      <path d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
 
     <svg width="24" height="24" fill={
      reviewStarNumber ==  2 || 3 || 4 || 5? 'orange': 'none' 
     } aria-hidden="true" className="mr-1 stroke-orange-500 ">
      <path d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

    <svg width="24" height="24" fill={
     reviewStarNumber == 3 || 4 || 5  ? 'orange' : 'none'
    } aria-hidden="true" className="mr-1 stroke-orange-500 ">
      <path d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
 
     <svg width="24" height="24" fill={
      reviewStarNumber ==  4 || 5  ? 'orange': 'none'
     } aria-hidden="true" className="mr-1 stroke-orange-500 ">
      <path d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
       <svg width="24" height="24" fill={
        reviewStarNumber == 5 ? 'orange': 'none'
       } aria-hidden="true" className="mr-1 stroke-orange-500 ">
      <path d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
 )
}