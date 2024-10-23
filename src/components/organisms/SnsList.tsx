import Image from "next/image";

const socialLinks = [
  {
    href: "https://x.com/Orfool",
    src: "/twitter.png",
    alt: "Twitterアイコン",
  },
  {
    href: "https://www.facebook.com/profile.php?id=100063121844470",
    src: "/facebook.png",
    alt: "Facebookアイコン",
  },
  {
    href: "https://page.line.me/912xaqmj?oat_content=url&openQrModal=true",
    src: "/line.png",
    alt: "LINEアイコン",
  },
];

export default function SnsList() {
  return (
    <ul className="hidden sm:flex">
      {socialLinks.map((link) => (
        <li key={link.alt} className="px-2">
          <a target="_blank" href={link.href} rel="noopener noreferrer">
            <Image src={link.src} width={35} height={35} alt={link.alt} />
          </a>
        </li>
      ))}
    </ul>
  );
}
