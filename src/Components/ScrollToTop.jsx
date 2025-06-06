import { useEffect } from 'react';
import { useLocation } from 'react-router';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // scroll to top on route change
  }, [pathname]);

  return null;
};

export default ScrollToTop;
