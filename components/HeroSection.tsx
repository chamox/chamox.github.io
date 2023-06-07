"use client"

import Image from "next/legacy/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"

export default function HeroSection() {
  return (
    <section id="home">
        <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-10 sm:py-32 md:py-18 md:flex-row md:space-x-4 md:text-left">
            <div className="md:mt-2 md:w-1/2">
                <Image className="rounded-full shadow-lg" src="/profile_photo.jpg" alt="" width={300} height={300} priority={true}></Image>
            </div>
            <div className="md:mt-2 md:w-3/5">
                <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl"> Hello, I'm Samuel!</h1>
                <p className="text-lg mt-4 mb-6 md:text-2xl"> based in Santiago, CL. Working towards creating software that makes life easier and more meaningful</p>
                <Link
                to="projects"
                className="text-neutral-100 font-semibold px-6 py-3 bg-purple-800 rounded shadow hover:bg-purple-900"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                >
                    Projects
                </Link>
            </div>
        </div> 
        <div className="flex flex-row items-center text-center justify-center ">
        <Link
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            >
            <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>      
    </section>
  )
}
