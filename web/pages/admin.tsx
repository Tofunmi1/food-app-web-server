import produce from 'immer';
import { withUrqlClient } from 'next-urql';
import React,{FC, useState} from 'react'
import { useAddFoodImageMutation, useCreateFoodMutation } from '../src/generated/graphql';
import { createUrqlClient } from '../urql/createUrqlClient';

interface InputProps {
 foodName:string;
 foodDescription:string;
 foodReviewStar:number;
 foodImageUrl?:string;
 foodCategory:string;
 foodPrice:number;
} 

let _file:File

type InputPropsState = InputProps []

const Admin:FC<{}> = ({}) => {
  const [,createFood] = useCreateFoodMutation() 
  const [,upload] = useAddFoodImageMutation()
  const [form, setForm] = useState<InputPropsState>([{ foodName:"",foodDescription:"",foodReviewStar:0,foodCategory:"",foodPrice:0,foodImageUrl:""}]) 
  const [file, setFile] = useState(_file)

  const handleForm = async (e:any) => {
    let foodImageUrl:string;
    foodImageUrl = `localhost:4000/img/${file.name}`
    e.preventDefault()
    await createFood({options:{...form[0], foodImageUrl}})
    await upload({picture: file}) 
    setFile(_file)
    e.target.reset()
  }
  return(
   <div className='max-w-5xl flex flex-col items-center justify-center m-20  mx-auto'>
     <h1 className='font-bold text-3xl'>Admin Page</h1>
     <div className='max-w-full flex flex-col items-center justify-center p-4'>
         {form.map((form, idx)=>{{
           return(
             <div className='max-w-full p-4' key={idx}>
               <form className='max-w-full flex flex-col items-center justify-center space-y-4 p-4' onSubmit={handleForm}>
                 <input className="appearance-none rounded-none relative block w-full px-3 py-2 border-2 border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-orange-600 focus:border-orange-600 focus:z-10 sm:text-sm"
                 placeholder='food name'
                 type="text" 
                 onChange={(e)=>{
                   const foodName = e.target.value
                   setForm(form => 
                     produce(form, v=>{
                       v[idx].foodName = foodName
                     })
                     ) 
                 }} />
                 <input className="appearance-none rounded-none relative block w-full px-3 py-2 border-2 border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-orange-600 focus:border-orange-600 focus:z-10 sm:text-sm"
                 placeholder='food category'
                 type="text" 
                 onChange={(e)=>{
                   const foodCategory = e.target.value
                   setForm(form => 
                     produce(form, v=>{
                       v[idx].foodCategory = foodCategory
                     })
                     ) 
                 }} />
                 <input className="appearance-none rounded-none relative block w-full px-3 py-2 border-2 border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-orange-600 focus:border-orange-600 focus:z-10 sm:text-sm"
                 placeholder='food description' 
                 type="text" 
                 onChange={(e)=>{
                   const foodDescription = e.target.value
                   setForm(form => 
                     produce(form, v=>{
                       v[idx].foodDescription = foodDescription
                     })
                     ) 
                 }} />
                 <input className="appearance-none rounded-none relative block w-full px-3 py-2 border-2 border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-orange-600 focus:border-orange-600 focus:z-10 sm:text-sm"
                 placeholder='food price' 
                 type="number" 
                 onChange={(e)=>{
                   const foodPrice = e.target.valueAsNumber
                   setForm(form => 
                     produce(form, v=>{
                       v[idx].foodPrice = foodPrice
                     })
                     ) 
                 }} />
                 <input className="appearance-none rounded-none relative block w-full px-3 py-2 border-2 border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-orange-600 focus:border-orange-600 focus:z-10 sm:text-sm"
                 placeholder='food review'
                 type="number" 
                 onChange={(e)=>{
                   const foodReviewStar = e.target.valueAsNumber
                   setForm(form => 
                     produce(form, v=>{
                       v[idx].foodReviewStar = foodReviewStar
                     })
                     ) 
                 }} />
                 <input type="file" placeholder='choose food image' onChange={(e:any)=>{
                   const foodImage = e.target.files[0]
                   setFile(foodImage) 
                 }} />
                 <button disabled={!form} type="submit" className="flex flex-row w-full h-10 bg-orange-600 mt-2 rounded-[8px]">
                   <span className="p-2">
                     <svg className="h-5 w-5 text-gray-200 group-hover:text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                       <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                     </svg>
                   </span>
                   <h1 className="p-2 mx-auto text-center text-white text-md font-bold">send</h1>
                 </button>

               </form>
             </div>
           )
         }})}
     </div>
  </div>
 )
}
export default withUrqlClient(createUrqlClient, {ssr:true})(Admin)