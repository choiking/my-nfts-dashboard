import styles from "../styles/Home.module.css";
import NFTGallery from "../components/nftGallery";

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <h1>NFTs Dashboard</h1>
        <NFTGallery />
      </main>
    </div>
  );
}
