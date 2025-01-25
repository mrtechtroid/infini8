import Image from "next/image"
import Link from "next/link"
import { Twitter, Instagram, Linkedin, Facebook } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative w-full h-screen bg-white overflow-hidden">
      <img src="/rectangle-60.png" alt="Background pattern" style={{objectFit:"cover"}} />

      {/* Decorative SVGs */}
      <img src="/vector0.svg" alt="" className="absolute right-0 top-0 h-1/4" />
      <img src="/vector0.svg" alt="" className="absolute left-0 top-0 h-1/4 transform scale-x-[-1]" />
      <img
        src="/vector2.svg"
        alt=""
        // style={{layout:"fill"}}
        className="absolute left-[8.67%] top-[12.1%] w-[2.66%] h-[4.07%]"
      />

      {/* Main content container */}
      {/* <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-16"> */}
        {/* Logo and title */}
        {/* <div className="max-w-4xl mx-auto text-center"> */}
          <img src="/infin8_footer.png" alt="INFIN8 Logo" className="w-1/2 h-auto absolute top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        {/* </div> */}
        <img src="/iiit-b-logo-10.png" alt="IIIT-B Logo" className="w-[100px] h-auto absolute bottom-[4%] left-[4%] transform -translate-x-1 -translate-y-1" />
        {/* Contact section */}
        <div className="flex flex-col md:flex-row justify-between items-end  mt-8">
          {/* IIIT-B Logo */}
          <div className="mb-8 md:mb-0">
            
          </div>

          {/* Social links */}
          <div className="text-right absolute w-1/2 h-auto bottom-[10%] right-[4%]">
            <h2 className="text-4xl md:text-5xl mb-4 " style={{fontFamily: 'The Last Shuriken',color:'#000000'}}>GET IN TOUCH</h2>
            <div className="space-y-2">
              {[
                { name: "Twitter", icon: Twitter },
                { name: "Instagram", icon: Instagram },
                { name: "LinkedIn", icon: Linkedin },
                { name: "Facebook", icon: Facebook },
              ].map((social) => (
                <Link
                  key={social.name}
                  href={social.name!="LinkedIn"?`https://${social.name.toLowerCase()}.com`:`https://www.linkedin.com/company/infin8-iitb/`}
                  className="flex items-center justify-end space-x-2 text-2xl md:text-3xl font-hinaminchou hover:text-gray-600 transition-colors"
                >
                  <span>{social.name}</span>
                  <social.icon className="w-6 h-6 md:w-8 md:h-8" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      {/* </div> */}

      {/* Decorative elements */}
      <img src="/group0.svg" alt=""  className="absolute left-[29%] bottom-0 w-[15%] h-auto" />
      <img src="/group1.svg"alt=""  className="absolute left-[67%] top-[59%] w-[2%] h-auto" />
      <img src="/group2.svg"alt=""  className="absolute left-[88%] top-[70%] w-[2%] h-auto" />
      <img src="/group3.svg"alt=""  className="absolute left-[81%] top-[55%] w-[2%] h-auto" />
      <img src="/group-399660.svg" alt=""  className="absolute left-[40%] bottom-0 w-[20%] h-auto" />
      <img src="/group4.svg" alt=""  className="absolute left-[47%] bottom-[20%] w-[5%] h-auto" />
      <img src="/group5.svg" alt=""  className="absolute left-2 bottom-[30%] w-[24%] h-auto" />
      <img src="/group6.svg" alt=""  className="absolute left-[-11%] top-[43%] w-[17%] h-auto" />
      <img src="/group7.svg" alt=""  className="absolute left-[-1%] top-[55%] w-[5%] h-auto" />
      <img src="/group8.svg" alt=""  className="absolute left-[20%] bottom-[10%] w-[3%] h-auto" />
      <img src="/group9.svg" alt=""  className="absolute left-[-1%] bottom-[20%] w-[5%] h-auto" />
    </footer>
  )
}

