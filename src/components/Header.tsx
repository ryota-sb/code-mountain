import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const router = useRouter();

  const menus = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Products", link: "/products" },
    { name: "Contact", link: "/contact" },
  ];

  // 現在のページのルートパスならtrueを返す
  const isActiveLink = (link: string): boolean => {
    const currentRoute = router.asPath;
    return currentRoute == link;
  };

  return (
    <header className="relative flex items-center justify-between p-8">
      <h1 className="text-xl md:text-2xl lg:text-3xl">Alpine Code</h1>

      {/* PC size */}
      <nav className="hidden gap-10 text-xl md:flex lg:gap-16">
        {menus.map((menu) => (
          <div key={menu.name} className="relative">
            <Link href={menu.link} className="under-line">
              <span
                className={
                  isActiveLink(menu.link) ? "text-[#00bfff]" : undefined
                }
              >
                {menu.name[0]}
              </span>
              <span>{menu.name.slice(1)}</span>
            </Link>
          </div>
        ))}
      </nav>

      {/* Mobile size */}
      {isOpen ? (
        <motion.nav
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="fixed top-1/2 left-1/2 z-10 w-10/12 -translate-x-1/2 -translate-y-1/2 gap-10 rounded-lg bg-white/75 py-32 text-center text-xl backdrop-blur-md md:flex md:flex-col lg:gap-16"
        >
          {menus.map((menu) => (
            <div key={menu.name} className="relative my-2">
              <Link href={menu.link}>
                <div className="text-2xl text-black">
                  <span
                    className={
                      isActiveLink(menu.link) ? "text-[#00bfff]" : undefined
                    }
                  >
                    {menu.name[0]}
                  </span>
                  <span>{menu.name.slice(1)}</span>
                </div>
              </Link>
            </div>
          ))}
        </motion.nav>
      ) : null}

      <div className="md:hidden">
        <button onClick={handleClick}>
          <span
            className={`block h-0.5 w-6 rounded-sm bg-white transition-all duration-300 ease-out ${
              isOpen ? "translate-y-1 rotate-45" : "-translate-y-0.5"
            }`}
          ></span>
          <span
            className={`my-0.5 block h-0.5 w-6 rounded-sm bg-white transition-all duration-300 ease-out ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 rounded-sm bg-white transition-all duration-300 ease-out ${
              isOpen ? "-translate-y-1 -rotate-45" : "translate-y-0.5"
            }`}
          ></span>
        </button>
      </div>
    </header>
  );
}
