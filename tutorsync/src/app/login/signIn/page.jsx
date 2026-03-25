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
          <h2 className={styles.flashlineTitle}>
            Flashline Login
          </h2>
          <form className={styles.loginForm}>
            <input
              type="text"
              placeholder="Flashline Email"
              className={styles.input}
            />

            <input
              type="password"
              placeholder="Flashline Password"
              className={styles.input}
            />

            <Link href="/user/home" type="submit" className={styles.signInButton}>
              Sign In
            </Link>
          </form>
        </div>
      </section>
    </main>
  );
}