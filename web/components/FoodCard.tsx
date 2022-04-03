import React,{FC} from 'react'
import Image from 'next/image'
import { ReviewStar } from './ReviewStar';
import style from '../styles/foodcard.module.scss'

export interface FoodCardProps {
  id?:number; 
  foodName:string;
  foodDescription:string;
  foodReview:number;
  foodImageUrl:string ;
  foodPrice:number | string;
  addToCart?:React.MouseEventHandler<HTMLButtonElement>;
  foodCategory?:string
}


export const FoodCard = ({foodImageUrl, foodName,foodDescription, foodReview,addToCart}:FoodCardProps) => {
  return (
    <div className='max-w-xl h-96 flex flex-col rounded-lg shadow-md'>
    <div className='object-cover w-full h-60 rounded-lg overflow-hidden max-h-xl'>
     {foodImageUrl ? <Image src={`http://${foodImageUrl}`} unoptimized={true} alt="food-image" height={200} width={340}/>
    : <Image src={`http://localhost:4000/img/istockphoto-155429377-170667a.jpg`} unoptimized={true} alt="food-image" height={200} width={340}/> 
    }
  </div> 
    <h1 className='font-normal font-Fredoka text-2xl text-left w-full pl-3'>{foodName}</h1>
    <p className='font-normal text-sm w-full mt-4 font-Oswald p-3'>{foodDescription}</p>  
    <div className='p-2 flex flex-col space-y-4 lg:flex-row lg:space-x-4'>
      <ReviewStar reviewStarNumber={foodReview}/>
      <button onClick={addToCart} className='relative bg-orange-600 h-8 w-32 font-bold text-white rounded-lg font-Fredoka text-center '>
        Add to Cart
      </button>  
    </div>

    </div>
  )
}

export const NewFoodCard = ({foodImageUrl, foodName,foodDescription, foodReview,addToCart,foodPrice}:FoodCardProps) =>{
  return(
    <div className={style.wrapper}>
     <div className={style.foodImage}>
     { foodImageUrl ?<Image src={`http://${foodImageUrl}`} unoptimized={true} alt="food-image" height={300} width={300} className="relative"/>:<div></div>}
      </div>
        <h1 className='font-normal font-Fredoka p-2'>{foodName}</h1>
        <ReviewStar reviewStarNumber={foodReview}/>
        <p className='font-normal text-sm w-full mt-4 font-Oswald p-3'>{foodDescription}</p>
      <div className={style.actionArea}>
      <h1 className='font-bold font-Fredoka p-2'>{foodPrice}</h1>
      <button onClick={addToCart} className='bg-orange-600 ml-6 h-8 w-32 font-bold text-white rounded-lg font-Fredoka text-center '>
        Add to Cart
      </button> 
      </div>
    </div>
  )
}