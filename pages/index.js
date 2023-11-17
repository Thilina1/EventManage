import Head from "next/head";
import Nav from "../components/Nav";
import HomeSection from "../components/HomeSection";
import Footer from "../components/Footer";
import HomeContent from "../components/homeContent";


export default function Home() {
	return (
		<>
			<Head>
				<title>EventManager</title>			
			</Head>
			<main className='h-[100vh] home'>
				<Nav />
				<HomeContent/>
				<HomeSection />
				<Footer />
			</main>
		</>
	);
}
