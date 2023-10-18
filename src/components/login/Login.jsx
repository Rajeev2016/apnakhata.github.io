
const Login = () => {
  return (
    
         <>
        <main className="w-full flex items-center justify-center gap-10">
          {/* main-section-left start here */}
          
          <div className="w-full max-w-2xl">
          <h1 className=" sm:text-[40px] sm:font-bold mb-4">Business hua aur bhi aasan with <span className="text-blue-800 sm:font-extrabold">अपनाKhata</span>  </h1>

  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
        Email Id
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter email"/>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
        Password
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter Password"/>
      {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
    </div>
    <div className="flex  flex-col">
    <a className="inline-block mb-3 align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a>
      
      <button className="bg-blue-500 mb-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Log In
      </button>
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Create an Account
        </button>
      
    </div>
    <div className="mt-4">
       
    </div>
  </form>
</div>
          {/* main-section-left start here */}
          <div className="main-section-left w-full h-full relative mt-16 ">
              <img src="https://media.istockphoto.com/id/1398466630/photo/bearded-man-comfortably-sitting-on-a-coach-reading-a-book-and-holding-his-dog.webp?b=1&s=170667a&w=0&k=20&c=KBTKXgPcQybX3-4JOxLIaFrgaiP_TKhiAOeRqLzOVpw=" alt="main-image" className=" w-full rounded-lg" />           
          </div>  
        </main>
        
      </>
  )
}

export default Login
