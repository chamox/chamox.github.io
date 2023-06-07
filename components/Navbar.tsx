"use client";

import { useState } from "react"

export default function Navbar() {
    interface NavItem {
        label: string
        page: string
      }
      
      const NAV_ITEMS: Array<NavItem> = [
        {
          label: "Home",
          page: "home",
        },
        {
          label: "About",
          page: "about",
        },
        {
          label: "Projects",
          page: "projects",
        },
      ]


const [navbar, setNavbar] = useState(false)
      
  return (
    <header className="w-full mx-auto  px-4 sm:px-20 fixed top-0 z-50 shadow bg-white dark:border-b dark:border-stone-600">
        
        <div className="justify-between md:items-center md:flex">
            <div>
                <div className="md:py-5 md:block">
                    <h2 className="text 2xl font-bold">Samuel Zúñiga</h2>
                </div>
                
            </div>
            <div className="md:flex md:space-x-6">
                {NAV_ITEMS.map((item, idx) => {
                    return <a key={idx}>{item.label}</a>                    
        })}
            </div>
        </div>
    </header>
    
  )
}
