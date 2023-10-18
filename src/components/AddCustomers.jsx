 
 function AddCustomers() {
  return (
    <div className="w-[100%] flex items-center justify-center">
       <div className="border border-gray-900/10 pb-12 w-1/2 p-5 rounded-sm">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">Use a Mobile Number where you can receive all Information.</p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 ">
                <div className="sm:col-span-3">
                <label htmlFor="first-name"  className="block text-sm font-medium leading-6 text-gray-900">First name</label>
                <div className="mt-2">
                    <input type="text" name="first-name" id="first-name" className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
            </div>

            <div className="sm:col-span-3">
                <label htmlFor="last-name" className="  block text-sm font-medium leading-6 text-gray-900">Last name</label>
                <div className="mt-2">
                    <input type="text" name="last-name" id="last-name"  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
            </div>

            <div className="sm:col-span-6">
                <label htmlFor="number" className="block text-sm font-medium leading-6 text-gray-900">Mobile Number</label>
                <div className="mt-2">
                    <input id="mobileNo" name="mobileNo" required  className=" p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
            </div>
            <div className="sm:col-span-6">
                <label htmlFor="number" className="block text-sm font-medium leading-6 text-gray-900">Rupees</label>
                <div className="mt-2">
                    <input name="rupees" id="rupees"  className=" p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
                <div className="mt-6 flex items-center justify-end gap-x-6 ">
                <button type="button" className="text-sm font-semibold rounded-md px-3 py-2  text-gray-900 bg-red-500  hover:bg-pink-600  text-white ">Cancel</button>
                <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
         </div>
        </div>
           
        </div>
    </div>

    </div>
  )
}

export default AddCustomers