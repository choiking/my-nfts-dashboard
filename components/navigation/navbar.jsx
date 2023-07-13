import styles from "../../styles/Navbar.module.css";
export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<a href="https://alchemy.com/?a=create-web3-dapp" target={"_blank"}>
				<img
					src="https://uploads-ssl.webflow.com/63d4bbe756bafb75b9894c92/63f01a1963ea22041414804b_Frame%20427318983.svg"
				></img>
			</a>
		</nav>
	);
}
