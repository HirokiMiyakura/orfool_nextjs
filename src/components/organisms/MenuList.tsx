import Link from 'next/link';

export default function MenuList(props: any) {
	return (
		<>
			<li className={props.className}>
				<Link
					href="/"
					className="
        flex items-center px-4 transition duration-150 ease-in-out
        text-gray-800
        hover:text-gray-400 hover:underline
        focus:text-gray-400 focus:underline
        h-12 lg:h-full
        w-full lg:w-auto
        bg-gray-100 lg:bg-transparent
        border-2 focus:border-gray-800 lg:border-0
      "
				>
					HOME
				</Link>
			</li>
			<li className={props.className}>
				<Link
					href="/about"
					className="
        flex items-center px-4 transition duration-150 ease-in-out
        text-gray-800
        hover:text-gray-400 hover:underline
        focus:text-gray-400 focus:underline
        h-12 lg:h-full
        bg-white lg:bg-transparent
        border-2 border-t-0 lg:border-0
      "
				>
					ABOUT
				</Link>
			</li>
			<li className={props.className}>
				<Link
					href="/service"
					className="
        flex items-center px-4 transition duration-150 ease-in-out
        text-gray-800
        hover:text-gray-400 hover:underline
        focus:text-gray-400 focus:underline
        h-12 lg:h-full
        bg-white lg:bg-transparent
        border-2 border-t-0 lg:border-0
      "
				>
					SERVICE
				</Link>
			</li>
			<li className={props.className}>
				<Link
					href="/blog"
					className="
        flex items-center px-4 transition duration-150 ease-in-out
        text-gray-800
        hover:text-gray-400 hover:underline
        focus:text-gray-400 focus:underline
        h-12 lg:h-full
        bg-white lg:bg-transparent
        border-2 border-t-0 lg:border-0
      "
				>
					BLOG/COLUMN
				</Link>
			</li>
			<li className={props.className}>
				<Link
					href="/contact"
					className="
        flex items-center px-4 transition duration-150 ease-in-out
        text-gray-800
        hover:text-gray-400 hover:underline
        focus:text-gray-400 focus:underline
        h-12 lg:h-full
        bg-white lg:bg-transparent
        border-2 border-t-0 lg:border-0
      "
				>
					CONTACT
				</Link>
			</li>
		</>
	);
}
