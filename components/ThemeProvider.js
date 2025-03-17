"use client"

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { useEffect, useState } from 'react';

const ThemeProvider = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <NextThemesProvider attribute="data-theme" defaultTheme="ultraviolet" enableSystem={false} themes={["ultraviolet", "greengable", "justblack", "oceanic"]}>
      {children}
    </NextThemesProvider>
  );
};

export default ThemeProvider;