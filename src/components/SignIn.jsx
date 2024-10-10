import {useState } from "react"
import siginLogo from "../assets/sigin.jpg"
import validateInfo from "./utils/validate";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash} from "@fortawesome/free-regular-svg-icons"


const SignIn = () => {
    const [isSignIn, setIsSignIn] = useState(false); 

    const [password, setPassword] = useState("");
    const [type, setType] = useState('password');
    const [eyeOff, setEyeOff] = useState(true);

    const handleClick = () => {
        setIsSignIn(!isSignIn)
    }

    const handleSubmit = () =>{
      const msg = validateInfo()
    }

    const handleToggle = () => {
      if (type==='password'){
         setEyeOff(false);
         setType('text')
      } else {
         setEyeOff(true)
         setType('password')
      }
   }

  return (
    <div className='bg-[#f9a8d4] flex items-center justify-center h-[100%] '>


  <div className="h-[70%] w-[60%] bg-white flex items-center justify-evenly rounded-md shadow-2xl">

            <div className='input-section w-[40%] h-[80%] flex justify-center'>
                <form onSubmit={(e) => e.preventDefault()} className="p-4 flex flex-col justify-evenly">
                    <h1 className="font-bold text-2xl">{isSignIn ? "Sign In" : "Login"}  </h1>
                    <input className="h-[10%] rounded px-2 border-black border-b-4 focus:outline-none" type="text" placeholder="Username *" required></input>

                    {isSignIn ? 
                    <>
                    <input className="h-[10%] rounded px-2 border-black border-b-4 focus:outline-none" type="email" placeholder="Email" required></input>
                    <input className="h-[10%] rounded px-2 border-black border-b-4 focus:outline-none" type="tel" placeholder="Number *" required></input>
                    </>
                    : ""}
                    <div> <input className=" rounded px-2 border-black border-b-4 focus:outline-none" type={type} onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password *" required></input>  <FontAwesomeIcon onClick={handleToggle} icon={eyeOff ? faEyeSlash : faEye } />   </div>
                    <button className="rounded border-2 border-black p-2 font-bold bg-sky-300 hover:bg-sky-400" onClick={handleSubmit}>{isSignIn ? "Sign In" : "Login"}</button>
                    <h2 className="cursor-pointer hover:font-semibold" onClick={handleClick}>{isSignIn ? "" : "Forgot Password?"}</h2>
                    <h2 className="cursor-pointer hover:font-semibold" onClick={handleClick}>{isSignIn ? "Login?" : "New here?"}</h2>

                </form>
            
            </div>

            <div className='image w-[55%]'>
                <img src={siginLogo}/>
            </div>
  </div>
       

    </div>
  )
}

export default SignIn