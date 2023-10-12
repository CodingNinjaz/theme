import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Header from "components/Header";

const AboutusMessagesPage = () => {
  return (
    <>
      <div className="bg-blue_gray-50 flex flex-col font-notoseriftamil items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <div className="h-[700px] sm:h-[721px] md:px-5 relative w-full">
            <div className="h-[700px] sm:h-[721px] m-auto w-full">
              <Img
                className="h-[700px] m-auto object-cover w-full"
                src="images/img_aboutusbanner1.png"
                alt="aboutusbannerOne"
              />
              <div className="absolute bg-gradient  flex flex-col md:gap-10 gap-[588px] h-full inset-[0] items-center justify-center m-auto w-full">
                <div className="bg-gray-600 flex md:flex-col flex-row md:gap-5 items-center justify-start p-[7px] w-full">
                  <Img
                    className="h-6 mb-0.5 md:ml-[0] ml-[88px] w-6"
                    src="images/img_search.svg"
                    alt="communication"
                  />
                  <Text
                    className="ml-0.5 md:ml-[0] text-gray-300 text-sm tracking-[0.42px]"
                    size="txtNotoSerifTamilMedium14Gray300"
                  >
                    042232332 043236088
                  </Text>
                  <Img
                    className="h-6 mb-0.5 md:ml-[0] ml-[15px] w-6"
                    src="images/img_mail.svg"
                    alt="mail"
                  />
                  <Text
                    className="md:ml-[0] ml-[3px] text-gray-300 text-sm tracking-[0.42px]"
                    size="txtNotoSerifTamilMedium14Gray300"
                  >
                    sales@sunriseoasislighting.com
                  </Text>
                  <div className="flex md:flex-1 flex-row gap-[7px] items-start justify-center md:ml-[0] ml-[980px] w-[6%] md:w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_mail.svg"
                      alt="mail_One"
                    />
                    <Text
                      className="text-gray-300 text-sm tracking-[0.42px]"
                      size="txtNotoSerifTamilMedium14Gray300"
                    >
                      Your Cart
                    </Text>
                  </div>
                  <Img
                    className="h-6 md:ml-[0] ml-[18px] w-6"
                    src="images/img_mail.svg"
                    alt="mail_Two"
                  />
                  <List
                    className="md:flex-1 sm:flex-col flex-row gap-1 grid grid-cols-[repeat(2,_1fr_1px)_1fr] ml-2 md:ml-[0] w-[5%] md:w-full"
                    orientation="horizontal"
                  >
                    <div className="flex flex-col h-6 items-center justify-start p-0.5 w-full">
                      <Img
                        className="h-[19px]"
                        src="images/img_facebook.svg"
                        alt="facebook"
                      />
                    </div>
                    <Line className="self-center h-6 bg-gray-300 w-px" />
                    <div className="flex flex-col h-6 items-center justify-start p-0.5 w-full">
                      <Img
                        className="h-[19px]"
                        src="images/img_linkedin.svg"
                        alt="linkedin"
                      />
                    </div>
                    <Line className="self-center h-6 bg-gray-300 w-px" />
                    <div className="flex flex-col h-6 items-center justify-start p-0.5 w-full">
                      <Img
                        className="h-[19px]"
                        src="images/img_youtube.svg"
                        alt="youtube"
                      />
                    </div>
                  </List>
                  <Img
                    className="h-6 ml-2 md:ml-[0] w-6"
                    src="images/img_mail.svg"
                    alt="mail_Three"
                  />
                  <div className="flex flex-col h-6 items-center justify-start ml-2 md:ml-[0] p-0.5 w-6">
                    <Img
                      className="h-[19px]"
                      src="images/img_twitter.svg"
                      alt="twitter"
                    />
                  </div>
                </div>
                <div className="bg-gradient  flex flex-col items-center justify-end p-3.5 w-full">
                  <div className="flex flex-col gap-2.5 justify-start mt-1.5 w-[91%] md:w-full">
                    <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full">
                      <Text
                        className="sm:mt-0 mt-[3px] text-gray-300 text-sm tracking-[0.42px]"
                        size="txtNotoSerifTamilMedium14Gray300"
                      >
                        Home
                      </Text>
                      <Text
                        className="mb-[3px] text-gray-300 text-sm tracking-[0.42px]"
                        size="txtNotoSerifTamilMedium14Gray300"
                      >
                        Messages Company Information Projects & Services Gallery
                        CSR Download Contact US
                      </Text>
                    </div>
                    <Line className="bg-gray-300 h-0.5 md:ml-[0] ml-[963px] mr-[682px] w-[5%]" />
                  </div>
                </div>
              </div>
            </div>
            <Header className="absolute bg-gray-800_71 flex md:flex-col flex-row md:gap-5 inset-x-[0] items-center justify-center mx-auto top-[6%] w-full" />
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1491px] mt-[77px] mx-auto md:px-5 w-full">
            <div className="md:h-[728px] h-[805px] relative w-[45%] md:w-full">
              <div className="absolute border-[5px] border-solid bottom-[0] gray_600_gray_800_border h-[728px] right-[0] rounded w-[88%]"></div>
              <div className="absolute flex flex-col items-center justify-start left-[0] rotate-[180deg] top-[0] w-[88%]">
                <Img
                  className="h-[728px] md:h-auto object-cover rounded-bl rounded-br w-full"
                  src="images/img_image7_728x580.png"
                  alt="imageSeven"
                />
              </div>
            </div>
            <div className="flex flex-col gap-[47px] items-start justify-start">
              <Text
                className="leading-[200.00%] text-base text-gray-600 tracking-[0.48px]"
                size="txtNotoSerifTamilRegular16Gray600"
              >
                <span className="text-gray-600 font-notoseriftamil text-left font-normal">
                  At{" "}
                </span>
                <span className="text-gray-800 font-notoseriftamil text-left font-normal">
                  Sunrise Oasis Lighting,
                </span>
                <span className="text-gray-600 font-notoseriftamil text-left font-normal">
                  <>
                    {" "}
                    we assess our success by the degree of customer satisfaction
                    we obtain, not by the quality of our methods. Sunrise Oasis
                    Lighting is proud to manage some of the region&#39;s most
                    cutting-edge lighting equipment and services. We are
                    constantly diversifying our portfolio in and around the
                    Middle East. We consistently challenge industry trends and
                    set a pattern in our market segment, driven by our
                    philosophy of attentive service and customer satisfaction.
                    <br />
                    <br />
                    We strive to grow and improve the depth and quality of our
                    service as we broaden our operations and reach out to new
                    partnerships.
                  </>
                </span>
              </Text>
              <Text
                className="text-gray-800 text-lg tracking-[0.54px]"
                size="txtNotoSerifTamilMedium18"
              >
                - Jabbar Punnakkal
              </Text>
            </div>
          </div>
          <div className="bg-gray-300 flex flex-col items-end justify-start mt-[100px] p-[100px] md:px-10 sm:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-screen-2xl mx-auto w-full">
              <div className="flex flex-col gap-[47px] items-start justify-start md:mt-0 mt-[166px]">
                <Text
                  className="leading-[200.00%] text-base text-gray-600 tracking-[0.48px]"
                  size="txtNotoSerifTamilRegular16Gray600"
                >
                  <span className="text-gray-600 font-notoseriftamil text-left font-normal">
                    At{" "}
                  </span>
                  <span className="text-gray-800 font-notoseriftamil text-left font-normal">
                    Sunrise Oasis Lighting,
                  </span>
                  <span className="text-gray-600 font-notoseriftamil text-left font-normal">
                    <>
                      {" "}
                      we assess our success by the degree of customer
                      satisfaction we obtain, not by the quality of our methods.
                      Sunrise Oasis Lighting is proud to manage some of the
                      region&#39;s most cutting-edge lighting equipment and
                      services. We are constantly diversifying our portfolio in
                      and around the Middle East. We consistently challenge
                      industry trends and set a pattern in our market segment,
                      driven by our philosophy of attentive service and customer
                      satisfaction.
                      <br />
                      <br />
                      We strive to grow and improve the depth and quality of our
                      service as we broaden our operations and reach out to new
                      partnerships.
                    </>
                  </span>
                </Text>
                <Text
                  className="text-gray-800 text-lg tracking-[0.54px]"
                  size="txtNotoSerifTamilMedium18"
                >
                  - Jabbar Punnakkal
                </Text>
              </div>
              <div className="md:h-[728px] h-[805px] relative w-[43%] md:w-full">
                <div className="absolute border-[5px] border-solid bottom-[0] gray_600_gray_800_border2 h-[728px] left-[0] rounded w-[90%]"></div>
                <div className="absolute flex flex-col items-center justify-start right-[0] top-[0] w-[89%]">
                  <Img
                    className="h-[728px] md:h-auto object-cover rounded-bl rounded-br w-full"
                    src="images/img_image6_728x580.png"
                    alt="imageSix"
                  />
                </div>
              </div>
            </div>
          </div>
          <footer className="flex items-center justify-center mt-[100px] md:px-5 w-full">
            <div className="sm:h-[1025px] h-[1111px] md:h-[2184px] relative w-full">
              <div className="absolute bg-gray-600 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto p-[43px] md:px-10 sm:px-5 w-full">
                <div className="flex flex-col items-center justify-start mt-[166px] w-[94%] md:w-full">
                  <ul className="flex flex-col items-start justify-start w-full common-column-list">
                    <li>
                      <a href="javascript:">
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
                              Stay up-to-date with the latest trends and news in
                              the world of lighting fixtures with our
                              informative blog and articles. From design tips to
                              product reviews, we’ve got you covered. Check out
                              our latest posts and discover something new!
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
                                <a
                                  href="javascript:"
                                  className="mb-0.5 text-gray-800 text-lg tracking-[0.54px]"
                                >
                                  <Text size="txtNotoSerifTamilMedium18">
                                    Indoor
                                  </Text>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:"
                                  className="mb-0.5 md:ml-[0] ml-[158px] text-gray-800 text-lg tracking-[0.54px]"
                                >
                                  <Text size="txtNotoSerifTamilMedium18">
                                    Outdoor
                                  </Text>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:"
                                  className="mb-0.5 md:ml-[0] ml-[135px] text-gray-800 text-lg tracking-[0.54px]"
                                >
                                  <Text size="txtNotoSerifTamilMedium18">
                                    Decorative
                                  </Text>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:"
                                  className="md:ml-[0] ml-[122px] md:mt-0 mt-0.5 text-gray-800 text-lg tracking-[0.54px]"
                                >
                                  <Text size="txtNotoSerifTamilMedium18">
                                    Facad Lights
                                  </Text>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:"
                                  className="mb-0.5 md:ml-[0] ml-[101px] text-gray-800 text-lg tracking-[0.54px]"
                                >
                                  <Text size="txtNotoSerifTamilMedium18">
                                    Accessories
                                  </Text>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:"
                                  className="mb-0.5 ml-28 md:ml-[0] text-gray-800 text-lg tracking-[0.54px]"
                                >
                                  <Text size="txtNotoSerifTamilMedium18">
                                    Brands
                                  </Text>
                                </a>
                              </li>
                            </ul>
                            <ul className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-0.5 w-full common-column-list">
                              <li>
                                <a
                                  href="javascript:"
                                  className="text-gray-300 text-sm tracking-[0.42px]"
                                >
                                  <Text size="txtNotoSerifTamilMedium14Gray300">
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
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:"
                                  className="sm:ml-[0] ml-[57px] text-gray-300 text-sm tracking-[0.42px]"
                                >
                                  <Text size="txtNotoSerifTamilMedium14Gray300">
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
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:"
                                  className="sm:ml-[0] ml-[63px] text-gray-300 text-sm tracking-[0.42px]"
                                >
                                  <Text size="txtNotoSerifTamilMedium14Gray300">
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
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:"
                                  className="sm:ml-[0] ml-[60px] text-gray-300 text-sm tracking-[0.42px]"
                                >
                                  <Text size="txtNotoSerifTamilMedium14Gray300">
                                    <>
                                      Strip Lights
                                      <br />
                                      Neon Lights
                                    </>
                                  </Text>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:"
                                  className="sm:ml-[0] ml-[130px] text-gray-300 text-sm tracking-[0.42px]"
                                >
                                  <Text size="txtNotoSerifTamilMedium14Gray300">
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
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:"
                                  className="sm:ml-[0] ml-[77px] text-gray-300 text-sm tracking-[0.42px]"
                                >
                                  <Text size="txtNotoSerifTamilMedium14Gray300">
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
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:">
                        <Line className="bg-gray-300 h-px mt-[60px]" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:">
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
                      </a>
                    </li>
                    <li>
                      <a href="javascript:">
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
                      </a>
                    </li>
                    <li>
                      <a href="javascript:">
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
                      </a>
                    </li>
                    <li>
                      <a href="javascript:">
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
                      </a>
                    </li>
                    <li>
                      <a href="javascript:">
                        <Line className="bg-gray-300 h-px mt-[72px]" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:">
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
                      </a>
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
                    className="cursor-pointer font-medium leading-[normal] min-w-[267px] mr-[85px] text-center text-sm tracking-[0.42px]"
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
        </div>
      </div>
    </>
  );
};

export default AboutusMessagesPage;
