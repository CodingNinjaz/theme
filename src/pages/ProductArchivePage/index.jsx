import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import Footer from "components/Footer";

import { CloseSVG } from "../../assets/images";

const ProductArchivePagePage = () => {
  const [groupeightyonevalue, setGroupeightyonevalue] = React.useState("");

  return (
    <>
      <div className="bg-blue_gray-50 flex flex-col font-notoseriftamil items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <header className="bg-gray-800 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full">
            <Img
              className="h-12 md:ml-[0] ml-[98px] md:mt-0 my-[15px]"
              src="images/img_fulllogo_gray_300.svg"
              alt="fulllogo"
            />
            <div className="h-12 md:h-16 md:ml-[0] ml-[116px] md:mt-0 my-4 relative w-[59%] md:w-full">
              <Input
                name="groupEightyOne"
                placeholder="Search a Product...|"
                value={groupeightyonevalue}
                onChange={(e) => setGroupeightyonevalue(e)}
                className="!placeholder:text-gray-300 !text-gray-300 font-medium leading-[normal] p-0 text-center text-lg tracking-[0.54px] w-full"
                wrapClassName="flex inset-y-[0] my-auto right-[0] rounded-md w-[78%]"
                suffix={
                  groupeightyonevalue?.length > 0 ? (
                    <CloseSVG
                      className="cursor-pointer h-6 ml-[35px] left-[3%] absolute my-0.5 inset-y-[4%]"
                      onClick={() => setGroupeightyonevalue("")}
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
            <Button
              className="cursor-pointer font-medium leading-[normal] min-w-[136px] md:ml-[0] ml-[164px] mr-[100px] md:mt-0 my-4 text-center text-sm tracking-[0.42px]"
              shape="round"
              color="gray_300"
              size="md"
              variant="outline"
            >
              Login/Register
            </Button>
          </header>
          <div className="bg-gray-300 flex flex-row items-center justify-start p-[13px] rounded w-full">
            <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1716px] mx-auto md:px-5 w-full">
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
                <div className="text-base text-left tracking-[0.48px]">
                  Back
                </div>
              </Button>
              <Text
                className="text-gray-800 text-sm tracking-[0.42px]"
                size="txtNotoSerifTamilMedium14"
              >
                <span className="text-gray-800 font-notoseriftamil text-left font-medium">
                  Indoor Lights
                </span>
                <span className="text-gray-600 tracking-[0.54px] font-notoseriftamil text-left text-lg font-medium">
                  {" "}
                </span>
                <span className="text-gray-600 font-notoseriftamil text-left font-medium">
                  {" "}
                  Outdoor Lights Decorative Lights Facad Lights Strip & Neon
                  Industrial Lights Accessories Brand
                </span>
              </Text>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-5 items-center justify-start max-w-[1719px] mt-[19px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col gap-[19px] items-start justify-start w-[16%] md:w-full">
              <Text
                className="text-gray-800 text-lg tracking-[0.54px]"
                size="txtNotoSerifTamilBold18Gray800"
              >
                <span className="text-gray-600 tracking-[0.42px] font-notoseriftamil text-left text-sm font-medium">
                  <>Home &gt;</>
                </span>
                <span className="text-gray-600 font-notoseriftamil text-left font-bold">
                  {" "}
                </span>
                <span className="text-gray-800 font-notoseriftamil text-left font-bold">
                  Indoor Lights{" "}
                </span>
              </Text>
              <div className="bg-white-A700 flex flex-col items-center justify-start p-[21px] sm:px-5 rounded w-full">
                <div className="flex flex-col gap-2.5 items-start justify-start mb-[687px] mt-[5px] w-[98%] md:w-full">
                  <Text
                    className="text-gray-800 text-sm tracking-[0.42px]"
                    size="txtNotoSerifTamilMedium14"
                  >
                    Shop by Types
                  </Text>
                  <div className="md:h-[637px] h-[642px] relative w-full">
                    <Text
                      className="mt-[270px] text-gray-800 text-sm tracking-[0.42px]"
                      size="txtNotoSerifTamilMedium14"
                    >
                      Power (Watt)
                    </Text>
                    <div className="absolute md:h-[637px] h-[642px] inset-[0] justify-center m-auto w-full">
                      <div className="flex flex-col h-full items-start justify-start m-auto w-full">
                        <div className="flex h-12 justify-end relative w-full">
                          <Text
                            className="mb-2.5 ml-[13px] mt-auto text-gray-600 text-sm tracking-[0.42px]"
                            size="txtNotoSerifTamilMedium14Gray600"
                          >
                            Select Sub Categories
                          </Text>
                          <Input
                            name="rectangle236"
                            placeholder=""
                            className="justify-center p-0 w-full"
                            wrapClassName="absolute flex h-12 inset-[0] m-auto w-full"
                            shape="round"
                            color="gray_600"
                            variant="outline"
                          ></Input>
                        </div>
                        <Text
                          className="mt-[21px] text-gray-800 text-sm tracking-[0.42px]"
                          size="txtNotoSerifTamilMedium14"
                        >
                          Shop by Areas
                        </Text>
                        <div className="h-12 md:h-[58px] mt-2.5 relative w-full">
                          <Text
                            className="ml-[13px] my-auto text-gray-600 text-sm tracking-[0.42px]"
                            size="txtNotoSerifTamilMedium14Gray600"
                          >
                            Kitchen
                          </Text>
                          <Input
                            name="rectangle236_One"
                            placeholder=""
                            className="justify-center p-0 w-full"
                            wrapClassName="absolute flex h-12 inset-[0] m-auto w-full"
                            shape="round"
                            color="gray_600"
                            variant="outline"
                          ></Input>
                        </div>
                        <Text
                          className="mt-[19px] text-gray-800 text-sm tracking-[0.42px]"
                          size="txtNotoSerifTamilMedium14"
                        >
                          Brand
                        </Text>
                        <div className="flex h-12 md:h-[58px] justify-end mt-2.5 relative w-full">
                          <Text
                            className="mb-[11px] ml-[13px] mt-auto text-gray-600 text-sm tracking-[0.42px]"
                            size="txtNotoSerifTamilMedium14Gray600"
                          >
                            Brand
                          </Text>
                          <Input
                            name="rectangle235"
                            placeholder=""
                            className="justify-center p-0 w-full"
                            wrapClassName="absolute flex h-12 inset-[0] m-auto w-full"
                            shape="round"
                            color="gray_600"
                            variant="outline"
                          ></Input>
                        </div>
                        <div className="flex h-12 md:h-[98px] justify-end mt-[50px] relative w-full">
                          <Text
                            className="mb-[11px] ml-[13px] mt-auto text-gray-600 text-sm tracking-[0.42px]"
                            size="txtNotoSerifTamilMedium14Gray600"
                          >
                            1W
                          </Text>
                          <Input
                            name="rectangle234"
                            placeholder=""
                            className="justify-center p-0 w-full"
                            wrapClassName="absolute flex h-12 inset-[0] m-auto w-full"
                            shape="round"
                            color="gray_600"
                            variant="outline"
                          ></Input>
                        </div>
                        <Text
                          className="mt-[19px] text-gray-800 text-sm tracking-[0.42px]"
                          size="txtNotoSerifTamilMedium14"
                        >
                          Finish
                        </Text>
                        <div className="flex h-12 md:h-14 justify-end mt-2 relative w-full">
                          <Text
                            className="mb-[11px] ml-[13px] mt-auto text-gray-600 text-sm tracking-[0.42px]"
                            size="txtNotoSerifTamilMedium14Gray600"
                          >
                            Black
                          </Text>
                          <Input
                            name="rectangle234_One"
                            placeholder=""
                            className="justify-center p-0 w-full"
                            wrapClassName="absolute flex h-12 inset-[0] m-auto w-full"
                            shape="round"
                            color="gray_600"
                            variant="outline"
                          ></Input>
                        </div>
                        <Text
                          className="mt-[19px] text-gray-800 text-sm tracking-[0.42px]"
                          size="txtNotoSerifTamilMedium14"
                        >
                          Materials
                        </Text>
                        <div className="flex h-12 md:h-14 justify-end mt-2 relative w-full">
                          <Text
                            className="mb-[11px] ml-[13px] mt-auto text-gray-600 text-sm tracking-[0.42px]"
                            size="txtNotoSerifTamilMedium14Gray600"
                          >
                            Aluminium
                          </Text>
                          <Input
                            name="rectangle234_Two"
                            placeholder=""
                            className="justify-center p-0 w-full"
                            wrapClassName="absolute flex h-12 inset-[0] m-auto w-full"
                            shape="round"
                            color="gray_600"
                            variant="outline"
                          ></Input>
                        </div>
                        <Text
                          className="mt-[19px] text-gray-800 text-sm tracking-[0.42px]"
                          size="txtNotoSerifTamilMedium14"
                        >
                          Dimmable
                        </Text>
                        <div className="flex h-12 md:h-14 justify-end mt-2 relative w-full">
                          <Text
                            className="mb-[9px] ml-[13px] mt-auto text-gray-600 text-sm tracking-[0.42px]"
                            size="txtNotoSerifTamilMedium14Gray600"
                          >
                            Optional
                          </Text>
                          <Input
                            name="rectangle234_Three"
                            placeholder=""
                            className="justify-center p-0 w-full"
                            wrapClassName="absolute flex h-12 inset-[0] m-auto w-full"
                            shape="round"
                            color="gray_600"
                            variant="outline"
                          ></Input>
                        </div>
                      </div>
                      <Img
                        className="absolute h-[618px] inset-y-[0] my-auto right-[6%]"
                        src="images/img_group184.svg"
                        alt="group184"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col gap-5 items-center justify-start w-[84%] md:w-full">
              <div className="flex md:flex-col flex-row gap-5 items-center justify-between w-full">
                <Input
                  name="description"
                  placeholder="Downlights      Spot Lights      Modular Lights      Recessed Linear Lights      Magnetic Track Lights      Linear Pendant Lights      Cabinet Lights      Track Lights"
                  className="font-medium leading-[normal] p-0 placeholder:text-gray-600 text-left text-xs tracking-[0.36px] w-full"
                  wrapClassName="md:flex-1 md:w-full"
                  shape="round"
                  color="white_A700"
                  size="md"
                  variant="fill"
                ></Input>
                <div className="bg-white-A700 flex md:flex-1 flex-row items-center justify-between p-[9px] rounded w-[30%] md:w-full">
                  <Text
                    className="ml-[29px] text-center text-gray-600 text-sm tracking-[0.42px]"
                    size="txtNotoSerifTamilMedium14Gray600"
                  >
                    1-25 of 500
                  </Text>
                  <div className="flex flex-row gap-2.5 items-center justify-center mr-[22px]">
                    <Text
                      className="text-black-900 text-xs tracking-[0.36px]"
                      size="txtNotoSerifTamilMedium12"
                    >
                      Sort By
                    </Text>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[159px] rounded"
                      rightIcon={
                        <div className="ml-[19px] bg-gray-600 my-px">
                          <Img
                            src="images/img_arrowdown.svg"
                            alt="arrow_down"
                          />
                        </div>
                      }
                      shape="round"
                      color="gray_600"
                      size="xs"
                      variant="outline"
                    >
                      <div className="font-medium leading-[normal] text-left text-xs tracking-[0.36px]">
                        Ascending Order
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-center min-h-[auto] w-full">
                <div className="md:h-[424px] h-[433px] relative w-full">
                  <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-start justify-center m-auto p-6 sm:px-5 rounded w-full">
                    <Img
                      className="h-[210px] md:h-auto md:ml-[0] ml-[3px] mt-0.5 object-cover w-[210px]"
                      src="images/img_essentialgu101.png"
                      alt="essentialgu101"
                    />
                    <Text
                      className="md:ml-[0] ml-[3px] mt-[43px] text-gray-600 text-sm tracking-[0.42px]"
                      size="txtNotoSerifTamilMedium14Gray600"
                    >
                      Essential
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[3px] mt-[7px] text-gray-800 text-xl tracking-[0.60px]"
                      size="txtNotoSerifTamilBold20"
                    >
                      AED 85.75 / Piece
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[3px] mt-2 text-gray-600 text-sm tracking-[0.42px] w-[99%] sm:w-full"
                      size="txtNotoSerifTamilMedium14Gray600"
                    >
                      Please Login/Register to See the Stock Details
                    </Text>
                  </div>
                  <div className="absolute flex flex-row items-start justify-center left-[10%] top-[0] w-1/4">
                    <div className="bg-yellow-800 flex flex-col items-center justify-start rounded-tl">
                      <Text
                        className="text-gray-800 text-sm tracking-[0.42px]"
                        size="txtNotoSerifTamilMedium14"
                      >
                        New
                      </Text>
                    </div>
                    <Img
                      className="h-[7px]"
                      src="images/img_vector2.svg"
                      alt="vectorTwo"
                    />
                  </div>
                </div>
                <div className="md:h-[424px] h-[433px] relative w-full">
                  <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-start justify-center m-auto p-6 sm:px-5 rounded w-full">
                    <Img
                      className="h-[210px] md:h-auto md:ml-[0] ml-[3px] mt-0.5 object-cover w-[210px]"
                      src="images/img_essentialgu101.png"
                      alt="essentialgu101"
                    />
                    <Text
                      className="md:ml-[0] ml-[3px] mt-[43px] text-gray-600 text-sm tracking-[0.42px]"
                      size="txtNotoSerifTamilMedium14Gray600"
                    >
                      Essential
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[3px] mt-[7px] text-gray-800 text-xl tracking-[0.60px]"
                      size="txtNotoSerifTamilBold20"
                    >
                      AED 85.75 / Piece
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[3px] mt-2 text-gray-600 text-sm tracking-[0.42px] w-[99%] sm:w-full"
                      size="txtNotoSerifTamilMedium14Gray600"
                    >
                      Please Login/Register to See the Stock Details
                    </Text>
                  </div>
                  <div className="absolute flex flex-row items-start justify-center left-[10%] top-[0] w-1/4">
                    <div className="bg-yellow-800 flex flex-col items-center justify-start rounded-tl">
                      <Text
                        className="text-gray-800 text-sm tracking-[0.42px]"
                        size="txtNotoSerifTamilMedium14"
                      >
                        New
                      </Text>
                    </div>
                    <Img
                      className="h-[7px]"
                      src="images/img_vector2.svg"
                      alt="vectorTwo"
                    />
                  </div>
                </div>
                <div className="md:h-[424px] h-[433px] relative w-full">
                  <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-start justify-center m-auto p-6 sm:px-5 rounded w-full">
                    <Img
                      className="h-[210px] md:h-auto md:ml-[0] ml-[3px] mt-0.5 object-cover w-[210px]"
                      src="images/img_essentialgu101.png"
                      alt="essentialgu101"
                    />
                    <Text
                      className="md:ml-[0] ml-[3px] mt-[43px] text-gray-600 text-sm tracking-[0.42px]"
                      size="txtNotoSerifTamilMedium14Gray600"
                    >
                      Essential
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[3px] mt-[7px] text-gray-800 text-xl tracking-[0.60px]"
                      size="txtNotoSerifTamilBold20"
                    >
                      AED 85.75 / Piece
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[3px] mt-2 text-gray-600 text-sm tracking-[0.42px] w-[99%] sm:w-full"
                      size="txtNotoSerifTamilMedium14Gray600"
                    >
                      Please Login/Register to See the Stock Details
                    </Text>
                  </div>
                  <div className="absolute flex flex-row items-start justify-center left-[10%] top-[0] w-1/4">
                    <div className="bg-yellow-800 flex flex-col items-center justify-start rounded-tl">
                      <Text
                        className="text-gray-800 text-sm tracking-[0.42px]"
                        size="txtNotoSerifTamilMedium14"
                      >
                        New
                      </Text>
                    </div>
                    <Img
                      className="h-[7px]"
                      src="images/img_vector2.svg"
                      alt="vectorTwo"
                    />
                  </div>
                </div>
                <div className="md:h-[424px] h-[433px] relative w-full">
                  <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-start justify-center m-auto p-6 sm:px-5 rounded w-full">
                    <Img
                      className="h-[210px] md:h-auto md:ml-[0] ml-[3px] mt-0.5 object-cover w-[210px]"
                      src="images/img_essentialgu101.png"
                      alt="essentialgu101"
                    />
                    <Text
                      className="md:ml-[0] ml-[3px] mt-[43px] text-gray-600 text-sm tracking-[0.42px]"
                      size="txtNotoSerifTamilMedium14Gray600"
                    >
                      Essential
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[3px] mt-[7px] text-gray-800 text-xl tracking-[0.60px]"
                      size="txtNotoSerifTamilBold20"
                    >
                      AED 85.75 / Piece
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[3px] mt-2 text-gray-600 text-sm tracking-[0.42px] w-[99%] sm:w-full"
                      size="txtNotoSerifTamilMedium14Gray600"
                    >
                      Please Login/Register to See the Stock Details
                    </Text>
                  </div>
                  <div className="absolute flex flex-row items-start justify-center left-[10%] top-[0] w-1/4">
                    <div className="bg-yellow-800 flex flex-col items-center justify-start rounded-tl">
                      <Text
                        className="text-gray-800 text-sm tracking-[0.42px]"
                        size="txtNotoSerifTamilMedium14"
                      >
                        New
                      </Text>
                    </div>
                    <Img
                      className="h-[7px]"
                      src="images/img_vector2.svg"
                      alt="vectorTwo"
                    />
                  </div>
                </div>
                <div className="md:h-[424px] h-[433px] relative w-full">
                  <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-start justify-center m-auto p-6 sm:px-5 rounded w-full">
                    <Img
                      className="h-[210px] md:h-auto md:ml-[0] ml-[3px] mt-0.5 object-cover w-[210px]"
                      src="images/img_essentialgu101.png"
                      alt="essentialgu101"
                    />
                    <Text
                      className="md:ml-[0] ml-[3px] mt-[43px] text-gray-600 text-sm tracking-[0.42px]"
                      size="txtNotoSerifTamilMedium14Gray600"
                    >
                      Essential
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[3px] mt-[7px] text-gray-800 text-xl tracking-[0.60px]"
                      size="txtNotoSerifTamilBold20"
                    >
                      AED 85.75 / Piece
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[3px] mt-2 text-gray-600 text-sm tracking-[0.42px] w-[99%] sm:w-full"
                      size="txtNotoSerifTamilMedium14Gray600"
                    >
                      Please Login/Register to See the Stock Details
                    </Text>
                  </div>
                  <div className="absolute flex flex-row items-start justify-center left-[10%] top-[0] w-1/4">
                    <div className="bg-yellow-800 flex flex-col items-center justify-start rounded-tl">
                      <Text
                        className="text-gray-800 text-sm tracking-[0.42px]"
                        size="txtNotoSerifTamilMedium14"
                      >
                        New
                      </Text>
                    </div>
                    <Img
                      className="h-[7px]"
                      src="images/img_vector2.svg"
                      alt="vectorTwo"
                    />
                  </div>
                </div>
                <div className="md:h-[424px] h-[433px] relative w-full">
                  <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-start justify-center m-auto p-6 sm:px-5 rounded w-full">
                    <Img
                      className="h-[210px] md:h-auto md:ml-[0] ml-[3px] mt-0.5 object-cover w-[210px]"
                      src="images/img_essentialgu101.png"
                      alt="essentialgu101"
                    />
                    <Text
                      className="md:ml-[0] ml-[3px] mt-[43px] text-gray-600 text-sm tracking-[0.42px]"
                      size="txtNotoSerifTamilMedium14Gray600"
                    >
                      Essential
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[3px] mt-[7px] text-gray-800 text-xl tracking-[0.60px]"
                      size="txtNotoSerifTamilBold20"
                    >
                      AED 85.75 / Piece
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[3px] mt-2 text-gray-600 text-sm tracking-[0.42px] w-[99%] sm:w-full"
                      size="txtNotoSerifTamilMedium14Gray600"
                    >
                      Please Login/Register to See the Stock Details
                    </Text>
                  </div>
                  <div className="absolute flex flex-row items-start justify-center left-[10%] top-[0] w-1/4">
                    <div className="bg-yellow-800 flex flex-col items-center justify-start rounded-tl">
                      <Text
                        className="text-gray-800 text-sm tracking-[0.42px]"
                        size="txtNotoSerifTamilMedium14"
                      >
                        New
                      </Text>
                    </div>
                    <Img
                      className="h-[7px]"
                      src="images/img_vector2.svg"
                      alt="vectorTwo"
                    />
                  </div>
                </div>
                <div className="md:h-[424px] h-[433px] relative w-full">
                  <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-start justify-center m-auto p-6 sm:px-5 rounded w-full">
                    <Img
                      className="h-[210px] md:h-auto md:ml-[0] ml-[3px] mt-0.5 object-cover w-[210px]"
                      src="images/img_essentialgu101.png"
                      alt="essentialgu101"
                    />
                    <Text
                      className="md:ml-[0] ml-[3px] mt-[43px] text-gray-600 text-sm tracking-[0.42px]"
                      size="txtNotoSerifTamilMedium14Gray600"
                    >
                      Essential
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[3px] mt-[7px] text-gray-800 text-xl tracking-[0.60px]"
                      size="txtNotoSerifTamilBold20"
                    >
                      AED 85.75 / Piece
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[3px] mt-2 text-gray-600 text-sm tracking-[0.42px] w-[99%] sm:w-full"
                      size="txtNotoSerifTamilMedium14Gray600"
                    >
                      Please Login/Register to See the Stock Details
                    </Text>
                  </div>
                  <div className="absolute flex flex-row items-start justify-center left-[10%] top-[0] w-1/4">
                    <div className="bg-yellow-800 flex flex-col items-center justify-start rounded-tl">
                      <Text
                        className="text-gray-800 text-sm tracking-[0.42px]"
                        size="txtNotoSerifTamilMedium14"
                      >
                        New
                      </Text>
                    </div>
                    <Img
                      className="h-[7px]"
                      src="images/img_vector2.svg"
                      alt="vectorTwo"
                    />
                  </div>
                </div>
                <div className="md:h-[424px] h-[433px] relative w-full">
                  <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-start justify-center m-auto p-6 sm:px-5 rounded w-full">
                    <Img
                      className="h-[210px] md:h-auto md:ml-[0] ml-[3px] mt-0.5 object-cover w-[210px]"
                      src="images/img_essentialgu101.png"
                      alt="essentialgu101"
                    />
                    <Text
                      className="md:ml-[0] ml-[3px] mt-[43px] text-gray-600 text-sm tracking-[0.42px]"
                      size="txtNotoSerifTamilMedium14Gray600"
                    >
                      Essential
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[3px] mt-[7px] text-gray-800 text-xl tracking-[0.60px]"
                      size="txtNotoSerifTamilBold20"
                    >
                      AED 85.75 / Piece
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[3px] mt-2 text-gray-600 text-sm tracking-[0.42px] w-[99%] sm:w-full"
                      size="txtNotoSerifTamilMedium14Gray600"
                    >
                      Please Login/Register to See the Stock Details
                    </Text>
                  </div>
                  <div className="absolute flex flex-row items-start justify-center left-[10%] top-[0] w-1/4">
                    <div className="bg-yellow-800 flex flex-col items-center justify-start rounded-tl">
                      <Text
                        className="text-gray-800 text-sm tracking-[0.42px]"
                        size="txtNotoSerifTamilMedium14"
                      >
                        New
                      </Text>
                    </div>
                    <Img
                      className="h-[7px]"
                      src="images/img_vector2.svg"
                      alt="vectorTwo"
                    />
                  </div>
                </div>
                <div className="md:h-[424px] h-[433px] relative w-full">
                  <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-start justify-center m-auto p-6 sm:px-5 rounded w-full">
                    <Img
                      className="h-[210px] md:h-auto md:ml-[0] ml-[3px] mt-0.5 object-cover w-[210px]"
                      src="images/img_essentialgu101.png"
                      alt="essentialgu101"
                    />
                    <Text
                      className="md:ml-[0] ml-[3px] mt-[43px] text-gray-600 text-sm tracking-[0.42px]"
                      size="txtNotoSerifTamilMedium14Gray600"
                    >
                      Essential
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[3px] mt-[7px] text-gray-800 text-xl tracking-[0.60px]"
                      size="txtNotoSerifTamilBold20"
                    >
                      AED 85.75 / Piece
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[3px] mt-2 text-gray-600 text-sm tracking-[0.42px] w-[99%] sm:w-full"
                      size="txtNotoSerifTamilMedium14Gray600"
                    >
                      Please Login/Register to See the Stock Details
                    </Text>
                  </div>
                  <div className="absolute flex flex-row items-start justify-center left-[10%] top-[0] w-1/4">
                    <div className="bg-yellow-800 flex flex-col items-center justify-start rounded-tl">
                      <Text
                        className="text-gray-800 text-sm tracking-[0.42px]"
                        size="txtNotoSerifTamilMedium14"
                      >
                        New
                      </Text>
                    </div>
                    <Img
                      className="h-[7px]"
                      src="images/img_vector2.svg"
                      alt="vectorTwo"
                    />
                  </div>
                </div>
                <div className="md:h-[424px] h-[433px] relative w-full">
                  <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-start justify-center m-auto p-6 sm:px-5 rounded w-full">
                    <Img
                      className="h-[210px] md:h-auto md:ml-[0] ml-[3px] mt-0.5 object-cover w-[210px]"
                      src="images/img_essentialgu101.png"
                      alt="essentialgu101"
                    />
                    <Text
                      className="md:ml-[0] ml-[3px] mt-[43px] text-gray-600 text-sm tracking-[0.42px]"
                      size="txtNotoSerifTamilMedium14Gray600"
                    >
                      Essential
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[3px] mt-[7px] text-gray-800 text-xl tracking-[0.60px]"
                      size="txtNotoSerifTamilBold20"
                    >
                      AED 85.75 / Piece
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[3px] mt-2 text-gray-600 text-sm tracking-[0.42px] w-[99%] sm:w-full"
                      size="txtNotoSerifTamilMedium14Gray600"
                    >
                      Please Login/Register to See the Stock Details
                    </Text>
                  </div>
                  <div className="absolute flex flex-row items-start justify-center left-[10%] top-[0] w-1/4">
                    <div className="bg-yellow-800 flex flex-col items-center justify-start rounded-tl">
                      <Text
                        className="text-gray-800 text-sm tracking-[0.42px]"
                        size="txtNotoSerifTamilMedium14"
                      >
                        New
                      </Text>
                    </div>
                    <Img
                      className="h-[7px]"
                      src="images/img_vector2.svg"
                      alt="vectorTwo"
                    />
                  </div>
                </div>
                <div className="md:h-[424px] h-[433px] relative w-full">
                  <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-start justify-center m-auto p-6 sm:px-5 rounded w-full">
                    <Img
                      className="h-[210px] md:h-auto md:ml-[0] ml-[3px] mt-0.5 object-cover w-[210px]"
                      src="images/img_essentialgu101.png"
                      alt="essentialgu101"
                    />
                    <Text
                      className="md:ml-[0] ml-[3px] mt-[43px] text-gray-600 text-sm tracking-[0.42px]"
                      size="txtNotoSerifTamilMedium14Gray600"
                    >
                      Essential
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[3px] mt-[7px] text-gray-800 text-xl tracking-[0.60px]"
                      size="txtNotoSerifTamilBold20"
                    >
                      AED 85.75 / Piece
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[3px] mt-2 text-gray-600 text-sm tracking-[0.42px] w-[99%] sm:w-full"
                      size="txtNotoSerifTamilMedium14Gray600"
                    >
                      Please Login/Register to See the Stock Details
                    </Text>
                  </div>
                  <div className="absolute flex flex-row items-start justify-center left-[10%] top-[0] w-1/4">
                    <div className="bg-yellow-800 flex flex-col items-center justify-start rounded-tl">
                      <Text
                        className="text-gray-800 text-sm tracking-[0.42px]"
                        size="txtNotoSerifTamilMedium14"
                      >
                        New
                      </Text>
                    </div>
                    <Img
                      className="h-[7px]"
                      src="images/img_vector2.svg"
                      alt="vectorTwo"
                    />
                  </div>
                </div>
                <div className="md:h-[424px] h-[433px] relative w-full">
                  <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-start justify-center m-auto p-6 sm:px-5 rounded w-full">
                    <Img
                      className="h-[210px] md:h-auto md:ml-[0] ml-[3px] mt-0.5 object-cover w-[210px]"
                      src="images/img_essentialgu101.png"
                      alt="essentialgu101"
                    />
                    <Text
                      className="md:ml-[0] ml-[3px] mt-[43px] text-gray-600 text-sm tracking-[0.42px]"
                      size="txtNotoSerifTamilMedium14Gray600"
                    >
                      Essential
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[3px] mt-[7px] text-gray-800 text-xl tracking-[0.60px]"
                      size="txtNotoSerifTamilBold20"
                    >
                      AED 85.75 / Piece
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[3px] mt-2 text-gray-600 text-sm tracking-[0.42px] w-[99%] sm:w-full"
                      size="txtNotoSerifTamilMedium14Gray600"
                    >
                      Please Login/Register to See the Stock Details
                    </Text>
                  </div>
                  <div className="absolute flex flex-row items-start justify-center left-[10%] top-[0] w-1/4">
                    <div className="bg-yellow-800 flex flex-col items-center justify-start rounded-tl">
                      <Text
                        className="text-gray-800 text-sm tracking-[0.42px]"
                        size="txtNotoSerifTamilMedium14"
                      >
                        New
                      </Text>
                    </div>
                    <Img
                      className="h-[7px]"
                      src="images/img_vector2.svg"
                      alt="vectorTwo"
                    />
                  </div>
                </div>
                <div className="md:h-[424px] h-[433px] relative w-full">
                  <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-start justify-center m-auto p-6 sm:px-5 rounded w-full">
                    <Img
                      className="h-[210px] md:h-auto md:ml-[0] ml-[3px] mt-0.5 object-cover w-[210px]"
                      src="images/img_essentialgu101.png"
                      alt="essentialgu101"
                    />
                    <Text
                      className="md:ml-[0] ml-[3px] mt-[43px] text-gray-600 text-sm tracking-[0.42px]"
                      size="txtNotoSerifTamilMedium14Gray600"
                    >
                      Essential
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[3px] mt-[7px] text-gray-800 text-xl tracking-[0.60px]"
                      size="txtNotoSerifTamilBold20"
                    >
                      AED 85.75 / Piece
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[3px] mt-2 text-gray-600 text-sm tracking-[0.42px] w-[99%] sm:w-full"
                      size="txtNotoSerifTamilMedium14Gray600"
                    >
                      Please Login/Register to See the Stock Details
                    </Text>
                  </div>
                  <div className="absolute flex flex-row items-start justify-center left-[10%] top-[0] w-1/4">
                    <div className="bg-yellow-800 flex flex-col items-center justify-start rounded-tl">
                      <Text
                        className="text-gray-800 text-sm tracking-[0.42px]"
                        size="txtNotoSerifTamilMedium14"
                      >
                        New
                      </Text>
                    </div>
                    <Img
                      className="h-[7px]"
                      src="images/img_vector2.svg"
                      alt="vectorTwo"
                    />
                  </div>
                </div>
                <div className="md:h-[424px] h-[433px] relative w-full">
                  <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-start justify-center m-auto p-6 sm:px-5 rounded w-full">
                    <Img
                      className="h-[210px] md:h-auto md:ml-[0] ml-[3px] mt-0.5 object-cover w-[210px]"
                      src="images/img_essentialgu101.png"
                      alt="essentialgu101"
                    />
                    <Text
                      className="md:ml-[0] ml-[3px] mt-[43px] text-gray-600 text-sm tracking-[0.42px]"
                      size="txtNotoSerifTamilMedium14Gray600"
                    >
                      Essential
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[3px] mt-[7px] text-gray-800 text-xl tracking-[0.60px]"
                      size="txtNotoSerifTamilBold20"
                    >
                      AED 85.75 / Piece
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[3px] mt-2 text-gray-600 text-sm tracking-[0.42px] w-[99%] sm:w-full"
                      size="txtNotoSerifTamilMedium14Gray600"
                    >
                      Please Login/Register to See the Stock Details
                    </Text>
                  </div>
                  <div className="absolute flex flex-row items-start justify-center left-[10%] top-[0] w-1/4">
                    <div className="bg-yellow-800 flex flex-col items-center justify-start rounded-tl">
                      <Text
                        className="text-gray-800 text-sm tracking-[0.42px]"
                        size="txtNotoSerifTamilMedium14"
                      >
                        New
                      </Text>
                    </div>
                    <Img
                      className="h-[7px]"
                      src="images/img_vector2.svg"
                      alt="vectorTwo"
                    />
                  </div>
                </div>
                <div className="md:h-[424px] h-[433px] relative w-full">
                  <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-start justify-center m-auto p-6 sm:px-5 rounded w-full">
                    <Img
                      className="h-[210px] md:h-auto md:ml-[0] ml-[3px] mt-0.5 object-cover w-[210px]"
                      src="images/img_essentialgu101.png"
                      alt="essentialgu101"
                    />
                    <Text
                      className="md:ml-[0] ml-[3px] mt-[43px] text-gray-600 text-sm tracking-[0.42px]"
                      size="txtNotoSerifTamilMedium14Gray600"
                    >
                      Essential
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[3px] mt-[7px] text-gray-800 text-xl tracking-[0.60px]"
                      size="txtNotoSerifTamilBold20"
                    >
                      AED 85.75 / Piece
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[3px] mt-2 text-gray-600 text-sm tracking-[0.42px] w-[99%] sm:w-full"
                      size="txtNotoSerifTamilMedium14Gray600"
                    >
                      Please Login/Register to See the Stock Details
                    </Text>
                  </div>
                  <div className="absolute flex flex-row items-start justify-center left-[10%] top-[0] w-1/4">
                    <div className="bg-yellow-800 flex flex-col items-center justify-start rounded-tl">
                      <Text
                        className="text-gray-800 text-sm tracking-[0.42px]"
                        size="txtNotoSerifTamilMedium14"
                      >
                        New
                      </Text>
                    </div>
                    <Img
                      className="h-[7px]"
                      src="images/img_vector2.svg"
                      alt="vectorTwo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-col items-center justify-start max-w-[1719px] mt-[21px] mx-auto p-[18px] md:px-5 rounded w-full">
            <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-center mb-0.5 w-[27%] md:w-full">
              <Button
                className="cursor-pointer font-medium leading-[normal] min-w-[78px] rounded text-center text-xs tracking-[0.36px]"
                shape="round"
                color="gray_600"
                size="xs"
                variant="outline"
              >
                First
              </Button>
              <Button
                className="cursor-pointer font-medium h-8 leading-[normal] ml-2 sm:ml-[0] rounded text-center text-xs tracking-[0.36px] w-8"
                shape="round"
                color="gray_600"
                size="xs"
                variant="outline"
              >
                1
              </Button>
              <Button
                className="cursor-pointer font-medium h-8 leading-[normal] ml-2.5 sm:ml-[0] rounded text-center text-xs tracking-[0.36px] w-8"
                shape="round"
                color="gray_600"
                size="xs"
                variant="outline"
              >
                2
              </Button>
              <Button
                className="cursor-pointer font-medium h-8 leading-[normal] ml-2.5 sm:ml-[0] rounded text-center text-xs tracking-[0.36px] w-8"
                shape="round"
                color="gray_600"
                size="xs"
                variant="outline"
              >
                <>&lt;</>
              </Button>
              <Button
                className="cursor-pointer font-medium leading-[normal] min-w-[56px] ml-2.5 sm:ml-[0] rounded text-center text-xs tracking-[0.36px]"
                shape="round"
                color="gray_600"
                size="xs"
                variant="outline"
              >
                ..........
              </Button>
              <Button
                className="cursor-pointer font-medium h-8 leading-[normal] ml-2.5 sm:ml-[0] rounded text-center text-xs tracking-[0.36px] w-8"
                shape="round"
                color="gray_600"
                size="xs"
                variant="outline"
              >
                <>&gt;</>
              </Button>
              <Button
                className="cursor-pointer font-medium h-8 leading-[normal] ml-2.5 sm:ml-[0] rounded text-center text-xs tracking-[0.36px] w-8"
                shape="round"
                color="gray_600"
                size="xs"
                variant="outline"
              >
                16
              </Button>
              <Button
                className="cursor-pointer font-medium leading-[normal] min-w-[78px] ml-2.5 sm:ml-[0] rounded text-center text-xs tracking-[0.36px]"
                shape="round"
                color="gray_600"
                size="xs"
                variant="outline"
              >
                Last
              </Button>
            </div>
          </div>
          <Footer className="flex items-center justify-center mt-[100px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default ProductArchivePagePage;
