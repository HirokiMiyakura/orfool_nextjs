import BoldImageFromRight from '@/components/atoms/BoldImageFromRight';
import EnTitle from '@/components/atoms/EnTitle';
import EnTitleCenter from '@/components/atoms/EnTitleCenter';
import GoogleMap from '@/components/atoms/GoogleMap';
import ImageFromLeft from '@/components/atoms/ImageFromLeft';
import ImageFromRight from '@/components/atoms/ImageFromRight';
import LinkButton from '@/components/atoms/LinkButton';
import MainMessage from '@/components/atoms/MainMessage';
import NormalImage from '@/components/atoms/NormalImage';
import SubMessage from '@/components/atoms/SubMessage';
import SubTitle from '@/components/atoms/SubTitle';

export default function Home() {
	return (
		<>
			<section className="w-full max-w-screen-xl mx-auto py-48">
				<MainMessage>
					Support
					<br />
					Your Challenge
				</MainMessage>
				<SubMessage>
					あなたの
					<span className="text-6xl text-teal-300 font-extrabold">挑戦</span>
					を応援します。
				</SubMessage>
			</section>
			<BoldImageFromRight src="/1.jpg" alt="テスト" />
			<section className="flex w-full max-w-screen-xl justify-between items-center mx-auto py-60">
				<div className="w-3/5">
					<EnTitle>ABOUT</EnTitle>
					<SubTitle>私たちの技術、あなたの未来</SubTitle>
					<p className="leading-loose">
						技術の進化は絶えません。
						<br />
						私たちは、最新のウェブマーケティング戦略とホームページ制作技術を駆使して、
						<br />
						あなたのビジネスを次のレベルへと押し上げます。
						<br />
						私たちの知識と経験が、あなたのビジョンを具現化します。
					</p>
					<LinkButton src="/about">詳しくはこちら →</LinkButton>
				</div>
				<div className="w-2/5">
					<NormalImage src="/aboutus.png" alt="イメージ" />
				</div>
			</section>
			<ImageFromLeft src="/2.jpg" alt="テスト" />
			<section className="flex w-full max-w-screen-xl justify-between items-center mx-auto py-60">
				<div className="w-3/6">
					<EnTitle>SERVICE</EnTitle>
					<SubTitle>変革を導くウェブマーケティング</SubTitle>
					<p className="leading-loose">
						今日のデジタル時代において、革新的なウェブマーケティングは、企業が成長し続けるための鍵です。
						<br />
						私たちは、目標を達成するためのカスタマイズされた戦略を提供します。
						<br />
						SEO、SNSマーケティング、コンテンツマーケティング、PPC広告など、最新の技術と手法を駆使して目標達成へと導きます。
					</p>
					<LinkButton src="/service">詳しくはこちら →</LinkButton>
				</div>
				<div className="w-2/6">
					<NormalImage src="/service.png" alt="イメージ" />
				</div>
			</section>
			<ImageFromRight src="/3.jpg" alt="テスト" />
			<section className="py-60">
				<EnTitleCenter>WORKS</EnTitleCenter>
			</section>
			<section className="py-60">
				<EnTitleCenter>BLOGS/COLUMNS</EnTitleCenter>
			</section>
			<ImageFromLeft src="/4.jpg" alt="テスト" />
			<section className="py-60">
				<EnTitleCenter>ACCESS</EnTitleCenter>
				<GoogleMap />
			</section>
		</>
	);
}
