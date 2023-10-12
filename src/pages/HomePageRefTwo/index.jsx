import React from "react";

import { Img, Text } from "components";

const HomePageRefTwoPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-start justify-start mx-auto p-[43px] md:px-10 sm:px-5 w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mb-[436px] ml-2 md:ml-[0] w-[79%] md:w-full">
          <div className="flex flex-col gap-[15px] items-start justify-start w-[53%] md:w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 uppercase"
              size="txtPoppinsBold32"
            >
              Home Page
            </Text>
            <div className="h-[2921px] relative w-full">
              <Img
                className="absolute h-[2427px] object-cover right-[0] top-[0] w-[73%]"
                src="images/img_image14.png"
                alt="imageFourteen"
              />
              <Img
                className="absolute h-[2921px] inset-y-[0] left-[0] my-auto object-cover w-[35%]"
                src="images/img_image9.png"
                alt="imageNine"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[42px] items-center justify-start md:ml-[0] ml-[35px] md:mt-0 mt-[63px] w-[18%] md:w-full">
            <Img
              className="h-[1333px] md:h-auto object-cover w-full"
              src="images/img_image20.png"
              alt="imageTwenty"
            />
            <Img
              className="h-[1117px] md:h-auto object-cover w-full"
              src="images/img_image21.png"
              alt="imageTwentyOne"
            />
          </div>
          <Img
            className="h-[2127px] sm:h-auto md:ml-[0] ml-[27px] md:mt-0 mt-[63px] object-cover w-[29%] md:w-full"
            src="images/img_image19.png"
            alt="imageNineteen"
          />
        </div>
      </div>
    </>
  );
};

export default HomePageRefTwoPage;
