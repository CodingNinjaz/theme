import React from "react";

import { Button, Img, Line, Text } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="sm:h-[1025px] h-[1111px] md:h-[2184px] relative w-full">
          <div className="absolute bg-gray-600 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto p-[43px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start mt-[166px] w-[94%] md:w-full">
              <ul className="flex flex-col items-start justify-start w-full common-column-list">
                <li>
                  <div className="flex md:flex-col flex-row md:gap-10 gap-[88px] items-center justify-start">
                    <div className="flex flex-col items-start justify-start w-[23%] md:w-full">
                      <Text
                        className="text-gray-300 text-sm tracking-[0.42px]"
                        size="txtNotoSerifTamilMedium14Gray300"
                      >
                        About{" "}
                      </Text>
                      <Text
                        className="mt-2 text-2xl md:text-[22px] text-gray-300 sm:text-xl tracking-[0.72px]"
                        size="txtNotoSerifTamilBold24"
                      >
                        Sunrise Oasis Lighting LLC
                      </Text>
                      <Text
                        className="mt-[7px] text-gray-300 text-sm tracking-[0.42px] w-full"
                        size="txtNotoSerifTamilMedium14Gray300"
                      >
                        Stay up-to-date with the latest trends and news in the
                        world of lighting fixtures with our informative blog and
                        articles. From design tips to product reviews, we’ve got
                        you covered. Check out our latest posts and discover
                        something new!
                      </Text>
                      <div className="flex flex-row items-center justify-start mt-[31px] w-[63%] md:w-full">
                        <Img
                          className="h-7"
                          src="images/img_instagram.svg"
                          alt="instagram"
                        />
                        <Img
                          className="h-7 ml-5"
                          src="images/img_facebook.svg"
                          alt="facebook"
                        />
                        <Img
                          className="h-7 ml-5"
                          src="images/img_linkedin.svg"
                          alt="linkedin"
                        />
                        <Img
                          className="h-7 ml-5"
                          src="images/img_youtube.svg"
                          alt="youtube"
                        />
                        <Img
                          className="h-7 ml-5"
                          src="images/img_whatsapp.svg"
                          alt="whatsapp"
                        />
                        <Img
                          className="h-7 ml-5"
                          src="images/img_twitter.svg"
                          alt="twitter_One"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[73%] md:w-full">
                      <ul className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[99%] md:w-full common-column-list">
                        <li>
                          <Text
                            className="mb-0.5 text-gray-800 text-lg tracking-[0.54px]"
                            size="txtNotoSerifTamilMedium18"
                          >
                            Indoor
                          </Text>
                        </li>
                        <li>
                          <Text
                            className="mb-0.5 md:ml-[0] ml-[158px] text-gray-800 text-lg tracking-[0.54px]"
                            size="txtNotoSerifTamilMedium18"
                          >
                            Outdoor
                          </Text>
                        </li>
                        <li>
                          <Text
                            className="mb-0.5 md:ml-[0] ml-[135px] text-gray-800 text-lg tracking-[0.54px]"
                            size="txtNotoSerifTamilMedium18"
                          >
                            Decorative
                          </Text>
                        </li>
                        <li>
                          <Text
                            className="md:ml-[0] ml-[122px] md:mt-0 mt-0.5 text-gray-800 text-lg tracking-[0.54px]"
                            size="txtNotoSerifTamilMedium18"
                          >
                            Facad Lights
                          </Text>
                        </li>
                        <li>
                          <Text
                            className="mb-0.5 md:ml-[0] ml-[101px] text-gray-800 text-lg tracking-[0.54px]"
                            size="txtNotoSerifTamilMedium18"
                          >
                            Accessories
                          </Text>
                        </li>
                        <li>
                          <Text
                            className="mb-0.5 ml-28 md:ml-[0] text-gray-800 text-lg tracking-[0.54px]"
                            size="txtNotoSerifTamilMedium18"
                          >
                            Brands
                          </Text>
                        </li>
                      </ul>
                      <ul className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-0.5 w-full common-column-list">
                        <li>
                          <Text
                            className="text-gray-300 text-sm tracking-[0.42px]"
                            size="txtNotoSerifTamilMedium14Gray300"
                          >
                            <>
                              Downlights
                              <br />
                              Spot Light
                              <br />
                              Modular Lights
                              <br />
                              Recessed Linear Lights
                              <br />
                              Magnetic Track Lights
                              <br />
                              Linear Pendant Lights
                              <br />
                              Track Lights
                              <br />
                              Mirror Lights
                            </>
                          </Text>
                        </li>
                        <li>
                          <Text
                            className="sm:ml-[0] ml-[57px] text-gray-300 text-sm tracking-[0.42px]"
                            size="txtNotoSerifTamilMedium14Gray300"
                          >
                            <>
                              Bollard Lights
                              <br />
                              Spike Lights
                              <br />
                              Step Lights
                              <br />
                              Street Lights
                              <br />
                              Wall Mounted Lights
                              <br />
                              Flood Lights
                              <br />
                              High Bay
                              <br />
                              Parking Lights
                            </>
                          </Text>
                        </li>
                        <li>
                          <Text
                            className="sm:ml-[0] ml-[63px] text-gray-300 text-sm tracking-[0.42px]"
                            size="txtNotoSerifTamilMedium14Gray300"
                          >
                            <>
                              Pendant Lights
                              <br />
                              Decorative Wall Lights
                              <br />
                              Floor & Table Lights
                              <br />
                              Curve Series
                            </>
                          </Text>
                        </li>
                        <li>
                          <Text
                            className="sm:ml-[0] ml-[60px] text-gray-300 text-sm tracking-[0.42px]"
                            size="txtNotoSerifTamilMedium14Gray300"
                          >
                            <>
                              Strip Lights
                              <br />
                              Neon Lights
                            </>
                          </Text>
                        </li>
                        <li>
                          <Text
                            className="sm:ml-[0] ml-[131px] text-gray-300 text-sm tracking-[0.42px]"
                            size="txtNotoSerifTamilMedium14Gray300"
                          >
                            <>
                              Aluminium Profiles
                              <br />
                              Frames
                              <br />
                              Connectors
                              <br />
                              Lamps
                              <br />
                              LED Driver
                              <br />
                              Switches
                            </>
                          </Text>
                        </li>
                        <li>
                          <Text
                            className="sm:ml-[0] ml-[77px] text-gray-300 text-sm tracking-[0.42px]"
                            size="txtNotoSerifTamilMedium14Gray300"
                          >
                            <>
                              Tecno-light
                              <br />
                              Giomilano
                              <br />
                              ArtDna
                              <br />
                              Echips
                              <br />
                              Ltech
                            </>
                          </Text>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <Line className="bg-gray-300 h-px mt-[60px]" />
                </li>
                <li>
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start md:ml-[0] ml-[22px] mt-[66px]">
                    <Text
                      className="text-gray-800 text-lg tracking-[0.54px]"
                      size="txtNotoSerifTamilMedium18"
                    >
                      Head Office
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[333px] text-gray-800 text-lg tracking-[0.54px]"
                      size="txtNotoSerifTamilMedium18"
                    >
                      Branch - Abu Dhabi
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[249px] text-gray-800 text-lg tracking-[0.54px]"
                      size="txtNotoSerifTamilMedium18"
                    >
                      Showroom
                    </Text>
                  </div>
                </li>
                <li>
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[22px] mt-[9px]">
                    <Text
                      className="text-gray-300 text-sm tracking-[0.42px]"
                      size="txtNotoSerifTamilMedium14Gray300"
                    >
                      <>
                        Al Quoz Ind Area 4, Al Kahrman 4 Street, Dubai
                        <br />
                        P.O Box 186021 Ware House No 13
                        <br />
                        +971 4 2232 332 +971 4 323 6088
                      </>
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[81px] text-gray-300 text-sm tracking-[0.42px]"
                      size="txtNotoSerifTamilMedium14Gray300"
                    >
                      <>
                        Mussafah 34 - near New Labour Court
                        <br />
                        Abu Dhabi - U.A.E
                        <br />
                        +971 55 892 4364| +971 2 883 6637
                      </>
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[74px] text-gray-300 text-sm tracking-[0.42px]"
                      size="txtNotoSerifTamilMedium14Gray300"
                    >
                      <>
                        Nakheel Street 41, Deira - Dubai UAE,
                        <br />
                        +971 4 250 2810
                      </>
                    </Text>
                  </div>
                </li>
                <li>
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[22px] mt-6">
                    <Text
                      className="mb-0.5 text-gray-800 text-lg tracking-[0.54px]"
                      size="txtNotoSerifTamilMedium18"
                    >
                      Reach US
                    </Text>
                    <Text
                      className="mb-0.5 md:ml-[0] ml-[356px] text-gray-800 text-lg tracking-[0.54px]"
                      size="txtNotoSerifTamilMedium18"
                    >
                      Branch - Saudi Arabia
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[227px] md:mt-0 mt-0.5 text-gray-800 text-lg tracking-[0.54px]"
                      size="txtNotoSerifTamilMedium18"
                    >
                      Logistic Centre
                    </Text>
                  </div>
                </li>
                <li>
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[22px] mt-[7px]">
                    <Text
                      className="text-gray-300 text-sm tracking-[0.42px]"
                      size="txtNotoSerifTamilMedium14Gray300"
                    >
                      <>info@sunriseoasislighting.com</>
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[220px] text-gray-300 text-sm tracking-[0.42px]"
                      size="txtNotoSerifTamilMedium14Gray300"
                    >
                      <>
                        Al Malaz, Riyadh - Saudi Arabia
                        <br />
                        +966 57 226 4809
                      </>
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[198px] text-gray-300 text-sm tracking-[0.42px]"
                      size="txtNotoSerifTamilMedium14Gray300"
                    >
                      <>
                        Warehouses Lands - Sharjah, UAE
                        <br />
                        +971 558966670
                      </>
                    </Text>
                  </div>
                </li>
                <li>
                  <Line className="bg-gray-300 h-px mt-[72px]" />
                </li>
                <li>
                  <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-12">
                    <Text
                      className="text-gray-300 text-lg tracking-[0.54px]"
                      size="txtNotoSerifTamilMedium18Gray300"
                    >
                      © 2023. All Rights Reserved.
                    </Text>
                    <Text
                      className="text-gray-300 text-lg tracking-[0.54px]"
                      size="txtNotoSerifTamilMedium18Gray300"
                    >
                      Designed by : Chetan Kumar Neupane
                    </Text>
                    <Text
                      className="text-gray-300 text-lg text-right tracking-[0.54px]"
                      size="txtNotoSerifTamilMedium18Gray300"
                    >
                      <span className="text-gray-300 font-notoseriftamil font-medium">
                        Powered by{" "}
                      </span>
                      <a
                        href="javascript:"
                        className="text-gray-300 font-notoseriftamil font-medium underline"
                      >
                        Tecfuge
                      </a>
                    </Text>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-3/4">
            <div className="bg-gradient1  flex sm:flex-col flex-row md:gap-10 items-center justify-between p-[60px] md:px-10 sm:px-5 rounded shadow-bs w-full">
              <Text
                className="sm:mt-0 my-[7px] text-4xl sm:text-[32px] md:text-[34px] text-gray-300 tracking-[1.08px]"
                size="txtNotoSerifTamilBold36Gray300"
              >
                Let’s talk about your project.
              </Text>
              <Button
                className="cursor-pointer font-medium font-notoseriftamil leading-[normal] min-w-[267px] mr-[85px] text-center text-sm tracking-[0.42px]"
                shape="round"
                color="gray_300"
                size="md"
                variant="outline"
              >
                Ask for Price Quotation
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
