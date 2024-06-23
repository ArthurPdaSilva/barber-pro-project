"use client";
import Image from "next/image";
import { useState } from "react";
import MenuList from "./MenuList";

const MenuSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-row p-8 bg-secondary gap-7  sm:flex-col z-30 relative">
      <Image
        className="z-30 block sm:hidden cursor-pointer"
        src="/menu-button.svg"
        height={52}
        width={52}
        onClick={() => setIsOpen(!isOpen)}
        alt="menu-button"
      />
      <Image
        className="sm:mb-11"
        src="logo.svg"
        alt="Login"
        width={155}
        height={42}
      />
      <MenuList isOpen={isOpen} />
    </div>
  );
};

export default MenuSidebar;
