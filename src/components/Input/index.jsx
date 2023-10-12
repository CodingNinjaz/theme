import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  fill: {
    white_A700: "bg-white-A700 text-gray-600",
    gray_300: "bg-gray-300 text-gray-600",
    blue_gray_50: "bg-blue_gray-50 text-gray-800",
    gray_600: "bg-gray-600 text-gray-300",
  },
  outline: {
    gray_300: "border border-gray-300 border-solid",
    gray_600: "border border-gray-600 border-solid text-gray-600",
  },
};
const shapes = { round: "rounded" };
const sizes = {
  xs: "pb-3 pt-[9px] px-[9px]",
  sm: "pb-2 pt-2.5 px-2",
  md: "pb-3.5 pl-3.5 pr-[11px] pt-4",
  lg: "p-[18px]",
  xl: "p-[21px] sm:px-5",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "",
      size = "",
      variant = "",
      color = "",
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${wrapClassName} 
              ${shapes[shape] || ""} 
              ${variants[variant]?.[color] || ""} 
              ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            onChange={handleChange}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  },
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "white_A700",
    "gray_300",
    "blue_gray_50",
    "gray_600",
    "gray_300",
    "gray_600",
  ]),
};

export { Input };
