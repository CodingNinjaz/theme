import React from "react";

import { Button, Img, Line, List, Text } from "components";

const DesignSytemPage = () => {
  return (
    <>
      <div className="bg-blue_gray-50 flex flex-col font-notoseriftamil items-center justify-start mx-auto p-[62px] md:px-10 sm:px-5 w-full">
        <div className="flex md:flex-col flex-row gap-[35px] items-start justify-start max-w-[1719px] mb-[281px] mx-auto w-full">
          <div className="flex md:flex-1 flex-col md:gap-10 gap-[432px] justify-start md:mt-0 mt-1 w-[46%] md:w-full">
            <div className="flex flex-col items-start justify-start md:ml-[0] ml-[15px] w-[99%] md:w-full">
              <div className="flex flex-col gap-[5px] justify-start w-[93%] md:w-full">
                <Text
                  className="md:ml-[0] ml-[13px] text-4xl sm:text-[32px] md:text-[34px] text-gray-700 tracking-[1.08px]"
                  size="txtNotoSerifTamilBold36Gray700"
                >
                  Typography
                </Text>
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="h-[512px] relative w-full">
                    <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start left-[0] my-auto w-[93%]">
                      <div className="flex flex-col gap-[49px] items-center justify-start w-full">
                        <div className="bg-blue_gray-100_7f h-12 w-full"></div>
                        <div className="bg-blue_gray-100_7f h-12 w-full"></div>
                        <div className="bg-blue_gray-100_7f h-12 w-full"></div>
                        <div className="bg-blue_gray-100_7f h-12 w-full"></div>
                        <div className="bg-blue_gray-100_7f h-12 w-full"></div>
                      </div>
                    </div>
                    <Text
                      className="absolute h-full inset-[0] justify-center m-auto text-base text-black-900_b2"
                      size="txtNotoSerifTamilRegular16Black900b2"
                    >
                      <span className="text-black-900_b2 font-notoseriftamil text-left font-bold">
                        <>
                          Typography Version Desktop Tablet Mobile
                          <br />
                        </>
                      </span>
                      <span className="text-black-900_b2 font-notoseriftamil text-left font-normal">
                        <>
                          H1 Heading 36pt 32pt 28pt
                          <br />
                          H2 Heading 30pt 26pt 22pt
                          <br />
                          H3 Heading 24pt 20pt 18pt
                          <br />
                          H4 Heading 20pt 18pt 16pt
                          <br />
                          H5 Heading 18pt 16pt 14pt
                          <br />
                          H6 Heading 16pt 14pt 12pt
                          <br />
                          Paragraph 16pt 14pt 14pt
                          <br />
                          Subheading 18pt 16pt 14pt
                          <br />
                          Caption 14pt 12pt 12pt
                        </>
                      </span>
                    </Text>
                  </div>
                  <Text
                    className="mt-3 text-4xl sm:text-[32px] md:text-[34px] text-gray-800 tracking-[1.08px]"
                    size="txtNotoSerifTamilBold36Gray800"
                  >
                    Providing Light solutions
                  </Text>
                  <Text
                    className="mt-[17px] text-3xl sm:text-[26px] md:text-[28px] text-gray-800 tracking-[0.90px]"
                    size="txtNotoSerifTamilBold30Gray800"
                  >
                    Providing Light solutions
                  </Text>
                  <Text
                    className="mt-[17px] text-2xl md:text-[22px] text-gray-800 sm:text-xl tracking-[0.72px]"
                    size="txtNotoSerifTamilBold24Gray800"
                  >
                    Providing Light solutions
                  </Text>
                  <Text
                    className="mt-[17px] text-gray-800 text-xl tracking-[0.60px]"
                    size="txtNotoSerifTamilBold20"
                  >
                    Providing Light solutions
                  </Text>
                  <Text
                    className="mt-[17px] text-gray-800 text-lg tracking-[0.54px]"
                    size="txtNotoSerifTamilBold18Gray800"
                  >
                    Providing Light solutions
                  </Text>
                  <Text
                    className="mt-[17px] text-base text-gray-800 tracking-[0.48px]"
                    size="txtNotoSerifTamilBold16Gray800"
                  >
                    Providing Light solutions
                  </Text>
                  <Text
                    className="mt-[18px] text-base text-gray-800 tracking-[0.48px]"
                    size="txtNotoSerifTamilRegular16"
                  >
                    Providing Light solutions
                  </Text>
                  <Text
                    className="mt-[27px] text-gray-800 text-lg tracking-[0.54px]"
                    size="txtNotoSerifTamilMedium18"
                  >
                    Providing Light solutions
                  </Text>
                  <Text
                    className="mt-[18px] text-gray-800 text-sm tracking-[0.42px]"
                    size="txtNotoSerifTamilMedium14"
                  >
                    Providing Light solutions
                  </Text>
                  <Text
                    className="mt-12 text-gray-600 text-lg tracking-[0.54px]"
                    size="txtNotoSerifTamilMedium18Gray600"
                  >
                    Examples
                  </Text>
                  <Text
                    className="mt-1.5 text-4xl sm:text-[32px] md:text-[34px] text-gray-800 tracking-[1.08px]"
                    size="txtNotoSerifTamilBold36Gray800"
                  >
                    Providing Light solutions
                  </Text>
                  <Text
                    className="leading-[200.00%] mt-[11px] text-base text-gray-600 tracking-[0.48px] w-[79%] sm:w-full"
                    size="txtNotoSerifTamilRegular16Gray600"
                  >
                    <>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&#39;s standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and
                      scrambled it to make a type specimen book. It has survived
                      not only five centuries,{" "}
                    </>
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[13px] justify-start mt-[81px] w-full">
                <Text
                  className="md:ml-[0] ml-[7px] text-4xl sm:text-[32px] md:text-[34px] text-gray-600 tracking-[1.08px]"
                  size="txtNotoSerifTamilBold36"
                >
                  Grid & Spacing
                </Text>
                <div className="md:h-[271px] h-[275px] relative w-full">
                  <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                    <div className="flex flex-col gap-[47px] items-center justify-start w-full">
                      <div className="bg-blue_gray-100_7f h-12 w-full"></div>
                      <div className="bg-blue_gray-100_7f h-12 w-full"></div>
                      <div className="bg-blue_gray-100_7f h-12 w-full"></div>
                    </div>
                  </div>
                  <Text
                    className="absolute h-max inset-[0] justify-center leading-[24.00px] m-auto text-base text-black-900_99 tracking-[0.48px]"
                    size="txtNotoSerifTamilRegular16Black90099"
                  >
                    <>
                      Grid & Spacing Desktop Tablet Mobile
                      <br />
                      GridColumns 12 columns 8 columns 4 columns
                      <br />
                      Column Width 80px - 100px 60px - 80px 40px - 60px
                      <br />
                      Gutter Width 20px 20px 20px
                      <br />
                      Container Width 1720px 960px 360px - 480px
                      <br />
                      Margins/Paddings 20px - 40px 20px - 30px 10px - 20px
                    </>
                  </Text>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start ml-4 md:ml-[0] mt-[92px] w-[77%] md:w-full">
                <div className="flex flex-col items-center justify-start w-[98%] sm:w-full">
                  <div className="flex flex-col gap-[15px] items-start justify-start w-full">
                    <Text
                      className="text-4xl sm:text-[32px] md:text-[34px] text-gray-600 tracking-[1.08px]"
                      size="txtNotoSerifTamilBold36"
                    >
                      Iconography
                    </Text>
                    <List
                      className="flex flex-col gap-3 items-center w-full"
                      orientation="vertical"
                    >
                      <div className="flex flex-1 sm:flex-col flex-row gap-3 items-center justify-between w-full">
                        <Img
                          className="h-6 w-6"
                          src="images/img_search_gray_900_03.svg"
                          alt="arrowdown"
                        />
                        <Img
                          className="h-6 w-6"
                          src="images/img_search_gray_900_03.svg"
                          alt="arrowleft"
                        />
                        <Img
                          className="h-6 w-6"
                          src="images/img_search_gray_900_03.svg"
                          alt="arrowup"
                        />
                        <Img
                          className="h-6 w-6"
                          src="images/img_search_gray_900_03.svg"
                          alt="arrowsexpand"
                        />
                        <Img
                          className="h-6 w-6"
                          src="images/img_search_gray_900_03.svg"
                          alt="arrowsarrows"
                        />
                        <Img
                          className="h-6 w-6"
                          src="images/img_search_gray_900_03.svg"
                          alt="arrowscaretsqua"
                        />
                        <Img
                          className="h-6 w-6"
                          src="images/img_user.svg"
                          alt="user"
                        />
                        <Img
                          className="h-6 w-6"
                          src="images/img_search_gray_900_03.svg"
                          alt="arrowdown_One"
                        />
                        <Img
                          className="h-6 w-6"
                          src="images/img_search_gray_900_03.svg"
                          alt="arrowscompress"
                        />
                        <Img
                          className="h-6 w-6"
                          src="images/img_search_gray_900_03.svg"
                          alt="arrowsmousepoin"
                        />
                        <Img
                          className="h-6 w-6"
                          src="images/img_search_gray_900_03.svg"
                          alt="arrowsredo"
                        />
                        <Img
                          className="h-6 w-6"
                          src="images/img_search_gray_900_03.svg"
                          alt="arrowright"
                        />
                        <div className="flex flex-col h-6 items-center justify-start p-0.5 w-6">
                          <Img
                            className="h-[19px]"
                            src="images/img_facebook_gray_900_04.svg"
                            alt="facebook"
                          />
                        </div>
                        <div className="flex flex-col h-6 items-center justify-start p-0.5 w-6">
                          <Img
                            className="h-[19px]"
                            src="images/img_linkedin_gray_900_04.svg"
                            alt="linkedin"
                          />
                        </div>
                        <div className="flex flex-col h-6 items-center justify-start p-0.5 w-6">
                          <Img
                            className="h-[19px]"
                            src="images/img_youtube_gray_900_04.svg"
                            alt="youtube"
                          />
                        </div>
                        <Img
                          className="h-6 w-6"
                          src="images/img_user.svg"
                          alt="user_One"
                        />
                      </div>
                      <div className="flex flex-1 sm:flex-col flex-row gap-3 items-center justify-between w-full">
                        <Img
                          className="h-6 w-6"
                          src="images/img_search_gray_900_03.svg"
                          alt="arrowdown"
                        />
                        <Img
                          className="h-6 w-6"
                          src="images/img_search_gray_900_03.svg"
                          alt="arrowsexchange"
                        />
                        <Img
                          className="h-6 w-6"
                          src="images/img_search_gray_900_03.svg"
                          alt="arrowsexpand"
                        />
                        <Img
                          className="h-6 w-6"
                          src="images/img_search_gray_900_03.svg"
                          alt="arrowshistory"
                        />
                        <Img
                          className="h-6 w-6"
                          src="images/img_user.svg"
                          alt="user"
                        />
                        <Img
                          className="h-6 w-6"
                          src="images/img_user.svg"
                          alt="user_One"
                        />
                        <Img
                          className="h-6 w-6"
                          src="images/img_search_gray_900_03.svg"
                          alt="communication"
                        />
                        <Img
                          className="h-6 w-6"
                          src="images/img_search_gray_900_03.svg"
                          alt="arrowscompress"
                        />
                        <Img
                          className="h-6 w-6"
                          src="images/img_search_gray_900_03.svg"
                          alt="editionth"
                        />
                        <Img
                          className="h-6 w-6"
                          src="images/img_search_gray_900_03.svg"
                          alt="editionthlarge"
                        />
                        <Img
                          className="h-6 w-6"
                          src="images/img_user.svg"
                          alt="user_Two"
                        />
                        <Img
                          className="h-6 w-6"
                          src="images/img_search_gray_900_03.svg"
                          alt="marketingpoll"
                        />
                        <Img
                          className="h-6 w-6"
                          src="images/img_search_gray_900_03.svg"
                          alt="interfacesfilte"
                        />
                        <Img
                          className="h-6 w-6"
                          src="images/img_search_gray_900_03.svg"
                          alt="search"
                        />
                        <Img
                          className="h-6 w-6"
                          src="images/img_user.svg"
                          alt="user_Three"
                        />
                        <div className="flex flex-col h-6 items-center justify-start p-0.5 w-6">
                          <Img
                            className="h-[19px]"
                            src="images/img_twitter_gray_900_04.svg"
                            alt="twitter"
                          />
                        </div>
                      </div>
                      <div className="flex md:flex-1 sm:flex-col flex-row gap-3 items-start justify-between w-[98%] md:w-full">
                        <Img
                          className="h-6 sm:mt-0 mt-2.5 w-6"
                          src="images/img_search_gray_900_03.svg"
                          alt="arrowscaretleft"
                        />
                        <Img
                          className="h-6 sm:mt-0 mt-2.5 w-6"
                          src="images/img_search_gray_900_03.svg"
                          alt="arrowsundo"
                        />
                        <Img
                          className="h-6 sm:mt-0 mt-2.5 w-6"
                          src="images/img_search_gray_900_03.svg"
                          alt="arrowshandpoint"
                        />
                        <Img
                          className="h-6 sm:mt-0 mt-2.5 w-6"
                          src="images/img_search_gray_900_03.svg"
                          alt="arrowsrecycle"
                        />
                        <Img
                          className="h-6 sm:mt-0 mt-2.5 w-6"
                          src="images/img_search_gray_900_03.svg"
                          alt="arrowsleveldown"
                        />
                        <Img
                          className="h-6 sm:mt-0 mt-2.5 w-6"
                          src="images/img_user.svg"
                          alt="user"
                        />
                        <Img
                          className="h-6 sm:mt-0 mt-2.5 w-6"
                          src="images/img_search_gray_900_03.svg"
                          alt="arrowshandpoint_One"
                        />
                        <Img
                          className="h-6 sm:mt-0 mt-2.5 w-6"
                          src="images/img_search_gray_900_03.svg"
                          alt="arrowssync"
                        />
                        <Img
                          className="h-6 sm:mt-0 mt-2.5 w-6"
                          src="images/img_search_gray_900_03.svg"
                          alt="buildingshome"
                        />
                        <Img
                          className="h-6 sm:mt-0 mt-2.5 w-6"
                          src="images/img_user.svg"
                          alt="user_One"
                        />
                        <Img
                          className="h-6 sm:mt-0 mt-2.5 w-6"
                          src="images/img_user.svg"
                          alt="user_Two"
                        />
                        <Img
                          className="h-6 sm:mt-0 mt-2.5 w-6"
                          src="images/img_user.svg"
                          alt="user_Three"
                        />
                        <Img
                          className="h-6 sm:mt-0 mt-2.5 w-6"
                          src="images/img_search_gray_900_03.svg"
                          alt="communication"
                        />
                        <div className="md:h-6 h-[34px] relative w-[9%] sm:w-full">
                          <Img
                            className="absolute bottom-[0] h-6 left-[0] w-6"
                            src="images/img_user.svg"
                            alt="user_Four"
                          />
                          <Img
                            className="absolute h-6 right-[0] top-[0] w-6"
                            src="images/img_user.svg"
                            alt="user_Five"
                          />
                        </div>
                        <Img
                          className="h-6 w-6"
                          src="images/img_search_gray_900_03.svg"
                          alt="editionalign"
                        />
                      </div>
                    </List>
                  </div>
                </div>
                <Img
                  className="h-[13px] sm:mt-0 mt-[139px] rounded-[1px]"
                  src="images/img_checkmark_gray_800.svg"
                  alt="checkmark"
                />
              </div>
            </div>
            <Text
              className="text-gray-600 text-sm tracking-[0.42px]"
              size="txtNotoSerifTamilMedium14Gray600"
            >
              <>
                Kitchen
                <br />
                Bedroom
                <br />
                Hall
                <br />
                Offices
                <br />
                Cabinets
                <br />
                Racks
                <br />
                Garden
                <br />
                Parking Lot
                <br />
                Street
                <br />
                Pathway
                <br />
                Supermarkets
                <br />
                Hospitals
                <br />
                School & Colleges
              </>
            </Text>
          </div>
          <div className="flex md:flex-1 flex-col items-start justify-start w-[53%] md:w-full">
            <div className="flex flex-col items-center justify-start w-[78%] md:w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-gray-600 tracking-[1.08px]"
                  size="txtNotoSerifTamilBold36"
                >
                  Brand Color
                </Text>
                <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-between mt-[23px] w-full">
                  <div className="bg-gray-800 h-[79px] rounded w-full"></div>
                  <div className="bg-gray-600 h-[79px] rounded w-full"></div>
                  <div className="bg-yellow-800 h-[79px] rounded w-full"></div>
                  <div className="bg-gray-300 h-[79px] rounded w-full"></div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[13px] w-[88%] md:w-full">
                  <Text
                    className="text-gray-800 text-sm tracking-[0.42px]"
                    size="txtNotoSerifTamilMedium14"
                  >
                    Primary Colour
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[70px] text-gray-800 text-sm tracking-[0.42px]"
                    size="txtNotoSerifTamilMedium14"
                  >
                    Secondary Colour
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[54px] text-gray-800 text-sm tracking-[0.42px]"
                    size="txtNotoSerifTamilMedium14"
                  >
                    Accent Colour
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[84px] text-gray-800 text-sm tracking-[0.42px]"
                    size="txtNotoSerifTamilMedium14"
                  >
                    Light Text
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start mt-[81px] w-[96%] md:w-full">
              <div className="flex flex-col justify-start w-full">
                <div className="flex flex-col gap-2 items-start justify-start md:ml-[0] ml-[9px] w-[99%] md:w-full">
                  <Text
                    className="text-4xl sm:text-[32px] md:text-[34px] text-gray-600 tracking-[1.08px]"
                    size="txtNotoSerifTamilBold36"
                  >
                    Margin & Padding
                  </Text>
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                    <div className="flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-[5px] w-[19%] md:w-full">
                      <div className="flex flex-row items-center justify-evenly w-[95%] md:w-full">
                        <div className="h-[84px] relative w-full">
                          <div className="h-[84px] m-auto w-full">
                            <div className="absolute bg-gray-800 flex flex-col h-max inset-[0] items-center justify-center m-auto p-2 rounded w-full">
                              <Text
                                className="mb-0.5 text-gray-300 text-lg tracking-[0.54px]"
                                size="txtNotoSerifTamilMedium18Gray300"
                              >
                                Smart Home
                              </Text>
                            </div>
                            <Line className="absolute bg-yellow-800 h-[84px] inset-y-[0] my-auto right-[10%] w-px" />
                            <Line className="absolute bg-yellow-800 h-[84px] inset-y-[0] left-[0] my-auto w-px" />
                          </div>
                          <Line className="absolute bg-yellow-800 h-[84px] inset-y-[0] left-[11%] my-auto w-px" />
                          <Line className="absolute bg-yellow-800 bottom-[4%] h-px right-[0] rotate-[180deg] w-[12%]" />
                          <Line className="absolute bg-yellow-800 bottom-[4%] h-px left-[0] rotate-[180deg] w-[12%]" />
                        </div>
                        <Line className="bg-yellow-800 h-[84px] w-px" />
                      </div>
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="text-[10px] text-gray-600 tracking-[0.30px]"
                          size="txtNotoSerifTamilMedium10"
                        >
                          16px
                        </Text>
                        <Text
                          className="text-[10px] text-gray-600 tracking-[0.30px]"
                          size="txtNotoSerifTamilMedium10"
                        >
                          16px
                        </Text>
                      </div>
                    </div>
                    <div className="flex md:flex-1 flex-col gap-[9px] justify-start mb-4 md:ml-[0] ml-[69px] w-[37%] md:w-full">
                      <div className="flex flex-row items-center justify-evenly w-full">
                        <div className="bg-gray-800 flex flex-col items-center justify-start my-[23px] p-2 rounded">
                          <Text
                            className="mb-0.5 text-gray-300 text-lg tracking-[0.54px]"
                            size="txtNotoSerifTamilMedium18Gray300"
                          >
                            Smart Home
                          </Text>
                        </div>
                        <Line className="bg-yellow-800 h-[94px] w-px" />
                        <div className="h-[94px] relative w-[47%]">
                          <div className="absolute bg-gray-800 flex flex-col h-max inset-[0] items-center justify-center m-auto p-2 rounded w-full">
                            <Text
                              className="mb-0.5 text-gray-300 text-lg tracking-[0.54px]"
                              size="txtNotoSerifTamilMedium18Gray300"
                            >
                              Smart Home
                            </Text>
                          </div>
                          <Line className="absolute bg-yellow-800 h-[94px] inset-y-[0] left-[0] my-auto w-px" />
                        </div>
                      </div>
                      <Text
                        className="md:ml-[0] ml-[145px] text-[10px] text-gray-600 tracking-[0.30px]"
                        size="txtNotoSerifTamilMedium10"
                      >
                        20px Vertical
                      </Text>
                    </div>
                    <div className="flex md:flex-1 flex-col justify-start md:ml-[0] ml-[35px] md:mt-0 mt-5 w-[22%] md:w-full">
                      <div className="bg-gray-800 flex flex-col items-center justify-start ml-2 md:ml-[0] mr-[30px] p-2 rounded">
                        <Text
                          className="text-gray-300 text-lg tracking-[0.54px]"
                          size="txtNotoSerifTamilMedium18Gray300"
                        >
                          Smart Home
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[19px] items-center justify-start w-full">
                        <Line className="bg-yellow-800 h-px w-full" />
                        <div className="h-12 md:h-[45px] relative w-full">
                          <div className="absolute bg-gray-800 flex flex-col h-full inset-y-[0] items-center justify-start left-[4%] my-auto p-2 rounded">
                            <Text
                              className="text-gray-300 text-lg tracking-[0.54px]"
                              size="txtNotoSerifTamilMedium18Gray300"
                            >
                              Smart Home
                            </Text>
                          </div>
                          <Line className="absolute bg-yellow-800 h-px inset-x-[0] mx-auto top-[0] w-full" />
                        </div>
                      </div>
                    </div>
                    <Text
                      className="ml-4 md:ml-[0] md:mt-0 mt-[68px] text-[10px] text-gray-600 tracking-[0.30px]"
                      size="txtNotoSerifTamilMedium10"
                    >
                      20px Horizontal
                    </Text>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-[79%] md:w-full">
                  <div className="flex flex-col items-start justify-start w-[87%] md:w-full">
                    <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                      <div className="h-12 md:h-[55px] mt-[7px] relative w-[39%]">
                        <div className="h-12 m-auto w-full">
                          <div className="absolute bg-gray-800 h-12 inset-y-[0] left-[6%] my-auto rounded w-[65%]"></div>
                          <Text
                            className="absolute h-max inset-y-[0] my-auto right-[1%] text-[10px] text-gray-600 tracking-[0.30px]"
                            size="txtNotoSerifTamilMedium10"
                          >
                            48 px
                          </Text>
                          <Line className="absolute bg-yellow-800 h-px inset-x-[0] mx-auto top-[0] w-full" />
                        </div>
                        <Line className="absolute bg-yellow-800 h-12 inset-y-[0] my-auto right-[20%] w-px" />
                      </div>
                      <Img
                        className="h-[46px]"
                        src="images/img_clock.svg"
                        alt="clock"
                      />
                    </div>
                    <Line className="bg-yellow-800 h-px w-[39%]" />
                  </div>
                  <Text
                    className="ml-0.5 md:ml-[0] md:mt-0 mt-[39px] text-[10px] text-gray-600 tracking-[0.30px]"
                    size="txtNotoSerifTamilMedium10"
                  >
                    4pt Round Radius
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[31px] justify-start mt-[78px] w-[69%] md:w-full">
              <Text
                className="md:ml-[0] ml-[11px] text-4xl sm:text-[32px] md:text-[34px] text-gray-600 tracking-[1.08px]"
                size="txtNotoSerifTamilBold36"
              >
                Button State
              </Text>
              <div className="h-12 sm:h-[49px] md:h-[74px] relative w-full">
                <div className="absolute bg-gray-300 flex flex-col h-full inset-y-[0] items-center justify-start my-auto p-[11px] right-[10%] rounded">
                  <Text
                    className="mb-0.5 text-gray-600 text-sm tracking-[0.42px]"
                    size="txtNotoSerifTamilMedium14Gray600"
                  >
                    Disabled
                  </Text>
                </div>
                <div className="absolute bg-gray-600 flex flex-col h-full inset-y-[0] items-center justify-start left-[2%] my-auto p-[11px] rounded">
                  <Text
                    className="mb-0.5 text-gray-300 text-sm tracking-[0.42px]"
                    size="txtNotoSerifTamilMedium14Gray300"
                  >
                    Default
                  </Text>
                </div>
                <div className="absolute bg-gray-800 flex flex-col h-full inset-y-[0] items-center justify-start left-[19%] my-auto p-3 rounded">
                  <Text
                    className="text-gray-300 text-sm tracking-[0.42px]"
                    size="txtNotoSerifTamilMedium14Gray300"
                  >
                    Hover
                  </Text>
                </div>
                <div className="absolute bg-yellow-800 flex flex-col h-full inset-y-[0] items-center justify-start left-[34%] my-auto p-3 rounded">
                  <Text
                    className="text-gray-800 text-sm tracking-[0.42px]"
                    size="txtNotoSerifTamilMedium14"
                  >
                    Active/Pressed
                  </Text>
                </div>
                <div className="border border-gray-800 border-solid flex flex-col h-full items-center justify-start ml-auto mr-[177px] my-auto p-3 rounded">
                  <Text
                    className="text-gray-300 text-sm tracking-[0.42px]"
                    size="txtNotoSerifTamilMedium14Gray300"
                  >
                    Focus
                  </Text>
                </div>
                <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex md:flex-col flex-row gap-[9px] items-center justify-between w-full">
                      <div className="flex flex-col relative w-[95%] md:w-full">
                        <Line className="bg-yellow-800 h-px mx-auto w-full" />
                        <Line className="bg-yellow-800 h-12 mb-auto ml-auto mr-[7px] mt-[-0.15px] w-px z-[1]" />
                      </div>
                      <Text
                        className="text-[10px] text-gray-600 tracking-[0.30px]"
                        size="txtNotoSerifTamilMedium10"
                      >
                        48 px
                      </Text>
                    </div>
                    <Line className="bg-yellow-800 h-px w-[95%]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start mt-[82px] w-[55%] md:w-full">
              <div className="flex flex-row items-start justify-between w-full">
                <div className="flex flex-col gap-[43px] justify-start">
                  <Text
                    className="ml-2 md:ml-[0] text-4xl sm:text-[32px] md:text-[34px] text-gray-600 tracking-[1.08px]"
                    size="txtNotoSerifTamilBold36"
                  >
                    Logos
                  </Text>
                  <Img
                    className="h-12"
                    src="images/img_fulllogo_gray_600.svg"
                    alt="fulllogo"
                  />
                </div>
                <Img
                  className="h-12 mt-[93px] w-12"
                  src="images/img_fire.svg"
                  alt="fire"
                />
                <Img
                  className="h-[105px] mt-[37px]"
                  src="images/img_verticlelogo.svg"
                  alt="verticlelogo"
                />
              </div>
            </div>
            <Text
              className="mt-[78px] text-4xl sm:text-[32px] md:text-[34px] text-gray-600 tracking-[1.08px]"
              size="txtNotoSerifTamilBold36"
            >
              Product Card Slot
            </Text>
            <List
              className="sm:flex-col flex-row md:gap-10 gap-[60px] grid md:grid-cols-1 grid-cols-2 justify-center md:ml-[0] ml-[13px] mt-[33px] w-[99%]"
              orientation="horizontal"
            >
              <div className="md:h-[693px] h-[704px] relative w-full">
                <div className="absolute bg-gray-300 flex flex-col h-max inset-[0] items-center justify-center m-auto p-5 rounded w-full">
                  <div className="flex flex-col gap-[39px] justify-start mt-3 w-full">
                    <Img
                      className="h-[280px] md:h-auto md:ml-[0] ml-[37px] object-cover w-[280px]"
                      src="images/img_essentialgu101.png"
                      alt="essentialgu101"
                    />
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex flex-row items-end justify-between w-full">
                        <Text
                          className="text-gray-800 text-xl tracking-[0.60px]"
                          size="txtNotoSerifTamilBold20"
                        >
                          Essential
                        </Text>
                        <Text
                          className="my-1 text-gray-600 text-sm tracking-[0.42px]"
                          size="txtNotoSerifTamilMedium14Gray600"
                        >
                          <>Accessories &gt; Bulb</>
                        </Text>
                      </div>
                      <Text
                        className="leading-[200.00%] mt-[9px] text-base text-gray-600 tracking-[0.48px] w-[99%] sm:w-full"
                        size="txtNotoSerifTamilRegular16Gray600"
                      >
                        Lorem Ipsum is simply dummy text of the printing and
                        Lorem Ipsum is simply dummy text of the printing and{" "}
                      </Text>
                      <Text
                        className="mt-[18px] text-3xl sm:text-[26px] md:text-[28px] text-yellow-800 tracking-[0.90px]"
                        size="txtNotoSerifTamilBold30Yellow800"
                      >
                        AED 85.75 / Piece
                      </Text>
                      <Text
                        className="mt-[9px] text-gray-800 text-sm tracking-[0.42px]"
                        size="txtNotoSerifTamilMedium14"
                      >
                        Please Login/Register to See the Stock Details
                      </Text>
                      <div className="flex flex-row items-center justify-between mt-[39px] w-full">
                        <Button
                          className="cursor-pointer font-medium leading-[normal] min-w-[113px] rounded text-center text-sm tracking-[0.42px]"
                          shape="round"
                          color="gray_800"
                          size="md"
                          variant="outline"
                        >
                          Add to Cart
                        </Button>
                        <Button
                          className="cursor-pointer font-medium leading-[normal] min-w-[158px] rounded text-center text-sm tracking-[0.42px]"
                          shape="round"
                          color="gray_600"
                          size="md"
                          variant="fill"
                        >
                          Ask for Quotation
                        </Button>
                        <div className="border border-gray-800 border-solid flex flex-col items-center justify-start p-2.5 rounded">
                          <Img
                            className="h-7 w-7"
                            src="images/img_medicalheartrate.svg"
                            alt="medicalheartrat"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute flex flex-row items-start justify-center left-[5%] top-[0] w-[16%]">
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
              <div className="md:h-[694px] h-[704px] relative w-full">
                <div className="absolute bg-gray-800 flex flex-col h-max inset-[0] items-center justify-center m-auto pt-8 rounded shadow-bs3 w-full">
                  <div className="flex flex-col justify-start w-full">
                    <Img
                      className="h-[280px] md:h-auto md:ml-[0] ml-[57px] object-cover w-[280px]"
                      src="images/img_essentialgu101.png"
                      alt="essentialgu102"
                    />
                    <div className="flex flex-col items-start justify-start ml-5 md:ml-[0] mt-[39px] w-[91%] md:w-full">
                      <div className="flex flex-row items-end justify-between w-full">
                        <Text
                          className="text-gray-300 text-xl tracking-[0.60px]"
                          size="txtNotoSerifTamilBold20Gray300"
                        >
                          Essential
                        </Text>
                        <Text
                          className="my-1 text-gray-300 text-sm tracking-[0.42px]"
                          size="txtNotoSerifTamilMedium14Gray300"
                        >
                          <>Accessories &gt; Bulb</>
                        </Text>
                      </div>
                      <Text
                        className="leading-[200.00%] mt-[9px] text-base text-gray-300 tracking-[0.48px] w-[99%] sm:w-full"
                        size="txtNotoSerifTamilRegular16Gray300"
                      >
                        Lorem Ipsum is simply dummy text of the printing and
                        Lorem Ipsum is simply dummy text of the printing and{" "}
                      </Text>
                      <Text
                        className="mt-[18px] text-3xl sm:text-[26px] md:text-[28px] text-yellow-800 tracking-[0.90px]"
                        size="txtNotoSerifTamilBold30Yellow800"
                      >
                        AED 85.75 / Piece
                      </Text>
                      <Text
                        className="mt-[9px] text-gray-300 text-sm tracking-[0.42px]"
                        size="txtNotoSerifTamilMedium14Gray300"
                      >
                        Please Login/Register to See the Stock Details
                      </Text>
                    </div>
                    <div className="bg-gray-300 flex flex-row items-start justify-evenly mt-[23px] p-4 rounded w-full">
                      <Button
                        className="cursor-pointer font-medium leading-[normal] mb-[5px] min-w-[113px] rounded text-center text-sm tracking-[0.42px]"
                        shape="round"
                        color="gray_800"
                        size="md"
                        variant="outline"
                      >
                        Add to Cart
                      </Button>
                      <Button
                        className="cursor-pointer font-medium leading-[normal] mb-[5px] min-w-[158px] rounded text-center text-sm tracking-[0.42px]"
                        shape="round"
                        color="gray_600"
                        size="md"
                        variant="fill"
                      >
                        Ask for Quotation
                      </Button>
                      <div className="border border-gray-800 border-solid flex flex-col items-center justify-start mb-[5px] p-2.5 rounded w-[16%]">
                        <Img
                          className="h-7 w-7"
                          src="images/img_medicalheartrate.svg"
                          alt="medicalheartrat"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute flex flex-row items-start justify-center left-[5%] top-[0] w-[16%]">
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
            </List>
            <div className="flex flex-row sm:gap-10 items-center justify-between mt-[15px] w-[64%] md:w-full">
              <Text
                className="text-gray-600 text-lg tracking-[0.54px]"
                size="txtNotoSerifTamilMedium18Gray600"
              >
                Default
              </Text>
              <Text
                className="text-gray-600 text-lg tracking-[0.54px]"
                size="txtNotoSerifTamilMedium18Gray600"
              >
                Hover Card
              </Text>
            </div>
            <div className="h-[433px] md:h-[488px] ml-3 md:ml-[0] mt-16 relative w-[30%]">
              <div className="absolute bg-gray-300 flex flex-col h-max inset-[0] items-start justify-center m-auto p-6 sm:px-5 rounded w-full">
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
    </>
  );
};

export default DesignSytemPage;
