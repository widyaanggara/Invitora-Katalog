import React from 'react';
import clsx from "clsx";

const Button = ({ id, title, rightIcon, leftIcon, containerClass }) => {
  return (
    <button
      id={id}
      className={clsx(
        "px-6 py-3 font-medium rounded-lg transition-all duration-300 hover:bg-[#cea642]",
        "bg-[#C0993A] text-white",
        containerClass
      )}
    >
      {leftIcon && <span className="mr-2">{leftIcon}</span>}

      {title}

      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};

export default Button;
