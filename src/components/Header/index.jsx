import React from "react";

import { Button, Img, Text } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <Img
          className="h-12 md:ml-[0] ml-[98px] md:mt-0 my-[11px]"
          src="images/img_fulllogo_gray_300_48x175.svg"
          alt="fulllogo"
        />
        <ul className="flex sm:flex-col flex-row sm:hidden items-start justify-center md:ml-[0] ml-[497px] md:mt-0 my-[21px] w-1/5 md:w-full common-row-list">
          <li>
            <Text
              className="text-lg text-yellow-800 tracking-[0.54px]"
              size="txtNotoSerifTamilMedium18Yellow800"
            >
              Home
            </Text>
          </li>
          <li>
            <Text
              className="ml-[55px] mt-[3px] text-gray-300 text-sm hover:text-yellow-800 tracking-[0.42px]"
              size="txtNotoSerifTamilMedium14Gray300"
            >
              About US
            </Text>
          </li>
          <li>
            <Text
              className="ml-[68px] mt-[5px] text-gray-300 text-sm hover:text-yellow-800 tracking-[0.42px]"
              size="txtNotoSerifTamilMedium14Gray300"
            >
              Shop
            </Text>
          </li>
          <li>
            <Text
              className="ml-[67px] mt-[5px] text-gray-300 text-sm hover:text-yellow-800 tracking-[0.42px]"
              size="txtNotoSerifTamilMedium14Gray300"
            >
              Blog
            </Text>
          </li>
        </ul>
        <Button
          className="cursor-pointer font-medium font-notoseriftamil leading-[normal] min-w-[116px] md:ml-[0] ml-[400px] md:mt-0 my-3 text-center text-sm tracking-[0.42px]"
          shape="round"
          color="gray_300"
          size="md"
          variant="fill"
        >
          Smat Touch
        </Button>
        <Button
          className="cursor-pointer font-medium font-notoseriftamil leading-[normal] min-w-[136px] ml-5 md:ml-[0] mr-[100px] md:mt-0 my-3 text-center text-sm tracking-[0.42px]"
          shape="round"
          color="gray_300"
          size="md"
          variant="outline"
        >
          Login/Register
        </Button>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
