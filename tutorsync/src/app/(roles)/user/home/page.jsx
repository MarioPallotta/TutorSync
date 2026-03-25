import TopHeader from "@/components/user/TopHeader/TopHeader";
import BottomNav from "@/components/user/BottomNav/BottomNav";
import styles from "./page.module.css";

export default function UserHomePage() {
  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <TopHeader email="user@kent.edu" />
        <div className={styles.content}></div>
        <BottomNav />
      </section>
    </main>
  );
}