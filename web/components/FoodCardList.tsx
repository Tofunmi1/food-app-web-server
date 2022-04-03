import React, { useState } from 'react'
import { FoodCard, FoodCardProps, NewFoodCard } from './FoodCard'

type FooodList = FoodCardProps[]

interface FoodCardListProps{
 foods:FooodList;
 filteredRest:FooodList;
 foodCategory: string;
 filtered:boolean;
}

export default function FoodCardList({ foods,foodCategory,filteredRest,filtered }:FoodCardListProps) {
  const [filter, setFiltered] = useState(filtered)
  return (
    <div className='mt-8 p-4 lg:p-8 relative max-w-7xl bg-gray-100'>
      <div className='flex flex-col'>
      <h1 className='font-Oswald text-green-400'>{foodCategory}</h1> 
      <div className='mt-3 grid grid-cols-2 gap-10 lg:grid-cols-4'>
     {foods.map((food, idx) => {
      return(
        <NewFoodCard
          key={idx}
          addToCart={food.addToCart}
          foodName={food.foodName}
          foodPrice={food.foodPrice}
          foodReview={food.foodReview}
          foodImageUrl={food.foodImageUrl}
          foodDescription={food.foodDescription} id={food.id}/>
      )
     })}
      { filteredRest.map((food, idx) => {
      return(
        <NewFoodCard
          key={idx}
          addToCart={food.addToCart}
          foodName={food.foodName}
          foodPrice={food.foodPrice}
          foodReview={food.foodReview}
          foodImageUrl={food.foodImageUrl}
          foodDescription={food.foodDescription} id={food.id}/>
      )
     })}
     </div>
     </div>
    </div>
  )
}
