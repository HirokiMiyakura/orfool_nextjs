import Image from 'next/image';

export default function SnsList() {
	return (
		<>
			<ul className="flex">
				<li className="px-2">
					<a href="">
						<Image src="/twitter.png" width="35" height="35" alt="アイコン" />
					</a>
				</li>
				<li className="px-2">
					<a href="">
						<Image src="/facebook.png" width="35" height="35" alt="アイコン" />
					</a>
				</li>
				<li className="px-2">
					<a href="">
						<Image src="/line.png" width="35" height="35" alt="アイコン" />
					</a>
				</li>
			</ul>
		</>
	);
}
