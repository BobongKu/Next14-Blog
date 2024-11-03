"use client"
import Link from "next/link";
import Logo from "./Logo";
import { MoonIcon, SunIcon} from "../Icons";
import { useThemeSwitch } from "../Hooks/useThemeSwitch";
import { useState } from "react";
import { cx } from "@/src/utils";

const Header = () => {

  const [mode, setMode] = useThemeSwitch();
  const [click, setClick] = useState(false);

const toggle = () =>{
  setClick(!click)
}
  return (
    <header className="w-full p-6 px-5 sm:px-10 flex items-center justify-between">
        <Logo />

        <button className="inline-block sm:hidden z-50" onClick={toggle} aria-label="Hamburger Menu">
          <div className="w-6 cursor-pointer transition-all ease duration-300">
            <div className="relative">
            <span className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-gray rounded transition-all ease duration-200" 
            style={{
             transform: click ? "rotate(-45deg) translateY(0)" : "rotate(0deg) translateY(6px)"
            }}
            
            >&nbsp;</span>
            <span className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-gray rounded transition-all ease duration-200"
            style={{
              opacity: click ? 0 : 1
             }}
            >&nbsp;</span>
            <span className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-gray rounded transition-all ease duration-200"
            style={{
              transform: click ? "rotate(45deg) translateY(0)" : "rotate(0deg) translateY(-6px)"
             }}
            >&nbsp;</span>
            </div>

          </div>
        </button>

        <nav className=" w-max py-2 px-6 sm:px-8s border border-solid border-dark rounded-full font-medium capitalize  items-center flex  sm:hidden
        fixed top-4 right-1/2 translate-x-1/2 bg-gray/80 backdrop-blur-sm z-50
        transition-all ease duration-300
        "
        style={{
          top: click ? "1rem" : "-5rem"
         }}
        
        >
            <Link href="/" className="mr-2">Home</Link>
            <p>|</p>
            <Link href="/posts/all" className="mx-2">Posts</Link>
            <p>|</p>
            <Link href="/about" className="mx-2">About</Link>
            <button onClick={() => setMode(mode === "light" ? "dark" : "light")  }
            className={cx("w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1", mode === "light" ? "bg-dark text-gray" :
            "bg-gray text-dark" )}
            aria-label="theme-switcher"
            >
                {
                  mode === "light" ? <MoonIcon className={"fill-dark"} />  : <SunIcon className={"fill-dark"} />
                }
            </button>
        </nav>


        <nav className="w-max py-2 px-8 border border-solid border-dark rounded-full font-medium capitalize  items-center hidden sm:flex
        fixed top-5 right-1/2 translate-x-1/2 bg-gray/80 backdrop-blur-sm z-50">
            <Link href="/" className="mr-2">Home</Link>
            <p>|</p>
            <Link href="/posts/all" className="mx-2">Posts</Link>
            <p>|</p>
            <Link href="/about" className="mx-2">About</Link>
            <button onClick={() => setMode(mode === "light" ? "dark" : "light")  }
            className={cx("w-6 h-6 ease ml-2 flex items justify-center rounded-full p-1", mode === "light" ? "bg-dark text-gray" :
            "bg-gray text-dark" )}
            aria-label="theme-switcher"
            >
                {
                  mode === "light" ? <MoonIcon className={"fill-dark"} />  : <SunIcon className={"fill-dark"} />
                }
            </button>
        </nav>
    </header>
  )
}

export default Header;