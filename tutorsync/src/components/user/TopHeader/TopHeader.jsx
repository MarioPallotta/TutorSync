import Image from "next/image";
import styles from "./TopHeader.module.css";

export default function TopHeader({ email = "user@kent.edu", onClose }) {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Image
          src="/kentstate.png" // or use your png if that's what you have
          alt="Kent State Logo"
          width={54}
          height={54}
          className={styles.logo}
        />
      </div>

      <div className={styles.center}>
        <Image
          src="/person.svg" // put your user icon file in /public
          alt="User"
          width={38}
          height={38}
          className={styles.userIcon}
        />
        <p className={styles.email}>{email}</p>
      </div>

      <button className={styles.closeButton} onClick={onClose} type="button">
        ✕
      </button>
    </header>
  );
}