import Link from "next/link";

export default function Header() {
  const menus = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Product", link: "/product" },
    { name: "Contact", link: "/contact" },
  ];
  return (
    <div className="flex items-center justify-around px-8 py-6">
      <h1 className="text-3xl">Code Mountain</h1>
      <ul className="flex gap-20 text-xl">
        {menus.map((menu) => (
          <Link href={menu.link}>{menu.name}</Link>
        ))}
      </ul>
      <h1 className="text-3xl text-black">Code Mountain</h1>
    </div>
  );
}
