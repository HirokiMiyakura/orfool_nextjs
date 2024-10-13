'use client';

// import Link from 'next/link';
import { useState } from 'react';
import MenuList from './organisms/MenuList';
import SnsList from './organisms/SnsList';

export default function Header() {
	const [open, setOpen] = useState(false);
	const onClickOpen = () => {
		setOpen(true);
	};
	const onClickClose = () => {
		setOpen(false);
	};

	return (
		<>
			<header className="w-full max-w-screen-xl mx-auto flex justify-between items-center flex-nowrap py-10">
				<h1 className="text-4xl font-extrabold">
					<a href="/">ORFOOL</a>
				</h1>
				<div className="block">
					<ul className="lg:flex select-none">
						<li>
							<div className="lg:hidden flex items-center h-14 w-full justify-between">
								<div className="flex px-3">
									{!open && (
										<svg
											onClick={onClickOpen}
											xmlns="http://www.w3.org/2000/svg"
											className="w-5"
											aria-hidden="true"
											focusable="false"
											data-prefix="fas"
											role="img"
											viewBox="0 0 448 512"
										>
											<path
												fill="currentColor"
												d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
											></path>
										</svg>
									)}
									{open && (
										<svg
											onClick={onClickClose}
											xmlns="http://www.w3.org/2000/svg"
											className="w-5"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fillRule="evenodd"
												d="M10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414L10 8.586z"
												clipRule="evenodd"
											/>
										</svg>
									)}
								</div>
							</div>
						</li>
						{open && <MenuList className="lg:hidden" />}
						<MenuList className="hidden lg:list-item font-extrabold" />
					</ul>
				</div>
				<SnsList />
			</header>
		</>
	);
}
