"use client";

import styles from "./page.module.css";
import { isMobile as isMobileCheck } from "@/utils/isMobile";
import { isMobile as isMobileModule, isMobileResult } from "is-mobile";
import { useEffect, useMemo, useState } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isMobileResult, setIsMobileResult] = useState<isMobileResult>({ result: false, detail: null });

  useEffect(() => {
    setIsMobile(isMobileCheck());
  }, [setIsMobile]);

  useEffect(() => {
    setIsMobileResult(
      isMobileModule({
        tablet: true,
        featureDetect: true,
      })
    );
  }, [setIsMobileResult]);

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>ua-test</h1>
      <p className={styles.is_mobile}>isMobile {isMobile ? "true" : "false"}</p>
      <p className={styles.is_mobile}>(npm module) isMobile {isMobileResult.result ? "true" : "false"}</p>
      {isMobileResult?.detail && <pre className={styles.detail}>{JSON.stringify(isMobileResult.detail, null, 2)}</pre>}
    </main>
  );
}
