import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function LandingPage() {
  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <div className={styles.topSection}>
          <Image
            src="/kentstateimage.png"
            alt="Kent State University"
            width={420}
            height={170}
            className={styles.logo}
            priority
          />

          <h1 className={styles.title}>TutorSync</h1>
        </div>

        <div className={styles.bottomSection}>
          <Link href="/login/signIn" className={styles.signInButton}>
            Sign in with Flashline Email
          </Link>

          <p className={styles.subtext}>Use your university credentials</p>
        </div>
      </section>
    </main>
  );
}
