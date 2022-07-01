import { AppProps } from 'next/app'
import MainLayout from '../components/MainLayout'
import { NavBarItem } from '../components/NavBar'
import { NormalizeStyles } from '../styles/normalize'
import Head from 'next/head'

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Head>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<title>IVANUS</title>
				<meta name="description" content="вану исполнилось целых 30 лет! Тут вы узнаете его биографию, про его таланты, ключевые новости и много всего интересного!" />

				{/* <!-- Facebook Meta Tags --> */}
				<meta property="og:url" content="https://ivanus.fun" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Ivan Yunitsky fan-site IVANUS-30 MEGA TURBO SUPER!!!! " />
				<meta property="og:description" content="вану исполнилось целых 30 лет! Тут вы узнаете его биографию, про его таланты, ключевые новости и много всего интересного!" />
				<meta property="og:image" content="https://ivanus.fun/preview.jpg" />

				{/* <!-- Twitter Meta Tags --> */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta property="twitter:domain" content="ivanus.fun" />
				<meta property="twitter:url" content="https://ivanus.fun" />
				<meta name="twitter:title" content="Ivan Yunitsky fan-site IVANUS-30 MEGA TURBO SUPER!!!! " />
				<meta name="twitter:description" content="Ивану исполнилось целых 30 лет! Тут вы узнаете его биографию, про его таланты, ключевые новости и много всего интересного!" />
				<meta name="twitter:image" content="https://ivanus.fun/preview.jpg" />
				<meta name="twitter:card" content="summary" />

				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />
				<meta property="og:image:type" content="image/jpg" />

				<meta property="vk:image" content="https://ivanus.fun/preview.jpg" />
			</Head>
			<NormalizeStyles/>
			<MainLayout items={navBarItems}>
				<Component {...pageProps} />
			</MainLayout>
		</>
	)
}

const navBarItems: NavBarItem[] = [
	{
		label: 'Биография',
		href: '/biography'
	},
	{
		label: 'Пресса',
		href: '/press'
	},
	{
		label: 'Автобусный тур',
		href: '/bustrip'
	},
	{
		label: 'Галерея',
		href: '/gallery'
	},
	{
		label: 'Сувениры',
		href: '/souvenirs'
	},
	{
		label: 'Special',
		href: '/special'
	},
	{
		label: 'Инфо',
		href: '/info'
	},
]

export default App
