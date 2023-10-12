import React from "react";

import { Img, Input, Text } from "components";

import { CloseSVG } from "../../assets/images";

const Header1 = (props) => {
  const [grouptwentyonevalue, setGrouptwentyonevalue] = React.useState("");

  return (
    <>
      <header className={props.className}>
        <Img
          className="h-12 md:ml-[0] ml-[100px] md:mt-0 my-[15px]"
          src="images/img_fulllogo_gray_300.svg"
          alt="fulllogo"
        />
        <div className="h-12 md:h-16 md:ml-[0] ml-[116px] md:mt-0 my-4 relative w-[59%] md:w-full">
          <Input
            name="groupTwentyOne"
            placeholder="Search a Product...|"
            value={grouptwentyonevalue}
            onChange={(e) => setGrouptwentyonevalue(e)}
            className="!placeholder:text-gray-300 !text-gray-300 font-medium font-notoseriftamil leading-[normal] p-0 text-center text-lg tracking-[0.54px] w-full"
            wrapClassName="flex inset-y-[0] my-auto right-[0] rounded-md w-[78%]"
            suffix={
              grouptwentyonevalue?.length > 0 ? (
                <CloseSVG
                  className="cursor-pointer h-6 ml-[35px] left-[3%] absolute my-0.5 inset-y-[4%]"
                  onClick={() => setGrouptwentyonevalue("")}
                  fillColor="#e2e2e2"
                  height={24}
                  width={24}
                  viewBox="0 0 24 24"
                />
              ) : (
                <Img
                  className="cursor-pointer h-6 ml-[35px] left-[3%] absolute my-0.5 inset-y-[4%]"
                  src="images/img_search.svg"
                  alt="search"
                />
              )
            }
            shape="round"
            color="gray_300"
            size="sm"
            variant="outline"
          ></Input>
          <div className="absolute bg-gray-300 flex flex-row h-full inset-y-[0] items-start justify-between left-[0] my-auto p-2 rounded-bl rounded-tl w-[24%]">
            <Text
              className="ml-[18px] mt-0.5 text-gray-600 text-lg tracking-[0.54px]"
              size="txtNotoSerifTamilMedium18Gray600"
            >
              All Categories
            </Text>
            <Img
              className="h-7 mr-3.5 mt-0.5"
              src="images/img_arrowdown.svg"
              alt="arrowdown"
            />
          </div>
        </div>
        <div className="bg-blue_gray-100 flex flex-col items-center justify-start md:ml-[0] ml-[33px] md:mt-0 my-[15px] p-[5px] rounded-[25px] w-[6%] md:w-full">
          <div className="flex flex-row gap-[7px] items-end justify-center mb-1 w-[74%] md:w-full">
            <div className="md:h-7 h-9 relative w-[45%]">
              <div className="absolute md:h-7 h-[35px] inset-[0] justify-center m-auto w-full">
                <Img
                  className="absolute bottom-[0] h-7 left-[0] w-[27px]"
                  src="images/img_cart.svg"
                  alt="cart"
                />
                <div className="absolute bg-gray-800 border border-gray-300 border-solid h-5 right-[0] rounded-[50%] top-[0] w-5"></div>
              </div>
              <Text
                className="absolute right-[18%] text-gray-300 text-sm top-[0] tracking-[0.42px]"
                size="txtNotoSerifTamilMedium14Gray300"
              >
                3
              </Text>
            </div>
            <Text
              className="mt-[5px] text-gray-600 text-lg tracking-[0.54px]"
              size="txtNotoSerifTamilMedium18Gray600"
            >
              List
            </Text>
          </div>
        </div>
        <div className="border border-gray-300 border-solid flex flex-row items-center justify-center mb-[18px] md:ml-[0] ml-[9px] mr-[100px] md:mt-0 mt-3.5 p-[7px] rounded-md w-[8%] md:w-full">
          <Img
            className="h-7 ml-0.5"
            src="images/img_user_gray_300.svg"
            alt="user"
          />
          <Text
            className="mb-[3px] ml-2.5 text-gray-300 text-lg tracking-[0.54px]"
            size="txtNotoSerifTamilMedium18Gray300"
          >
            Chetan
          </Text>
          <Img
            className="h-[18px] ml-[13px] mr-[7px]"
            src="images/img_arrowdown_gray_300.svg"
            alt="arrowdown_One"
          />
        </div>
      </header>
    </>
  );
};

Header1.defaultProps = {};

export default Header1;
