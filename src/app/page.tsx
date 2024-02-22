"use client";

import styles from "./page.module.css";
import { isMobile as isMobileCheck } from "@/utils/isMobile";
import { isMobile as isMobileModule, isMobileResult } from "is-mobile";
import {
  isMobile as isMobileReactDeviceDetect,
  isIPad13,
  isTablet,
  deviceDetect,
  deviceType,
} from "react-device-detect";
import { useEffect, useState } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isMobileReact, setIsMobileReact] = useState<boolean>(false);
  const [isMobileResult, setIsMobileResult] = useState<isMobileResult>({ result: false, detail: null });

  useEffect(() => {
    setIsMobile(isMobileCheck());
  }, [setIsMobile]);

  useEffect(() => {
    setIsMobileReact(isMobileReactDeviceDetect);
  }, [setIsMobileReact]);

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
      <h2 className={styles.sub_title}>react-device-detect</h2>
      <p className={styles.is_mobile}>isMobile {isMobileReact ? "true" : "false"}</p>
      <p className={styles.is_mobile}>isTablet {isTablet ? "true" : "false"}</p>
      <p className={styles.is_mobile}>isIPad {isIPad13 ? "true" : "false"}</p>
      <p className={styles.is_mobile}>deviceType {deviceType}</p>
      <pre className={styles.detail}>{JSON.stringify(deviceDetect(undefined), null, 2)}</pre>

      <h2 className={styles.sub_title}>utils</h2>
      <p className={styles.is_mobile}>isMobile {isMobile ? "true" : "false"}</p>

      <h2 className={styles.sub_title}>is-mobile</h2>
      <p className={styles.is_mobile}>isMobile {isMobileResult.result ? "true" : "false"}</p>
      {isMobileResult?.detail && <pre className={styles.detail}>{JSON.stringify(isMobileResult.detail, null, 2)}</pre>}
    </main>
  );
}
