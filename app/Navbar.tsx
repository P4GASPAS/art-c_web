'use client'
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import path from '@/public/logos/path.json'

const Navbar = () => {

  const [showItems, setShowItems] = useState(false)

  const handleButton = () => {
    setShowItems(!showItems)
  }

  return (
    <nav className="bg-primary-foreground absolute z-10 w-full md:static">
      <div className="flex justify-between px-4 py-4 items-center md:hidden">
        <Link href={''} className="flex items-center gap-2">
          <Image
            src={path["art-c"]}
            alt="art-c logo"
            height={48}
            width={48}
            className=""
          />
          <h1 className="text-lg font-semibold">ART-C</h1>
        </Link>
        <button type="button" className="cursor-pointer md:hidden" onClick={handleButton}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
          </svg>
        </button>
      </div>
      <div className={showItems ? "md:hidden flex justify-center text-center pb-2 animate-navShow" : "hidden"}>
        <div>
          <ul>
            <li className="my-2"><a href="">About</a></li>
            <li className="my-2"><a href="">Contact</a></li>
            <li className="my-2"><a href="">Service</a></li>
          </ul>
          <div className="flex items-center gap-2">
            <Link href={'/login'} className="bg-gray-400 px-2 py-1 rounded-lg text-white">Login</Link>
            <Link href={'/signup'} className="bg-orange-600 px-2 py-1 rounded-lg text-white">Register</Link>
          </div>
        </div>
      </div>
      <div className="hidden md:flex md:justify-around md:px-8 py-4 items-center">
          <Link href={''} className="flex items-center gap-4">
              <Image
                src={path["art-c"]}
                alt="art-c logo"
                height={54}
                width={54}
                className=""
              />
              <h1 className="text-lg font-semibold">ART-C</h1>
          </Link>
          <ul className="flex gap-8">
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="">Service</a></li>
          </ul>
          <div className="flex gap-2">
            <Link href={'/login'} className="bg-gray-400 px-2 py-1 rounded-lg text-white">Login</Link>
            <div className="bg-black h-[30px] w-[1px]" />
            <Link href={'/register'} className="bg-orange-600 px-2 py-1 rounded-lg text-white">Register</Link>
          </div>
      </div>
    </nav>
  )
}

export default Navbar