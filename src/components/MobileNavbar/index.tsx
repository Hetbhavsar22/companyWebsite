"use client";
import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/According1";
import Link from "next/link";
import Hamburger from "@/public.three-horizontal-lines-icon.svg";
import { accordionItems1 } from "@/lib/constData";
import { Button } from "../ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import getColors from "@/utils/colors";
import { usePathname } from "next/navigation";
const MobileNavbar = () => {
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
    <Sheet>
      <SheetTrigger name="hamburger" aria-label="hamburger">
        <Hamburger
          className="mt-3"
          fill="white"
          style={{
            fill:
              scrollPosition > 100
                ? "rgba(255, 255, 255, 1)"
                : `${colors?.fillcolor}`,
          }}
        />
      </SheetTrigger>
      <SheetContent>
        <div className="pt-10 w-full">
          <Accordion type="single" collapsible>
            {accordionItems1.data.map((item, i) => (
              <AccordionItem key={item.value} value={item.value} className="">
                <AccordionTrigger className="">
                  <SheetClose asChild>
                    <Link
                      href={item.link.toLowerCase()}
                      title="mobile-nav-link"
                      className="text-subtitle2"
                    >
                      {item.title}
                    </Link>
                  </SheetClose>
                </AccordionTrigger>
                <AccordionContent className="py-4">
                  <ul className="flex flex-col gap-y-4">
                    {item?.content?.map((itemContent, subindex) => (
                      <li key={subindex} className="text-primary">
                        <SheetClose asChild>
                          <Link
                            title="mobile-nav-link"
                            href={`/${item.title.toLowerCase()}/${item.content[
                              subindex
                            ].toLocaleLowerCase()}`}
                          >
                            {itemContent}
                          </Link>
                        </SheetClose>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
            <div className="flex flex-col">
              <SheetClose asChild>
                <Link
                  href="/ourthinking"
                  className="text-subtitle2 py-3"
                  title="mobile-nav-link"
                >
                  OurThinking
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  href="/casestudies"
                  title="mobile-nav-link"
                  className="text-subtitle2 py-3"
                >
                  CaseStudies
                </Link>
              </SheetClose>
            </div>
            <div className="pt-4">
              <SheetClose asChild>
                <Link
                  className="pt-1"
                  title="mobile-nav-button"
                  href={"#Contact"}
                >
                  <Button
                    variant={"secondary"}
                    size={"default"}
                    className=" py-1 px-4  hover:text-background "
                  >
                    Contact Us
                  </Button>
                </Link>
              </SheetClose>
            </div>
          </Accordion>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
