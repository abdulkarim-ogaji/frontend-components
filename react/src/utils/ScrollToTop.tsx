import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useGlobalContext } from "../context/globalContext";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const { dispatch } = useGlobalContext();

  useEffect(() => {
    switch (true) {
      case pathname.startsWith("/settings"):
        dispatch({ type: "HIDE_BANNER" });
        break;
      default:
        dispatch({ type: "SHOW_BANNER" });
    }
    window.scrollTo({ top: 0, left: 0 });
  }, [pathname]);

  return null;
}
