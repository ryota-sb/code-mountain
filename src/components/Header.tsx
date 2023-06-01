import Link from "next/link";
import { useRouter } from "next/router";

import { useEffect } from "react";

export default function Header() {
  const router = useRouter();

  const menus = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Product", link: "/products" },
    { name: "Contact", link: "/contact" },
  ];

  // 現在のページのルートパスならtrueを返す
  const isActiveLink = (link: string): boolean => {
    const currentRoute = router.asPath;
    return currentRoute == link;
  };

  return (
    <div className="m-10 flex items-center justify-between">
      <h1 className="text-xl md:text-2xl lg:text-3xl">Code Mountain</h1>
      <ul className="hidden gap-10 text-xl md:flex lg:gap-16">
        {menus.map((menu) => (
          <li key={menu.name} className="relative">
            <Link href={menu.link} className="under-line">
              <span
                className={
                  isActiveLink(menu.link) ? "text-[#00bfff]" : undefined
                }
              >
                {menu.name[0]}
              </span>
              {menu.name.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
      <div className="md:hidden">メニュー</div>
    </div>
  );
}
