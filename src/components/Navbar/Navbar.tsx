import React from "react";
import { Bars3Icon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { motion } from "framer-motion";
// import { motion } from "framer-motion";
// import { Link as Link, animateScroll as scroll } from "react-scroll";

interface Props {
  openNav: () => void;
}

const Navbar: React.FC<Props> = ({ openNav }) => {
  return (
    <motion.div className="w-[100%] top-0 h-[12vh] shadow-md bg-[#27272a]">
      <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
        <h1 className="flex-[0.6] cursor-pointer text-[30px] text-white font-bold">
          <Link href={"/"}>
            <span className="text-white text-2xl md:text-3xl"> SARA</span>
          </Link>
        </h1>

        <Link href={"/male"}>
          <div className="nav-effect">Home</div>
        </Link>

        <Link href={"/female"}>
          <div className="nav-effect">About</div>{" "}
        </Link>

        <Link href={"/kids"}>
          <div className="nav-effect">Projects</div>
        </Link>

        <Link href={"/products"}>
          <div className="nav-effect">Contacts</div>
        </Link>
     
        {/* <div onClick={openNav}> */}
          <Bars3Icon className="w-[2rem]  h-[2rem] cursor-pointer text-white" />
        </div>
      {/* </div> */}
    </motion.div>
  );
};
export default Navbar;
