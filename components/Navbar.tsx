import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className = "flexBetween max-container padding-container relative z-30 py-5">
        <Link href="/">
            <Image src="/BB logo.png" alt = "logo" width={125} height= {125} />
        </Link>
    </nav>
  )
}

export default Navbar