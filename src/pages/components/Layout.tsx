import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

export default function Layout({ children }: React.PropsWithChildren) {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if(!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <SunIcon
          className="w-7 h-7"
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <MoonIcon
          className="w-7 h-7"
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  return (
    <>
      <Navbar />
      <main className="main-container">
        {renderThemeChanger()}
        {children}
        </main>
      <Footer />
    </>
  );
}
