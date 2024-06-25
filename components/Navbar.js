import Link from "next/link";

export default function Navbar() {
	return (
		<nav>
			<ul>
				<li>
					<Link href="/">Inicio</Link>
				</li>
				<li>
					<Link href="/nosotros">Nosotros</Link>
				</li>
			</ul>
		</nav>
	);
}
