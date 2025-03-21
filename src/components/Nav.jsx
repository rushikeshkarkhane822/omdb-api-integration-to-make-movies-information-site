import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
function Nav() {
    const [darkmode, setdarkmode] = useState(true)
      useEffect(() => {
        if(darkmode){
            document.getElementsByTagName("html")[0].dataset.theme = "dark"
        }else{
            document.getElementsByTagName("html")[0].removeAttribute("data-theme")

        }
      }, [darkmode])
    return (
        <>
            <nav class="bg-white border-slate-200 dark:bg-slate-900">
                <div class=" flex items-center justify-between mx-auto p-4">
                    <Link to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">M InfoTech</span>
                    </Link>
                    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-slate-500 rounded-lg md:hidden hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-200 dark:text-slate-400 dark:hover:bg-slate-700 dark:focus:ring-slate-600" aria-controls="navbar-default" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                    </div>

                    <label class="inline-flex items-center cursor-pointer">
                        <input type="checkbox" onChange={()=>setdarkmode(!darkmode)}  checked={darkmode} class="sr-only peer" />
                        <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                    </label>

                </div>
            </nav>

        </>
    )
}

export default Nav