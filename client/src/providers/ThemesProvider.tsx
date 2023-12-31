"use client";

import LoadingSplash from "@/components/shared/LoadingSplash";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemesProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== undefined) {
      setIsLoading(false);
    }
  }, []);

  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="white">
      {
        isLoading ? <LoadingSplash /> : (
          <div>
            <LoadingSplash loaded />
            {children}
          </div>
        )
      }
    </ThemeProvider>
  );
};
