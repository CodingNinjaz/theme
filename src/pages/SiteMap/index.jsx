import React from "react";

import { Button, Img, Line, List, Text } from "components";

const SiteMapPage = () => {
  return (
    <>
      <div className="bg-white-A700 font-notoseriftamil h-[2128px] mx-auto p-[53px] md:px-10 sm:px-5 relative w-full">
        <div className="h-[1548px] md:h-[671px] sm:h-[949px] max-w-[1788px] mt-16 mx-auto w-full">
          <div className="absolute md:h-[279px] sm:h-[527px] h-[765px] left-1/4 top-[0] w-[33%] sm:w-full">
            <div className="absolute bottom-[0] flex flex-col gap-10 items-start justify-start left-[10%] w-[41%]">
              <div className="h-[178px] relative w-[93%]">
                <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                  <div className="flex flex-row gap-9 items-start justify-between w-full">
                    <Line className="bg-black-900 h-[155px] mb-[23px] w-px" />
                    <div className="bg-blue_gray-50 flex flex-col items-start justify-start mt-2.5 p-4 rounded-lg">
                      <Text
                        className="ml-2 md:ml-[0] text-black-900 text-sm tracking-[0.42px]"
                        size="txtNotoSerifTamilMedium14Black900"
                      >
                        <>
                          Categories,
                          <br />
                          Sub-categories,
                          <br />
                          Brand
                          <br />
                          Application Areas
                        </>
                      </Text>
                    </div>
                  </div>
                </div>
                <Line className="absolute bg-black-900 h-px left-[0] top-[21%] w-[24%]" />
                <Line className="absolute bg-black-900 h-px left-[0] top-[42%] w-[24%]" />
                <Line className="absolute bg-black-900 bottom-[36%] h-px left-[0] w-[24%]" />
                <Line className="absolute bg-black-900 bottom-[15%] h-px left-[0] w-[24%]" />
              </div>
              <div className="h-[61px] relative w-full">
                <Text
                  className="m-auto text-black-900 text-lg tracking-[0.54px]"
                  size="txtNotoSerifTamilMedium18Black900"
                >
                  Product Single Page
                </Text>
                <div className="absolute border border-gray-800 border-solid h-[61px] inset-[0] justify-center m-auto rounded-lg w-full"></div>
              </div>
            </div>
            <div className="absolute flex flex-col md:gap-10 gap-[300px] justify-start right-[0] top-[0] w-[51%]">
              <a
                href="www.sunriseoasislighting.com"
                className="text-black-900 text-lg tracking-[0.54px]"
                target="_blank"
                rel="noreferrer"
              >
                <Text size="txtNotoSerifTamilBold18Black900">
                  www.sunriseoasislighting.com
                </Text>
              </a>
              <div className="md:h-[173px] h-[198px] md:ml-[0] ml-[55px] relative w-4/5">
                <div className="md:h-[173px] h-[198px] m-auto w-full">
                  <div className="flex flex-col md:gap-10 gap-[65px] h-full justify-start m-auto w-full">
                    <div className="h-[61px] mr-[47px] relative w-4/5">
                      <Text
                        className="m-auto text-black-900 text-center text-lg tracking-[0.54px]"
                        size="txtNotoSerifTamilMedium18Black900"
                      >
                        Blog
                      </Text>
                      <div className="absolute border border-gray-800 border-solid h-[61px] inset-[0] justify-center m-auto rounded-lg w-full"></div>
                    </div>
                    <Text
                      className="md:ml-[0] ml-[66px] text-black-900 text-lg tracking-[0.54px]"
                      size="txtNotoSerifTamilMedium18Black900"
                    >
                      <>
                        Blog Archive Page
                        <br />
                        Single Post
                      </>
                    </Text>
                  </div>
                  <Line className="absolute bg-black-900 bottom-[7%] h-[124px] left-[11%] w-px" />
                </div>
                <div className="absolute bottom-[7%] flex flex-col gap-[42px] items-center justify-start left-[11%] w-[12%]">
                  <Img
                    className="h-px"
                    src="images/img_arrow19.svg"
                    alt="arrowNineteen"
                  />
                  <Img
                    className="h-px"
                    src="images/img_arrow19.svg"
                    alt="arrowTwenty"
                  />
                </div>
              </div>
            </div>
            <div className="absolute bottom-[37%] flex flex-col md:gap-10 gap-16 justify-start left-[0] w-[44%]">
              <div className="h-[61px] relative w-[73%]">
                <Text
                  className="m-auto text-black-900 text-center text-lg tracking-[0.54px]"
                  size="txtNotoSerifTamilMedium18Black900"
                >
                  Shop
                </Text>
                <div className="absolute border border-gray-800 border-solid h-[61px] inset-[0] justify-center m-auto rounded-lg w-full"></div>
              </div>
              <Text
                className="ml-14 md:ml-[0] text-black-900 text-lg tracking-[0.54px]"
                size="txtNotoSerifTamilMedium18Black900"
              >
                Product Archive Page
              </Text>
            </div>
          </div>
          <div className="absolute flex sm:flex-col flex-row sm:gap-10 items-start justify-between right-[0] top-[21%] w-2/5">
            <div className="flex flex-col gap-3.5 justify-start mb-[30px] w-[41%] sm:w-full">
              <div className="md:h-[130px] h-[154px] mr-1.5 relative w-[98%]">
                <div className="md:h-[130px] h-[154px] m-auto w-full">
                  <div className="flex flex-col md:gap-10 gap-16 h-full justify-start m-auto w-full">
                    <div className="h-[61px] relative w-[67%]">
                      <Text
                        className="mt-3.5 mx-auto text-black-900 text-center text-lg tracking-[0.54px]"
                        size="txtNotoSerifTamilMedium18Black900"
                      >
                        Smart Touch
                      </Text>
                      <div className="absolute border border-gray-800 border-solid h-[61px] inset-[0] justify-center m-auto rounded-lg w-full"></div>
                    </div>
                    <Text
                      className="ml-14 md:ml-[0] text-black-900 text-lg tracking-[0.54px]"
                      size="txtNotoSerifTamilMedium18Black900"
                    >
                      Home - Single Page Only
                    </Text>
                  </div>
                  <Line className="absolute bg-black-900 bottom-[6%] h-[85px] left-[6%] w-px" />
                </div>
                <Img
                  className="absolute bottom-[8%] h-px left-[6%]"
                  src="images/img_arrow19.svg"
                  alt="arrowTwentyTwo"
                />
              </div>
              <div className="bg-blue_gray-50 flex flex-col items-center justify-start md:ml-[0] ml-[62px] p-[11px] rounded-lg">
                <Text
                  className="text-black-900 text-sm tracking-[0.42px] w-[96%] sm:w-full"
                  size="txtNotoSerifTamilMedium14Black900"
                >
                  Smart Touch is home automation section. It will have entirely
                  different looks and different single page only.
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-[23px] items-center justify-start sm:mt-0 mt-[121px]">
              <Text
                className="text-black-900 text-lg tracking-[0.54px]"
                size="txtNotoSerifTamilMedium18Black900"
              >
                <>
                  Login Popup Dialog Box
                  <br />
                  Register Popup Dialog Box
                </>
              </Text>
              <Text
                className="text-black-900 text-lg tracking-[0.54px]"
                size="txtNotoSerifTamilMedium18Black900"
              >
                <>
                  User Profile
                  <br />
                  User History
                  <br />
                  User Bucket/Cart List Pages
                </>
              </Text>
            </div>
          </div>
          <div className="absolute bottom-[0] flex flex-col gap-[13px] justify-start left-[3%] w-[63%]">
            <div className="flex flex-col md:gap-10 gap-[67px] justify-start w-full">
              <List
                className="sm:flex-col flex-row md:gap-10 gap-[115px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
                orientation="horizontal"
              >
                <div className="h-[61px] sm:ml-[0] relative w-full">
                  <Text
                    className="m-auto text-black-900 text-lg tracking-[0.54px]"
                    size="txtNotoSerifTamilMedium18Black900"
                  >
                    Send WhatsApp Text
                  </Text>
                  <div className="absolute border border-gray-800 border-solid h-[61px] inset-[0] justify-center m-auto rounded-lg w-full"></div>
                </div>
                <div className="h-[61px] sm:ml-[0] relative w-full">
                  <Text
                    className="mt-3.5 mx-auto text-black-900 text-lg tracking-[0.54px]"
                    size="txtNotoSerifTamilMedium18Black900"
                  >
                    Add to list
                  </Text>
                  <div className="absolute border border-gray-800 border-solid h-[61px] inset-[0] justify-center m-auto rounded-lg w-full"></div>
                </div>
                <div className="h-[61px] sm:ml-[0] relative w-full">
                  <Text
                    className="mt-3.5 mx-auto text-black-900 text-lg tracking-[0.54px]"
                    size="txtNotoSerifTamilMedium18Black900"
                  >
                    Download Data Shhet
                  </Text>
                  <div className="absolute border border-gray-800 border-solid h-[61px] inset-[0] justify-center m-auto rounded-lg w-full"></div>
                </div>
              </List>
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[453px] w-[26%] md:w-full">
                <Text
                  className="text-black-900 text-lg tracking-[0.54px]"
                  size="txtNotoSerifTamilMedium18Black900"
                >
                  Cart / Bucket Page
                </Text>
                <div className="bg-blue_gray-50 flex flex-col items-center justify-start mt-2.5 p-4 rounded-lg w-full">
                  <Text
                    className="mb-[3px] text-black-900 text-sm tracking-[0.42px] w-[97%] sm:w-full"
                    size="txtNotoSerifTamilMedium14Black900"
                  >
                    In this page you can add more product, and in total send a
                    collective quotation.
                  </Text>
                </div>
                <Text
                  className="mt-[21px] text-black-900 text-lg tracking-[0.54px]"
                  size="txtNotoSerifTamilMedium18Black900"
                >
                  Actions (It is not a any page )
                </Text>
              </div>
            </div>
            <div className="bg-blue_gray-50 flex flex-col items-start justify-end md:ml-[0] ml-[453px] mr-[373px] p-0.5 rounded-lg">
              <Text
                className="ml-3.5 md:ml-[0] mt-3 text-black-900 text-sm tracking-[0.42px]"
                size="txtNotoSerifTamilMedium14Black900"
              >
                <>
                  Add Product
                  <br />
                  Delete
                  <br />
                  Send Quotation
                  <br />
                  Download As PDF
                  <br />
                  Cancle
                </>
              </Text>
            </div>
          </div>
          <div className="absolute md:h-[393px] h-[420px] left-[0] top-[21%] w-[22%] sm:w-full">
            <div className="md:h-[393px] h-[420px] m-auto w-full">
              <div className="flex flex-col md:gap-10 gap-[67px] h-full justify-start m-auto w-full">
                <div className="h-[61px] relative w-[49%]">
                  <Text
                    className="mt-3.5 mx-auto text-black-900 text-lg tracking-[0.54px]"
                    size="txtNotoSerifTamilMedium18Black900"
                  >
                    About Us
                  </Text>
                  <div className="absolute border border-gray-800 border-solid h-[61px] inset-[0] justify-center m-auto rounded-lg w-full"></div>
                </div>
                <Text
                  className="md:ml-[0] ml-[42px] text-black-900 text-lg tracking-[0.54px]"
                  size="txtNotoSerifTamilMedium18Black900"
                >
                  <>
                    Messages
                    <br />
                    Company Information
                    <br />
                    Project & Services
                    <br />
                    Gallery
                    <br />
                    CSR (Corporate Social Responsibility)
                    <br />
                    Download
                    <br />
                    Contact US
                  </>
                </Text>
              </div>
              <Line className="absolute bg-black-900 bottom-[3%] h-[346px] left-[2%] w-px" />
            </div>
            <div className="absolute bottom-[3%] flex flex-col gap-11 items-center justify-start left-[2%] w-[7%]">
              <Img
                className="h-px"
                src="images/img_arrow19.svg"
                alt="arrowSeven"
              />
              <Img
                className="h-px"
                src="images/img_arrow19.svg"
                alt="arrowSix"
              />
              <Img
                className="h-px"
                src="images/img_arrow19.svg"
                alt="arrowFive"
              />
              <Img
                className="h-px"
                src="images/img_arrow19.svg"
                alt="arrowFour"
              />
              <Img
                className="h-px"
                src="images/img_arrow19.svg"
                alt="arrowThree"
              />
              <Img
                className="h-px"
                src="images/img_arrow19.svg"
                alt="arrowTwo"
              />
              <Img
                className="h-px"
                src="images/img_arrow19.svg"
                alt="arrowOne"
              />
            </div>
          </div>
        </div>
        <div className="absolute flex flex-col inset-x-[0] justify-start max-w-[1631px] mx-auto top-[10%] w-full">
          <Button
            className="!text-black-900 cursor-pointer font-medium leading-[normal] min-w-[185px] md:ml-[0] ml-[697px] rounded-lg text-center text-lg tracking-[0.54px]"
            shape="round"
            color="gray_800"
            size="lg"
            variant="outline"
          >
            Home
          </Button>
          <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start mr-[92px] mt-[7px] w-[95%] md:w-full">
            <div className="h-[145px] md:h-[448px] relative w-full">
              <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start left-[0] my-auto w-[71%]">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                  <Line className="bg-black-900 h-[81px] md:h-px md:mt-0 mt-16 md:w-full w-px" />
                  <Line className="bg-black-900 h-[81px] md:h-px md:ml-[0] ml-[442px] md:mt-0 mt-16 md:w-full w-px" />
                  <Line className="bg-black-900 h-[145px] md:h-px md:ml-[0] ml-[344px] md:w-full w-px" />
                  <Line className="bg-black-900 h-[81px] md:h-px md:ml-[0] ml-[290px] md:mt-0 mt-16 md:w-full w-px" />
                </div>
              </div>
              <Line className="absolute bg-black-900 h-px inset-x-[0] mx-auto top-[44%] w-full" />
            </div>
            <Line className="bg-black-900 h-[81px] md:h-px md:mt-0 mt-16 md:w-full w-px" />
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between md:ml-[0] ml-[108px] mt-[17px] w-[94%] md:w-full">
            <div className="flex flex-col justify-start md:mt-0 mt-[62px] w-[55%] md:w-full">
              <div className="flex flex-col items-center justify-start md:ml-[0] ml-[258px] w-[4%] md:w-full">
                <div className="flex relative w-full">
                  <Line className="bg-black-900 h-[344px] my-auto w-px" />
                  <Img
                    className="h-px ml-[-1px] mr-auto mt-[78px] z-[1]"
                    src="images/img_arrow19.svg"
                    alt="arrowTwentyNine"
                  />
                </div>
                <Img
                  className="h-px"
                  src="images/img_arrow19.svg"
                  alt="arrowEight"
                />
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-end justify-evenly mt-[42px] w-full">
                <div className="h-56 relative w-full">
                  <Line className="absolute bg-black-900 bottom-[44%] h-px inset-x-[0] mx-auto w-full" />
                  <div className="absolute flex flex-row h-full inset-y-[0] items-end justify-between left-[0] my-auto w-[49%]">
                    <Line className="bg-black-900 h-[101px] mt-[123px] w-px" />
                    <Line className="bg-black-900 h-56 w-px" />
                  </div>
                </div>
                <Line className="bg-black-900 h-[101px] md:h-px md:mt-0 mt-[123px] md:w-full w-px" />
              </div>
              <div className="flex flex-col items-center justify-start md:ml-[0] ml-[277px] mt-[73px] w-[4%] md:w-full">
                <div className="flex relative w-full">
                  <Line className="bg-black-900 h-[245px] my-auto w-px" />
                  <Img
                    className="h-px ml-[-1px] mr-auto mt-20 z-[1]"
                    src="images/img_arrow19.svg"
                    alt="arrowFourteen"
                  />
                </div>
                <Img
                  className="h-px"
                  src="images/img_arrow19.svg"
                  alt="arrowTwentyEight"
                />
              </div>
            </div>
            <div className="flex flex-col justify-start w-[18%] md:w-full">
              <div className="h-80 md:h-[259px] relative w-full">
                <div className="flex flex-col m-auto w-full">
                  <div className="h-[61px] mx-auto w-full">
                    <Text
                      className="m-auto text-black-900 text-lg tracking-[0.54px]"
                      size="txtNotoSerifTamilMedium18Black900"
                    >
                      User Login/Register
                    </Text>
                    <div className="absolute border border-gray-800 border-solid h-[61px] inset-[0] justify-center m-auto rounded-lg w-full"></div>
                  </div>
                  <Line className="bg-black-900 h-[260px] ml-[23px] mt-[-1px] w-px z-[1]" />
                </div>
                <div className="absolute bottom-[14%] flex flex-col items-center justify-start left-[9%] w-[10%]">
                  <Img
                    className="h-px"
                    src="images/img_arrow19.svg"
                    alt="arrowTwentyThree"
                  />
                  <Img
                    className="h-px mt-[38px]"
                    src="images/img_arrow19.svg"
                    alt="arrowTwentyFour"
                  />
                  <Img
                    className="h-px mt-[50px]"
                    src="images/img_arrow19.svg"
                    alt="arrowTwentyFive"
                  />
                  <Img
                    className="h-px mt-[43px]"
                    src="images/img_arrow19.svg"
                    alt="arrowTwentySix"
                  />
                </div>
              </div>
              <Img
                className="h-px md:ml-[0] ml-[23px]"
                src="images/img_arrow19.svg"
                alt="arrowTwentySeven"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SiteMapPage;
