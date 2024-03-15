import Image from "next/image";
import Link from "next/link";
import React from "react";
import DesktopLogo from "@/public/airbnb-desktop.png";
import MobileLogo from "@/public/airbnb-mobile.webp";

const Navbar = () => {
  return (
    <nav className="w-full border-b">
      <div className="flex items-center justify-between container mx-auto px-5 lg:px-10 py-5">
        <Link href="/">
          <Image
            src={DesktopLogo}
            alt="airbnb logo"
            className="w-32 hidden lg:block"
          />
          <Image
            src={MobileLogo}
            alt="airbnb logo"
            className="w-10 block lg:hidden"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
