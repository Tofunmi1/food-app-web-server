import React, { useState } from "react"
import { produce } from "immer"
import loadingGif from '../utils/Rolling-0.5s-39px.svg'
import Logo from "./Logo";
import Image from 'next/image'
import { useLoginMutation} from "../src/generated/graphql";
import { useRouter } from "next/router";

type Props = {

}

interface Form {
 username:string;
 password:string;
}

type FormState = Form[] 

const Login:React.FC<Props> = ({}) => {
 const router = useRouter();
 const [,login] = useLoginMutation() 
 const [form, setForm] = useState<FormState>([{username:"",password:""}])
 const [gif,setGif] = useState(false)
 const [error, setError] = useState(false)
 const [usernameError, setUsernameError] = useState("")
 const [passwordError, setPasswordError] = useState("")

 const handleForm:React.FormEventHandler<HTMLFormElement> = async (e:any)=> {
  e.preventDefault()
  setGif(true)
  e.target.reset()
  const response = await login({options: form[0]})
  if (response.data?.login.errors) {
    setError(true)
    if (response.data.login.errors[0].field === "username"){
      setUsernameError(response.data.login.errors[0].message)
    }
    else if(response.data.login.errors[0].field === "password"){
      setPasswordError(response.data.login.errors[0].message)
    } 
  } else if(response.data?.login.user){
    //worked
    router.push("/")
  }

}

 const Loading = () =>{
   return(
     <div className="mx-24">
       <Image src={loadingGif} alt="gif"height={40} width={40}/>
     </div>
   )
 } 
 return(
  <div className="max-w-5xl flex flex-col justify-center items-center space-y-2">
    <div className="flex flex-col justify-center items-center w-full">
      <Logo height={120} width={200}/>
    </div>
    <h1 className="text-center font-extrabold text-3xl">Login your account</h1> 
    <div className="flex flex-row w-full space-x-4">
     <h1 className="text-center font-bold text-1xl">Or</h1>
     <a className="text-center font-bold text-1xl text-orange-600">Sign in if you have an account</a>
    </div>
    <form onSubmit={handleForm} className="w-full">
      {form.map((form, index)=>{
        return(
          <div key={index} className="flex flex-col w-full space-y-2">
            <div className="w-full">
              {error && <div className="text-red-700 font-medium font-xl">{usernameError}</div>}
              <input id="username" name="username" type="text" required className="appearance-none rounded-none relative block w-full px-3 py-2 border-2 border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-orange-600 focus:border-orange-600 focus:z-10 sm:text-sm" placeholder="Username"
                onChange={(e)=>{
                  setUsernameError("")
                  setError(false)
                  setGif(false)
                  const username = e.target.value
                  setForm(form =>
                    produce(form, v=>{
                      v[index].username = username
                    })
                  ) 
                }}
              /> 
            </div>
            <div className="w-full">
              {error && <div className="text-red-700 font-medium font-xl">{passwordError}</div>}
              <input id="password" name="username" type="password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border-2 border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-orange-600 focus:border-orange-600 focus:z-10 sm:text-sm" placeholder="Password" 
              onChange={(e)=>{
                  setPasswordError("")
                  setError(false)
                  setGif(false)
                  const password = e.target.value
                  setForm(form =>
                    produce(form, v=>{
                      v[index].password = password
                    })
                  ) 
                }}
              /> 
            </div>  
          </div>
        )
      })}
      <button disabled={!form} type="submit" className="flex flex-row w-full h-10 bg-orange-600 mt-2 rounded-[8px]">
        <span className="p-2">
          <svg className="h-5 w-5 text-gray-200 group-hover:text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
          </svg>
        </span>
        {gif? <Loading />
        :<h1 className="p-2 mx-auto text-center text-white text-md font-bold">Click to login</h1>
      }
      </button>
      </form>
  </div>
 )
}

export default Login 