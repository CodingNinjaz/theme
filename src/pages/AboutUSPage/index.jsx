import React from "react";

import { Img, Text } from "components";

const AboutUSPagePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-start justify-start mx-auto p-[26px] sm:px-5 w-full">
        <div className="flex flex-col items-start justify-start mb-[753px] mt-[19px] md:px-5 w-[69%] md:w-full">
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 uppercase"
            size="txtPoppinsBold32"
          >
            About US Page
          </Text>
          <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
            <Img
              className="sm:flex-1 h-[2598px] md:h-auto sm:mt-0 mt-[37px] object-cover w-[23%] sm:w-full"
              src="images/img_image25.png"
              alt="imageTwentyFive"
            />
            <Img
              className="sm:flex-1 h-[1578px] md:h-auto sm:ml-[0] ml-[46px] object-cover w-[36%] sm:w-full"
              src="images/img_image26.png"
              alt="imageTwentySix"
            />
            <Img
              className="sm:flex-1 h-[1416px] md:h-auto sm:ml-[0] ml-[181px] object-cover w-[36%] sm:w-full"
              src="images/img_image27.png"
              alt="imageTwentySeven"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUSPagePage;
