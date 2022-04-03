import React, { FC, useEffect, useState } from 'react'
import Image from 'next/image'
import { useFoodQuery, useFoodsQuery } from '../src/generated/graphql'
import { withUrqlClient } from 'next-urql'
import { createUrqlClient } from '../urql/createUrqlClient'
import FoodCardList from '../components/FoodCardList'
import { FoodCardProps  } from '../components/FoodCard'
import { FilterField } from '../components/Filter'
import { FoodArrayObj } from '../components/utils/array'

type category = FoodCardProps[]

const Menu:FC<{}> = ({}) => {
  const [resu, setResu] = useState<category>([{...FoodArrayObj}])
  const [filteredRest, setfilteredFoods] = useState<category>([{...FoodArrayObj}])
  const [{data, fetching}] = useFoodsQuery()
  const [filter, setFiltered] = useState<boolean>(false)
  
  const result = data?.foods

  const getCategoryData = (category: string) =>{
    
    let categoryData:category = []
    result?.map((res:any) =>{
      if (res.foodCategory === category && typeof res.foodImageUrl != "undefined"){
        categoryData.push(res)
      }
      
    })
    return categoryData 
  }
   const setData = () =>{
    
    let categoryData:category = []
    result?.map((res:any) =>{
      categoryData.push(res)
    })
    return categoryData 
  } 
  const res = setData()
  console.log(res)
   useEffect(()=>{
    setResu(res)
  },[])
  const FilteredList:string[] = []

  return (
    <div className='max-w-full flex items-center justify-center mt-36 bg-gray-100'>
      <div className='max-w-full flex flex-col'>
      <div className='font-Paint max-w-xl text-center flex flex-col justify-center items-center'><h1 className='text-green-500 text-8xl text-center'>Order <span className='text-orange-400'>Menu</span> </h1></div>
        <div className='max-w-full flex flex-row'>
          <div className='max-w-3xl flex flex-col p-4'>
            <div className='hidden space-y-4 lg:max-w-full border-gray-200 lg:flex lg:flex-col lg:p-2'>
                <label className="inline-flex items-center">
                  <input className="text-indigo-500 w-8 h-8 mr-2 focus:ring-indigo-400 focus:ring-opacity-25 border border-gray-300 rounded" 
                    type="checkbox" 
                    onChange={()=>{
                      setResu(res.filter(res =>{  
                       return res.foodCategory === "noodles"
                      }))
                      FilteredList.push('burger')
                      setFiltered(true)
                      for(const i in FilteredList){
                        setfilteredFoods(res.filter((res) => JSON.stringify(res).includes(FilteredList[i])))
                      }
                      console.log(FilteredList)
                      console.log(resu)
                    }}/>
                      Noodles
                 </label>
                  <label className="inline-flex items-center">
                  <input className="text-indigo-500 w-8 h-8 mr-2 focus:ring-indigo-400 focus:ring-opacity-25 border border-gray-300 rounded" 
                    type="checkbox" 
                    onChange={()=>{
                      setResu(res.filter(res => res.foodCategory === "burger"))
                      // _res = res.filter(res => res.foodCategory !== "noodles")
                      console.log(resu)
                      FilteredList.push('noodles')
                      setFiltered(true)
                      for(const i in FilteredList){
                        setfilteredFoods(res.filter((res) => JSON.stringify(res).includes(FilteredList[i])))
                      }
                      console.log(FilteredList)
                      }}/>
                      burger
                 </label>
                  </div>
          </div>
          <div className='max-w-full lg:ml-16'>
          {!fetching ? <FoodCardList foodCategory='noodles' foods={resu} filteredRest={filteredRest} filtered={filter}/>: <div>Loading......</div>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default withUrqlClient(createUrqlClient, {ssr:true})(Menu)
