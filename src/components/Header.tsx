import Link from "next/link";
import { useRouter } from "next/router";

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
    <header className="m-10 flex items-center justify-between">
      <title className="text-xl md:text-2xl lg:text-3xl">Code Mountain</title>
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
              {menu.name.slice(1)}
            </Link>
          </div>
        ))}
      </nav>
      <div className="md:hidden">メニュー</div>
    </header>
  );
}
