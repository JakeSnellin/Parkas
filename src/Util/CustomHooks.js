import {useEffect, useState} from 'react';
import { createContext } from 'react';
import React from 'react';
import { useContext } from 'react';

export const useMediaQuery = (query) => {
  const mediaMatch = window.matchMedia(query);
  const [matches, setMatches] = useState(mediaMatch.matches);

  useEffect(() => {
    const handler = e => setMatches(e.matches);
    mediaMatch.addEventListener('change', handler);
    return () => mediaMatch.removeEventListener('change', handler);
  });
  return matches;
};

const viewportContext = createContext({});

export const ViewportProvider = ({ children }) => {

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  // Return the width so we can use it in our components
  return (
    <viewportContext.Provider value={{ width }}>
      {children}
    </viewportContext.Provider>
  )
}

export const useViewport = () => {
  /* We can use the "useContext" Hook to acccess a context from within
     another Hook, remember, Hooks are composable! */
  const { width } = useContext(viewportContext);
  return { width }
}

/*{width > tabletBreakpoint ?  is desktop  : width > mobileBreakpoint && width <= tabletBreakpoint ?  is tablet :  is mobile} */