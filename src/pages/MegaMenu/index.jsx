import React from "react";

import { Img, Text } from "components";

const MegaMenuPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-start justify-start mx-auto p-[38px] sm:px-5 w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[4274px] mb-[832px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-1 flex-col gap-[34px] items-start justify-start md:mt-0 mt-[13px] w-[51%] md:w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 uppercase"
              size="txtPoppinsBold32"
            >
              Mega Menu
            </Text>
            <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <Img
                className="h-[780px] md:h-auto object-cover"
                src="images/img_image30.png"
                alt="imageThirty"
              />
              <Img
                className="h-[780px] md:h-auto object-cover"
                src="images/img_image31.png"
                alt="imageThirtyOne"
              />
            </div>
          </div>
          <div className="flex md:flex-1 flex-col font-arial items-start justify-start w-2/5 md:w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between w-full">
              <div className="flex flex-col items-center justify-start">
                <div className="flex flex-col items-center justify-start pb-[13px] w-full">
                  <div className="flex flex-col gap-[9px] items-center justify-start w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-evenly w-full">
                      <div className="bg-amber-500 h-[220px] w-[10%]"></div>
                      <div className="bg-amber-A700 h-[220px] w-[10%]"></div>
                      <div className="bg-lime-800 h-[220px] w-[10%]"></div>
                      <div className="bg-lime-900 h-[220px] w-[10%]"></div>
                      <div className="bg-lime-900_01 h-[220px] w-[10%]"></div>
                      <div className="bg-lime-900_02 h-[220px] w-[10%]"></div>
                      <div className="bg-light_green-900 h-[220px] w-[10%]"></div>
                      <div className="bg-gray-900 h-[220px] w-[10%]"></div>
                      <div className="bg-gray-900_01 h-[220px] w-[10%]"></div>
                      <div className="bg-black-900_01 h-[220px] w-[10%]"></div>
                    </div>
                    <div className="flex flex-row items-center justify-between w-[96%] md:w-full">
                      <Text
                        className="sm:text-[1px] text-[6px] text-black-900"
                        size="txtArialMT6"
                      >
                        Exported from Coolors.co
                      </Text>
                      <a
                        href="https://coolors.co/feba0d-e2a60c-c6910b-ab7d09-8f6908-735407-574006-3c2c04-201703-040302"
                        className="sm:text-[1px] text-[6px] text-black-900 text-right"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Text size="txtArialMT6">
                          https://coolors.co/feba0d-e2a60c-c6910b-ab7d09-8f6908-735407-574006-3c2c04-201703-040302
                        </Text>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="bg-amber-500 h-[503px] w-[503px]"></div>
              </div>
              <div className="bg-black-900_01 h-[503px] md:mt-0 mt-[250px] w-[503px]"></div>
              <div className="bg-lime-900_03 h-[503px] mb-[15px] md:mt-0 mt-[235px] w-[503px]"></div>
            </div>
            <div className="md:gap-10 gap-[85px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between mt-[61px] w-full">
              <div className="bg-gray-900_02 h-[503px] w-[503px]"></div>
              <div className="bg-yellow-50 h-[503px] w-[503px]"></div>
              <div className="bg-black-900_02 h-[503px] w-[503px]"></div>
            </div>
            <Img
              className="h-[700px] md:h-auto mt-24 object-cover w-[72%]"
              src="images/img_image36.png"
              alt="imageThirtySix"
            />
            <Img
              className="h-[391px] md:h-auto mt-24 object-cover w-[84%]"
              src="images/img_image37.png"
              alt="imageThirtySeven"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MegaMenuPage;
