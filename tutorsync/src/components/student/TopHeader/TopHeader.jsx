"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import styles from "./TopHeader.module.css";

export default function TopHeader({
  isEditing,
  onEdit,
  onExitEdit,
  showEdit = true,
}) {
  const { data: session } = useSession();
  const email = session?.user?.email ?? "user@kent.edu";

  const handleClick = () => {
    if (!showEdit) return;
    if (isEditing) onExitEdit?.();
    else onEdit?.();
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
          src="/person.svg"
          alt="User"
          width={38}
          height={38}
          className={styles.userIcon}
        />
        <p className={styles.email}>{email}</p>
      </div>

      {showEdit ? (
        <button
          className={styles.editButton}
          onClick={handleClick}
          type="button"
        >
          {isEditing ? (
            <span className={styles.exitIcon}>✕</span>
          ) : (
            <img src="/edit.svg" alt="Edit" className={styles.icon} />
          )}
        </button>
      ) : (
        <div className={styles.editSpacer} />
      )}
    </header>
  );
}
