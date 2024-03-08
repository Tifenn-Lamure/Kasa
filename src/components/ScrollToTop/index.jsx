import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";


export default function ScrollToTop() {
  const { pathname } = useLocation();
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
        if(pathname.includes('/rent')) setScrollPosition(window.scrollY);
    };
    
    if(pathname.includes('/rent')) {
        window.scrollTo(0, 0);
    }else{
        window.scrollTo(0, scrollPosition)
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  return null;
}