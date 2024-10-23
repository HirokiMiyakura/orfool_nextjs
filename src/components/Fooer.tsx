// components/Footer.tsx
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT" },
  { href: "/service", label: "SERVICE" },
  { href: "/works", label: "WORKS" },
  { href: "/blogs", label: "BLOG/COLUMN" },
  { href: "/contact", label: "CONTACT" },
];

const socialIcons = [
  { src: "/twitter.png", alt: "Twitter", href: "" },
  { src: "/facebook.png", alt: "Facebook", href: "" },
  { src: "/line.png", alt: "LINE", href: "" },
];

export default function Footer() {
  return (
    <footer className="mx-auto block w-full max-w-screen-xl justify-between px-4 py-10 sm:flex sm:px-8 sm:py-32">
      <div className="mb-14 sm:mb-0">
        <p className="text-4xl font-extrabold">ORFOOL INC.</p>
      </div>
      <div className="mb-14 sm:mb-0">
        <ul>
          {navLinks.map((link) => (
            <li key={link.href} className="mb-4">
              <Link href={link.href} className="font-extrabold">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul className="flex sm:block">
          {socialIcons.map((icon) => (
            <li key={icon.alt} className="px-2 pb-6">
              <a href={icon.href}>
                <Image src={icon.src} width={35} height={35} alt={icon.alt} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
