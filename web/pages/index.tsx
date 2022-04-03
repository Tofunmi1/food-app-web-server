import type {NextPage} from "next"
import Image from 'next/image'
import lemon from '../utils/lemom/lemon6.jpg'
import { withUrqlClient } from "next-urql"
import { createUrqlClient } from "../urql/createUrqlClient"

const Home:NextPage = ({ }) => {
  return (
    <div className="flex flex-row max-w-full">
    <div className="flex flex-row items-center max-w-full from-orange-300 to-white">
      <div className=" space-y-4 p-44 max-w-5xl flex flex-col justify-center items-center">
        <h1 className="font-Paint text-6xl text-green-600 font-extrabold">FRESH JUICE</h1>
        <div className="font-Fredoka text-6xl">Good for health</div>
        <p className="font-normal">Your body needs that ice cold treat.Putting a summary twist to your drinks. 
          Look no further for refreshing summer drinks. DroolWorthy refreshing drinks right here. Right now</p>
      </div>
      <div className="p-2">
        <Image src={lemon} height={700} width={700}/>
      </div>
   </div>
   <div className="bg-hero-pattern max-w-full">
  </div>
   </div> 
  )
}

export default withUrqlClient(createUrqlClient, {ssr:true})(Home)
