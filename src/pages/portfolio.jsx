import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header>
			<nav>
				<Link to="/portfolio/my-work">Link 1</Link>
				<a href="/portfolio/about-me">Link 2</a>
				<a href="#">Link 3</a>
			</nav>
		</header>
	);
};

const Footer = () => {
	return <footer>Hello, I am the footer</footer>;
};

const Layout = ({ children }) => {
	return (
		<div>
			<Header />
			<div>{children}</div>
			<Footer />
		</div>
	);
};

const Portfolio = () => {
	return (
		<Layout>
			<h1>About me</h1>
		</Layout>
	);
};

export default Portfolio;
