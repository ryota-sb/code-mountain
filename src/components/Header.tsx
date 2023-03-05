import Link from "next/link";

export default function Header() {
  const menus = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Product", link: "/product" },
    { name: "Contact", link: "/contact" },
  ];
  return (
    <div className="my-6 mx-8 flex items-center justify-between">
      <h1 className="text-3xl">Code Mountain</h1>
      <ul className="flex gap-20 text-xl">
        {menus.map((menu) => (
          <Link href={menu.link}>{menu.name}</Link>
        ))}
      </ul>
      <div></div>
    </div>
  );
}
