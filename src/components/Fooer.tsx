// components/Footer.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
	return (
		<>
			<footer className="w-full max-w-screen-xl mx-auto flex justify-between flex-nowrap py-10">
				<div>
					<p className="text-4xl font-extrabold">ORFOOL INC.</p>
				</div>
				<div>
					<ul className="">
						<li className="mb-4">
							<Link href="/" className="font-extrabold">
								HOME
							</Link>
						</li>
						<li className="mb-4">
							<Link href="/about" className="font-extrabold">
								ABOUT
							</Link>
						</li>
						<li className="mb-4">
							<Link href="/service" className="font-extrabold">
								SERVICE
							</Link>
						</li>
						<li className="mb-4">
							<Link href="/blog" className="font-extrabold">
								BLOG/COLUMN
							</Link>
						</li>
						<li className="mb-4">
							<Link href="/contact" className="font-extrabold">
								CONTACT
							</Link>
						</li>
					</ul>
				</div>
				<div>
					{/* <p className="text-4xl font-extrabold">ORFOOL INC.</p> */}
				</div>
				<div>
					<ul>
						<li className="px-2 pb-6">
							<a href="">
								<Image
									src="/twitter.png"
									width="35"
									height="35"
									alt="アイコン"
								/>
							</a>
						</li>
						<li className="px-2 pb-6">
							<a href="">
								<Image
									src="/facebook.png"
									width="35"
									height="35"
									alt="アイコン"
								/>
							</a>
						</li>
						<li className="px-2">
							<a href="">
								<Image src="/line.png" width="35" height="35" alt="アイコン" />
							</a>
						</li>
					</ul>
				</div>
			</footer>
		</>
	);
}
