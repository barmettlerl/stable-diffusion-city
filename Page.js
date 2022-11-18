import Head from 'next/head'
import Link from 'next/link'

const Page = ({ children }) => {
	return (
		<>
			<Head>
				<title>Sankt Traumstadt</title>
				<meta name="description" content="Stable diffusion generator für die Stadt Sankt Gallen" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<nav className="navbar is-primary is-flex is-justify-content-center" role="navigation" aria-label="main navigation">
				<div className="navbar-brand">
					<a className="navbar-item" href="/">
						<img src="/Logo_Sankt_Partizipation.png" alt="Sankt Traumstadt" />
					</a>
				</div>
			</nav>
			<div className="pl-4 pr-4">
				{children}
			</div>
			<footer className="footer">
				<div className="content">
					<div className="footer__logo originate-logo">
							<a href="https://www.originate.ch" target="_blank" title="originate GmbH">
								<img className='originate-logo__ameise' src="/ameise_black.svg" alt="Logo originate" />
								<img className='originate-logo__text' src="/originate_schriftzug_black.svg" alt="originate Schriftzug" />
							</a>
					</div>
					<div className="footer__nav"><Link href="/imprint">Impressum</Link></div>
				</div>
			</footer>
		</>
	)
}

export default Page
