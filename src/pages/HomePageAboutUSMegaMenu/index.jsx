import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Footer from "components/Footer";

const HomePageAboutUSMegaMenuPage = () => {
  return (
    <>
      <div className="bg-blue_gray-50 flex flex-col font-notoseriftamil items-center justify-start mx-auto w-full">
        <div className="h-[1080px] md:h-[3589px] md:px-5 relative w-full">
          <div className="h-[1080px] md:h-[3589px] m-auto w-full">
            <Img
              className="h-[1080px] m-auto object-cover w-full"
              src="images/img_project1petrolpump.png"
              alt="project1petrolp"
            />
            <div className="absolute bg-gradient2  flex flex-col h-full inset-[0] items-start justify-center m-auto pb-[42px] w-full">
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
              <div className="md:h-[3032px] h-[826px] sm:h-[827px] mt-[72px] relative w-full">
                <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[90%]">
                  <div className="flex flex-col md:gap-10 gap-[370px] items-center justify-start w-full">
                    <div className="border border-gray-300 border-solid flex flex-row sm:gap-10 items-start justify-between p-2 rounded-md w-1/2 md:w-full">
                      <Text
                        className="ml-4 mt-0.5 text-center text-gray-300 text-lg tracking-[0.54px]"
                        size="txtNotoSerifTamilMedium18Gray300"
                      >
                        Search a Product...|
                      </Text>
                      <Img
                        className="h-6 mr-[9px] mt-1 w-6"
                        src="images/img_search.svg"
                        alt="search"
                      />
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                      <div className="border border-solid border-yellow-800 flex flex-col items-center justify-end md:mt-0 mt-11 p-3 rounded-md">
                        <Text
                          className="text-sm text-yellow-800 tracking-[0.42px]"
                          size="txtNotoSerifTamilMedium14Yellow800"
                        >
                          Learn More about Project
                        </Text>
                      </div>
                      <List
                        className="md:flex-1 sm:flex-col flex-row gap-[21px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-[41%] md:w-full"
                        orientation="horizontal"
                      >
                        <div className="bg-blue_gray-100 flex flex-col items-center justify-start sm:ml-[0] outline outline-[3px] outline-gray-300 rounded-[5px] w-full">
                          <div className="h-[337px] relative w-full">
                            <Img
                              className="h-[337px] m-auto object-cover rounded-[5px] w-full"
                              src="images/img_project1petrolpump_337x215.png"
                              alt="project1petrolp"
                            />
                            <div className="absolute bottom-[4%] flex flex-col inset-x-[0] items-start justify-start mx-auto w-[87%]">
                              <Text
                                className="text-base text-gray-300 tracking-[0.48px]"
                                size="txtNotoSerifTamilBold16"
                              >
                                Illuminate your space
                              </Text>
                              <Text
                                className="mt-1.5 text-gray-300 text-sm tracking-[0.42px]"
                                size="txtNotoSerifTamilMedium14Gray300"
                              >
                                Learn More
                              </Text>
                              <Line className="bg-yellow-800 h-px mt-0.5 w-[58%]" />
                            </div>
                          </div>
                        </div>
                        <div className="bg-blue_gray-100 flex flex-col items-center justify-start sm:ml-[0] outline outline-[3px] outline-gray-300 rounded-[5px] w-full">
                          <div className="h-[337px] relative w-full">
                            <Img
                              className="h-[337px] m-auto object-cover rounded-[5px] w-full"
                              src="images/img_image4_337x215.png"
                              alt="imageFour"
                            />
                            <div className="absolute bottom-[4%] flex flex-col inset-x-[0] items-start justify-start mx-auto w-[87%]">
                              <Text
                                className="text-base text-gray-300 tracking-[0.48px]"
                                size="txtNotoSerifTamilBold16"
                              >
                                Illuminate your space
                              </Text>
                              <Text
                                className="mt-1.5 text-gray-300 text-sm tracking-[0.42px]"
                                size="txtNotoSerifTamilMedium14Gray300"
                              >
                                Learn More
                              </Text>
                              <Line className="bg-yellow-800 h-px mt-0.5 w-[58%]" />
                            </div>
                          </div>
                        </div>
                        <div className="bg-blue_gray-100 flex flex-col items-center justify-start sm:ml-[0] outline outline-[3px] outline-gray-300 rounded-[5px] w-full">
                          <div className="h-[337px] relative w-full">
                            <Img
                              className="h-[337px] m-auto object-cover rounded-[5px] w-full"
                              src="images/img_project1petrolpump_1.png"
                              alt="project1petrolp"
                            />
                            <div className="absolute bottom-[4%] flex flex-col items-start justify-start left-[3%] w-[87%]">
                              <Text
                                className="text-base text-gray-300 tracking-[0.48px]"
                                size="txtNotoSerifTamilBold16"
                              >
                                Illuminate your space
                              </Text>
                              <Text
                                className="mt-1.5 text-gray-300 text-sm tracking-[0.42px]"
                                size="txtNotoSerifTamilMedium14Gray300"
                              >
                                Learn More
                              </Text>
                              <Line className="bg-yellow-800 h-px mt-0.5 w-[58%]" />
                            </div>
                          </div>
                        </div>
                      </List>
                    </div>
                  </div>
                </div>
                <div className="absolute flex flex-col gap-5 items-start justify-start left-[5%] top-[31%]">
                  <Text
                    className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[1.08px]"
                    size="txtNotoSerifTamilBold36WhiteA700"
                  >
                    <>
                      Illuminate your space
                      <br />
                      with style and efficiency
                    </>
                  </Text>
                  <Text
                    className="leading-[200.00%] ml-0.5 md:ml-[0] text-base text-gray-300 tracking-[0.48px]"
                    size="txtNotoSerifTamilRegular16Gray300"
                  >
                    <>
                      We believe in the power of brands to create credibility.
                      That’s why we partner with the best to bring you
                      top-quality products. Trust us to deliver excellence,
                      every time.
                      <br />
                      Shop with confidence, knowing you’re getting the best.
                    </>
                  </Text>
                </div>
                <div className="absolute bg-gray-300 flex flex-col inset-x-[0] items-center justify-end mx-auto p-[57px] md:px-10 sm:px-5 top-[0] w-full">
                  <div className="flex flex-col gap-[55px] items-center justify-start mt-[3px] w-[92%] md:w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                      <div className="bg-gray-800 h-[108px] rounded-[5px] w-[7%]"></div>
                      <div className="flex flex-col items-start justify-start ml-5 md:ml-[0]">
                        <Text
                          className="text-gray-800 text-xl tracking-[0.60px]"
                          size="txtNotoSerifTamilBold20"
                        >
                          Indoor Lights
                        </Text>
                        <Text
                          className="leading-[200.00%] text-[10px] text-gray-800 tracking-[0.30px] w-[89%] sm:w-full"
                          size="txtNotoSerifTamilRegular10"
                        >
                          Indoor lights can be used to create a cozy atmosphere
                          in your home.{" "}
                        </Text>
                        <Text
                          className="mt-[13px] text-gray-800 text-sm tracking-[0.42px]"
                          size="txtNotoSerifTamilMedium14"
                        >
                          Know More About Indoor Lights
                        </Text>
                      </div>
                      <div className="bg-gray-800 h-[108px] md:ml-[0] ml-[79px] rounded-[5px] w-[7%]"></div>
                      <div className="flex flex-col items-start justify-start ml-5 md:ml-[0]">
                        <Text
                          className="text-gray-800 text-xl tracking-[0.60px]"
                          size="txtNotoSerifTamilBold20"
                        >
                          Indoor Lights
                        </Text>
                        <Text
                          className="leading-[200.00%] text-[10px] text-gray-800 tracking-[0.30px] w-[89%] sm:w-full"
                          size="txtNotoSerifTamilRegular10"
                        >
                          Indoor lights can be used to create a cozy atmosphere
                          in your home.{" "}
                        </Text>
                        <Text
                          className="mt-[13px] text-gray-800 text-sm tracking-[0.42px]"
                          size="txtNotoSerifTamilMedium14"
                        >
                          Know More About Indoor Lights
                        </Text>
                      </div>
                      <div className="bg-gray-800 h-[108px] md:ml-[0] ml-[79px] rounded-[5px] w-[7%]"></div>
                      <div className="flex flex-col items-start justify-start ml-5 md:ml-[0]">
                        <Text
                          className="text-gray-800 text-xl tracking-[0.60px]"
                          size="txtNotoSerifTamilBold20"
                        >
                          Indoor Lights
                        </Text>
                        <Text
                          className="leading-[200.00%] text-[10px] text-gray-800 tracking-[0.30px] w-[89%] sm:w-full"
                          size="txtNotoSerifTamilRegular10"
                        >
                          Indoor lights can be used to create a cozy atmosphere
                          in your home.{" "}
                        </Text>
                        <Text
                          className="mt-[13px] text-gray-800 text-sm tracking-[0.42px]"
                          size="txtNotoSerifTamilMedium14"
                        >
                          Know More About Indoor Lights
                        </Text>
                      </div>
                      <div className="bg-gray-800 h-[108px] md:ml-[0] ml-[79px] rounded-[5px] w-[7%]"></div>
                      <div className="flex flex-col items-start justify-start ml-5 md:ml-[0]">
                        <Text
                          className="text-gray-800 text-xl tracking-[0.60px]"
                          size="txtNotoSerifTamilBold20"
                        >
                          Indoor Lights
                        </Text>
                        <Text
                          className="leading-[200.00%] text-[10px] text-gray-800 tracking-[0.30px] w-[89%] sm:w-full"
                          size="txtNotoSerifTamilRegular10"
                        >
                          Indoor lights can be used to create a cozy atmosphere
                          in your home.{" "}
                        </Text>
                        <Text
                          className="mt-[13px] text-gray-800 text-sm tracking-[0.42px]"
                          size="txtNotoSerifTamilMedium14"
                        >
                          Know More About Indoor Lights
                        </Text>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                      <div className="flex md:flex-1 flex-col md:gap-10 gap-[76px] items-center justify-start md:mt-0 mt-[18px] w-[7%] md:w-full">
                        <div className="bg-gray-800 h-[108px] rounded-[5px] w-full"></div>
                        <div className="bg-gray-800 h-[108px] rounded-[5px] w-full"></div>
                      </div>
                      <div className="flex flex-col items-start justify-start ml-5 md:ml-[0] md:mt-0 mt-[17px]">
                        <Text
                          className="text-gray-800 text-xl tracking-[0.60px]"
                          size="txtNotoSerifTamilBold20"
                        >
                          Indoor Lights
                        </Text>
                        <Text
                          className="leading-[200.00%] text-[10px] text-gray-800 tracking-[0.30px] w-[89%] sm:w-full"
                          size="txtNotoSerifTamilRegular10"
                        >
                          Indoor lights can be used to create a cozy atmosphere
                          in your home.{" "}
                        </Text>
                        <Text
                          className="mt-[13px] text-gray-800 text-sm tracking-[0.42px]"
                          size="txtNotoSerifTamilMedium14"
                        >
                          Know More About Indoor Lights
                        </Text>
                        <Text
                          className="mt-[75px] text-gray-800 text-xl tracking-[0.60px]"
                          size="txtNotoSerifTamilBold20"
                        >
                          Indoor Lights
                        </Text>
                        <Text
                          className="leading-[200.00%] text-[10px] text-gray-800 tracking-[0.30px] w-[89%] sm:w-full"
                          size="txtNotoSerifTamilRegular10"
                        >
                          Indoor lights can be used to create a cozy atmosphere
                          in your home.{" "}
                        </Text>
                        <Text
                          className="mt-[13px] text-gray-800 text-sm tracking-[0.42px]"
                          size="txtNotoSerifTamilMedium14"
                        >
                          Know More About Indoor Lights
                        </Text>
                      </div>
                      <div className="flex md:flex-1 flex-col gap-[57px] items-center justify-start md:ml-[0] ml-[59px] w-[34%] md:w-full">
                        <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                          <div className="bg-gray-800_63 flex flex-col items-start justify-end p-[17px] rounded-[5px]">
                            <div className="flex flex-row gap-5 items-center justify-start ml-0.5 md:ml-[0] w-[94%] md:w-full">
                              <div className="bg-gray-800 h-[108px] rounded-[5px] w-[30%]"></div>
                              <div className="flex flex-col items-start justify-start">
                                <Text
                                  className="text-gray-800 text-xl tracking-[0.60px]"
                                  size="txtNotoSerifTamilBold20"
                                >
                                  Indoor Lights
                                </Text>
                                <Text
                                  className="leading-[200.00%] text-[10px] text-gray-800 tracking-[0.30px] w-[89%] sm:w-full"
                                  size="txtNotoSerifTamilRegular10"
                                >
                                  Indoor lights can be used to create a cozy
                                  atmosphere in your home.{" "}
                                </Text>
                                <Text
                                  className="mt-[13px] text-gray-800 text-sm tracking-[0.42px]"
                                  size="txtNotoSerifTamilMedium14"
                                >
                                  Know More About Indoor Lights
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="bg-gray-800 h-[108px] sm:mt-0 my-[18px] rounded-[5px] w-[19%]"></div>
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-[97%] md:w-full">
                          <div className="bg-gray-800 h-[108px] rounded-[5px] w-1/5"></div>
                          <div className="flex flex-col items-start justify-start ml-5 sm:ml-[0]">
                            <Text
                              className="text-gray-800 text-xl tracking-[0.60px]"
                              size="txtNotoSerifTamilBold20"
                            >
                              Indoor Lights
                            </Text>
                            <Text
                              className="leading-[200.00%] text-[10px] text-gray-800 tracking-[0.30px] w-[89%] sm:w-full"
                              size="txtNotoSerifTamilRegular10"
                            >
                              Indoor lights can be used to create a cozy
                              atmosphere in your home.{" "}
                            </Text>
                            <Text
                              className="mt-[13px] text-gray-800 text-sm tracking-[0.42px]"
                              size="txtNotoSerifTamilMedium14"
                            >
                              Know More About Indoor Lights
                            </Text>
                          </div>
                          <div className="bg-gray-800 h-[108px] sm:ml-[0] ml-[79px] rounded-[5px] w-1/5"></div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start ml-5 md:ml-[0] md:mt-0 mt-[17px]">
                        <Text
                          className="text-gray-800 text-xl tracking-[0.60px]"
                          size="txtNotoSerifTamilBold20"
                        >
                          Indoor Lights
                        </Text>
                        <Text
                          className="leading-[200.00%] text-[10px] text-gray-800 tracking-[0.30px] w-[89%] sm:w-full"
                          size="txtNotoSerifTamilRegular10"
                        >
                          Indoor lights can be used to create a cozy atmosphere
                          in your home.{" "}
                        </Text>
                        <Text
                          className="mt-[13px] text-gray-800 text-sm tracking-[0.42px]"
                          size="txtNotoSerifTamilMedium14"
                        >
                          Know More About Indoor Lights
                        </Text>
                        <Text
                          className="mt-[75px] text-gray-800 text-xl tracking-[0.60px]"
                          size="txtNotoSerifTamilBold20"
                        >
                          Indoor Lights
                        </Text>
                        <Text
                          className="leading-[200.00%] text-[10px] text-gray-800 tracking-[0.30px] w-[89%] sm:w-full"
                          size="txtNotoSerifTamilRegular10"
                        >
                          Indoor lights can be used to create a cozy atmosphere
                          in your home.{" "}
                        </Text>
                        <Text
                          className="mt-[13px] text-gray-800 text-sm tracking-[0.42px]"
                          size="txtNotoSerifTamilMedium14"
                        >
                          Know More About Indoor Lights
                        </Text>
                      </div>
                      <div className="flex md:flex-1 flex-col md:gap-10 gap-[76px] items-center justify-start md:ml-[0] ml-[79px] md:mt-0 mt-[18px] w-[7%] md:w-full">
                        <div className="bg-gray-800 h-[108px] rounded-[5px] w-full"></div>
                        <div className="bg-gray-800 h-[108px] rounded-[5px] w-full"></div>
                      </div>
                      <div className="flex flex-col items-start justify-start ml-5 md:ml-[0] md:mt-0 mt-[17px]">
                        <Text
                          className="text-gray-800 text-xl tracking-[0.60px]"
                          size="txtNotoSerifTamilBold20"
                        >
                          Indoor Lights
                        </Text>
                        <Text
                          className="leading-[200.00%] text-[10px] text-gray-800 tracking-[0.30px] w-[89%] sm:w-full"
                          size="txtNotoSerifTamilRegular10"
                        >
                          Indoor lights can be used to create a cozy atmosphere
                          in your home.{" "}
                        </Text>
                        <Text
                          className="mt-[13px] text-gray-800 text-sm tracking-[0.42px]"
                          size="txtNotoSerifTamilMedium14"
                        >
                          Know More About Indoor Lights
                        </Text>
                        <Text
                          className="mt-[75px] text-gray-800 text-xl tracking-[0.60px]"
                          size="txtNotoSerifTamilBold20"
                        >
                          Indoor Lights
                        </Text>
                        <Text
                          className="leading-[200.00%] text-[10px] text-gray-800 tracking-[0.30px] w-[89%] sm:w-full"
                          size="txtNotoSerifTamilRegular10"
                        >
                          Indoor lights can be used to create a cozy atmosphere
                          in your home.{" "}
                        </Text>
                        <Text
                          className="mt-[13px] text-gray-800 text-sm tracking-[0.42px]"
                          size="txtNotoSerifTamilMedium14"
                        >
                          Know More About Indoor Lights
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Text
                className="md:ml-[0] ml-[1700px] mt-1.5 text-gray-300 text-sm tracking-[0.42px]"
                size="txtNotoSerifTamilMedium14Gray300"
              >
                Login/Register
              </Text>
              <Img
                className="h-px md:ml-[0] ml-[767px] mt-[71px]"
                src="images/img_group63.svg"
                alt="groupSixtyThree"
              />
            </div>
          </div>
          <header className="absolute bg-gray-800_71 flex md:flex-col flex-row md:gap-5 inset-x-[0] items-center justify-center mx-auto top-[4%] w-full">
            <Img
              className="h-12 md:ml-[0] ml-[98px] md:mt-0 my-[11px]"
              src="images/img_fulllogo_gray_300_48x175.svg"
              alt="fulllogo"
            />
            <ul className="flex md:flex-1 sm:flex-col flex-row sm:hidden items-start justify-center md:ml-[0] ml-[497px] md:mt-0 my-[21px] w-1/5 md:w-full common-row-list">
              <li>
                <a
                  href="javascript:"
                  className="text-gray-300 text-lg hover:text-yellow-800 tracking-[0.54px]"
                >
                  <Text size="txtNotoSerifTamilMedium18Gray300">Home</Text>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="ml-[55px] mt-[3px] text-sm text-yellow-800 tracking-[0.42px]"
                >
                  <Text size="txtNotoSerifTamilMedium14Yellow800">
                    About US
                  </Text>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="ml-[68px] mt-[5px] text-gray-300 text-sm hover:text-yellow-800 tracking-[0.42px]"
                >
                  <Text size="txtNotoSerifTamilMedium14Gray300">Shop</Text>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="ml-[67px] mt-[5px] text-gray-300 text-sm hover:text-yellow-800 tracking-[0.42px]"
                >
                  <Text size="txtNotoSerifTamilMedium14Gray300">Blog</Text>
                </a>
              </li>
            </ul>
            <Button
              className="cursor-pointer font-medium leading-[normal] min-w-[116px] md:ml-[0] ml-[400px] md:mt-0 my-3 text-center text-sm tracking-[0.42px]"
              shape="round"
              color="gray_300"
              size="md"
              variant="fill"
            >
              Smat Touch
            </Button>
            <div className="border border-gray-300 border-solid h-12 ml-5 md:ml-[0] mr-[100px] md:mt-0 my-3 rounded-md w-[8%]"></div>
          </header>
        </div>
        <div className="flex flex-col gap-[18px] items-center justify-start max-w-[1719px] mt-[100px] mx-auto md:px-5 w-full">
          <Text
            className="text-4xl sm:text-[32px] md:text-[34px] text-center text-gray-800 tracking-[1.08px]"
            size="txtNotoSerifTamilBold36Gray800"
          >
            Browse a Product by Brand
          </Text>
          <Text
            className="leading-[200.00%] text-base text-center text-gray-600 tracking-[0.48px]"
            size="txtNotoSerifTamilRegular16Gray600"
          >
            <span className="text-gray-600 font-notoseriftamil font-normal">
              <>
                We believe in the power of brands to create credibility. That’s
                why we partner with the best to bring you top-quality products.
                Trust us to deliver excellence, every time.
                <br />
              </>
            </span>
            <span className="text-gray-600 font-notoseriftamil font-normal">
              Shop Now
            </span>
            <span className="text-gray-600 font-notoseriftamil font-normal">
              {" "}
              with confidence, knowing you’re getting the best.
            </span>
          </Text>
          <div className="md:h-[1283px] h-[329px] sm:h-[452px] relative w-full">
            <div className="bg-gradient  h-40 ml-auto mr-[435px] mt-1.5 rounded w-1/4"></div>
            <div className="absolute border border-gray-600 border-solid flex flex-col h-full inset-[0] items-center justify-center m-auto p-2 rounded w-full">
              <div className="flex flex-col items-center justify-start mt-[5px] w-[95%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[90%] md:w-full">
                  <Img
                    className="h-9"
                    src="images/img_technolightlogo.svg"
                    alt="technolightlogo"
                  />
                  <Line className="bg-black-900 h-32 md:h-px md:ml-[0] ml-[145px] md:w-full w-px" />
                  <Img
                    className="h-[23px] md:ml-[0] ml-[118px]"
                    src="images/img_euchipslogo.svg"
                    alt="euchipslogo"
                  />
                  <Line className="bg-black-900 h-32 md:h-px md:ml-[0] ml-[132px] md:w-full w-px" />
                  <Img
                    className="h-[21px] md:ml-[0] ml-[150px]"
                    src="images/img_ltechlogo.svg"
                    alt="ltechlogo"
                  />
                  <Line className="bg-black-900 h-32 md:h-px md:ml-[0] ml-[167px] md:w-full w-px" />
                  <Img
                    className="h-[21px] md:ml-[0] ml-[140px]"
                    src="images/img_tridoniclogo.svg"
                    alt="tridoniclogo"
                  />
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[29px] w-full">
                  <Line className="bg-black-900 h-px rotate-[-180deg] w-1/5" />
                  <Line className="bg-black-900 h-px rotate-[-180deg] w-1/5" />
                  <Line className="bg-black-900 h-px rotate-[-180deg] w-1/5" />
                  <Line className="bg-black-900 h-px rotate-[-180deg] w-1/5" />
                </div>
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[22px] w-[90%] md:w-full">
                  <Img
                    className="h-9"
                    src="images/img_technolightlogo.svg"
                    alt="technolightlogo_One"
                  />
                  <Line className="bg-black-900 h-32 md:h-px md:ml-[0] ml-[145px] md:w-full w-px" />
                  <Img
                    className="h-[23px] md:ml-[0] ml-[118px]"
                    src="images/img_euchipslogo.svg"
                    alt="euchipslogo_One"
                  />
                  <Line className="bg-black-900 h-32 md:h-px md:ml-[0] ml-[132px] md:w-full w-px" />
                  <Img
                    className="h-[21px] md:ml-[0] ml-[150px]"
                    src="images/img_ltechlogo_red_a700_01.svg"
                    alt="ltechlogo_One"
                  />
                  <Line className="bg-black-900 h-32 md:h-px md:ml-[0] ml-[167px] md:w-full w-px" />
                  <Img
                    className="h-[21px] md:ml-[0] ml-[140px]"
                    src="images/img_tridoniclogo.svg"
                    alt="tridoniclogo_One"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gradient1  flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1430px] mt-[100px] mx-auto p-[60px] md:px-5 rounded shadow-bs w-full">
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
        <div className="bg-white-A700 flex flex-col items-center justify-start mt-[100px] p-[82px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col gap-5 items-center justify-start max-w-[1719px] mb-[18px] mx-auto w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
              <div className="flex md:flex-1 flex-col gap-[23px] items-start justify-start w-[41%] md:w-full">
                <div className="flex md:flex-col flex-row gap-[31px] items-center justify-start w-[90%] md:w-full">
                  <Text
                    className="text-4xl sm:text-[32px] md:text-[34px] text-gray-800 tracking-[1.08px]"
                    size="txtNotoSerifTamilBold36Gray800"
                  >
                    Featured Products
                  </Text>
                  <div className="flex flex-col items-start justify-start w-[39%] md:w-full">
                    <Text
                      className="text-gray-600 text-sm tracking-[0.42px]"
                      size="txtNotoSerifTamilMedium14Gray600"
                    >
                      View More Featured Product
                    </Text>
                    <Line className="bg-yellow-800 h-px mt-0.5 w-full" />
                  </div>
                </div>
                <Text
                  className="leading-[200.00%] text-base text-gray-600 tracking-[0.48px] w-full"
                  size="txtNotoSerifTamilRegular16Gray600"
                >
                  Brighten up your space with our featured lighting fixtures!
                  From sleek and modern to classic and elegant, we have the
                  perfect fixture to match your style. Shop now and see the
                  difference good lighting can make!
                </Text>
              </div>
              <Button
                className="border border-gray-600 border-solid cursor-pointer font-medium leading-[normal] mb-[47px] min-w-[197px] md:ml-[0] ml-[167px] md:mt-0 mt-8 rounded text-center text-lg tracking-[0.54px]"
                shape="round"
                color="gray_800"
                size="xl"
                variant="fill"
              >
                Indoor
              </Button>
              <Button
                className="cursor-pointer font-medium leading-[normal] min-w-[197px] ml-5 md:ml-[0] md:mt-0 mt-8 rounded text-center text-lg tracking-[0.54px]"
                shape="round"
                color="gray_800"
                size="xl"
                variant="outline"
              >
                Outdoor
              </Button>
              <Button
                className="cursor-pointer font-medium leading-[normal] min-w-[197px] ml-5 md:ml-[0] md:mt-0 mt-8 rounded text-center text-lg tracking-[0.54px]"
                shape="round"
                color="gray_800"
                size="xl"
                variant="outline"
              >
                Decorative
              </Button>
              <Button
                className="cursor-pointer font-medium leading-[normal] min-w-[197px] ml-5 md:ml-[0] md:mt-0 mt-8 rounded text-center text-lg tracking-[0.54px]"
                shape="round"
                color="gray_800"
                size="xl"
                variant="outline"
              >
                Strip & Neon
              </Button>
            </div>
            <List
              className="sm:flex-col flex-row gap-[21px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 justify-center w-full"
              orientation="horizontal"
            >
              <div className="md:h-[424px] h-[433px] relative w-full">
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
              <div className="md:h-[424px] h-[433px] relative w-full">
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
              <div className="md:h-[424px] h-[433px] relative w-full">
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
              <div className="md:h-[424px] h-[433px] relative w-full">
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
              <div className="md:h-[424px] h-[433px] relative w-full">
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
              <div className="md:h-[424px] h-[433px] relative w-full">
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
            </List>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1719px] mt-[99px] mx-auto md:px-5 w-full">
          <Text
            className="text-4xl sm:text-[32px] md:text-[34px] text-gray-800 tracking-[1.08px]"
            size="txtNotoSerifTamilBold36Gray800"
          >
            Product Categories
          </Text>
          <Text
            className="leading-[200.00%] mt-[19px] text-base text-center text-gray-600 tracking-[0.48px]"
            size="txtNotoSerifTamilRegular16Gray600"
          >
            <>
              Discover our wide range of lighting fixture categories and find
              the perfect addition to your space. From modern to classic, we
              have a style to suit every taste.
              <br />
              Shop now and brighten up your home with our stunning lighting
              fixtures!
            </>
          </Text>
          <div className="border border-gray-600 border-solid flex flex-col items-center justify-start mt-[30px] p-[7px] rounded w-full">
            <div className="flex flex-col gap-3 items-center justify-start mt-1 w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[94%] md:w-full">
                <Text
                  className="text-gray-800 text-sm tracking-[0.42px]"
                  size="txtNotoSerifTamilMedium14"
                >
                  Downlights
                </Text>
                <Line className="bg-black-900 h-[92px] md:h-px md:ml-[0] ml-[67px] md:w-full w-px" />
                <Text
                  className="md:ml-[0] ml-[75px] text-gray-800 text-sm tracking-[0.42px]"
                  size="txtNotoSerifTamilMedium14"
                >
                  Spot Lights
                </Text>
                <Line className="bg-black-900 h-[92px] md:h-px md:ml-[0] ml-[61px] md:w-full w-px" />
                <Text
                  className="md:ml-[0] ml-[59px] text-gray-800 text-sm tracking-[0.42px]"
                  size="txtNotoSerifTamilMedium14"
                >
                  Modular Lights
                </Text>
                <Line className="bg-black-900 h-[92px] md:h-px md:ml-[0] ml-[47px] md:w-full w-px" />
                <Text
                  className="md:ml-[0] ml-[23px] text-gray-800 text-sm tracking-[0.42px]"
                  size="txtNotoSerifTamilMedium14"
                >
                  Recessed Linear Lights
                </Text>
                <Line className="bg-black-900 h-[92px] md:h-px md:ml-[0] ml-[29px] md:w-full w-px" />
                <Text
                  className="ml-9 md:ml-[0] text-gray-800 text-sm tracking-[0.42px]"
                  size="txtNotoSerifTamilMedium14"
                >
                  Magnetic Track Lights
                </Text>
                <Line className="bg-black-900 h-[92px] md:h-px md:ml-[0] ml-[21px] md:w-full w-px" />
                <Text
                  className="md:ml-[0] ml-[25px] text-gray-800 text-sm tracking-[0.42px]"
                  size="txtNotoSerifTamilMedium14"
                >
                  Linear Pendant Lights
                </Text>
                <Line className="bg-black-900 h-[92px] md:h-px ml-8 md:ml-[0] md:w-full w-px" />
                <Text
                  className="md:ml-[0] ml-[67px] text-gray-800 text-sm tracking-[0.42px]"
                  size="txtNotoSerifTamilMedium14"
                >
                  Cabinet Lights
                </Text>
                <Line className="bg-black-900 h-[92px] md:h-px md:ml-[0] ml-[46px] md:w-full w-px" />
                <Text
                  className="md:ml-[0] ml-[54px] text-gray-800 text-sm tracking-[0.42px]"
                  size="txtNotoSerifTamilMedium14"
                >
                  Track Lights
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                <Line className="bg-black-900 h-px rotate-[-180deg] w-[11%]" />
                <Line className="bg-black-900 h-px rotate-[-180deg] w-[11%]" />
                <Line className="bg-black-900 h-px rotate-[-180deg] w-[11%]" />
                <Line className="bg-black-900 h-px rotate-[-180deg] w-[11%]" />
                <Line className="bg-black-900 h-px rotate-[-180deg] w-[11%]" />
                <Line className="bg-black-900 h-px rotate-[-180deg] w-[11%]" />
                <Line className="bg-black-900 h-px rotate-[-180deg] w-[11%]" />
                <Line className="bg-black-900 h-px rotate-[-180deg] w-[11%]" />
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[95%] md:w-full">
                <Text
                  className="text-gray-800 text-sm tracking-[0.42px]"
                  size="txtNotoSerifTamilMedium14"
                >
                  Mirror Lights
                </Text>
                <Line className="bg-black-900 h-[92px] md:h-px md:ml-[0] ml-[59px] md:w-full w-px" />
                <Text
                  className="md:ml-[0] ml-[61px] text-gray-800 text-sm tracking-[0.42px]"
                  size="txtNotoSerifTamilMedium14"
                >
                  Outdoor Lights
                </Text>
                <Line className="bg-black-900 h-[92px] md:h-px md:ml-[0] ml-[47px] md:w-full w-px" />
                <Text
                  className="md:ml-[0] ml-[54px] text-gray-800 text-sm tracking-[0.42px]"
                  size="txtNotoSerifTamilMedium14"
                >
                  Industrial Lights
                </Text>
                <Line className="bg-black-900 h-[92px] md:h-px md:ml-[0] ml-[42px] md:w-full w-px" />
                <Text
                  className="md:ml-[0] ml-[42px] text-gray-800 text-sm tracking-[0.42px]"
                  size="txtNotoSerifTamilMedium14"
                >
                  Decorative Lights
                </Text>
                <Line className="bg-black-900 h-[92px] md:h-px ml-12 md:ml-[0] md:w-full w-px" />
                <Text
                  className="md:ml-[0] ml-[71px] text-gray-800 text-sm tracking-[0.42px]"
                  size="txtNotoSerifTamilMedium14"
                >
                  Facad Lights
                </Text>
                <Line className="bg-black-900 h-[92px] md:h-px md:ml-[0] ml-[55px] md:w-full w-px" />
                <Button
                  className="cursor-pointer font-medium leading-[normal] min-w-[178px] ml-4 md:ml-[0] rounded text-center text-sm tracking-[0.42px]"
                  shape="round"
                  size="xl"
                  variant="gradient"
                  color="gray_600_gray_800"
                >
                  Strip & Neon Lights
                </Button>
                <Line className="bg-black-900 h-[92px] md:h-px md:ml-[0] ml-[22px] md:w-full w-px" />
                <Text
                  className="md:ml-[0] ml-[73px] text-gray-800 text-sm tracking-[0.42px]"
                  size="txtNotoSerifTamilMedium14"
                >
                  Accessories
                </Text>
                <Line className="bg-black-900 h-[92px] md:h-px md:ml-[0] ml-[60px] md:w-full w-px" />
                <Text
                  className="md:ml-[0] ml-[53px] text-gray-800 text-sm tracking-[0.42px]"
                  size="txtNotoSerifTamilMedium14"
                >
                  Street Lights
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gradient1  flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1430px] mt-[100px] mx-auto p-[60px] md:px-5 rounded shadow-bs w-full">
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
        <div className="bg-white-A700 flex flex-col items-center justify-start mt-[100px] p-[82px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col gap-5 items-center justify-start max-w-[1719px] mb-[18px] mx-auto w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
              <div className="flex md:flex-1 flex-col gap-[23px] items-start justify-start w-[41%] md:w-full">
                <div className="flex md:flex-col flex-row gap-[31px] items-center justify-start w-[90%] md:w-full">
                  <Text
                    className="text-4xl sm:text-[32px] md:text-[34px] text-gray-800 tracking-[1.08px]"
                    size="txtNotoSerifTamilBold36Gray800"
                  >
                    Featured Products
                  </Text>
                  <div className="flex flex-col items-start justify-start w-[39%] md:w-full">
                    <Text
                      className="text-gray-600 text-sm tracking-[0.42px]"
                      size="txtNotoSerifTamilMedium14Gray600"
                    >
                      View More Featured Product
                    </Text>
                    <Line className="bg-yellow-800 h-px mt-0.5 w-full" />
                  </div>
                </div>
                <Text
                  className="leading-[200.00%] text-base text-gray-600 tracking-[0.48px] w-full"
                  size="txtNotoSerifTamilRegular16Gray600"
                >
                  Brighten up your space with our featured lighting fixtures!
                  From sleek and modern to classic and elegant, we have the
                  perfect fixture to match your style. Shop now and see the
                  difference good lighting can make!
                </Text>
              </div>
              <Button
                className="border border-gray-600 border-solid cursor-pointer font-medium leading-[normal] mb-[47px] min-w-[197px] md:ml-[0] ml-[167px] md:mt-0 mt-8 rounded text-center text-lg tracking-[0.54px]"
                shape="round"
                color="gray_800"
                size="xl"
                variant="fill"
              >
                Indoor
              </Button>
              <Button
                className="cursor-pointer font-medium leading-[normal] min-w-[197px] ml-5 md:ml-[0] md:mt-0 mt-8 rounded text-center text-lg tracking-[0.54px]"
                shape="round"
                color="gray_800"
                size="xl"
                variant="outline"
              >
                Outdoor
              </Button>
              <Button
                className="cursor-pointer font-medium leading-[normal] min-w-[197px] ml-5 md:ml-[0] md:mt-0 mt-8 rounded text-center text-lg tracking-[0.54px]"
                shape="round"
                color="gray_800"
                size="xl"
                variant="outline"
              >
                Decorative
              </Button>
              <Button
                className="cursor-pointer font-medium leading-[normal] min-w-[197px] ml-5 md:ml-[0] md:mt-0 mt-8 rounded text-center text-lg tracking-[0.54px]"
                shape="round"
                color="gray_800"
                size="xl"
                variant="outline"
              >
                Strip & Neon
              </Button>
            </div>
            <List
              className="sm:flex-col flex-row gap-[21px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 justify-center w-full"
              orientation="horizontal"
            >
              <div className="md:h-[424px] h-[433px] relative w-full">
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
              <div className="md:h-[424px] h-[433px] relative w-full">
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
              <div className="md:h-[424px] h-[433px] relative w-full">
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
              <div className="md:h-[424px] h-[433px] relative w-full">
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
              <div className="md:h-[424px] h-[433px] relative w-full">
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
              <div className="md:h-[424px] h-[433px] relative w-full">
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
            </List>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1719px] mt-[99px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-center text-gray-800 tracking-[1.08px]"
              size="txtNotoSerifTamilBold36Gray800"
            >
              Application Areas
            </Text>
            <Text
              className="leading-[200.00%] mt-[19px] text-base text-center text-gray-600 tracking-[0.48px]"
              size="txtNotoSerifTamilRegular16Gray600"
            >
              <>
                Light up any space with our versatile lighting fixtures. From
                the living room to the bedroom and beyond, our fixtures are
                perfect for any area of your home.
                <br />
                Shop now and discover the perfect lighting solution for every
                room!
              </>
            </Text>
            <List
              className="flex flex-col gap-5 items-center mt-10 w-full"
              orientation="vertical"
            >
              <div className="flex flex-1 sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                <Button
                  className="cursor-pointer font-medium leading-[normal] min-w-[197px] rounded text-center text-sm tracking-[0.42px]"
                  shape="round"
                  color="gray_800"
                  size="xl"
                  variant="outline"
                >
                  Kitchen
                </Button>
                <Button
                  className="cursor-pointer font-medium leading-[normal] min-w-[198px] rounded text-center text-sm tracking-[0.42px]"
                  shape="round"
                  color="gray_800"
                  size="xl"
                  variant="outline"
                >
                  Bedroom
                </Button>
                <Button
                  className="cursor-pointer font-medium leading-[normal] min-w-[197px] rounded text-center text-sm tracking-[0.42px]"
                  shape="round"
                  color="gray_800"
                  size="xl"
                  variant="outline"
                >
                  Hall
                </Button>
                <Button
                  className="cursor-pointer font-medium leading-[normal] min-w-[197px] rounded text-center text-sm tracking-[0.42px]"
                  shape="round"
                  size="xl"
                  variant="gradient"
                  color="gray_600_gray_800"
                >
                  Office
                </Button>
                <Button
                  className="cursor-pointer font-medium leading-[normal] min-w-[197px] rounded text-center text-sm tracking-[0.42px]"
                  shape="round"
                  color="gray_800"
                  size="xl"
                  variant="outline"
                >
                  Street
                </Button>
                <Button
                  className="cursor-pointer font-medium leading-[normal] min-w-[197px] rounded text-center text-sm tracking-[0.42px]"
                  shape="round"
                  color="gray_800"
                  size="xl"
                  variant="outline"
                >
                  Cabinets
                </Button>
                <Button
                  className="cursor-pointer font-medium leading-[normal] min-w-[198px] rounded text-center text-sm tracking-[0.42px]"
                  shape="round"
                  color="gray_800"
                  size="xl"
                  variant="outline"
                >
                  Racks
                </Button>
                <Button
                  className="cursor-pointer font-medium leading-[normal] min-w-[197px] rounded text-center text-sm tracking-[0.42px]"
                  shape="round"
                  color="gray_800"
                  size="xl"
                  variant="outline"
                >
                  Garden
                </Button>
              </div>
              <div className="flex flex-1 sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                <Button
                  className="cursor-pointer font-medium leading-[normal] min-w-[197px] rounded text-center text-sm tracking-[0.42px]"
                  shape="round"
                  color="gray_800"
                  size="xl"
                  variant="outline"
                >
                  Pathway
                </Button>
                <Button
                  className="cursor-pointer font-medium leading-[normal] min-w-[198px] rounded text-center text-sm tracking-[0.42px]"
                  shape="round"
                  color="gray_800"
                  size="xl"
                  variant="outline"
                >
                  Parking Areas
                </Button>
                <Button
                  className="cursor-pointer font-medium leading-[normal] min-w-[197px] rounded text-center text-sm tracking-[0.42px]"
                  shape="round"
                  color="gray_800"
                  size="xl"
                  variant="outline"
                >
                  Supermarket
                </Button>
                <Button
                  className="cursor-pointer font-medium leading-[normal] min-w-[197px] rounded text-center text-sm tracking-[0.42px]"
                  shape="round"
                  color="gray_800"
                  size="xl"
                  variant="outline"
                >
                  Classroom
                </Button>
                <Button
                  className="cursor-pointer font-medium leading-[normal] min-w-[197px] rounded text-center text-sm tracking-[0.42px]"
                  shape="round"
                  color="gray_800"
                  size="xl"
                  variant="outline"
                >
                  Washroom
                </Button>
                <Button
                  className="cursor-pointer font-medium leading-[normal] min-w-[197px] rounded text-center text-sm tracking-[0.42px]"
                  shape="round"
                  color="gray_800"
                  size="xl"
                  variant="outline"
                >
                  Showroom
                </Button>
                <Button
                  className="cursor-pointer font-medium leading-[normal] min-w-[198px] rounded text-center text-sm tracking-[0.42px]"
                  shape="round"
                  color="gray_800"
                  size="xl"
                  variant="outline"
                >
                  Dinning
                </Button>
                <Button
                  className="cursor-pointer font-medium leading-[normal] min-w-[197px] rounded text-center text-sm tracking-[0.42px]"
                  shape="round"
                  color="gray_800"
                  size="xl"
                  variant="outline"
                >
                  Living Room
                </Button>
              </div>
            </List>
          </div>
        </div>
        <div className="bg-gradient1  flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1430px] mt-[100px] mx-auto p-[60px] md:px-5 rounded shadow-bs w-full">
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
        <div className="flex flex-col items-center justify-start max-w-[1720px] mt-[100px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row gap-5 items-center justify-between w-full">
            <div className="flex md:flex-1 flex-col gap-3.5 items-center justify-start w-1/4 md:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  className="h-56 md:h-auto object-cover rounded-bl rounded-br w-full"
                  src="images/img_image5_224x415.png"
                  alt="imageFive"
                />
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  className="h-[506px] md:h-auto object-cover rounded-bl rounded-br w-full"
                  src="images/img_image5_506x415.png"
                  alt="imageFive_One"
                />
              </div>
            </div>
            <div className="flex md:flex-1 flex-col gap-3.5 items-center justify-start w-1/4 md:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  className="h-[506px] md:h-auto object-cover rounded-bl rounded-br w-full"
                  src="images/img_image5_1.png"
                  alt="imageFive_Two"
                />
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  className="h-56 md:h-auto object-cover rounded-bl rounded-br w-full"
                  src="images/img_image5_2.png"
                  alt="imageFive_Three"
                />
              </div>
            </div>
            <div className="bg-gradient  flex md:flex-1 flex-col items-center justify-start p-[65px] md:px-10 sm:px-5 rounded w-1/2 md:w-full">
              <div className="flex flex-col items-start justify-start mb-[5px]">
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-gray-300 tracking-[1.08px]"
                  size="txtNotoSerifTamilBold36Gray300"
                >
                  About US
                </Text>
                <Text
                  className="leading-[200.00%] mt-[23px] text-base text-gray-300 tracking-[0.48px] w-full"
                  size="txtNotoSerifTamilRegular16Gray300"
                >
                  Tecnolight is one of the world’s largest online retailer of
                  modern and contemporary lighting and furnishings, as well as a
                  popular destination for modern design fans. Tecnolight has
                  spent years establishing itself as the leading online and
                  offline supplier of high-end designer products with a fresh
                  and contemporary appearance. Tecnolight’s range of over 18,000
                  modern lights includes everything from legendary mid-century
                  modern lighting to cutting-edge contemporary lighting for
                  today’s homes.
                </Text>
                <Text
                  className="border border-gray-300 border-solid mt-[55px] pb-3.5 pt-[11px] sm:px-5 px-[35px] rounded-md text-center text-gray-300 text-sm tracking-[0.42px]"
                  size="txtNotoSerifTamilMedium14Gray300"
                >
                  Learn More About US
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[540px] md:h-[640px] max-w-[1720px] mt-[100px] mx-auto md:px-5 relative w-full">
          <Img
            className="h-[540px] m-auto object-cover w-full"
            src="images/img_rectangle145.png"
            alt="rectangle145"
          />
          <div className="absolute bottom-[3%] flex sm:flex-col flex-row gap-5 inset-x-[0] items-center justify-center mx-auto w-[23%]">
            <Line className="bg-gray-300 h-2 w-[30%]" />
            <Line className="bg-yellow-800 h-2 w-[30%]" />
            <Line className="bg-gray-300 h-2 w-[31%]" />
          </div>
        </div>
        <div className="bg-gradient1  flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1430px] mt-[100px] mx-auto p-[60px] md:px-5 rounded shadow-bs w-full">
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
        <div className="flex flex-col items-center justify-start max-w-[1430px] mt-[95px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-center text-gray-800 tracking-[1.08px]"
              size="txtNotoSerifTamilBold36Gray800"
            >
              Testimonials
            </Text>
            <Text
              className="leading-[200.00%] mt-[23px] text-base text-center text-gray-600 tracking-[0.48px] w-[52%] sm:w-full"
              size="txtNotoSerifTamilRegular16Gray600"
            >
              <>
                Don&#39;t just take our word for it - see what our satisfied
                customers have to say about our lighting fixtures! From
                exceptional quality to unbeatable style, our fixtures have made
                a big impact in homes across the country. Read our testimonials
                and see for yourself!&quot;
              </>
            </Text>
            <div className="flex md:flex-col flex-row gap-5 items-center justify-between mt-5 w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[265px] items-end justify-start p-4 rounded"
                style={{ backgroundImage: "url('images/img_group266.svg')" }}
              >
                <Text
                  className="leading-[200.00%] mb-[85px] text-base text-gray-600 tracking-[0.48px] w-[96%] sm:w-full"
                  size="txtNotoSerifTamilRegular16Gray600"
                >
                  <>
                    Don&#39;t just take our word for it - see what our satisfied
                    customers have to say about our lighting fixtures! From
                    exceptional quality to unbeatable style, our fixtures have
                    made a big impact in homes across the country. Read our
                    testimonials and see for yourself!&quot;
                  </>
                </Text>
              </div>
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[265px] items-center justify-start p-[21px] sm:px-5 rounded"
                style={{ backgroundImage: "url('images/img_group267.svg')" }}
              >
                <Text
                  className="leading-[200.00%] mb-[76px] text-base text-gray-600 tracking-[0.48px] w-[97%] sm:w-full"
                  size="txtNotoSerifTamilRegular16Gray600"
                >
                  <>
                    Don&#39;t just take our word for it - see what our satisfied
                    customers have to say about our lighting fixtures! From
                    exceptional quality to unbeatable style, our fixtures have
                    made a big impact in homes across the country. Read our
                    testimonials and see for yourself!&quot;
                  </>
                </Text>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row gap-5 items-start justify-center mt-[18px] w-2/5 md:w-full">
              <div className="flex flex-col gap-2 items-end justify-start">
                <Text
                  className="text-gray-800 text-lg tracking-[0.54px]"
                  size="txtNotoSerifTamilMedium18"
                >
                  Santosh Khan
                </Text>
                <Text
                  className="text-gray-800 text-sm tracking-[0.42px]"
                  size="txtNotoSerifTamilMedium14"
                >
                  Sale Executive
                </Text>
              </div>
              <div className="bg-blue_gray-100 h-[125px] rounded w-[125px]"></div>
              <div className="bg-blue_gray-100 h-[125px] sm:mt-0 mt-0.5 rotate-[180deg] rounded w-[125px]"></div>
              <div className="flex flex-col gap-2 items-start justify-start">
                <Text
                  className="text-gray-800 text-lg tracking-[0.54px]"
                  size="txtNotoSerifTamilMedium18"
                >
                  Santosh Khan
                </Text>
                <Text
                  className="text-gray-800 text-sm tracking-[0.42px]"
                  size="txtNotoSerifTamilMedium14"
                >
                  Sale Executive
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1678px] mt-[99px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[19px] items-center justify-start w-full">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-center text-gray-800 tracking-[1.08px]"
              size="txtNotoSerifTamilBold36Gray800"
            >
              News, Blog & Articles
            </Text>
            <Text
              className="leading-[200.00%] text-base text-center text-gray-600 tracking-[0.48px] w-[44%] sm:w-full"
              size="txtNotoSerifTamilRegular16Gray600"
            >
              Stay up-to-date with the latest trends and news in the world of
              lighting fixtures with our informative blog and articles. From
              design tips to product reviews, we’ve got you covered. Check out
              our latest posts and discover something new!
            </Text>
            <div className="flex md:flex-col flex-row md:gap-[42px] items-center justify-between w-full">
              <List
                className="md:flex-1 sm:flex-col flex-row gap-10 grid md:grid-cols-1 grid-cols-2 w-1/2 md:w-full"
                orientation="horizontal"
              >
                <div className="flex flex-col items-start justify-start mb-[27px] sm:ml-[0] sm:mt-0 mt-[21px] w-full">
                  <div className="bg-gradient  h-[239px] rounded w-full"></div>
                  <Text
                    className="mt-5 text-gray-800 text-lg tracking-[0.54px]"
                    size="txtNotoSerifTamilMedium18"
                  >
                    News, Blog & Articles
                  </Text>
                  <Text
                    className="mt-1.5 text-gray-600 text-sm tracking-[0.42px] w-[96%] sm:w-full"
                    size="txtNotoSerifTamilMedium14Gray600"
                  >
                    Stay up-to-date with the latest trends and news in the world
                    of lighting fixtures with our informative blog and articles.
                    From design tips to product reviews, we’ve got you covered.
                    Check out our latest posts and discover something new!
                  </Text>
                  <Text
                    className="mt-[22px] text-gray-600 text-sm tracking-[0.42px]"
                    size="txtNotoSerifTamilMedium14Gray600"
                  >
                    Read Full Articles
                  </Text>
                  <Line className="bg-yellow-800 h-px mt-0.5 w-[43%]" />
                </div>
                <div className="bg-gray-300 flex flex-col items-start justify-center sm:ml-[0] p-5 rounded w-full">
                  <div className="bg-gradient  h-[239px] ml-0.5 md:ml-[0] rounded w-full"></div>
                  <Text
                    className="ml-0.5 md:ml-[0] mt-5 text-gray-800 text-lg tracking-[0.54px]"
                    size="txtNotoSerifTamilMedium18"
                  >
                    News, Blog & Articles
                  </Text>
                  <Text
                    className="ml-0.5 md:ml-[0] mt-1.5 text-gray-600 text-sm tracking-[0.42px] w-[95%] sm:w-full"
                    size="txtNotoSerifTamilMedium14Gray600"
                  >
                    Stay up-to-date with the latest trends and news in the world
                    of lighting fixtures with our informative blog and articles.
                    From design tips to product reviews, we’ve got you covered.
                    Check out our latest posts and discover something new!
                  </Text>
                  <Text
                    className="ml-0.5 md:ml-[0] mt-[22px] text-gray-600 text-sm tracking-[0.42px]"
                    size="txtNotoSerifTamilMedium14Gray600"
                  >
                    Read Full Articles
                  </Text>
                  <Line className="bg-yellow-800 h-px mb-[7px] ml-0.5 md:ml-[0] mt-0.5 w-[43%]" />
                </div>
              </List>
              <div className="flex md:flex-1 flex-col items-start justify-start w-[49%] md:w-full">
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                  <div className="bg-gradient  h-[239px] rounded w-[47%]"></div>
                  <div className="bg-gradient  h-[239px] rounded w-[47%]"></div>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-5 w-[79%] md:w-full">
                  <Text
                    className="text-gray-800 text-lg tracking-[0.54px]"
                    size="txtNotoSerifTamilMedium18"
                  >
                    News, Blog & Articles
                  </Text>
                  <Text
                    className="text-gray-800 text-lg tracking-[0.54px]"
                    size="txtNotoSerifTamilMedium18"
                  >
                    News, Blog & Articles
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-1.5 w-[98%] md:w-full">
                  <Text
                    className="text-gray-600 text-sm tracking-[0.42px]"
                    size="txtNotoSerifTamilMedium14Gray600"
                  >
                    Stay up-to-date with the latest trends and news in the world
                    of lighting fixtures with our informative blog and articles.
                    From design tips to product reviews, we’ve got you covered.
                    Check out our latest posts and discover something new!
                  </Text>
                  <Text
                    className="text-gray-600 text-sm tracking-[0.42px]"
                    size="txtNotoSerifTamilMedium14Gray600"
                  >
                    Stay up-to-date with the latest trends and news in the world
                    of lighting fixtures with our informative blog and articles.
                    From design tips to product reviews, we’ve got you covered.
                    Check out our latest posts and discover something new!
                  </Text>
                </div>
                <div className="flex flex-row sm:gap-10 items-center justify-between mt-[22px] w-[70%] md:w-full">
                  <Text
                    className="text-gray-600 text-sm tracking-[0.42px]"
                    size="txtNotoSerifTamilMedium14Gray600"
                  >
                    Read Full Articles
                  </Text>
                  <Text
                    className="text-gray-600 text-sm tracking-[0.42px]"
                    size="txtNotoSerifTamilMedium14Gray600"
                  >
                    Read Full Articles
                  </Text>
                </div>
                <div className="flex flex-row sm:gap-10 items-center justify-between mt-0.5 w-[74%] md:w-full">
                  <Line className="bg-yellow-800 h-px w-[27%]" />
                  <Line className="bg-yellow-800 h-px w-[27%]" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="flex items-center justify-center mt-[100px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default HomePageAboutUSMegaMenuPage;
