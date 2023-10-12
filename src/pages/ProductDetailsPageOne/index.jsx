import React from "react";

import { Img, Text } from "components";

const ProductDetailsPageOnePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-start justify-start mx-auto p-[43px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col gap-6 items-start justify-start mb-[1043px] md:ml-[0] ml-[5px] w-[88%] md:w-full">
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 uppercase"
            size="txtPoppinsBold32"
          >
            Product Details Page
          </Text>
          <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full">
            <Img
              className="h-[2305px] md:h-auto object-cover"
              src="images/img_image22.png"
              alt="imageTwentyTwo"
            />
            <Img
              className="h-[1244px] md:h-auto object-cover"
              src="images/img_image24.png"
              alt="imageTwentyFour"
            />
            <Img
              className="h-[1244px] md:h-auto object-cover"
              src="images/img_image28.png"
              alt="imageTwentyEight"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsPageOnePage;
