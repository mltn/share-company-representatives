import { useRouter } from 'next/router'

const Navbar = () => {
	const router = useRouter();
    return (
        <nav className="text-muted" style={{backgroundColor: "#1b1a18"}}>
			<div className="container">
				<p>
					<a href="https://www.sharefoundation.info/sr/o-nama/">
						<img src="/img/share-white-01.png"
							 width="240" style={{paddingTop: "5px"}}/>
					</a>
				</p>
				<div className="lang-links">
					<span className="lang-link"
						onClick={() => {
							router.push('/', '/', { locale: 'sr' })
						  }}>sr</span>
					<span className="lang-link"
						onClick={() => {
							router.push('/', '/', { locale: 'en' })
						  }}>en</span>
				</div>
			</div>
		</nav>
    );
};

export default Navbar;