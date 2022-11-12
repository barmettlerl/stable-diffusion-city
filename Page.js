
const Page = ({ children }) => {
	return (
		<>
			<nav className="navbar is-primary" role="navigation" aria-label="main navigation">
				<div className="navbar-brand">
					<a class="navbar-item" href="/">
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