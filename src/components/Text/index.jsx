import React from "react";

const sizeClasses = {
  txtNotoSerifTamilBold36: "font-bold font-notoseriftamil",
  txtNotoSerifTamilMedium14Gray600: "font-medium font-notoseriftamil",
  txtNotoSerifTamilBold36Gray300: "font-bold font-notoseriftamil",
  txtNotoSerifTamilBold18: "font-bold font-notoseriftamil",
  txtNotoSerifTamilRegular16Black90099: "font-normal font-notoseriftamil",
  txtNotoSerifTamilBold16: "font-bold font-notoseriftamil",
  txtNotoSerifTamilBold36Gray700: "font-bold font-notoseriftamil",
  txtNotoSerifTamilBold36Gray800: "font-bold font-notoseriftamil",
  txtNotoSerifTamilMedium18Gray600: "font-medium font-notoseriftamil",
  txtPoppinsBold32: "font-bold font-poppins",
  txtNotoSerifTamilMedium14Gray300: "font-medium font-notoseriftamil",
  txtNotoSerifTamilMedium18Gray300: "font-medium font-notoseriftamil",
  txtNotoSerifTamilMedium14GreenA700: "font-medium font-notoseriftamil",
  txtNotoSerifTamilBold30: "font-bold font-notoseriftamil",
  txtNotoSerifTamilBold16Gray800: "font-bold font-notoseriftamil",
  txtNotoSerifTamilBold24Gray800: "font-bold font-notoseriftamil",
  txtNotoSerifTamilRegular16Gray600: "font-normal font-notoseriftamil",
  txtNotoSerifTamilMedium18Yellow800: "font-medium font-notoseriftamil",
  txtNotoSerifTamilBold30Yellow800: "font-bold font-notoseriftamil",
  txtNotoSerifTamilBold18Gray800: "font-bold font-notoseriftamil",
  txtNotoSerifTamilRegular16Gray300: "font-normal font-notoseriftamil",
  txtNotoSerifTamilBold20Gray300: "font-bold font-notoseriftamil",
  txtNotoSerifTamilLight18: "font-light font-notoseriftamil",
  txtNotoSerifTamilLight18Gray800: "font-light font-notoseriftamil",
  txtNotoSerifTamilBold24: "font-bold font-notoseriftamil",
  txtArialMT6: "font-arial font-normal",
  txtNotoSerifTamilMedium18WhiteA700: "font-medium font-notoseriftamil",
  txtNotoSerifTamilMedium14Black900: "font-medium font-notoseriftamil",
  txtNotoSerifTamilBold30Gray800: "font-bold font-notoseriftamil",
  txtNotoSerifTamilBold20: "font-bold font-notoseriftamil",
  txtNotoSerifTamilBold36WhiteA700: "font-bold font-notoseriftamil",
  txtNotoSerifTamilMedium18: "font-medium font-notoseriftamil",
  txtNotoSerifTamilRegular10: "font-normal font-notoseriftamil",
  txtNotoSerifTamilRegular16: "font-normal font-notoseriftamil",
  txtNotoSerifTamilMedium14: "font-medium font-notoseriftamil",
  txtNotoSerifTamilMedium18Black900: "font-medium font-notoseriftamil",
  txtNotoSerifTamilRegular16Black900b2: "font-normal font-notoseriftamil",
  txtNotoSerifTamilMedium12: "font-medium font-notoseriftamil",
  txtNotoSerifTamilMedium10: "font-medium font-notoseriftamil",
  txtNotoSerifTamilBold18Black900: "font-bold font-notoseriftamil",
  txtNotoSerifTamilMedium14Yellow800: "font-medium font-notoseriftamil",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
