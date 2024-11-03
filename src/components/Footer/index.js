"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { DribbbleIcon, GithubIcon, LinkedinIcon, TwitterIcon } from "../Icons";
import Link from "next/link";
import siteMetadata from "@/src/utils/siteMetaData";

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <footer className="">
      <div className="dark:text-light flex justify-center text-dark w-full border-t mt-16 md:mt-24 font-medium text-sm py-4 px-8">
        <span className="text-center">
          &copy;2024 bobong. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
