import React from "react";
import { twMerge } from "tailwind-merge";

const Button = (
    {
  children,
  variant = "filled",
}: {
  children: React.ReactNode;
  variant?: "filled" | "outlined";
}) => {
  return (
    <button 
        className={twMerge("flex w-full items-center justify-center rounded-lg px-[24px] py-[9px] text-white lg:block lg:px-[43px] lg:py-[18px]",
        variant === "filled" ? "bg-primary" : "border-primary border-[2px] bg-transparent hover:bg-[#503899]")}>      
        
        <span className="text-15 lg:text-20 text-white">
        {children}
        </span>
    </button>
  );
};

export default Button;
