"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./TopHeader.module.css";

export default function TopHeader({ email = "user@kent.edu", onEdit, onExitEdit }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleClick = () => {
    setIsEditing(prev => !prev); // toggle local state first

    if (isEditing) {
      onExitEdit?.(); // exit edit mode
    } else {
      onEdit?.(); // enter edit mode
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
          src="/person.svg"
          alt="User"
          width={38}
          height={38}
          className={styles.userIcon}
        />
        <p className={styles.email}>{email}</p>
      </div>

      <button className={styles.editButton} onClick={handleClick} type="button">
        {isEditing ? (
          <span className={styles.exitIcon}>✕</span>
        ) : (
          <img src="/edit.svg" alt="Edit" className={styles.icon} />
        )}
      </button>
    </header>
  );
}