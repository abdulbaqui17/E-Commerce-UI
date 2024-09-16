import React from "react";
import { cn } from "../lib/Utils";

const Label = ({ className, children, ...props }) => {
  return (
    <label
      className={cn(
        "text-sm font-medium text-black dark:text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className
      )}
      {...props}
    >
      {children}
    </label>
  );
};

export { Label };
