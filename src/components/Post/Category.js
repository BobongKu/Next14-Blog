import { cx } from "@/src/utils";
import Link from "next/link";
import React from "react";

const Category = ({ link = "#", name, active, ...props }) => {
  return (
    <Link
      href={link}
      className={cx(
        "inline-block py-1  md:py-1 px-3  md:px-3 rounded-md border-2 border-solid border-dark dark:border-gray hover:scale-105 transition-all ease duration-200 m-2",
        props.className,
        active ? "bg-dark text-light dark:bg-gray dark:text-black" : "bg-light text-dark dark:bg-dark dark:text-gray"
      )}
    >
      {name}
    </Link>
  );
};

export default Category;
