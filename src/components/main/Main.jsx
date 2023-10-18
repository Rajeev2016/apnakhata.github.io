import Signup from "../signup/Signup"

const Main = () => {
    return (
      <>
        <main className="w-full flex items-center justify-center">
          {/* main-section-left start here */}
          <div className="main-sestion-right ml-2 w-full">
              <h1 className=" sm:text-[40px] sm:font-bold">Business hua aur bhi aasan with <span className="text-blue-800 sm:font-extrabold">अपनाKhata</span>  </h1>
              {/* search box */}
              <div className="flex item-center border border-2px w-fit p-2 mt-5 ">
              <select id="CODE" className="outline-none" >
              <option value="IND +91">+91</option>
              <option value="XYZ +11">+11</option>
              </select>
                    
               <input className="outline-none w-[400px] p-3"   name="number" placeholder="Enter Your mobile number..."/>                      
               <button className="bg-pink-100 px-2 py-1 sm:px-6 sm:py-2 rounded-3xl ml-2 text-white sm:bg-blue-800">Get Started</button>
              </div>
       </div>
          {/* main-section-left start here */}
          <div className="main-section-left w-full h-full relative mt-16 ">
              <img src="https://media.istockphoto.com/id/1398466630/photo/bearded-man-comfortably-sitting-on-a-coach-reading-a-book-and-holding-his-dog.webp?b=1&s=170667a&w=0&k=20&c=KBTKXgPcQybX3-4JOxLIaFrgaiP_TKhiAOeRqLzOVpw=" alt="main-image" className=" w-full rounded-lg" />           
          </div>  
        </main>
        <Signup/>
      </>
    )
  }
  
export default Main