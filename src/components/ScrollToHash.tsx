import { useEffect } from "react";
import { useLocation } from "react-router";
export default function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1);
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else window.scrollTo({ top: 0 });
  }, [pathname, hash]);
  return null;
}
