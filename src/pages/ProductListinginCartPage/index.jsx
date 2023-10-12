import React from "react";

import { Button, FloatingInput, Img, Input, Line, Text } from "components";
import Footer from "components/Footer";
import Header1 from "components/Header1";

import { CloseSVG } from "../../assets/images";

const ProductListinginCartPagePage = () => {
  const [group415value, setGroup415value] = React.useState("");

  return (
    <>
      <div className="bg-blue_gray-50 flex flex-col font-notoseriftamil items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <Header1 className="bg-gray-800 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="bg-gray-300 flex md:flex-col flex-row md:gap-5 items-center justify-end p-[11px] w-full">
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[147px] rounded"
              leftIcon={
                <div className="mt-[13px] mb-2.5 mr-2 bg-black-900">
                  <Img src="images/img_arrow1.svg" alt="Arrow 1" />
                </div>
              }
              shape="round"
              color="gray_800"
              size="sm"
              variant="outline"
            >
              <div className="text-base text-left tracking-[0.48px]">Back</div>
            </Button>
            <Text
              className="md:ml-[0] ml-[612px] text-gray-800 text-sm tracking-[0.42px]"
              size="txtNotoSerifTamilMedium14"
            >
              <span className="text-gray-600 font-notoseriftamil text-left font-medium">
                Profile History{" "}
              </span>
              <span className="text-gray-800 font-notoseriftamil text-left font-medium">
                {" "}
              </span>
              <span className="text-gray-800 tracking-[0.54px] font-notoseriftamil text-left text-lg font-medium">
                Product Listing Cart
              </span>
            </Text>
            <Button
              className="cursor-pointer font-medium leading-[normal] min-w-[204px] md:ml-[0] ml-[83px] rounded text-center text-sm tracking-[0.42px]"
              shape="round"
              color="gray_800"
              size="md"
              variant="fill"
            >
              Send
            </Button>
            <Button
              className="cursor-pointer font-medium leading-[normal] min-w-[204px] ml-5 md:ml-[0] rounded text-center text-sm tracking-[0.42px]"
              shape="round"
              color="gray_600"
              size="md"
              variant="fill"
            >
              Save as PDF
            </Button>
            <div className="flex md:flex-1 flex-col items-center justify-start ml-5 md:ml-[0] mr-[89px] md:px-5 w-[6%] md:w-full">
              <Button
                className="cursor-pointer font-medium leading-[normal] min-w-[97px] rounded text-center text-sm tracking-[0.42px]"
                shape="round"
                color="gray_600"
                size="md"
                variant="outline"
              >
                Cancel
              </Button>
            </div>
          </div>
          <Text
            className="md:ml-[0] ml-[100px] mt-[37px] text-gray-600 text-lg tracking-[0.54px]"
            size="txtNotoSerifTamilBold18"
          >
            <span className="text-gray-600 font-notoseriftamil text-left font-bold">
              <>Home &gt; </>
            </span>
            <span className="text-gray-800 font-notoseriftamil text-left font-bold">
              Product Listing
            </span>
          </Text>
          <div className="bg-blue_gray-100 flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-[22px] p-[13px] w-full">
            <Text
              className="sm:ml-[0] ml-[101px] sm:mt-0 mt-1 text-gray-600 text-sm tracking-[0.42px]"
              size="txtNotoSerifTamilMedium14Gray600"
            >
              SN
            </Text>
            <Text
              className="sm:ml-[0] ml-[90px] sm:mt-0 mt-1 text-gray-600 text-sm tracking-[0.42px]"
              size="txtNotoSerifTamilMedium14Gray600"
            >
              Product Name & Picture
            </Text>
            <Text
              className="sm:ml-[0] ml-[149px] sm:mt-0 mt-[5px] text-gray-600 text-sm tracking-[0.42px]"
              size="txtNotoSerifTamilMedium14Gray600"
            >
              Product Details
            </Text>
            <Text
              className="sm:ml-[0] ml-[490px] sm:mt-0 mt-[5px] text-gray-600 text-sm tracking-[0.42px]"
              size="txtNotoSerifTamilMedium14Gray600"
            >
              Quantity & Remarks
            </Text>
            <Text
              className="sm:ml-[0] ml-[326px] sm:mt-0 mt-[5px] text-gray-600 text-sm tracking-[0.42px]"
              size="txtNotoSerifTamilMedium14Gray600"
            >
              Action
            </Text>
          </div>
          <div className="h-[1129px] md:h-[4750px] md:px-5 relative w-full">
            <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
              <div className="flex flex-col gap-[19px] items-center justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[89%] md:w-full">
                  <div className="flex flex-col gap-1.5 justify-start w-[23%] md:w-full">
                    <div className="flex flex-row gap-[97px] items-center justify-start w-[51%] md:w-full">
                      <Text
                        className="text-gray-800 text-lg tracking-[0.54px]"
                        size="txtNotoSerifTamilBold18Gray800"
                      >
                        1
                      </Text>
                      <Text
                        className="text-gray-800 text-lg tracking-[0.54px]"
                        size="txtNotoSerifTamilBold18Gray800"
                      >
                        Essential
                      </Text>
                    </div>
                    <div className="bg-white-A700 border border-gray-600 border-solid flex flex-col items-center justify-start md:ml-[0] ml-[107px] p-[31px] sm:px-5 rounded w-[73%] md:w-full">
                      <Img
                        className="h-[215px] md:h-auto mb-4 mt-[7px] object-cover w-[215px]"
                        src="images/img_essentialgu101.png"
                        alt="essentialgu101"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start md:ml-[0] ml-[41px] w-[33%] md:w-full">
                    <div className="flex flex-row items-start justify-between w-[51%] md:w-full">
                      <Text
                        className="text-gray-600 text-sm tracking-[0.42px]"
                        size="txtNotoSerifTamilMedium14Gray600"
                      >
                        Brand
                      </Text>
                      <Text
                        className="text-gray-600 text-lg tracking-[0.54px]"
                        size="txtNotoSerifTamilMedium18Gray600"
                      >
                        : Tecnolight
                      </Text>
                    </div>
                    <Line className="bg-gray-600 h-px mt-1.5 w-full" />
                    <div className="flex flex-row items-center justify-between mt-2.5 w-1/2 md:w-full">
                      <Text
                        className="text-gray-600 text-sm tracking-[0.42px]"
                        size="txtNotoSerifTamilMedium14Gray600"
                      >
                        Part No.
                      </Text>
                      <Text
                        className="text-gray-600 text-lg tracking-[0.54px]"
                        size="txtNotoSerifTamilMedium18Gray600"
                      >
                        : 90530.000
                      </Text>
                    </div>
                    <Line className="bg-gray-600 h-px mt-[7px] w-full" />
                    <div className="flex flex-row items-center justify-between mt-[11px] w-[51%] md:w-full">
                      <Text
                        className="text-gray-600 text-sm tracking-[0.42px]"
                        size="txtNotoSerifTamilMedium14Gray600"
                      >
                        Wattage
                      </Text>
                      <Text
                        className="text-gray-600 text-lg tracking-[0.54px]"
                        size="txtNotoSerifTamilMedium18Gray600"
                      >
                        : 6W | 6.5W
                      </Text>
                    </div>
                    <Line className="bg-gray-600 h-px mt-1.5 w-full" />
                    <div className="flex flex-row gap-[51px] items-start justify-start mt-2.5 w-[47%] md:w-full">
                      <Text
                        className="mt-1 text-gray-600 text-sm tracking-[0.42px]"
                        size="txtNotoSerifTamilMedium14Gray600"
                      >
                        Lumen Efficiency
                      </Text>
                      <Text
                        className="text-gray-600 text-lg tracking-[0.54px]"
                        size="txtNotoSerifTamilMedium18Gray600"
                      >
                        : 80lm/W
                      </Text>
                    </div>
                    <Line className="bg-gray-600 h-px mt-[7px] w-full" />
                    <div className="flex flex-row items-end justify-start mt-[7px] w-2/5 md:w-full">
                      <Text
                        className="mt-2 text-gray-600 text-sm tracking-[0.42px]"
                        size="txtNotoSerifTamilMedium14Gray600"
                      >
                        Beam Angle
                      </Text>
                      <Text
                        className="ml-[92px] mt-[3px] text-gray-600 text-lg tracking-[0.54px]"
                        size="txtNotoSerifTamilMedium18Gray600"
                      >
                        : 36
                      </Text>
                      <Text
                        className="mb-[3px] ml-0.5 text-gray-600 text-lg tracking-[0.54px]"
                        size="txtNotoSerifTamilMedium18Gray600"
                      >
                        o
                      </Text>
                    </div>
                    <Line className="bg-gray-600 h-px mt-1.5 w-full" />
                    <div className="flex flex-row items-start justify-between mt-3 w-[57%] md:w-full">
                      <Text
                        className="text-gray-600 text-sm tracking-[0.42px]"
                        size="txtNotoSerifTamilMedium14Gray600"
                      >
                        Finish
                      </Text>
                      <Text
                        className="text-gray-600 text-lg tracking-[0.54px]"
                        size="txtNotoSerifTamilMedium18Gray600"
                      >
                        : Black | White
                      </Text>
                    </div>
                    <Line className="bg-gray-600 h-px mt-[5px] w-full" />
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mt-3 w-[99%] md:w-full">
                      <Text
                        className="sm:mt-0 mt-0.5 text-gray-600 text-sm tracking-[0.42px]"
                        size="txtNotoSerifTamilMedium14Gray600"
                      >
                        CCT
                      </Text>
                      <Text
                        className="text-gray-600 text-lg tracking-[0.54px]"
                        size="txtNotoSerifTamilMedium18Gray600"
                      >
                        : 2700K | 3000K | 4000K | 5000K | 6000K
                      </Text>
                    </div>
                    <Line className="bg-gray-600 h-px mt-[5px] w-full" />
                  </div>
                  <div className="flex flex-col items-center justify-start md:ml-[0] ml-[41px] w-2/5 md:w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                      <div className="flex sm:flex-1 flex-row items-center justify-between w-[34%] sm:w-full">
                        <div className="h-14 relative w-1/4">
                          <Img
                            className="absolute h-12 inset-[0] justify-center m-auto"
                            src="images/img_trash.svg"
                            alt="trash"
                          />
                          <Img
                            className="absolute h-14 inset-[0] justify-center m-auto"
                            src="images/img_plus.svg"
                            alt="plus"
                          />
                        </div>
                        <div
                          className="bg-cover bg-no-repeat flex flex-col h-12 items-center justify-start p-[7px]"
                          style={{
                            backgroundImage: "url('images/img_trash.svg')",
                          }}
                        >
                          <Text
                            className="text-gray-800 text-xl tracking-[0.60px]"
                            size="txtNotoSerifTamilBold20"
                          >
                            50
                          </Text>
                        </div>
                        <div
                          className="bg-cover bg-no-repeat flex flex-col h-12 items-end justify-start p-0.5 w-1/4"
                          style={{
                            backgroundImage: "url('images/img_trash.svg')",
                          }}
                        >
                          <Img
                            className="h-[42px] mr-[11px]"
                            src="images/img_plus.svg"
                            alt="plus_One"
                          />
                        </div>
                      </div>
                      <Button
                        className="cursor-pointer font-medium leading-[normal] min-w-[204px] rounded text-center text-sm tracking-[0.42px]"
                        shape="round"
                        color="gray_600"
                        size="md"
                        variant="outline"
                      >
                        Delete
                      </Button>
                    </div>
                    <FloatingInput
                      wrapClassName="placeholder:bg-blue_gray-50 font-medium leading-[normal] placeholder:left-[22px] p-0 sm:px-5 placeholder:text-gray-300 text-gray-600 text-left text-sm placeholder:top-[0] tracking-[0.42px] w-full"
                      className="font-medium leading-[normal] p-0 sm:px-5 text-gray-600 text-left text-sm tracking-[0.42px] w-full"
                      name="typeanycustomiz"
                      labelClasses="bg-blue_gray-50 left-[22px] top-[0] text-gray-300"
                      focusedClasses="translate-y-[37px] scale-[1]"
                      wrapperClasses="mt-[3px] w-full top-[0]"
                      labelText="Add Another Product"
                      defaultText="Type any customizing details"
                    ></FloatingInput>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="bg-white-A700 flex flex-col items-center justify-start pb-[19px] w-full">
                    <div className="flex flex-col gap-[19px] items-center justify-start w-full">
                      <Line className="bg-gray-600 h-px w-full" />
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[89%] md:w-full">
                        <div className="flex flex-col gap-1.5 justify-start w-[23%] md:w-full">
                          <div className="flex flex-row gap-[97px] items-center justify-start w-[51%] md:w-full">
                            <Text
                              className="text-gray-800 text-lg tracking-[0.54px]"
                              size="txtNotoSerifTamilBold18Gray800"
                            >
                              2
                            </Text>
                            <Text
                              className="text-gray-800 text-lg tracking-[0.54px]"
                              size="txtNotoSerifTamilBold18Gray800"
                            >
                              Essential
                            </Text>
                          </div>
                          <div className="bg-white-A700 border border-gray-600 border-solid flex flex-col items-center justify-start md:ml-[0] ml-[107px] p-[31px] sm:px-5 rounded w-[73%] md:w-full">
                            <Img
                              className="h-[215px] md:h-auto mb-4 mt-[7px] object-cover w-[215px]"
                              src="images/img_essentialgu101.png"
                              alt="essentialgu101_One"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start md:ml-[0] ml-[41px] md:mt-0 mt-0.5 w-[33%] md:w-full">
                          <div className="flex flex-row items-start justify-between w-[51%] md:w-full">
                            <Text
                              className="text-gray-600 text-sm tracking-[0.42px]"
                              size="txtNotoSerifTamilMedium14Gray600"
                            >
                              Brand
                            </Text>
                            <Text
                              className="text-gray-600 text-lg tracking-[0.54px]"
                              size="txtNotoSerifTamilMedium18Gray600"
                            >
                              : Tecnolight
                            </Text>
                          </div>
                          <Line className="bg-gray-600 h-px mt-1.5 w-full" />
                          <div className="flex flex-row items-center justify-between mt-2.5 w-1/2 md:w-full">
                            <Text
                              className="text-gray-600 text-sm tracking-[0.42px]"
                              size="txtNotoSerifTamilMedium14Gray600"
                            >
                              Part No.
                            </Text>
                            <Text
                              className="text-gray-600 text-lg tracking-[0.54px]"
                              size="txtNotoSerifTamilMedium18Gray600"
                            >
                              : 90530.000
                            </Text>
                          </div>
                          <Line className="bg-gray-600 h-px mt-[7px] w-full" />
                          <div className="flex flex-row items-center justify-between mt-[11px] w-[51%] md:w-full">
                            <Text
                              className="text-gray-600 text-sm tracking-[0.42px]"
                              size="txtNotoSerifTamilMedium14Gray600"
                            >
                              Wattage
                            </Text>
                            <Text
                              className="text-gray-600 text-lg tracking-[0.54px]"
                              size="txtNotoSerifTamilMedium18Gray600"
                            >
                              : 6W | 6.5W
                            </Text>
                          </div>
                          <Line className="bg-gray-600 h-px mt-1.5 w-full" />
                          <div className="flex flex-row gap-[51px] items-start justify-start mt-2.5 w-[47%] md:w-full">
                            <Text
                              className="mt-1 text-gray-600 text-sm tracking-[0.42px]"
                              size="txtNotoSerifTamilMedium14Gray600"
                            >
                              Lumen Efficiency
                            </Text>
                            <Text
                              className="text-gray-600 text-lg tracking-[0.54px]"
                              size="txtNotoSerifTamilMedium18Gray600"
                            >
                              : 80lm/W
                            </Text>
                          </div>
                          <Line className="bg-gray-600 h-px mt-[7px] w-full" />
                          <div className="flex flex-row items-end justify-start mt-[7px] w-2/5 md:w-full">
                            <Text
                              className="mt-2 text-gray-600 text-sm tracking-[0.42px]"
                              size="txtNotoSerifTamilMedium14Gray600"
                            >
                              Beam Angle
                            </Text>
                            <Text
                              className="ml-[92px] mt-[3px] text-gray-600 text-lg tracking-[0.54px]"
                              size="txtNotoSerifTamilMedium18Gray600"
                            >
                              : 36
                            </Text>
                            <Text
                              className="mb-[3px] ml-0.5 text-gray-600 text-lg tracking-[0.54px]"
                              size="txtNotoSerifTamilMedium18Gray600"
                            >
                              o
                            </Text>
                          </div>
                          <Line className="bg-gray-600 h-px mt-1.5 w-full" />
                          <div className="flex flex-row items-start justify-between mt-3 w-[57%] md:w-full">
                            <Text
                              className="text-gray-600 text-sm tracking-[0.42px]"
                              size="txtNotoSerifTamilMedium14Gray600"
                            >
                              Finish
                            </Text>
                            <Text
                              className="text-gray-600 text-lg tracking-[0.54px]"
                              size="txtNotoSerifTamilMedium18Gray600"
                            >
                              : Black | White
                            </Text>
                          </div>
                          <Line className="bg-gray-600 h-px mt-[5px] w-full" />
                          <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mt-3 w-[99%] md:w-full">
                            <Text
                              className="sm:mt-0 mt-0.5 text-gray-600 text-sm tracking-[0.42px]"
                              size="txtNotoSerifTamilMedium14Gray600"
                            >
                              CCT
                            </Text>
                            <Text
                              className="text-gray-600 text-lg tracking-[0.54px]"
                              size="txtNotoSerifTamilMedium18Gray600"
                            >
                              : 2700K | 3000K | 4000K | 5000K | 6000K
                            </Text>
                          </div>
                          <Line className="bg-gray-600 h-px mt-[5px] w-full" />
                        </div>
                        <div className="flex flex-col gap-[18px] items-center justify-start md:ml-[0] ml-[41px] md:mt-0 mt-[11px] w-[26%] md:w-full">
                          <div className="flex sm:flex-col flex-row gap-8 items-start justify-between w-full">
                            <div className="flex sm:flex-1 flex-row items-center justify-between w-[52%] sm:w-full">
                              <div className="h-14 relative w-1/4">
                                <Img
                                  className="absolute h-12 inset-[0] justify-center m-auto"
                                  src="images/img_trash.svg"
                                  alt="trash_One"
                                />
                                <Img
                                  className="absolute h-14 inset-[0] justify-center m-auto"
                                  src="images/img_plus.svg"
                                  alt="plus_Two"
                                />
                              </div>
                              <div
                                className="bg-cover bg-no-repeat flex flex-col h-12 items-center justify-start p-[7px]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_trash.svg')",
                                }}
                              >
                                <Text
                                  className="text-gray-800 text-xl tracking-[0.60px]"
                                  size="txtNotoSerifTamilBold20"
                                >
                                  50
                                </Text>
                              </div>
                              <div
                                className="bg-cover bg-no-repeat flex flex-col h-12 items-end justify-start p-0.5 w-1/4"
                                style={{
                                  backgroundImage:
                                    "url('images/img_trash.svg')",
                                }}
                              >
                                <Img
                                  className="h-[42px] mr-[11px]"
                                  src="images/img_plus.svg"
                                  alt="plus_Three"
                                />
                              </div>
                            </div>
                            <div className="flex sm:flex-1 flex-row gap-4 items-start justify-start sm:mt-0 mt-0.5 w-[41%] sm:w-full">
                              <Text
                                className="mt-5 text-gray-600 text-lg tracking-[0.54px]"
                                size="txtNotoSerifTamilBold18"
                              >
                                AED
                              </Text>
                              <Text
                                className="text-4xl sm:text-[32px] md:text-[34px] text-gray-800 tracking-[1.08px]"
                                size="txtNotoSerifTamilBold36Gray800"
                              >
                                500.00
                              </Text>
                            </div>
                          </div>
                          <div className="bg-gray-300 flex flex-col items-start justify-start p-[19px] rounded w-full">
                            <Text
                              className="mb-[177px] ml-0.5 md:ml-[0] text-gray-600 text-sm tracking-[0.42px]"
                              size="txtNotoSerifTamilMedium14Gray600"
                            >
                              Type any customizing details
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-start md:ml-[0] ml-[41px] md:mt-0 mt-[13px] w-[12%] md:w-full">
                          <Button
                            className="cursor-pointer font-medium leading-[normal] min-w-[204px] rounded text-center text-sm tracking-[0.42px]"
                            shape="round"
                            color="gray_600"
                            size="md"
                            variant="outline"
                          >
                            Delete
                          </Button>
                          <Input
                            name="group403"
                            placeholder="Add Another Product"
                            className="font-medium leading-[normal] p-0 placeholder:text-gray-300 text-left text-sm tracking-[0.42px] w-full"
                            wrapClassName="w-full"
                            shape="round"
                            color="gray_600"
                            size="xs"
                            variant="fill"
                          ></Input>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Line className="bg-gray-600 h-px w-full" />
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[19px] w-[89%] md:w-full">
                    <div className="flex flex-col gap-1.5 justify-start w-[23%] md:w-full">
                      <div className="flex flex-row gap-[97px] items-center justify-start w-[51%] md:w-full">
                        <Text
                          className="text-gray-800 text-lg tracking-[0.54px]"
                          size="txtNotoSerifTamilBold18Gray800"
                        >
                          3
                        </Text>
                        <Text
                          className="text-gray-800 text-lg tracking-[0.54px]"
                          size="txtNotoSerifTamilBold18Gray800"
                        >
                          Essential
                        </Text>
                      </div>
                      <div className="bg-white-A700 border border-gray-600 border-solid flex flex-col items-center justify-start md:ml-[0] ml-[107px] p-[31px] sm:px-5 rounded w-[73%] md:w-full">
                        <Img
                          className="h-[215px] md:h-auto mb-4 mt-[7px] object-cover w-[215px]"
                          src="images/img_essentialgu101.png"
                          alt="essentialgu101_Two"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[41px] w-[33%] md:w-full">
                      <div className="flex flex-row items-start justify-between w-[51%] md:w-full">
                        <Text
                          className="text-gray-600 text-sm tracking-[0.42px]"
                          size="txtNotoSerifTamilMedium14Gray600"
                        >
                          Brand
                        </Text>
                        <Text
                          className="text-gray-600 text-lg tracking-[0.54px]"
                          size="txtNotoSerifTamilMedium18Gray600"
                        >
                          : Tecnolight
                        </Text>
                      </div>
                      <Line className="bg-gray-600 h-px mt-1.5 w-full" />
                      <div className="flex flex-row items-center justify-between mt-2.5 w-1/2 md:w-full">
                        <Text
                          className="text-gray-600 text-sm tracking-[0.42px]"
                          size="txtNotoSerifTamilMedium14Gray600"
                        >
                          Part No.
                        </Text>
                        <Text
                          className="text-gray-600 text-lg tracking-[0.54px]"
                          size="txtNotoSerifTamilMedium18Gray600"
                        >
                          : 90530.000
                        </Text>
                      </div>
                      <Line className="bg-gray-600 h-px mt-[7px] w-full" />
                      <div className="flex flex-row items-center justify-between mt-[11px] w-[51%] md:w-full">
                        <Text
                          className="text-gray-600 text-sm tracking-[0.42px]"
                          size="txtNotoSerifTamilMedium14Gray600"
                        >
                          Wattage
                        </Text>
                        <Text
                          className="text-gray-600 text-lg tracking-[0.54px]"
                          size="txtNotoSerifTamilMedium18Gray600"
                        >
                          : 6W | 6.5W
                        </Text>
                      </div>
                      <Line className="bg-gray-600 h-px mt-1.5 w-full" />
                      <div className="flex flex-row gap-[51px] items-start justify-start mt-2.5 w-[47%] md:w-full">
                        <Text
                          className="mt-1 text-gray-600 text-sm tracking-[0.42px]"
                          size="txtNotoSerifTamilMedium14Gray600"
                        >
                          Lumen Efficiency
                        </Text>
                        <Text
                          className="text-gray-600 text-lg tracking-[0.54px]"
                          size="txtNotoSerifTamilMedium18Gray600"
                        >
                          : 80lm/W
                        </Text>
                      </div>
                      <Line className="bg-gray-600 h-px mt-[7px] w-full" />
                      <div className="flex flex-row items-end justify-start mt-[7px] w-2/5 md:w-full">
                        <Text
                          className="mt-2 text-gray-600 text-sm tracking-[0.42px]"
                          size="txtNotoSerifTamilMedium14Gray600"
                        >
                          Beam Angle
                        </Text>
                        <Text
                          className="ml-[92px] mt-[3px] text-gray-600 text-lg tracking-[0.54px]"
                          size="txtNotoSerifTamilMedium18Gray600"
                        >
                          : 36
                        </Text>
                        <Text
                          className="mb-[3px] ml-0.5 text-gray-600 text-lg tracking-[0.54px]"
                          size="txtNotoSerifTamilMedium18Gray600"
                        >
                          o
                        </Text>
                      </div>
                      <Line className="bg-gray-600 h-px mt-1.5 w-full" />
                      <div className="flex flex-row items-start justify-between mt-3 w-[57%] md:w-full">
                        <Text
                          className="text-gray-600 text-sm tracking-[0.42px]"
                          size="txtNotoSerifTamilMedium14Gray600"
                        >
                          Finish
                        </Text>
                        <Text
                          className="text-gray-600 text-lg tracking-[0.54px]"
                          size="txtNotoSerifTamilMedium18Gray600"
                        >
                          : Black | White
                        </Text>
                      </div>
                      <Line className="bg-gray-600 h-px mt-[5px] w-full" />
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mt-3 w-[99%] md:w-full">
                        <Text
                          className="sm:mt-0 mt-0.5 text-gray-600 text-sm tracking-[0.42px]"
                          size="txtNotoSerifTamilMedium14Gray600"
                        >
                          CCT
                        </Text>
                        <Text
                          className="text-gray-600 text-lg tracking-[0.54px]"
                          size="txtNotoSerifTamilMedium18Gray600"
                        >
                          : 2700K | 3000K | 4000K | 5000K | 6000K
                        </Text>
                      </div>
                      <Line className="bg-gray-600 h-px mt-[5px] w-full" />
                    </div>
                    <div className="flex flex-col items-center justify-start md:ml-[0] ml-[41px] w-2/5 md:w-full">
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                        <div className="flex sm:flex-1 flex-row items-center justify-between w-[34%] sm:w-full">
                          <div className="h-14 relative w-1/4">
                            <Img
                              className="absolute h-12 inset-[0] justify-center m-auto"
                              src="images/img_trash.svg"
                              alt="trash_Two"
                            />
                            <Img
                              className="absolute h-14 inset-[0] justify-center m-auto"
                              src="images/img_plus.svg"
                              alt="plus_Four"
                            />
                          </div>
                          <div
                            className="bg-cover bg-no-repeat flex flex-col h-12 items-center justify-start p-[7px]"
                            style={{
                              backgroundImage: "url('images/img_trash.svg')",
                            }}
                          >
                            <Text
                              className="text-gray-800 text-xl tracking-[0.60px]"
                              size="txtNotoSerifTamilBold20"
                            >
                              50
                            </Text>
                          </div>
                          <div
                            className="bg-cover bg-no-repeat flex flex-col h-12 items-end justify-start p-0.5 w-1/4"
                            style={{
                              backgroundImage: "url('images/img_trash.svg')",
                            }}
                          >
                            <Img
                              className="h-[42px] mr-[11px]"
                              src="images/img_plus.svg"
                              alt="plus_Five"
                            />
                          </div>
                        </div>
                        <Button
                          className="cursor-pointer font-medium leading-[normal] min-w-[204px] rounded text-center text-sm tracking-[0.42px]"
                          shape="round"
                          color="gray_600"
                          size="md"
                          variant="outline"
                        >
                          Delete
                        </Button>
                      </div>
                      <div className="flex md:flex-col flex-row md:gap-[41px] items-start justify-between mt-[3px] w-full">
                        <div className="bg-gray-300 flex flex-col items-start justify-start md:mt-0 mt-[18px] p-[19px] rounded">
                          <Text
                            className="mb-[177px] ml-0.5 md:ml-[0] text-gray-600 text-sm tracking-[0.42px]"
                            size="txtNotoSerifTamilMedium14Gray600"
                          >
                            Type any customizing details
                          </Text>
                        </div>
                        <Input
                          name="group402"
                          placeholder="Add Another Product"
                          className="font-medium leading-[normal] p-0 placeholder:text-gray-300 text-left text-sm tracking-[0.42px] w-full"
                          wrapClassName="md:flex-1 mb-52 md:w-full"
                          shape="round"
                          color="gray_600"
                          size="xs"
                          variant="fill"
                        ></Input>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute flex md:flex-col flex-row md:gap-5 h-full inset-y-[0] items-start justify-start left-[9%] my-auto w-3/4">
              <Line className="bg-gray-600 h-[1129px] md:h-px md:w-full w-px" />
              <Line className="bg-gray-600 h-[1129px] md:h-px md:ml-[0] ml-[344px] md:w-full w-px" />
              <Line className="bg-gray-600 h-[1129px] md:h-px md:ml-[0] ml-[605px] md:w-full w-px" />
              <div className="flex flex-col md:gap-10 gap-[695px] items-center justify-start md:ml-[0] ml-[277px] md:mt-0 mt-[31px] w-[13%] md:w-full">
                <div className="flex flex-row gap-4 items-start justify-start w-full">
                  <Text
                    className="mt-5 text-gray-600 text-lg tracking-[0.54px]"
                    size="txtNotoSerifTamilBold18"
                  >
                    AED
                  </Text>
                  <Text
                    className="text-4xl sm:text-[32px] md:text-[34px] text-gray-800 tracking-[1.08px]"
                    size="txtNotoSerifTamilBold36Gray800"
                  >
                    500.00
                  </Text>
                </div>
                <div className="flex flex-row gap-4 items-start justify-start w-full">
                  <Text
                    className="mt-5 text-gray-600 text-lg tracking-[0.54px]"
                    size="txtNotoSerifTamilBold18"
                  >
                    AED
                  </Text>
                  <Text
                    className="text-4xl sm:text-[32px] md:text-[34px] text-gray-800 tracking-[1.08px]"
                    size="txtNotoSerifTamilBold36Gray800"
                  >
                    500.00
                  </Text>
                </div>
              </div>
              <Line className="bg-gray-600 h-[1129px] md:h-px ml-5 md:ml-[0] md:w-full w-px" />
            </div>
          </div>
          <Line className="bg-gray-600 h-px w-full" />
          <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-end md:ml-[0] ml-[1027px] mt-[7px] md:px-5 w-[29%] md:w-full">
            <Text
              className="text-gray-800 text-lg tracking-[0.54px]"
              size="txtNotoSerifTamilBold18Gray800"
            >
              Total
            </Text>
            <Text
              className="sm:ml-[0] ml-[304px] text-gray-600 text-lg tracking-[0.54px]"
              size="txtNotoSerifTamilBold18"
            >
              AED
            </Text>
            <Text
              className="ml-4 sm:ml-[0] text-4xl sm:text-[32px] md:text-[34px] text-gray-800 tracking-[1.08px]"
              size="txtNotoSerifTamilBold36Gray800"
            >
              1500.00
            </Text>
          </div>
          <div className="bg-gray-300 flex md:flex-col flex-row gap-5 items-center justify-center mt-3.5 p-[11px] w-full">
            <Button
              className="cursor-pointer font-medium leading-[normal] min-w-[204px] md:ml-[0] ml-[1264px] rounded text-center text-sm tracking-[0.42px]"
              shape="round"
              color="gray_800"
              size="md"
              variant="fill"
            >
              Send
            </Button>
            <Button
              className="cursor-pointer font-medium leading-[normal] min-w-[204px] rounded text-center text-sm tracking-[0.42px]"
              shape="round"
              color="gray_600"
              size="md"
              variant="fill"
            >
              Save as PDF
            </Button>
            <div className="flex md:flex-1 flex-col items-center justify-start mr-[89px] md:px-5 w-[6%] md:w-full">
              <Button
                className="cursor-pointer font-medium leading-[normal] min-w-[97px] rounded text-center text-sm tracking-[0.42px]"
                shape="round"
                color="gray_600"
                size="md"
                variant="outline"
              >
                Cancel
              </Button>
            </div>
          </div>
          <Footer className="flex items-center justify-center mt-[50px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default ProductListinginCartPagePage;
