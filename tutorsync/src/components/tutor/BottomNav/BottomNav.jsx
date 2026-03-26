import Link from "next/link";
import Image from "next/image";
import styles from "./BottomNav.module.css";

export default function BottomNav() {
  return (
    <nav className={styles.nav}>
      <Link href="/tutor/home" className={styles.navItem}>
        <div className={styles.circle}>
          <Image
            src="/home.svg"
            alt="Home"
            width={42}
            height={42}
            className={styles.icon}
          />
        </div>
      </Link>

      <Link href="/tutor/settings" className={styles.navItem}>
        <div className={styles.circle}>
          <Image
            src="/settings.svg"
            alt="Settings"
            width={42}
            height={42}
            className={styles.icon}
          />
        </div>
      </Link>
    </nav>
  );
}
