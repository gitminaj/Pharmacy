import siginLogo from "../assets/sigin.jpg"

const SignIn = () => {
  return (
    <div className='bg-[url("./assets/siginbg.jpg")] flex items-center justify-center h-[100%] '>


  <div className="h-[70%] w-[60%] bg-white flex items-center justify-evenly rounded-md shadow-2xl">

            <div className='input-section w-[40%] h-[80%] flex justify-center'>
                <form onSubmit={(e) => e.preventDefault()} className="p-4 flex flex-col justify-evenly">
                    <h1 className="font-bold text-2xl"> Login </h1>

                    <input className="h-[15%] rounded p-2 border-black border-b-4 focus:outline-none" type="text" placeholder="Username" required></input>
                    <input className="h-[15%] rounded p-2 border-black border-b-4 focus:outline-none" type="password" placeholder="password" required></input>
                    <button className="rounded border-2 border-black p-2 font-bold bg-pink-300 hover:bg-pink-400">Login</button>
                    <h2>Forgot Password?</h2>
                    <h2>New here?</h2>

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