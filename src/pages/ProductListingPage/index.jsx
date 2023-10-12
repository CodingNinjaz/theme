import React from "react";

import { Img, Text } from "components";

const ProductListingPagePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-start justify-start mx-auto p-[26px] sm:px-5 w-full">
        <div className="flex flex-col gap-[17px] items-start justify-start mb-[1269px] mt-[19px] md:px-5 w-[94%] md:w-full">
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 uppercase"
            size="txtPoppinsBold32"
          >
            Product Listing Page
          </Text>
          <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
            <Img
              className="sm:flex-1 h-[2102px] md:h-auto object-cover w-1/4 sm:w-full"
              src="images/img_image16.png"
              alt="imageSixteen"
            />
            <Img
              className="sm:flex-1 h-[2102px] md:h-auto sm:ml-[0] ml-[87px] object-cover w-[24%] sm:w-full"
              src="images/img_image17.png"
              alt="imageSeventeen"
            />
            <Img
              className="sm:flex-1 h-[1721px] md:h-auto sm:ml-[0] ml-[53px] object-cover w-[26%] sm:w-full"
              src="images/img_image18.png"
              alt="imageEighteen"
            />
            <Img
              className="sm:flex-1 h-[1667px] md:h-auto sm:ml-[0] ml-[87px] object-cover w-[22%] sm:w-full"
              src="images/img_image23.png"
              alt="imageTwentyThree"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductListingPagePage;
