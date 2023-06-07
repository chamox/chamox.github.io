import {
    AiOutlineGithub,
    AiOutlineLinkedin,
    AiOutlineMail,
  } from "react-icons/ai"

export default function Footer() {
    const mailtoHref = "mailto:sezuniga1@uc.cl?subject=Subject&body=Description";

  return (
    
<footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0"></hr>
      <div className="mx-auto  p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
        <div className="flex flex-row items-center justify-center space-x-1 text-neutral-500 ">
          Samuel Zúñiga<a href="/" className="hover:underline"></a>
        </div>
        <div className="flex flex-row items-center justify-center space-x-2 mb-1">
          <a href="https://github.com/chamox" rel="noreferrer" target="_blank">
            <AiOutlineGithub
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 "
              size={30}
              crossOrigin=""
            />
          </a>

          <a
            href="https://www.linkedin.com/in/samuel-zuniga-avila/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 "
              size={30}
              crossOrigin=""
            />
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href={mailtoHref}
            
          >
            <AiOutlineMail
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 "
              size={30}
              crossOrigin=""
             
              
            />
          </a>
        </div>
      </div>
    </footer>


  )
}





