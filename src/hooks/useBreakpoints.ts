import { useEffect, useState } from 'react';
import { breakpoints, Breakpoint } from '../styles/breakpoints';

function getCurrentBreakpoint(windowSize: number): Breakpoint {
  if (windowSize < breakpoints.tablet) {
    return 'mobile';
  }
  if (windowSize < breakpoints.desktop) {
    return 'tablet';
  }
  return 'desktop';
}

export function useBreakpoints() {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>('desktop');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        const currentBreakpoint = getCurrentBreakpoint(window.innerWidth);
        setBreakpoint(currentBreakpoint);
      };

      window.addEventListener('resize', handleResize);

      handleResize();

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return breakpoint;
}
