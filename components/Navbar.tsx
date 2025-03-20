import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className = "flexBetween max-container padding-container relative z-30 py-5">
        <Link href="/">
            <Image src="/BB logo.png" alt = "logo" width={125} height= {125} />
        </Link>
        
        <ul className="hidden h-full gap-12 lg:flex">
            {NAV_LINKS.map((link) => (
                <li key={link.href}>
                    <Link href={link.href} className = "regular-16 text-grey-50 flexCenter cursor-pointer pb-1.5 transition-all hover: font-bold">{link.label}</Link>
                </li>
            ))}

        </ul>
    </nav>
  )
}

export default Navbar