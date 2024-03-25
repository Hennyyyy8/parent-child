import styles from "@/styles/Home.module.css";
import ParenToChild from "./ParentOne";

export default function Home() {
  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
        <ParentToChild />
      </main>
    </>
  );
}
