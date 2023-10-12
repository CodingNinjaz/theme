import React from "react";

import { Img, Text } from "components";

const HomePageRefOnePage = () => {
  return (
    <>
      <div className="bg-white-A700 font-poppins h-[3508px] mx-auto p-[43px] md:px-10 sm:px-5 relative w-full">
        <div className="absolute flex flex-col gap-[53px] items-center justify-start right-[5%] top-[22%] w-[33%]">
          <div className="sm:h-[547px] md:h-[780px] h-[959px] relative w-full">
            <Img
              className="absolute bottom-[0] h-[427px] left-[28%] object-cover w-[35%]"
              src="images/img_image13.png"
              alt="imageThirteen"
            />
            <Img
              className="absolute h-[547px] inset-x-[0] mx-auto object-cover top-[0] w-full"
              src="images/img_image11.png"
              alt="imageEleven"
            />
            <div className="absolute bottom-[3%] flex md:flex-col flex-row md:gap-10 inset-x-[0] items-center justify-between mx-auto w-full">
              <Img
                className="h-[371px] md:h-auto object-cover"
                src="images/img_image12.png"
                alt="imageTwelve"
              />
              <div className="flex flex-col items-center justify-start">
                <Img
                  className="h-[369px] md:h-auto object-cover w-full"
                  src="images/img_image15.png"
                  alt="imageFifteen"
                />
              </div>
            </div>
          </div>
          <Img
            className="h-[551px] md:h-auto object-cover w-full"
            src="images/img_image29.png"
            alt="imageTwentyNine"
          />
        </div>
        <div className="absolute flex flex-col md:gap-10 gap-[136px] items-center justify-start left-[1%] top-[1%] w-[17%]">
          <div className="flex flex-col gap-[35px] items-start justify-start w-[98%] md:w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 uppercase"
              size="txtPoppinsBold32"
            >
              Hero Section
            </Text>
            <Img
              className="h-[410px] sm:h-auto ml-0.5 md:ml-[0] object-cover w-full"
              src="images/img_image1.png"
              alt="imageOne"
            />
          </div>
          <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
            <Img
              className="h-[459px] md:h-auto object-cover w-full"
              src="images/img_image8.png"
              alt="imageEight"
            />
          </div>
        </div>
        <div className="absolute bottom-[7%] flex flex-col justify-start left-[1%] w-[48%]">
          <div className="flex flex-col md:gap-10 gap-[390px] items-start justify-start md:ml-[0] ml-[9px] w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[5px] w-full">
              <Img
                className="md:flex-1 h-[411px] sm:h-auto object-cover w-[35%] md:w-full"
                src="images/img_image3.png"
                alt="imageThree"
              />
              <Img
                className="md:flex-1 h-[414px] sm:h-auto md:ml-[0] ml-[63px] md:mt-0 mt-[15px] object-cover w-[35%] md:w-full"
                src="images/img_image2.png"
                alt="imageTwo"
              />
              <div className="bg-light_green-600 h-[303px] md:ml-[0] ml-[365px] md:mt-0 mt-[126px] w-[303px]"></div>
            </div>
            <div className="flex md:flex-col flex-row gap-4 items-center justify-start w-[65%] md:w-full">
              <Img
                className="h-[485px] sm:h-auto object-cover w-[54%] md:w-full"
                src="images/img_image38.png"
                alt="imageThirtyEight"
              />
              <Img
                className="h-[513px] sm:h-auto object-cover w-[46%] md:w-full"
                src="images/img_image6.png"
                alt="imageSix"
              />
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-[27px] items-start justify-start mt-[5px] w-[70%] md:w-full">
            <div className="flex flex-col items-center justify-start w-1/2 md:w-full">
              <Img
                className="h-[512px] md:h-auto object-cover w-full"
                src="images/img_image4.png"
                alt="imageFour"
              />
            </div>
            <Img
              className="h-[557px] sm:h-auto object-cover w-[49%] md:w-full"
              src="images/img_image5.png"
              alt="imageFive"
            />
          </div>
        </div>
        <div className="absolute flex sm:flex-col flex-row md:gap-10 items-start justify-between max-w-[3804px] right-[5%] top-[3%] w-full">
          <Img
            className="h-[601px] md:h-auto object-cover"
            src="images/img_image7.png"
            alt="imageSeven"
          />
          <Img
            className="h-[641px] md:h-auto object-cover"
            src="images/img_image10.png"
            alt="imageTen"
          />
        </div>
      </div>
    </>
  );
};

export default HomePageRefOnePage;
