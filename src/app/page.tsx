"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { isMobile } from "@/utils/isMobile";
import isMobileModule from "is-mobile";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>ua-test</h1>
      <p className={styles.is_mobile}>isMobile {isMobile() ? "true" : "false"}</p>
      <p className={styles.is_mobile}>isMobile {isMobileModule() ? "true" : "false"}</p>
    </main>
  );
}
