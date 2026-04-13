"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import styles from "./TopHeader.module.css";

export default function TopHeader({ isEditing, onEdit, onExitEdit }) {
  const { data: session } = useSession();
  const email = session?.user?.email ?? "user@kent.edu";

  const handleClick = () => {
    if (isEditing) {
      onExitEdit?.();
    } else {
      onEdit?.();
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Image
          src="/kentstate.png"
          alt="Kent State Logo"
          width={54}
          height={54}
          className={styles.logo}
        />
      </div>

      <div className={styles.center}>
        <Image
          src="/personwhite.svg"
          alt="User"
          width={38}
          height={38}
          className={styles.userIcon}
        />
        <p className={styles.email}>{email}</p>
      </div>
    </header>
  );
}
