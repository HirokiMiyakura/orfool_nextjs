import Link from "next/link";

type MenuItem = {
  label: string;
  href: string;
};

type MenuListProps = {
  className?: string;
  onClick?: () => void;
};

const menuItems: MenuItem[] = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "SERVICE", href: "/service" },
  { label: "WORKS", href: "/works" },
  { label: "BLOG/COLUMN", href: "/blogs" },
  { label: "CONTACT", href: "/contact" },
];

export default function MenuList({ className = "", onClick }: MenuListProps) {
  return (
    <>
      {menuItems.map((item) => (
        <li key={item.href} className={className}>
          <Link href={item.href} onClick={onClick}>
            {item.label}
          </Link>
        </li>
      ))}
    </>
  );
}
