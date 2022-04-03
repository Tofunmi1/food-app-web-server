import React from 'react'
import { FoodCardProps } from './FoodCard';

type category = FoodCardProps[]

interface FilterProps<T> {
 foodCategory:string;
 handleChange():React.ChangeEventHandler<HTMLInputElement>;
 result:T
}

export const FilterField = ({foodCategory, result}:FilterProps<category>) => {
  const FilterByCategory:any = (category:string) =>{
    result?.filter(res => res.foodCategory === category)
  }
  
  return (
   <div className="max-w-sm mx-auto p-8">
   <label className="inline-flex items-center">
     <input className="text-indigo-500 w-8 h-8 mr-2 focus:ring-indigo-400 focus:ring-opacity-25 border border-gray-300 rounded" 
     type="checkbox" 
     onChange={FilterByCategory(foodCategory)}
     />
     {foodCategory}
   </label>
 </div> 
   )
}
