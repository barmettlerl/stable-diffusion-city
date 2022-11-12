import Head from 'next/head'

const Page = ({ children }) => {
	return (
		<>
			<Head>
				<title>Sankt Traum Stadt</title>
				<meta name="description" content="Stable diffusion generator für die Stadt Sankt Gallen" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<nav className="navbar is-primary" role="navigation" aria-label="main navigation">
				<div className="navbar-brand">
					<a className="navbar-item" href="/">
						<img src="/Logo_Sankt_Partizipation.png" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" />
					</a>

				</div>
			</nav>
			<div className="pl-4 pr-4">
				{children}

			</div>
		</>
	)
}

export default Page