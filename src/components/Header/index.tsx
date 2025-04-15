"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import getColors from "@/utils/colors";
import { usePathname } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

const Header = ({ children }: Props) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const pathname = usePathname();
  const colors = getColors(pathname);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos <= 100);
      setPrevScrollPos(currentScrollPos);
    };

    const handleScrollPosition = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScrollPosition);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScrollPosition);
    };
  }, [prevScrollPos]);

  return (
    <header
      className={cn(
        `w-full fixed max-w-screen z-20 top-0 py-2 bg-primary text-background ${colors?.hover} transition-all ease-in-out duration-300 ${colors?.color}`,
        {
          [`${colors?.bgColor}`]: visible,
          ["-translate-y-full"]: !visible,
        }
      )}
      style={{
        backgroundColor:
          scrollPosition > 100 ? "rgba(0, 0, 0, 1)" : "",
        color:
          scrollPosition > 100 ? "rgba(255, 255, 255, 1)" : "",
      }}
    >
      {children}
    </header>
  );
};

export default Header;
