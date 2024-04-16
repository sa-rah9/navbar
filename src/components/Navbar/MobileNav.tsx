import { XMarkIcon } from "@heroicons/react/16/solid";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

interface Props {
  nav: boolean;
  closeNav: () => void;
}
export default function MobileNav({ nav, closeNav }: Props) {
  const navAnimation = nav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div
      className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[100000]`}
    >
      <motion.div
        initial={{ backgroundColor: "transparent" }}
        animate={{ backgroundColor: "#27272a" }}
        transition={{ duration: 0.5 }}
        className="w-[100vw] h-[100vh] flex flex-col items-center justify-center"
      >
        <Link href={"/male"}>
          <div className="nav-effect-mobile">Home</div>
        </Link>
        <Link href={"/female"}>
          <div className="nav-effect-mobile">About</div>
        </Link>
        <Link href={"/kids"}>
          <div className="nav-effect-mobile">Projects</div>
        </Link>
        <Link href={"products"}>
          <div className="nav-effect-mobile">Contact</div>
        </Link>
      </motion.div>
      <div
        onClick={closeNav}
        className="absolute z-[100000000] cursor-pointer top-[2rem]  right-[2rem] w-[2rem] h-[2rem] text-white"
      >
        <XMarkIcon />
      </div>
    </div>
  );
}
