"use client";
import Link from "next/link";
import { NAV_ITEMS } from "@/constants";
import { IoClose, IoMenu } from "react-icons/io5";
import classes from "./header.module.css";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function Header() {
  const pathname = usePathname();
  const [showNavbar, setShowNavbar] = useState(false);
  const [isMobileNav, setIsMobileNav] = useState(false);

  useEffect(() => {
    setShowNavbar(window.innerWidth > 895);
    setIsMobileNav(window.innerWidth < 895);
  }, []);

  const handleNavBarShow = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <header className={classes.header}>
      <Link href="/">
        <div className={classes.logo}>
          Hovhannes
          <span>Khachatryan</span>
        </div>
      </Link>

      <IoMenu className={classes.mobileNav} onClick={handleNavBarShow} />
      {showNavbar && (
        <nav className={classes.nav}>
          <div
            style={{
              textAlign: "left",
              width: "100%",
            }}
          >
            {isMobileNav && (
              <IoClose
                className={classes.mobileNav}
                onClick={handleNavBarShow}
              />
            )}
          </div>

          {NAV_ITEMS.map((item) => {
            const isActive = item.href === pathname;

            return (
              <Link
                href={item.href}
                key={item.label}
                onClick={isMobileNav ? handleNavBarShow : () => 0}
              >
                <div className={isActive ? classes.active : ""}>
                  {item.label}
                </div>
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}

export default Header;
