"use client";
import React, { useEffect, useState } from 'react'
import getColors from "@/utils/colors";
import { usePathname } from "next/navigation";
// import NavbarLogo from "../../../public/icons/YD-logo.svg";
import Image from 'next/image';
const NavLogo = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const pathname = usePathname();
  const colors = getColors(pathname);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos == 100);
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

    // <NavbarLogo className="lg:mt-3 h-12 w-40  " fill="white" style={{

    //   fill: scrollPosition > 100 ? `white` : `${colors?.fillcolor}`,
    // }} />

    <Image src="/icons/YD-logo.jpg" alt='Company Logo' width="50" height="50"  style={{

        fill: scrollPosition > 100 ? `white` : `${colors?.fillcolor}`,
      }} />
  )
}

export default NavLogo;