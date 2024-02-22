export const isMobile = () => {
  if (typeof navigator !== "undefined") {
    const userAgent = navigator.userAgent;

    if (userAgent.includes("iPhone") || userAgent.includes("Android")) {
      return true;
    }
  }
  return false;
};
