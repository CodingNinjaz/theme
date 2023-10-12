import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-md" };
const variants = {
  outline: {
    yellow_800: "border border-solid border-yellow-800 text-yellow-800",
    gray_300: "border border-gray-300 border-solid text-gray-300",
    gray_600: "border border-gray-600 border-solid text-gray-600",
    gray_800: "border border-gray-800 border-solid text-gray-800",
  },
  fill: {
    gray_600: "bg-gray-600 text-gray-300",
    gray_300: "bg-gray-300 text-gray-800",
    gray_800: "bg-gray-800 text-gray-300",
  },
  gradient: { gray_600_gray_800: "bg-gradient  text-gray-300" },
};
const sizes = {
  xs: "p-1.5",
  sm: "p-[9px]",
  md: "p-[13px]",
  lg: "p-[18px]",
  xl: "p-[34px] sm:px-5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  variant: PropTypes.oneOf(["outline", "fill", "gradient"]),
  color: PropTypes.oneOf([
    "yellow_800",
    "gray_300",
    "gray_600",
    "gray_800",
    "gray_600_gray_800",
  ]),
};

export { Button };
