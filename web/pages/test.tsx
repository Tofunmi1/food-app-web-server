import React, { useState } from 'react'
import { FoodCard, NewFoodCard } from '../components/FoodCard'
import Login from '../components/Login'
import Register from '../components/Register'
import { ReviewStar } from '../components/ReviewStar'
import img from '../utils/istockphoto-155429377-170667a.jpg'
type Props = {

}

const Test:React.FC = ({}:Props) => {
  const [loggedIn, setLoggedIn] = useState(true)
  const addToCart = ()=> {
    console.log('tada')
  } 
  return (
    <div className='flex flex-col items-center justify-center space-y-4 bg-gray-100'>
      {loggedIn ? <Register />: <Login />}
      <button onClick={()=>{setLoggedIn(!loggedIn)}}>Change</button>
    <ReviewStar reviewStarNumber={3}/>
      <div className='grid grid-cols-2 gap-2'>
       <NewFoodCard 
       addToCart={addToCart} 
       foodDescription=' Basiccoloring can be done by setting two attributes on the node: fill and stroke . Using fill sets the color inside'
       foodName='Lorem ispum dolor'
       foodPrice={`$${2}.00`}
       foodReview={2}
       foodImageUrl={`localhost:4000/img/istockphoto-155429377-170667a.jpg`}
       />
       <NewFoodCard 
       addToCart={addToCart} 
       foodDescription=' Basiccoloring can be done by setting two attributes on the node: fill and stroke . Using fill sets the color inside'
       foodName='Lorem ispum dolor'
       foodPrice={`$${2}.00`}
       foodReview={2}
       foodImageUrl={`localhost:4000/img/istockphoto-155429377-170667a.jpg`}
       />
    </div>
    </div>
  )
}

export default Test