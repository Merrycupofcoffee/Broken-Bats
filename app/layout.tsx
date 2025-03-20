import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Broken Bats",
  description: "Website for Baseball team Broken Bats",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative">

        {/* Logo - Positioned Top Left */}
        <div className="absolute top-4 left-4 z-20">
          <img src="/BB logo.png" alt="Broken Bats Logo" className="h-16" />
        </div>

        {/* Navbar */}
        <nav className="relative z-10 w-full bg-black bg-opacity-60 shadow-lg">
          <ul className="flex justify-center space-x-12 py-8">
            {[
              { name: "Home", path: "/" },
              { name: "Roster", path: "/roster" },
              { name: "Schedule", path: "/schedule" },
              { name: "Gallery", path: "/gallery" },
              { name: "Training", path: "/training" },
              { name: "Contact Us", path: "/contact" },
            ].map((item) => (
              <li key={item.path}>
                <Link 
                  href={item.path} 
                  className="text-white text-lg font-medium relative transition-all hover:text-yellow-400"
                >
                  {item.name}
                  <span className="block w-0 h-1 bg-yellow-400 transition-all duration-300 hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Page Content (Children) */}
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
