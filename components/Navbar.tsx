import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"


const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex justify-around">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/roster">Roster</Link>
        </li>
        <li>
          <Link href="/schedule">Schedule</Link>
        </li>
        <li>
          <Link href="/gallery">Gallery</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
