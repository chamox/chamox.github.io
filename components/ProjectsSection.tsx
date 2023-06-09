"use client";

import Image from "next/legacy/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Python utilities",
    description: "A small tutorial of how to get ride with pandas and numpy.",
    image: "/data_analysis.jpg",
    github: "https://github.com/chamox/python-utilities",
    link: "https://github.com/chamox/python-utilities/blob/master/data-preprocessing/example.ipynb",
  },
  {
    name: "MetropolitanCare Inventory",
    description: "A complete system to check ambulances inventory.",
    image: "/metropolitan_care.jpg",
    github: "https://github.com/chamox",
    link: "",
  },
  {
    name: "MyM8 app",
    description:
      "Connect with your future partners to create a startup.",
    image: "/startup.png",
    github: "https://github.com/chamox",
    link: "",
  },
]




export default function ProjectsSection() {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-purple-700 border-0 rounded"></hr>
        
      </h1>
      

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1080}
                        height={720}
                        className="rounded-xl shadow-xl hover:opacity-70"
                        priority={true}
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
      <h1 className="my-20 text-center font-bold text-4xl">For more information, you can see my CV {" "}
              
              <span className="font-bold text-purple-700">
              <a href="https://uccl0-my.sharepoint.com/:b:/g/personal/sezuniga1_uc_cl/EWa194soleFFovgPnE2YM3UBoX7LmjeOdhAdxSAR6Kaxgg?e=9KQq7S">here</a>
              </span>{" "}.</h1>
    </section>
  )
}
