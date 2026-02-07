import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollRestoration = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instant jump avoids a distracting double-scroll when route animations are active.
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
};

export default ScrollRestoration;
