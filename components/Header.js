import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <ul>
        <li>
          <Link href="/">Home </Link>
          <Link href="/about">About </Link>
          <Link href="/contact">Contact </Link>
        </li>
      </ul>
    </>
  );
};

export default Header;
