import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const AboutusGalleryPage = () => {
  return (
    <>
      <div className="bg-blue_gray-50 flex flex-col font-notoseriftamil items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
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
                  <div className="flex flex-col gap-3 justify-start mt-[11px] w-[89%] md:w-full">
                    <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
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
                          Messages{" "}
                        </span>
                        <span className="text-gray-300 font-notoseriftamil text-left font-medium">
                          Company Information
                        </span>
                        <span className="text-gray-300 font-notoseriftamil text-left font-medium">
                          {" "}
                        </span>
                        <span className="text-gray-300 font-notoseriftamil text-left font-medium">
                          Projects & Services
                        </span>
                        <span className="text-gray-300 font-notoseriftamil text-left font-medium">
                          {" "}
                        </span>
                        <span className="text-yellow-800 tracking-[0.54px] font-notoseriftamil text-left text-lg font-medium">
                          Gallery
                        </span>
                        <span className="text-gray-300 font-notoseriftamil text-left font-medium">
                          {" "}
                          CSR Download Contact US
                        </span>
                      </Text>
                    </div>
                    <Line className="bg-gray-300 h-0.5 md:ml-[0] ml-[1360px] mr-[245px] w-[5%]" />
                  </div>
                </div>
              </div>
            </div>
            <Header className="absolute bg-gray-800_71 flex md:flex-col flex-row md:gap-5 inset-x-[0] items-center justify-center mx-auto top-[6%] w-full" />
          </div>
          <Text
            className="mt-[100px] text-4xl sm:text-[32px] md:text-[34px] text-center text-gray-800 tracking-[1.08px]"
            size="txtNotoSerifTamilBold36Gray800"
          >
            Gallery
          </Text>
          <Text
            className="leading-[200.00%] mt-[18px] text-base text-center text-gray-600 tracking-[0.48px]"
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
          <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-center mt-5 md:px-5 w-[42%] md:w-full">
            <Button
              className="cursor-pointer font-medium leading-[normal] min-w-[250px] rounded text-center text-lg tracking-[0.54px] w-full"
              shape="round"
              color="gray_600"
              size="md"
              variant="outline"
            >
              All Quoz Office
            </Button>
            <Button
              className="!text-gray-600 cursor-pointer font-medium leading-[normal] min-w-[250px] rounded text-center text-lg tracking-[0.54px] w-full"
              shape="round"
              size="md"
              variant="gradient"
              color="gray_600_gray_800"
            >
              Abu Dhabi
            </Button>
            <Button
              className="cursor-pointer font-medium leading-[normal] min-w-[250px] rounded text-center text-lg tracking-[0.54px] w-full"
              shape="round"
              color="gray_600"
              size="md"
              variant="outline"
            >
              Saudi Arabia
            </Button>
          </div>
          <div className="flex flex-col items-center justify-start max-w-[1720px] mt-5 mx-auto md:px-5 w-full">
            <List
              className="sm:flex-col flex-row gap-[22px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
              orientation="horizontal"
            >
              <div className="flex flex-1 flex-col gap-5 items-center justify-start sm:ml-[0] w-full">
                <div className="h-[463px] relative w-full">
                  <Img
                    className="h-[463px] m-auto object-cover rounded w-full"
                    src="images/img_image8_463x559.png"
                    alt="imageEight"
                  />
                  <div className="absolute bg-gray-300 h-[463px] inset-[0] justify-center m-auto rounded w-full"></div>
                </div>
                <div className="h-[346px] relative w-full">
                  <Img
                    className="h-[346px] m-auto object-cover rounded w-full"
                    src="images/img_rectangle197.png"
                    alt="rectangle197"
                  />
                  <div className="absolute bg-gray-300 h-[346px] inset-[0] justify-center m-auto rounded w-full"></div>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-5 items-center justify-start sm:ml-[0] w-full">
                <div className="h-[307px] relative w-full">
                  <Img
                    className="h-[307px] m-auto object-cover rounded w-full"
                    src="images/img_rectangle194.png"
                    alt="rectangle194"
                  />
                  <div className="absolute bg-gray-300 h-[307px] inset-[0] justify-center m-auto rounded w-full"></div>
                </div>
                <div className="h-[502px] relative w-full">
                  <Img
                    className="h-[502px] m-auto object-cover rounded w-full"
                    src="images/img_rectangle195.png"
                    alt="rectangle195"
                  />
                  <div className="absolute bg-gray-300 h-[502px] inset-[0] justify-center m-auto rounded w-full"></div>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-5 items-center justify-start sm:ml-[0] w-full">
                <div className="h-[463px] relative w-full">
                  <Img
                    className="h-[463px] m-auto object-cover rounded w-full"
                    src="images/img_rectangle196.png"
                    alt="rectangle196"
                  />
                  <div className="absolute bg-gray-300 h-[463px] inset-[0] justify-center m-auto rounded w-full"></div>
                </div>
                <div className="h-[346px] relative w-full">
                  <Img
                    className="h-[346px] m-auto object-cover rounded w-full"
                    src="images/img_rectangle198.png"
                    alt="rectangle198"
                  />
                  <div className="absolute bg-gray-300 h-[346px] inset-[0] justify-center m-auto rounded w-full"></div>
                </div>
              </div>
            </List>
          </div>
          <Footer className="flex items-center justify-center mt-[100px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default AboutusGalleryPage;
