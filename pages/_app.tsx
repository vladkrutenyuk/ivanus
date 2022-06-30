import { GetStaticProps } from 'next'
import { AppProps } from 'next/app'
import MainLayout from '../components/MainLayout'
import { NavBarItem } from '../components/NavBar'
import { NormalizeStyles } from '../styles/normalize'

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<>
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
