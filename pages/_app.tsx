import { AppProps } from 'next/app'
import MainLayout from '../components/MainLayout'
import { NormalizeStyles } from '../styles/normalize'

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<NormalizeStyles/>
			<MainLayout>
				<Component {...pageProps} />
			</MainLayout>
		</>
	)
}

export default App
