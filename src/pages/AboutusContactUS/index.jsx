import React from "react";

import { Button, Img, Input, Line, List, Text, TextArea } from "components";
import Header from "components/Header";

const AboutusContactUSPage = () => {
  return (
    <>
      <div className="bg-blue_gray-50 flex flex-col font-notoseriftamil items-center justify-start mx-auto w-full">
        <div className="flex flex-col justify-start w-full">
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
                <div className="bg-gradient  flex flex-col items-center justify-end p-3 w-full">
                  <div className="flex flex-col gap-3 items-end justify-start mt-[11px] w-[89%] md:w-full">
                    <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between mr-0.5 w-full">
                      <Text
                        className="text-gray-300 text-sm tracking-[0.42px]"
                        size="txtNotoSerifTamilMedium14Gray300"
                      >
                        Home
                      </Text>
                      <Text
                        className="text-gray-300 text-sm tracking-[0.42px]"
                        size="txtNotoSerifTamilMedium14Gray300"
                      >
                        <span className="text-gray-300 font-notoseriftamil text-left font-medium">
                          Messages Company Information Projects & Services{" "}
                        </span>
                        <span className="text-gray-300 font-notoseriftamil text-left font-medium">
                          Gallery
                        </span>
                        <span className="text-gray-300 font-notoseriftamil text-left font-medium">
                          {" "}
                          CSR Download{" "}
                        </span>
                        <span className="text-yellow-800 tracking-[0.54px] font-notoseriftamil text-left text-lg font-medium">
                          Contact US
                        </span>
                      </Text>
                    </div>
                    <Line className="bg-gray-300 h-0.5 w-[7%]" />
                  </div>
                </div>
              </div>
            </div>
            <Header className="absolute bg-gray-800_71 flex md:flex-col flex-row md:gap-5 inset-x-[0] items-center justify-center mx-auto top-[6%] w-full" />
          </div>
          <Text
            className="md:ml-[0] ml-[678px] mt-[81px] text-4xl sm:text-[32px] md:text-[34px] text-center text-gray-800 tracking-[1.08px]"
            size="txtNotoSerifTamilBold36Gray800"
          >
            Ready to light up your space?
          </Text>
          <Text
            className="md:ml-[0] ml-[605px] mt-[23px] text-base text-center text-gray-600 tracking-[0.48px]"
            size="txtNotoSerifTamilRegular16Gray600"
          >
            Submit your request directly and let’s get started on your lighting
            design project today!”
          </Text>
          <div className="flex md:flex-col flex-row gap-[22px] items-center justify-center md:ml-[0] ml-[390px] mt-[22px] md:px-5 w-3/5 md:w-full">
            <div className="bg-white-A700 flex flex-col gap-[59px] items-start justify-center p-[75px] md:px-10 sm:px-5 rounded shadow-bs2 w-1/2 md:w-full">
              <Button
                className="cursor-pointer font-bold leading-[normal] min-w-[295px] mt-[90px] text-center text-lg tracking-[0.54px]"
                shape="round"
                color="gray_600"
                size="md"
                variant="outline"
              >
                Send WhatsApp Message
              </Button>
              <div className="flex flex-col items-start justify-start mb-[117px] w-auto">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-[17px] items-start justify-start w-full">
                    <Text
                      className="text-gray-600 text-lg tracking-[0.54px]"
                      size="txtNotoSerifTamilMedium18Gray600"
                    >
                      Follow On
                    </Text>
                    <div className="flex flex-row items-center justify-between w-full">
                      <Img
                        className="h-14"
                        src="images/img_instagram_gray_600.svg"
                        alt="instagram"
                      />
                      <Img
                        className="h-14"
                        src="images/img_facebook_gray_600.svg"
                        alt="facebook"
                      />
                      <Img
                        className="h-14"
                        src="images/img_linkedin_gray_600.svg"
                        alt="linkedin"
                      />
                      <Img
                        className="h-14"
                        src="images/img_youtube_gray_600.svg"
                        alt="youtube"
                      />
                      <Img
                        className="h-14"
                        src="images/img_twitter_gray_600.svg"
                        alt="twitter_One"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-col items-center justify-end p-[30px] sm:px-5 rounded shadow-bs2 w-1/2 md:w-full">
              <div className="flex flex-col gap-5 items-center justify-start mt-[7px] w-[98%] md:w-full">
                <Input
                  name="group139"
                  placeholder="Your Name"
                  className="font-medium leading-[normal] p-0 placeholder:text-gray-600 text-left text-sm tracking-[0.42px] w-full"
                  wrapClassName="rounded-md w-full"
                  type="text"
                  shape="round"
                  color="gray_300"
                  size="lg"
                  variant="fill"
                ></Input>
                <Input
                  name="language"
                  placeholder="Email Address "
                  className="font-medium leading-[normal] p-0 placeholder:text-gray-600 text-left text-sm tracking-[0.42px] w-full"
                  wrapClassName="rounded-md w-full"
                  type="email"
                  shape="round"
                  color="gray_300"
                  size="lg"
                  variant="fill"
                ></Input>
                <Input
                  name="group141"
                  placeholder="Contact Number"
                  className="font-medium leading-[normal] p-0 placeholder:text-gray-600 text-left text-sm tracking-[0.42px] w-full"
                  wrapClassName="rounded-md w-full"
                  type="number"
                  shape="round"
                  color="gray_300"
                  size="lg"
                  variant="fill"
                ></Input>
                <Input
                  name="group142"
                  placeholder="Subject"
                  className="font-medium leading-[normal] p-0 placeholder:text-gray-600 text-left text-sm tracking-[0.42px] w-full"
                  wrapClassName="rounded-md w-full"
                  shape="round"
                  color="gray_300"
                  size="lg"
                  variant="fill"
                ></Input>
                <TextArea
                  className="bg-gray-300 border-0 font-medium leading-[normal] pb-[35px] pt-[19px] sm:px-5 px-[34px] rounded-md placeholder:text-gray-600 text-gray-600 text-left text-sm tracking-[0.42px] w-full"
                  name="group138"
                  placeholder="Messages"
                  name="group138"
                  placeholder="Messages"
                ></TextArea>
              </div>
            </div>
          </div>
          <Button
            className="border border-gray-300 border-solid cursor-pointer font-bold leading-[normal] min-w-[347px] md:ml-[0] ml-[1146px] mr-[427px] mt-[17px] text-center text-xl tracking-[0.60px]"
            shape="round"
            color="gray_600"
            size="lg"
            variant="fill"
          >
            Submit
          </Button>
          <div className="bg-white-A700 flex flex-col items-center justify-end max-w-[1719px] mt-[100px] mx-auto p-[34px] md:px-5 rounded shadow-bs2 w-full">
            <div className="flex flex-col items-center justify-start w-[95%] md:w-full">
              <Text
                className="text-gray-800 text-lg tracking-[0.54px]"
                size="txtNotoSerifTamilMedium18"
              >
                Head Office
              </Text>
              <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start mt-[59px] w-[88%] md:w-full">
                <Text
                  className="mb-3 md:mt-0 mt-[9px] text-gray-600 text-sm tracking-[0.42px]"
                  size="txtNotoSerifTamilMedium14Gray600"
                >
                  <>+971 4 2232 332 +971 4 323 6088</>
                </Text>
                <Text
                  className="md:ml-[0] ml-[282px] text-gray-600 text-sm tracking-[0.42px]"
                  size="txtNotoSerifTamilMedium14Gray600"
                >
                  <>
                    Al Quoz Ind Area 4, Al Kahrman 4 Street, Dubai
                    <br />
                    P.O Box 186021 Ware House No 13
                  </>
                </Text>
                <Text
                  className="mb-[15px] md:ml-[0] ml-[242px] text-gray-600 text-lg tracking-[0.54px]"
                  size="txtNotoSerifTamilMedium18Gray600"
                >
                  <>info@sunriseoasislighting.com</>
                </Text>
              </div>
              <div className="flex flex-col justify-start mt-[77px] w-full">
                <Line className="bg-gray-800 h-px mr-12 w-[97%]" />
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[68px] mt-[102px] w-[86%] md:w-full">
                  <div className="flex flex-col gap-[21px] items-start justify-start md:mt-0 mt-[17px]">
                    <Text
                      className="text-gray-600 text-lg tracking-[0.54px]"
                      size="txtNotoSerifTamilMedium18Gray600"
                    >
                      Intra - GCC - Branch - Saudi Arabia
                    </Text>
                    <Text
                      className="text-gray-600 text-sm tracking-[0.42px]"
                      size="txtNotoSerifTamilMedium14Gray600"
                    >
                      <>
                        Al Malaz, Riyadh - Saudi Arabia
                        <br />
                        +966 57 226 4809
                      </>
                    </Text>
                  </div>
                  <Line className="bg-gray-800 h-[155px] md:h-px md:ml-[0] ml-[60px] md:w-full w-px" />
                  <div className="flex flex-col gap-[21px] items-start justify-start md:ml-[0] ml-[124px] md:mt-0 mt-[17px]">
                    <Text
                      className="text-gray-600 text-lg tracking-[0.54px]"
                      size="txtNotoSerifTamilMedium18Gray600"
                    >
                      Branch - Abu Dhabi
                    </Text>
                    <Text
                      className="text-gray-600 text-sm tracking-[0.42px]"
                      size="txtNotoSerifTamilMedium14Gray600"
                    >
                      <>
                        Mussafah 34 - near New Labour Court Abu Dhabi - U.A.E
                        <br />
                        +971 55 892 4364| +971 2 883 6637
                      </>
                    </Text>
                  </div>
                  <Line className="bg-gray-800 h-[155px] md:h-px md:ml-[0] ml-[76px] md:w-full w-px" />
                  <div className="flex flex-col items-center justify-start md:ml-[0] ml-[98px] md:mt-0 mt-[19px] w-[19%] md:w-full">
                    <div className="flex flex-col gap-[19px] items-start justify-start w-full">
                      <Text
                        className="text-gray-600 text-lg tracking-[0.54px]"
                        size="txtNotoSerifTamilMedium18Gray600"
                      >
                        Logistic Centre
                      </Text>
                      <Text
                        className="text-gray-600 text-sm tracking-[0.42px]"
                        size="txtNotoSerifTamilMedium14Gray600"
                      >
                        <>
                          Warehouses Lands - Sharjah, UAE
                          <br />
                          +971 558966670
                        </>
                      </Text>
                    </div>
                  </div>
                </div>
                <Line className="bg-gray-800 h-px mr-12 mt-[101px] w-[97%]" />
                <Text
                  className="md:ml-[0] ml-[705px] mt-[38px] text-gray-800 text-lg tracking-[0.54px]"
                  size="txtNotoSerifTamilMedium18"
                >
                  Showrooms
                </Text>
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end md:ml-[0] ml-[68px] mt-14 w-[96%] md:w-full">
                  <Text
                    className="md:mt-0 mt-11 text-gray-600 text-sm tracking-[0.42px]"
                    size="txtNotoSerifTamilMedium14Gray600"
                  >
                    <>
                      Nakheel Street 41, Deira - Dubai UAE,
                      <br />
                      +971 4 250 2810
                    </>
                  </Text>
                  <Line className="bg-gray-800 h-[155px] md:h-px md:ml-[0] ml-[117px] md:w-full w-px" />
                  <Text
                    className="md:ml-[0] ml-[124px] md:mt-0 mt-11 text-gray-600 text-sm tracking-[0.42px]"
                    size="txtNotoSerifTamilMedium14Gray600"
                  >
                    <>
                      Al Malaz, Riyadh - Saudi Arabia
                      <br />
                      +966 57 226 4809
                    </>
                  </Text>
                  <Line className="bg-gray-800 h-[155px] md:h-px ml-64 md:ml-[0] md:w-full w-px" />
                  <Text
                    className="md:ml-[0] ml-[98px] md:mt-0 mt-11 text-gray-600 text-sm tracking-[0.42px]"
                    size="txtNotoSerifTamilMedium14Gray600"
                  >
                    <>
                      Mussafah 34 - near New Labour Court Abu Dhabi - U.A.E
                      <br />
                      +971 55 892 4364| +971 2 883 6637
                    </>
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <footer className="flex items-center justify-center mt-[100px] md:px-5 w-full">
            <div className="md:h-[1199px] h-[742px] sm:h-[796px] relative w-full">
              <div className="absolute bg-gray-600 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto p-[54px] md:px-10 sm:px-5 w-full">
                <div className="flex flex-col items-center justify-start mt-[155px] w-[95%] md:w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-10 gap-[88px] items-center justify-start w-[95%] md:w-full">
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
                          world of lighting fixtures with our informative blog
                          and articles. From design tips to product reviews,
                          we’ve got you covered. Check out our latest posts and
                          discover something new!
                        </Text>
                        <div className="flex flex-row items-center justify-start mt-[31px] w-[63%] md:w-full">
                          <Img
                            className="h-7"
                            src="images/img_instagram.svg"
                            alt="instagram_One"
                          />
                          <Img
                            className="h-7 ml-5"
                            src="images/img_facebook.svg"
                            alt="facebook_One"
                          />
                          <Img
                            className="h-7 ml-5"
                            src="images/img_linkedin.svg"
                            alt="linkedin_One"
                          />
                          <Img
                            className="h-7 ml-5"
                            src="images/img_youtube.svg"
                            alt="youtube_One"
                          />
                          <Img
                            className="h-7 ml-5"
                            src="images/img_whatsapp.svg"
                            alt="whatsapp"
                          />
                          <Img
                            className="h-7 ml-5"
                            src="images/img_twitter.svg"
                            alt="twitter_Two"
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
                              className="sm:ml-[0] ml-[131px] text-gray-300 text-sm tracking-[0.42px]"
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
                    <Line className="bg-gray-300 h-px mt-[55px] w-full" />
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-12 w-full">
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
                  </div>
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

export default AboutusContactUSPage;
