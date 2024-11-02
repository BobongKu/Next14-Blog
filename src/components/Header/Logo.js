import Image from "next/image"
import Link from "next/link"
import profileImg from "@/public/profile-img.png"

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark dark:text-light">
        <span className="font-bold dark:font-semibold text-lg md:text-xl">Bobong</span>
    </Link>
  )
}

export default Logo